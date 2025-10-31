// our fleet.js
// Initialize all vehicle slideshows
document.addEventListener('DOMContentLoaded', function() {
// Get all vehicle cards
const vehicles = document.querySelectorAll('.vehicle-card');

vehicles.forEach((vehicle, index) => {
  // Elements for this specific vehicle only
  const slides = vehicle.querySelectorAll('.mySlides');
  const dots = vehicle.querySelectorAll('.dot');
  const prevBtn = vehicle.querySelector('.prev');
  const nextBtn = vehicle.querySelector('.next');
  
  let currentSlide = 0;
  let slideInterval;
  
  // Initialize this vehicle's slideshow
  function showSlide(n) {
    // Reset all slides and dots for THIS vehicle
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.style.backgroundColor = '#bbb');
    
    // Handle wrap-around
    currentSlide = (n + slides.length) % slides.length;
    
    // Show current slide and active dot for THIS vehicle
    slides[currentSlide].style.display = 'block';
    dots[currentSlide].style.backgroundColor = '#002244';
  }
  
  // Auto-advance slides for THIS vehicle
  function startSlider() {
    slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  }
  
  // Start the slider
  showSlide(currentSlide);
  startSlider();
  
  // Pause on hover
  vehicle.addEventListener('mouseenter', () => clearInterval(slideInterval));
  vehicle.addEventListener('mouseleave', startSlider);
  
  // Navigation controls for THIS vehicle only
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(currentSlide - 1);
      startSlider();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(currentSlide + 1);
      startSlider();
    });
  }
  
  // Dot navigation for THIS vehicle
  dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(dotIndex);
      startSlider();
    });
  });
});
});
