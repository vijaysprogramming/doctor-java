// script.js
const uniquePrevBtn = document.getElementById('uniquePrevBtn');
const uniqueNextBtn = document.getElementById('uniqueNextBtn');
const uniqueSliderTrack = document.querySelector('.unique-slider-track');
let uniqueSlideIndex = 0;
const uniqueTotalSlides = document.querySelectorAll('.unique-slide').length;

function updateUniqueSliderPosition() {
    const slideWidth = document.querySelector('.unique-slide').clientWidth;
    uniqueSliderTrack.style.transform = `translateX(-${uniqueSlideIndex * slideWidth}px)`;
}

uniqueNextBtn.addEventListener('click', function() {
    moveToNextUniqueSlide();
});

uniquePrevBtn.addEventListener('click', function() {
    moveToPreviousUniqueSlide();
});

function moveToNextUniqueSlide() {
    if (uniqueSlideIndex < uniqueTotalSlides - 1) {
        uniqueSlideIndex++;
    } else {
        uniqueSlideIndex = 0;
    }
    updateUniqueSliderPosition();
}

function moveToPreviousUniqueSlide() {
    if (uniqueSlideIndex > 0) {
        uniqueSlideIndex--;
    } else {
        uniqueSlideIndex = uniqueTotalSlides - 1;
    }
    updateUniqueSliderPosition();
}

// Auto-slide every 5 seconds
setInterval(moveToNextUniqueSlide, 5000);

//updates begin
document.addEventListener('DOMContentLoaded', () => {
    console.log('Announcements page is ready!');
    // Example: Dynamic content update or interactive features could be added here.
}); 
//updates end 