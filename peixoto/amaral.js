// Get canvas elements
const imageCanvas = document.getElementById('imageCanvas');
const rectanglesCanvas = document.getElementById('rectanglesCanvas');

// Set up context and default values
const imageCtx = imageCanvas.getContext('2d');
const rectanglesCtx = rectanglesCanvas.getContext('2d');
let rows = 10;
let columns = 6;
let gap = 5;
let rectangleWidth = 45;
let rectangleHeight = 30;

// Load image when selected
document.getElementById('imageInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      // Scale image to height of 700 while maintaining aspect ratio
      const scale = 700 / img.height;
      const width = img.width * scale;
      imageCanvas.width = width;
      imageCanvas.height = 700;
      imageCtx.drawImage(img, 0, 0, width, 700);
      drawRectangles();
    }
    img.src = event.target.result;
  }
  reader.readAsDataURL(file);
});

// Draw rectangles
function drawRectangles() {
  rectanglesCanvas.width = imageCanvas.width;
  rectanglesCanvas.height = imageCanvas.height;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const x = j * (rectangleWidth + gap) + gap;
      const y = i * (rectangleHeight + gap) + gap;
      rectanglesCtx.beginPath();
      rectanglesCtx.rect(x, y, rectangleWidth, rectangleHeight);
      rectanglesCtx.strokeStyle = '#ffffff';
      rectanglesCtx.lineWidth = 2;
      rectanglesCtx.stroke();
    }
  }
}

// Update sliders
document.querySelectorAll('#sliderWrapper input[type="range"]').forEach(function(slider) {
  slider.addEventListener('input', function() {
    switch (slider.id) {
      case 'rowsSlider':
        rows = parseInt(slider.value);
        break;
      case 'columnsSlider':
        columns = parseInt(slider.value);
        break;
      case 'gapSlider':
        gap = parseInt(slider.value);
        break;
      case 'widthSlider':
        rectangleWidth = parseInt(slider.value);
        break;
      case 'heightSlider':
        rectangleHeight = parseInt(slider.value);
        break;
    }
    drawRectangles();
  });
});

// Add click event to rectangles
rectanglesCanvas.addEventListener('click', function(event) {
  const rect = event.target.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const i = Math.floor(y / (rectangleHeight + gap));
  const j = Math.floor(x / (rectangleWidth + gap));
  if (i < rows && j < columns) {
  const isClicked = rectanglesCtx.isPointInPath(x, y);
  if (isClicked) {
  rectanglesCtx.fillStyle = '#ffff00';
  rectanglesCtx.fill();
  } else {
  rectanglesCtx.clearRect(j * (rectangleWidth + gap) + gap, i * (rectangleHeight + gap) + gap, rectangleWidth, rectangleHeight);
  rectanglesCtx.beginPath();
  rectanglesCtx.rect(j * (rectangleWidth + gap) + gap, i * (rectangleHeight + gap) + gap, rectangleWidth, rectangleHeight);
  rectanglesCtx.strokeStyle = '#ffffff';
  rectanglesCtx.lineWidth = 2;
  rectanglesCtx.stroke();
  }
  }
  });
