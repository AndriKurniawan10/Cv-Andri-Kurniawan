/* ========================================
   SCRIPT.JS - JavaScript Interactif
   ======================================== */

// Smooth scroll untuk semua link dengan href #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate skill bars on scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBar = entry.target.querySelector('.skill-progress-bar');
      if (skillBar) {
        const width = skillBar.style.width;
        skillBar.style.width = '0';
        setTimeout(() => {
          skillBar.style.width = width;
        }, 100);
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.skill-bar').forEach(bar => {
  observer.observe(bar);
});

// Active link highlight on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
});

// Print CV function
function printCV() {
  window.print();
}

// Add to global scope jika diperlukan
window.printCV = printCV;

// Console welcome message
console.log('%cHalo! 👋', 'font-size: 24px; font-weight: bold; color: #3498db;');
console.log('%cSelamat datang di CV saya!', 'font-size: 16px; color: #666;');
console.log('%cGitHub: https://github.com/AndriKurniawan10', 'color: #3498db; text-decoration: underline;');
