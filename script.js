window.addEventListener("beforeunload", () => {
    localStorage.setItem("scrollPosition", window.scrollY);
  });

  window.addEventListener("load", () => {
    const scrollY = localStorage.getItem("scrollPosition");
    if (scrollY !== null) {
      window.scrollTo(0, parseInt(scrollY));
    }
  });

const buttons = document.querySelectorAll('.category-btn');
const items = document.querySelectorAll('.menu-item');
let activeCategory = 'all';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    // Toggle if the same category is clicked again
    if (activeCategory === category && category !== 'all') {
      activeCategory = 'all';
      buttons.forEach(btn => btn.classList.remove('active'));
      document.querySelector('[data-category="all"]').classList.add('active');
      items.forEach(item => item.style.display = 'flex');
      return;
    }

    activeCategory = category;

    // Update button states
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filter items
    items.forEach(item => {
      const itemCategory = item.dataset.category;
      item.style.display = (category === 'all' || itemCategory === category) ? 'flex' : 'none';
    });
  });
});