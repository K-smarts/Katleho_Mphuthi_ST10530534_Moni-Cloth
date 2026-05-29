// ==========================================
// MONI CLOTH - JAVASCRIPT
// Contact Form Validation
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fullname = form.Fullname.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (!fullname || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    // If all validation passes
    alert(`Thanks ${fullname}! Your message has been sent.`);
    form.reset();
  });
});

// Optional: Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
