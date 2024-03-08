const headerNav = (() => {
  const closeBtn = document.querySelector('.top-header .close-btn');
  const closeBtnImg = document.querySelector('.top-header .close-btn img');
  const navContainer = document.querySelector('.nav-container');
  const headerNav = document.getElementById('header-nav');
  
  closeBtn.addEventListener('click', () => {
    navContainer.classList.toggle('--visible');
    headerNav.toggleAttribute('aria-hidden');
    headerNav.toggleAttribute('aria-expanded');
    headerNav.classList.toggle('--expanded');
    closeBtn.classList.add('--changeStatus');
    setTimeout(() => {closeBtn.classList.remove('--changeStatus');}, 500);
    if(navContainer.classList.contains('--visible')) closeBtnImg.src = "./assets/images/shared/mobile/close.svg";
    else closeBtnImg.src = "./assets/images/shared/mobile/menu.svg";
  });
})();