let slideIndex = 0;
showSlides();

// Show slides automatically
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }  // Reset to first slide
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");  // Remove 'active' class from all dots
    }
    slides[slideIndex - 1].style.display = "block";  // Show current slide
    dots[slideIndex - 1].className += " active";  // Add 'active' class to the current dot
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}

// Navigate through slides manually
function plusSlides(n) {
    showCurrentSlide(slideIndex += n);
}

// Show the current slide
function currentSlide(n) {
    showCurrentSlide(slideIndex = n);
}

function showCurrentSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }  // Reset to first slide
    if (n < 1) { slideIndex = slides.length }  // Reset to last slide

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");  // Remove 'active' class from all dots
    }
    slides[slideIndex - 1].style.display = "block";  // Show current slide
    dots[slideIndex - 1].className += " active";  // Add 'active' class to the current dot
}

