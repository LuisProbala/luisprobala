// Initial grid links with consistent IDs and images
const initialGridLinks = [
    { id: "drawing1", image: "images/contour-1.png" },
    { id: "drawing2", image: "images/contour-2.png" },
    { id: "drawing3", image: "images/contour-3.png" },
    { id: "drawing4", image: "images/contour-4.png" },
    { id: "drawing5", image: "images/contour-5.png" },
    { id: "drawing6", image: "images/contour-6.png" },
    { id: "drawing7", image: "images/contour-7.png" },
    { id: "drawing8", image: "images/contour-8.png" },
    { id: "drawing9", image: "images/contour-9.png" },
    { id: "drawing7", image: "images/contour-11.png" },
    { id: "drawing8", image: "images/contour-12.png" },
    { id: "drawing9", image: "images/contour-15.png" },
  ];
  
  // Content dependencies using only IDs
  const contentData = {
    drawing1: {
      gridLinks: ["drawing2", "drawing4", "drawing7"], // Only IDs
      content: "<h1>Content for Drawing 1</h1><p>This is the content shown when Drawing 1 is clicked.</p>",
    },
    drawing2: {
      gridLinks: ["drawing1", "drawing5", "drawing8"], // Only IDs
      content: "<h1>Content for Drawing 2</h1><p>This is the content shown when Drawing 2 is clicked.</p>",
    },
    // Add more content mappings as needed
  };
  
  // Fallback grid-links for filling empty spaces
  const fallbackGridLinks = [
    { id: "drawing10", image: "images/fallback1.png" },
    { id: "drawing11", image: "images/fallback2.png" },
    { id: "drawing12", image: "images/fallback3.png" },
  ];
  
  // Helper function to find a grid-link by ID
  function findGridLinkById(id) {
    return (
      initialGridLinks.find((link) => link.id === id) ||
      fallbackGridLinks.find((link) => link.id === id)
    );
  }
  
  // Function to populate the grid
  function populateGrid(gridLinkIds) {
    const gridElements = document.querySelectorAll(".grid-link");
  
    // Fill remaining slots with fallback links
    const linksToUse = [...gridLinkIds];
    while (linksToUse.length < 9) {
      const randomFallback = fallbackGridLinks[Math.floor(Math.random() * fallbackGridLinks.length)].id;
      linksToUse.push(randomFallback);
    }
  
    // Shuffle the grid links
    const shuffledLinks = linksToUse.sort(() => Math.random() - 0.5);
  
    // Populate the grid
    gridElements.forEach((gridElement, index) => {
      const linkId = shuffledLinks[index];
      const linkData = findGridLinkById(linkId);
      gridElement.style.backgroundImage = `url(${linkData.image})`;
      gridElement.dataset.linkId = linkData.id; // Assign consistent ID for click events
    });
  }
  
  // Function to display content
  function displayContent(content) {
    const contentPlaceholder = document.getElementById("content-placeholder");
    contentPlaceholder.innerHTML = content;
  }
  
  // Event listener for grid-links
  document.querySelectorAll(".grid-link").forEach((gridElement) => {
    gridElement.addEventListener("click", (e) => {
      const clickedLinkId = e.target.dataset.linkId; // Retrieve consistent ID
      if (contentData[clickedLinkId]) {
        const { gridLinks, content } = contentData[clickedLinkId];
        populateGrid(gridLinks); // Update grid with content-specific links
        displayContent(content); // Update content
      }
    });
  });
  
  // Initial setup
  window.onload = () => {
    populateGrid(initialGridLinks.map((link) => link.id)); // Populate grid on page load using IDs
  };
  