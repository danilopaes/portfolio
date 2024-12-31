const menuHamburguer = document.querySelector('.menu-hamburguer')
  menuHamburguer.addEventListener('click', () => {
      toggleMenu();
  });

  function toggleMenu(){
    const menu = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHambuguer.classList.contains('change')){
      nav.style.display = 'block';
    }else{
      nav.style.display = 'none';
    }
  }