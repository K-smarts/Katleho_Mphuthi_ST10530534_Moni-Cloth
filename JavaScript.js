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

$(document).ready(function() {
  // Lightbox gallery - works when you click image OR button
  $(".gallery-img, .product-card button").click(function() {
    var imgSrc = $(this).siblings("img").attr("src");
    $("#lightbox").fadeIn(300);
    $("#lightbox-img").attr("src", imgSrc);
  });

  // Close lightbox when clicking X or dark background
  $(".close, #lightbox").click(function(e) {
    if(e.target === this) {
      $("#lightbox").fadeOut(300);
    }
  });
});

$(document).ready(function() {
  $(".accordion-toggle").click(function() {
    $(this).next(".accordion-panel").slideToggle(300);
  });
});

$(".filter-btn").click(function() {
  var category = $(this).data("filter");
  
  // Highlight active button
  $(".filter-btn").removeClass("active");
  $(this).addClass("active");
  
  // Show/hide products based on category
  if(category === "all") {
    $(".product-card").fadeIn(300);
  } else {
    $(".product-card").hide();
    $(".product-card[data-category='" + category + "']").fadeIn(300);
  }
});



