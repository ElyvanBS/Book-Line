const slider01 = document.querySelectorAll('.slider01');
const btnPrev01 = document.getElementById('prev-button01');
const btnNext01 = document.getElementById('next-button01');

let currentSlide01 = 0;

function hideSlider01(){
    slider01.forEach(item => item.classList.remove('on-01'));
}
function showSlider01(){
    slider01[currentSlide01].classList.add('on-01')
}

function nextSlider01() {
    hideSlider01()
    if(currentSlide01 == slider01.length -1){
        currentSlide01 = 0
    } else {
        currentSlide01++
    }
    showSlider01()
}
function prevSlider01() {
    hideSlider01()
    if(currentSlide01 == 0){
        currentSlide01 = slider01.length -1
    } else {
        currentSlide01--
    }
    showSlider01()
}

btnNext01.addEventListener('click', nextSlider01)
btnPrev01.addEventListener('click', prevSlider01)

const slider02 = document.querySelectorAll('.slider02');
const btnPrev02 = document.getElementById('prev-button02');
const btnNext02 = document.getElementById('next-button02');

let currentSlide02 = 0;

function hideSlider02(){
    slider02.forEach(item => item.classList.remove('on-02'));
}
function showSlider02(){
    slider02[currentSlide02].classList.add('on-02')
}

function nextSlider02() {
    hideSlider02()
    if(currentSlide02 == slider02.length -1){
        currentSlide02 = 0
    } else {
        currentSlide02++
    }
    showSlider02()
}
function prevSlider02() {
    hideSlider02()
    if(currentSlide02 == 0){
        currentSlide02 = slider02.length -1
    } else {
        currentSlide02--
    }
    showSlider02()
}

btnNext02.addEventListener('click', nextSlider02)
btnPrev02.addEventListener('click', prevSlider02)

const slider03 = document.querySelectorAll('.slider03');
const btnPrev03 = document.getElementById('prev-button03');
const btnNext03 = document.getElementById('next-button03');

let currentSlide03 = 0;

function hideSlider03(){
    slider03.forEach(item => item.classList.remove('on-03'));
}
function showSlider03(){
    slider03[currentSlide03].classList.add('on-03')
}

function nextSlider03() {
    hideSlider03()
    if(currentSlide03 == slider03.length -1){
        currentSlide03 = 0
    } else {
        currentSlide03++
    }
    showSlider03()
}
function prevSlider03() {
    hideSlider03()
    if(currentSlide03 == 0){
        currentSlide03 = slider03.length -1
    } else {
        currentSlide03--
    }
    showSlider01()
}

btnNext03.addEventListener('click', nextSlider03)
btnPrev03.addEventListener('click', prevSlider03)

const slider04 = document.querySelectorAll('.slider04');
const btnPrev04 = document.getElementById('prev-button04');
const btnNext04 = document.getElementById('next-button04');

let currentSlide04 = 0;

function hideSlider04(){
    slider04.forEach(item => item.classList.remove('on-04'));
}
function showSlider04(){
    slider04[currentSlide04].classList.add('on-04')
}

function nextSlider04() {
    hideSlider04()
    if(currentSlide04 == slider04.length -1){
        currentSlide04 = 0
    } else {
        currentSlide04++
    }
    showSlider04()
}
function prevSlider04() {
    hideSlider04()
    if(currentSlide04 == 0){
        currentSlide04 = slider04.length -1
    } else {
        currentSlide04--
    }
    showSlider04()
}

btnNext04.addEventListener('click', nextSlider04)
btnPrev04.addEventListener('click', prevSlider04)

const slider05 = document.querySelectorAll('.slider05');
const btnPrev05 = document.getElementById('prev-button05');
const btnNext05 = document.getElementById('next-button05');

let currentSlide05 = 0;

function hideSlider05(){
    slider05.forEach(item => item.classList.remove('on-05'));
}
function showSlider05(){
    slider05[currentSlide05].classList.add('on-05')
}

function nextSlider05() {
    hideSlider05()
    if(currentSlide05 == slider05.length -1){
        currentSlide05 = 0
    } else {
        currentSlide05++
    }
    showSlider05()
}
function prevSlider05() {
    hideSlider05()
    if(currentSlide05 == 0){
        currentSlide05 = slider05.length -1
    } else {
        currentSlide05--
    }
    showSlider05()
}

btnNext05.addEventListener('click', nextSlider05)
btnPrev05.addEventListener('click', prevSlider05)

const slider06 = document.querySelectorAll('.slider06');
const btnPrev06 = document.getElementById('prev-button06');
const btnNext06 = document.getElementById('next-button06');

let currentSlide06 = 0;

function hideSlider06(){
    slider06.forEach(item => item.classList.remove('on-06'));
}
function showSlider06(){
    slider06[currentSlide06].classList.add('on-06')
}

function nextSlider06() {
    hideSlider06()
    if(currentSlide06 == slider06.length -1){
        currentSlide06 = 0
    } else {
        currentSlide06++
    }
    showSlider06()
}
function prevSlider06() {
    hideSlider06()
    if(currentSlide06 == 0){
        currentSlide06 = slider06.length -1
    } else {
        currentSlide06--
    }
    showSlider06()
}

btnNext06.addEventListener('click', nextSlider06)
btnPrev06.addEventListener('click', prevSlider06)

let slideIndex = 0;
showSlides();

// Show slides automatically
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  // Reset to first slide
    slides[slideIndex-1].style.display = "block";  // Show current slide
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// Navigate through slides manually
function plusSlides(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) {slideIndex = 1}  // Reset to first slide
    if (slideIndex < 1) {slideIndex = slides.length}  // Reset to last slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slides[slideIndex-1].style.display = "block";  // Show current slide
}

document.getElementById('scrollButton').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
