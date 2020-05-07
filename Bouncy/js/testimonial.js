const testimonials = document.querySelectorAll('.testimonial_item');
const testimonialBtns = document.querySelectorAll('.testimonial_icon');

document.addEventListener('DOMContentLoaded', () => {
  switchTab(testimonialBtns, testimonials, 'testimonial');
})