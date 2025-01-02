const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
  toggleMenu();
});

function toggleMenu() {
  const nav = document.querySelector('.nav-responsive');
  menuHamburguer.classList.toggle('change'); // Corrigido o nome da variável
  if (menuHamburguer.classList.contains('change')) { // Corrigido o nome da variável
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}
