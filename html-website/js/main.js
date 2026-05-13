/**
 * Hitech Concrete Product - Main JavaScript
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Menu Toggle
  initMobileMenu();
  
  // Scroll Effects
  initScrollEffects();
  
  // Smooth Scroll for Anchor Links
  initSmoothScroll();
  
  // Set Active Navigation
  setActiveNav();

  // Contact form (Web3Forms)
  initContactForm();
  
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
  const toggle = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileMenu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('active');
      this.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        menu.classList.remove('active');
        toggle.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!toggle.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('active');
        toggle.classList.remove('active');
      }
    });
  }
}

/**
 * Scroll Effects (Header shadow, Back to top button)
 */
function initScrollEffects() {
  const nav = document.querySelector('.main-nav');
  
  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Set Active Navigation based on current page
 */
function setActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu a');
  
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    
    if (linkPath === currentPath || 
       (currentPath === '/' && linkPath.endsWith('index.html')) ||
       (currentPath.includes('products') && linkPath.includes('products'))) {
      link.classList.add('active');
    }
  });
}

/**
 * Intersection Observer for Fade In Animations
 */
function initFadeInAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements that should fade in
  document.querySelectorAll('.card, .product-card, .timeline-item').forEach(el => {
    observer.observe(el);
  });
}

// Initialize fade-in animations when page loads
window.addEventListener('load', initFadeInAnimations);

/**
 * Back to Top Button (optional)
 */
function createBackToTop() {
  const button = document.createElement('button');
  button.innerHTML = '↑';
  button.className = 'back-to-top';
  button.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 2rem;
    width: 50px;
    height: 50px;
    background-color: var(--color-primary);
    color: var(--color-gray-900);
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 999;
  `;
  
  document.body.appendChild(button);
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      button.style.opacity = '1';
      button.style.visibility = 'visible';
    } else {
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
    }
  });
  
  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Uncomment to enable back-to-top button
// createBackToTop();

/**
 * Contact Form (Web3Forms integration)
 *
 * Submits the form via AJAX so the user stays on the page.
 * Replace the `access_key` value in contact.html with your own key
 * from https://web3forms.com (free, no signup payment).
 */
function initContactForm() {
  const form = document.getElementById('hitechContactForm');
  const status = document.getElementById('formStatus');
  if (!form || !status) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    status.className = 'form-status';
    status.style.display = 'none';
    status.textContent = '';

    const accessKey = form.querySelector('input[name="access_key"]').value;
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY') {
      status.className = 'form-status error';
      status.textContent = 'Form is not configured yet. Please add your Web3Forms access key in contact.html (see SETUP_FORM.md).';
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();

      if (response.ok && data.success) {
        status.className = 'form-status success';
        status.textContent = 'Thank you! Your message has been sent. We will contact you soon.';
        form.reset();
      } else {
        status.className = 'form-status error';
        status.textContent = (data && data.message) ? data.message : 'Sorry, something went wrong. Please try again or call us.';
      }
    } catch (err) {
      status.className = 'form-status error';
      status.textContent = 'Network error. Please try again or call +91 9839001970.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}
