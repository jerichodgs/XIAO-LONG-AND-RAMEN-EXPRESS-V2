
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

let lastScrollY = window.scrollY;
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      navbar.style.top = '-80px'; // hides the navbar
    } else {
      // Scrolling up
      navbar.style.top = '0';
    }
    lastScrollY = window.scrollY;
  });