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
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Academy Pictures
var slideIndexes = 1;
showSlide(slideIndexes);

// Next/previous controls
function plusSlide(n) {
  showSlide(slideIndexes += n);
}

// Thumbnail image controls
function currentSlides(n) {
  showSlide(slideIndexes = n);
}

function showSlide(n) {
  var i;
  var slide = document.getElementsByClassName("mySlide");
  var dot = document.getElementsByClassName("dots");
  if (n > slide.length) {slideIndexes = 1}
  if (n < 1) {slideIndexes = slide.length}
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
      dot[i].className = dot[i].className.replace(" active", "");
  }
  slide[slideIndexes-1].style.display = "block";
  dot[slideIndexes-1].className += " active";
}




//Toggle Button




