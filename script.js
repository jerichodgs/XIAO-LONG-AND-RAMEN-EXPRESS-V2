// Menu Category Filter
const buttons = document.querySelectorAll('.category-btn');
const items = document.querySelectorAll('.menu-item');
let activeCategory = 'all';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    if (activeCategory === category && category !== 'all') {
      activeCategory = 'all';
      buttons.forEach(btn => btn.classList.remove('active'));
      document.querySelector('[data-category="all"]').classList.add('active');
      items.forEach(item => item.style.display = 'flex');
      return;
    }

    activeCategory = category;

    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    items.forEach(item => {
      const itemCategory = item.dataset.category;
      item.style.display = (category === 'all' || itemCategory === category) ? 'flex' : 'none';
    });
  });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navBtns = document.querySelectorAll(".nav-btns");

if (hamburger && navMenu) {
  // Toggle menu on hamburger click
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent document click from firing
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  // Close menu when clicking nav links
  navBtns.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains("active") && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  // Prevent clicks inside nav menu from closing it
  navMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}