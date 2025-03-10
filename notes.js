   notes
   
   <script>
 var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var images = [];
    var thumbnails = [];
    var shouldMove = true // Flag to control image movement

    // Add image sources
    var imageSources = ['3_2800px.jpg', '4_2800px.jpg', '5_2800px.jpg']; // Add more image sources as needed

    // Preload images
    function preloadImages(imageSources, callback) {
        var loadedImages = 0;
        var numImages = imageSources.length;

        imageSources.forEach(function(src, index) {
            var image = new Image();
            image.onload = function() {
                loadedImages++;
                if (loadedImages === numImages) {
                    callback();
                }
            };
            image.src = src;
            images.push({ image: image, x: Math.random() * canvas.width, y: Math.random() * canvas.height, dx: Math.random() * 2, dy: Math.random() * 2, width: 100, height: 100, hovered: false });
        });
    }

      // Preload thumbnails
      function createThumbnails(imageSources) {
        imageSources.forEach(function(src, index) {
            var thumbnail = new Image();
            thumbnail.onload = function() {
                thumbnails.push(thumbnail);
            };
            thumbnail.src = src;
        });
    }

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Function to draw images
    function drawImages() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        images.forEach(function(imgObj) {
            ctx.drawImage(imgObj.image, imgObj.x, imgObj.y, imgObj.width, imgObj.height);

            // If image is hovered, draw text description and thumbnails
            if (imgObj.hovered) {
                ctx.fillStyle = 'black';
                ctx.font = '14px Arial';
                ctx.fillText('Description for Image', imgObj.x + imgObj.width + 10, imgObj.y + 20);

                // Draw thumbnails
                var thumbnailSize = 50;
                for (var i = 0; i < thumbnails.length; i++) {
                    ctx.drawImage(thumbnails[i], imgObj.x + imgObj.width + 10 + (thumbnailSize + 5) * i, imgObj.y + 30, thumbnailSize, thumbnailSize);
                }
            }
        });
    }

    // Function to update images position
    function updateImages() {
        if (shouldMove) {
            images.forEach(function(imgObj) {
                if (!imgObj.hovered) {
                    imgObj.x += imgObj.dx;
                    imgObj.y += imgObj.dy;

                    // Reverse direction when hitting canvas boundaries
                    if (imgObj.x + imgObj.width > canvas.width || imgObj.x < 0) {
                        imgObj.dx = -imgObj.dx;
                    }
                    if (imgObj.y + imgObj.height > canvas.height || imgObj.y < 0) {
                        imgObj.dy = -imgObj.dy;
                    }
                }
            });
        }
    }

    // Track mouse position
    var mouse = {
        x: 0,
        y: 0
    };

    // Update mouse position on mouse move
    canvas.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX - canvas.getBoundingClientRect().left;
        mouse.y = e.clientY - canvas.getBoundingClientRect().top;

        // Check if mouse is over an image or thumbnail
        checkHover();
    });

    // Check if mouse is over an image or thumbnail
    function checkHover() {
        images.forEach(function(imgObj) {
            // Calculate the area covered by the main image, thumbnails, and their common background
            var commonBgX = imgObj.x - 5;
            var commonBgY = imgObj.y - 5;
            var commonBgWidth = imgObj.width + 10 + thumbnails.length * 55;
            var commonBgHeight = imgObj.height + 40;

            imgObj.hovered = (mouse.x >= commonBgX && mouse.x <= commonBgX + commonBgWidth &&
                              mouse.y >= commonBgY && mouse.y <= commonBgY + commonBgHeight);
        });
        if (images.some(imgObj => imgObj.hovered)) {
            shouldMove = false; // Stop image movement when mouse is over an image or thumbnail
            drawImages();
        } else {
            shouldMove = true; // Resume image movement when mouse leaves the area
        }
    }

    // Handle click on thumbnails
    canvas.addEventListener('click', function() {
        images.forEach(function(imgObj) {
            if (imgObj.hovered) {
                var thumbnailSize = 50;
                var thumbnailIndex = Math.floor((mouse.x - (imgObj.x + imgObj.width + 10)) / (thumbnailSize + 5));
                if (thumbnailIndex >= 0 && thumbnailIndex < thumbnails.length) {
                    imgObj.image.src = thumbnails[thumbnailIndex].src;
                    imgObj.hovered = false;
                }
            }
        });
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        updateImages();
        drawImages();
    }

    // Preload images and thumbnails and start animation
    preloadImages(imageSources, function() {
        createThumbnails(imageSources);
        animate();
    });
    </script>




#body-woodwork {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }

  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  .image-container {
    position: absolute;
  }
  
  .bouncing-photo {
    position: absolute;
    width: 500px;
  }
  
  .additional-text {
    position: absolute;
    top: 0;
    left: 100%; /* Adjust the distance from the image */
    display: none;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px;
    border-radius: 5px;
  }
  




















<html lang="en"><head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Nycteroy</title>
    <meta name="description" content="Luis Probala — Art and Urban Research">
    <meta name="author" content="Luis Probala">
    <meta name="keywords" content="">

    <meta property="og:title" content="Luis Probala — Art and Urban Research">
    <meta property="og:type" content="website">
    <meta property="og:url" content="">
    <meta property="og:description" content="Art and Urban Research">
    <meta property="og:image" content="image.png">

      <link rel="icon" href="">


    <link rel="apple-touch-icon" href="">
    <script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    <link href="style.css" rel="stylesheet" type="text/css">
    <link href="" rel="stylesheet" type="text/css">
    <link rel="pingback" href="">
	<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <meta name="robots" content="max-image-preview:large">


<meta name="generator" content="WordPress 6.1.1">
<link rel="canonical" href="">
<link rel="shortlink" href="">
<link rel="alternate" type="" href="">
<link rel="alternate" type="text/xml+oembed" href="">

</head><body id="body-woodwork">
    

      <div class="container">
        <div class="image-container">
          <img class="bouncing-photo" src="3_2800px.jpg" alt="Bouncing Image 1">
          <span class="additional-text">Additional Text 1</span>
        </div>
        <div class="image-container">
          <img class="bouncing-photo" src="4_2800px.jpg" alt="Bouncing Image 2">
          <span class="additional-text">Additional Text 2</span>
        </div>
        <!-- Add more image containers as needed -->
      </div>



    <script>
class BouncingImage {
  constructor(img, caption) {
    this.img = img;
    this.caption = caption;
    this.x = Math.random() * (window.innerWidth - this.img.width);
    this.y = Math.random() * (window.innerHeight - this.img.height);
    this.dx = Math.random() * 5;
    this.dy = Math.random() * 5;
    this.velocityX = this.dx; // Store the initial velocity
    this.velocityY = this.dy; // Store the initial velocity
    this.isHovered = false;
    this.animationId;
    this.init();
  }

  init() {
    this.img.addEventListener('mouseover', () => this.handleMouseOver());
    this.img.addEventListener('mouseout', () => this.handleMouseOut());
    this.animate();
  }

  animate() {
    if (!this.isHovered) {
      this.x += this.velocityX;
      this.y += this.velocityY;

      if (this.x + this.img.width > window.innerWidth || this.x < 0) {
        this.velocityX = -this.velocityX;
      }
      if (this.y + this.img.height > window.innerHeight || this.y < 0) {
        this.velocityY = -this.velocityY;
      }

      this.img.style.left = this.x + 'px';
      this.img.style.top = this.y + 'px';
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  handleMouseOver() {
    this.isHovered = true;
    this.caption.style.display = 'block';
    cancelAnimationFrame(this.animationId);
  }

  handleMouseOut() {
    this.isHovered = false;
    this.caption.style.display = 'none';
    if (!this.isHovered) {
      requestAnimationFrame(() => this.animate());
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.bouncing-photo');
  const captions = document.querySelectorAll('.additional-text');
  images.forEach((img, index) => {
    new BouncingImage(img, captions[index]);
  });
});


    </script>
    

    </body></html>





point raster

    background-color: #fafafa;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23d2d2d2' fill-opacity='0.92' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");

zeszyt

    background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23aeaeae' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");









$(document).ready(fontsize);
$(window).resize(fontsize);

function fontsize() {
    var margin = parseInt($('main').css('margin-top')) * 2;
    var percent = 1 - map(margin, 0, $(window).width(), 0, 1);
    $("[data-size]").each(function() {
        var size = $(this).data('size') * percent;
        var lineHeight = size - (size * 0.45); // Subtract 40% from font size for line height
        $(this).css('font-size', size + 'vw');
        $(this).css('line-height', lineHeight + 'vw');
    });
};











document.addEventListener('wheel', (event) => {
    if (event.deltaY !== 0) {
        window.scrollBy({
            left: event.deltaY,
            behavior: 'smooth'
        });
    }
});






// ABOUT HOVER ALL LI ANIMATION AFTER TIME 
$('.list li').mouseenter(function() {
    var index = $(this).index();
    $(this).delay(50 * index).queue(function() {
        $(this).addClass('hover');
    });
}).mouseleave(function() {
    $(this).removeClass('hover').dequeue();
});


document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with class "filterPreview"
    var previewDivs = document.querySelectorAll('.filterPreview');

    // Iterate through each div and add event listeners
    previewDivs.forEach(function (div) {
        div.addEventListener('mouseover', function () {
            // Get the id of the hovered div
            var word = div.id;

            // Select the figure with an id starting with the word and change its style
            var matchingFigure = document.querySelector('figure[id^="' + word + '"]');
            if (matchingFigure) {
                 matchingFigure.style.display = 'block';
            }

            // Select the div with an id starting with the word and change its style
            var matchingDiv = document.querySelector('div[id^="' + word + '"]');
            if (matchingDiv) {
                matchingDiv.style.display = 'block';
            }
        });

        div.addEventListener('mouseout', function () {
            // Get the id of the hovered div
            var word = div.id;

            // Select the figure with an id starting with the word and change its style
            var matchingFigure = document.querySelector('figure[id^="' + word + '"]');
            if (matchingFigure) {
                matchingFigure.style.display = 'none';
            }

            // Select the div with an id starting with the word and change its style
            var matchingDiv = document.querySelector('div[id^="' + word + '"]');
            if (matchingDiv) {
                matchingDiv.style.display = 'none';
            }
        });
    });
});



//Sliding arbo pages
$(document).ready(slideshow);
$(window).resize(slideshow);
$(document).mousemove(slideshow);

$(".slider").wrapInner("<div class='sliderholder'></div>");

function slideshow(e) {
    // Cancel the script if the window width exceeds 2560px
    if ($(window).width() > 2560) {
        return;
    }
    
    $(".slider").each(function() {
        var $slider = $(this);
        var imgnum = $slider.find("figure").length;
        var imgwidth = $slider.find("figure").width();
        var margin = parseInt($('main').css('margin-top'));
        var sliderholderwidth = (imgnum * imgwidth) + ((imgnum - 1) * margin) + 2;
        $slider.width(sliderholderwidth + "px");

        var swidth = $(window).width();
        if (swidth > 700) {
            var cursorX = e.pageX || swidth / 3;
            var transXmax = sliderholderwidth - swidth + (2 * margin);
            var transX = -map(cursorX, 0, swidth, 0, transXmax);
            $slider.css({
                '-webkit-transform': 'translate( ' + transX + 'px )',
                '-moz-transform': 'translate( ' + transX + 'px )',
                '-ms-transform': 'translate( ' + transX + 'px )',
                '-o-transform': 'translate( ' + transX + 'px )',
                'transform': 'translate( ' + transX + 'px  )',
            });
        } else {
            // Reset the transform when not in the large screen mode
            $slider.css({
                '-webkit-transform': '',
                '-moz-transform': '',
                '-ms-transform': '',
                '-o-transform': '',
                'transform': '',
            });
        }
    });
}





















document.addEventListener("DOMContentLoaded", function() {
    const flowImages = document.querySelectorAll('.apto1212-flow-container .apto1212-flow-images img');

    if (flowImages.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    // If the image is at least 50% visible, enlarge it
                    entry.target.style.width = '35vw';
                } else {
                    // Otherwise, revert to the default width
                    entry.target.style.width = '100%';
                }
            });
        }, { threshold: [0.5] });

        flowImages.forEach(image => {
            observer.observe(image);
        });
    }
});









<div class="apto1212-flow-images">
            <img src="images\apto-gallery-00.jpg" style="width:100%">
          </div>
          <div class="apto1212-flow-images">
            <img src="images\apto-gallery-01.jpg" style="width:100%">
          </div>
          <div class="apto1212-flow-images apto1212-wider">
            <img src="images\apto-gallery-02.jpg" style="width:100%">
          </div>
          <div class="apto1212-flow-images">
            <img src="images\apto-gallery-03.jpg" style="width:100%">
          </div>
          <div class="apto1212-flow-images apto1212-wider ">
            <img src="images\apto-gallery-04.jpg" style="width:100%">
          </div>
          <div class="apto1212-flow-images">
            <img src="images\apto-gallery-05.jpg" style="width:100%">
          </div>
          <div class="apto1212-flow-images apto1212-wider ">
            <img src="images\apto-gallery-08.jpg" style="width:100%">
          </div>
          <div class="apto1212-flow-images">
            <img src="images\apto-gallery-07.jpg" style="width:100%">
          </div>  
          <div class="apto1212-flow-images apto1212-wider ">
            <img src="images\apto-gallery-09.jpg" style="width:100%">
          </div>
          <div class="apto1212-flow-images">
            <img src="images\apto-gallery-12.jpg" style="width:100%">
          </div>   
          <div class="apto1212-flow-images apto1212-wider ">
            <img src="images\apto-gallery-11.jpg" style="width:100%">
          </div>         
          <div class="apto1212-flow-images">
            <img src="images\apto-gallery-13.jpg" style="width:100%">
          </div> 
          <div class="apto1212-flow-images apto1212-wider ">
            <img src="images\apto-gallery-10.jpg" style="width:100%">
          </div>  
          <div class="apto1212-flow-images">
              <img src="images\apto-gallery-14.jpg" style="width:100%">
            </div>   
          <div class="apto1212-flow-images ">
              <img src="images\apto-gallery-15.jpg" style="width:100%">
            </div>   
          <div class="apto1212-flow-images">
              <img src="images\apto-gallery-16.jpg" style="width:100%">
          </div>   
          <div class="apto1212-flow-images">
              <img src="images\apto-gallery-17.jpg" style="width:100%">
            </div>   
          <div class="apto1212-flow-images">
              <img src="images\apto-gallery-18.jpg" style="width:100%">
            </div>   
          <div class="apto1212-flow-images ">
              <img src="images\apto-gallery-19.jpg" style="width:100%">
            </div>   








            <div class="apto1212-textframe">
        <p>(...) will the full-time public school implemented within the conditions stipulated by the original project decrease the market share of private schools? Does this representation of the CIEP [as covered by the newspaper O Globo] not serve interests that hide behind the idea of wasting public resources and the inefficiency of the program?</p>    
</div>


.apto1212-flow-images img {
    width: 100%; /* Default width */
    transition: width 0.5s ease-in-out; /* Smooth transition for width */
    align-self: center;
    justify-self: center
}
.apto1212-flow-images {
    align-self: center;
    justify-self: center
}
