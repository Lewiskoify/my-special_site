let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slideshow .slide'); // Select all slides

// Function to show the current slide
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = 'none'; // Hide slide
        slide.classList.remove('fade'); // Remove fade animation
    });

    // Show the selected slide
    slides[index].style.display = 'block';
    slides[index].classList.add('fade'); // Add fade animation
}

// Function to go to the next slide
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Cycle through slides
    showSlide(currentSlideIndex);
}

// Initialize the slideshow
showSlide(currentSlideIndex);

// Set interval to change slides every 3 seconds
setInterval(nextSlide, 3000); // Change slide every 3 seconds
