


// MAP FUNCTION
function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};

 /*

 */

// ADD FIGCATPION LINK THE CLASS "BUZZ"
$(document).ready(function() {
    $("figcaption a").addClass("buzz");
    $(".facts li a").addClass("buzz");
});


// COPY PASTE PROJECLIST TITLE
$(document).ready(function() {
    $("h2").each(function() {
        $(this).clone().insertAfter(this);
    });
});

// SET FONT SIZE & LINE HEIGHT
$(document).ready(function() {
    updateFontSize();
    updateNonIndexFontSize();
});
$(window).resize(function() {
    updateFontSize();
    updateNonIndexFontSize();
});

function updateFontSize() {
    var margin = parseInt($('main').css('margin-top')) * 2;
    var percent = 1 - map(margin, 0, $(window).width(), 0, 1);
    $("[data-size]:not(.nonindex)").each(function() {
        var size = $(this).data('size') * percent;
        var lineHeight = size - (size * 0.45); // Subtract 45% from font size for line height
        $(this).css({
            'font-size': size + 'vw',
            'line-height': lineHeight + 'vw'
        });
    });
};

function updateNonIndexFontSize() {
    var margin = parseInt($('main').css('margin-top')) * 2;
    var percent = 1 - map(margin, 0, $(window).width(), 0, 1);
    $(".nonindex[data-size]").each(function() {
        var size = $(this).data('size') * percent;
        var lineHeight = size - (size * .25);
        $(this).css({
            'font-size': size + 'vw',
            'line-height': lineHeight + 'vw'
        });
    });
};

function map(value, in_min, in_max, out_min, out_max) {
    return (value - in_min) * (out_max - out_min) / (in_max - out_min) + out_min;
}


// MOUSE MOVE 
$("html").mousemove(function(event) {
    // Retrieve cursor position
    var cursorX = event.pageX;
    var cursorY = event.pageY;

    // Calculate translation values to center the element
    var transX = cursorX - $('.projectlist li figure').width() / 0.5;
    var transY = cursorY - $('.projectlist li figure').height() / 1;

    // Apply CSS transformations
    $('.projectlist li figure').css({
        '-webkit-transform': 'translate( ' + transX + 'px, ' + transY + 'px )',
        '-moz-transform': 'translate( ' + transX + 'px, ' + transY + 'px )',
        '-ms-transform': 'translate( ' + transX + 'px, ' + transY + 'px )',
        '-o-transform': 'translate( ' + transX + 'px, ' + transY + 'px )',
        'transform': 'translate( ' + transX + 'px, ' + transY + 'px )',
    });
});

// LIST ADD MORE
$(document).ready(function() {
    $(".listaddmore").each(function() {
        if ( $(this).find("ul li").length > 15 ) {
             $(this).find("ul").append('<li><a href="#" class="buzz more">read more</a></li>');

            $(this).find(".more").click(function(event) {
                event.preventDefault();
                if($(this).parents(".listaddmore").hasClass("expand") ) {
                    $(this).parents(".listaddmore").removeClass("expand");
                    $(this).html("read more");
                    $(this).parents(".listaddmore").css("background", "none");
                } else {
                    $(this).parents(".listaddmore").addClass("expand");
                    $(this).html("read less");
                }
            });
        }
    });
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








// LAZY LOAD VIDEOS
document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
                if (video.isIntersecting) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }

                    video.target.load();
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });

        lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});




filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// toggle description on mobile
function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }
	
	

    var myCiep = document.getElementById("ciep-random");
    var ciepArray = ["/img/ciep-preview/rand1.jpg", "/img/ciep-preview/rand2.jpg", "/img/ciep-preview/rand3.jpg", "/img/ciep-preview/rand4.jpg", "/img/ciep-preview/rand6.jpg", "/img/ciep-preview/rand5.jpg", "/img/ciep-preview/rand7.jpg", "/img/ciep-preview/rand8.jpg", "/img/ciep-preview/rand9.jpg", "/img/ciep-preview/rand10.jpg", "/img/ciep-preview/rand11.jpg", "/img/ciep-preview/rand12.jpg", "/img/ciep-preview/rand13.jpg", "/img/ciep-preview/rand14.jpg", "/img/ciep-preview/rand14.jpg", "/img/ciep-preview/rand15.jpg", "/img/ciep-preview/rand16.jpg", "/img/ciep-preview/rand17.jpg", "/img/ciep-preview/rand18.jpg", "/img/ciep-preview/rand19.jpg", "/img/ciep-preview/rand20.jpg", "/img/ciep-preview/rand21.jpg", "/img/ciep-preview/rand22.jpg", "/img/ciep-preview/rand23.jpg"];
    var isIntervalRunning;
    
    function changeCiep() {
        var imgIndex = getRandomInt(0, ciepArray.length);
        myCiep.setAttribute("src", ciepArray[imgIndex]);
    }
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    var intervalHandle = setInterval(changeCiep, 2000);

    
//Slideshow arbo pages
    var myArbo = document.getElementById("arbo-random");
    var arboArray = ["/img/arbo-preview/arborized-single-horizontal-1-1800.jpg", "/img/arbo-preview/arborized-single-vertical-1-1800.jpg", "/img/arbo-preview/arborized-single-horizontal-2-1800.jpg", "/img/arbo-preview/arborized-single-vertical-2-1800.jpg", "/img/arbo-preview/arborized-single-horizontal-3-1800.jpg", "/img/arbo-preview/arborized-single-vertical-3-1800.jpg", "/img/arbo-preview/arborized-single-horizontal-4-1800.jpg", "/img/arbo-preview/arborized-single-vertical-4-1800.jpg", "/img/arbo-preview/arborized-single-horizontal-5-1800.jpg", "/img/arbo-preview/arborized-single-vertical-5-1800.jpg", "/img/arbo-preview/aarborized-single-horizontal-6-1800.jpg", "/img/arbo-preview/arborized-single-vertical-6-1800.jpg"];
    
    function changeArbo() {
        var imgIndex = getRandomInt(0, arboArray.length - 1); // generate a new random index
        myArbo.setAttribute("src", arboArray[imgIndex]);
    }
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var intervalHandle = setInterval(changeArbo, 1000);
    



  function showContent(element) {
    var content = element.querySelector('.content');
    var siblingImage = document.querySelector('.sibling-image');
    
    content.style.display = 'block';
    siblingImage.style.display = 'block';
  }

  function hideContent(element) {
    var content = element.querySelector('.content');
    var siblingImage = document.querySelector('.sibling-image');
    
    content.style.display = 'none';
    siblingImage.style.display = 'none';
  }

  