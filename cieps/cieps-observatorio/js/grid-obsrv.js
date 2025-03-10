function a11yClick(event){
    if(event.type === 'click'){
        return true;
    }
    else if(event.type === 'keydown'){
        var code = event.charCode || event.keyCode;
        if((code === 32)|| (code === 13)){
            return true;
        }
    }
    else{
        return false;
    }
}

$('.column').on('click keydown', function(event){
  if(a11yClick(event) === true){
  }
});


// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
  if (document.getElementById("myModal").style.display == "block") {
    $('.grid' ).addClass('blur' );
  }
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  if (document.getElementById("myModal").style.display == "none") {
    $('.grid' ).removeClass('blur' );
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display="block";
}

// Open the Pocket
function openPocket() {
  document.getElementsByClassName("pocket-wrapper");
  if (document.getElementsByClassName("pocket-wrapper")) {
    $('.pocket-wrapper').toggleClass('open-pocket');
  }
}

// Close the Pocket
function closePocket() {
  document.getElementById("myModal").style.display = "none";
  if (document.getElementById("myModal").style.display == "none") {
    $('.grid' ).removeClass('open-pocket' );
  }
}


/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}




/*
* Normalized hide address bar for iOS & Android
* (c) Scott Jehl, scottjehl.com
* MIT License
*/
(function( win ){
var doc = win.document;
// If there's a hash, or addEventListener is undefined, stop here
if( !location.hash && win.addEventListener ){
//scroll to 1
window.scrollTo( 0, 1 );
var scrollTop = 1,
getScrollTop = function(){
return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
},
//reset to 0 on bodyready, if needed
bodycheck = setInterval(function(){
if( doc.body ){
clearInterval( bodycheck );
scrollTop = getScrollTop();
win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
}
}, 15 );
win.addEventListener( "load", function(){
setTimeout(function(){
//at load, if user hasn't scrolled more than 20 or so...
if( getScrollTop() < 20 ){
//reset to hide addr bar at onload
win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
}
}, 0);
} );
}
})( this );
