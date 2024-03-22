const headerNav = (() => {
  const closeBtn = document.querySelector('.top-header .close-btn');
  const closeBtnImg = document.querySelector('.top-header .close-btn img');
  const navContainer = document.querySelector('.nav-container');
  const headerNav = document.getElementById('header-nav');
 
  closeBtn.addEventListener('click', () => {
    navContainer.classList.toggle('--visible');
    headerNav.classList.toggle('--expanded');
    headerNav.setAttribute('aria-hidden', headerNav.getAttribute('aria-hidden') == 'true' ? false : true);
    headerNav.setAttribute('aria-expanded', headerNav.getAttribute('aria-expanded') == 'true' ? false : true);
    closeBtn.classList.add('--changeStatus');
    setTimeout(() => {closeBtn.classList.remove('--changeStatus');}, 500);
    if(navContainer.classList.contains('--visible')) closeBtnImg.src = "./assets/images/shared/mobile/close.svg";
    else closeBtnImg.src = "./assets/images/shared/mobile/menu.svg";
  });
})();

const pricingPlans = (() => {
  const pricingForm = document.getElementById('pricing-form');
  const inputContainer = document.getElementsByClassName('input-container')[0];
  const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
  const typeOfPlan = document.getElementsByName('type-of-plan');
  const plansAvailable = document.querySelector('.plans-available');
  pricingForm?.addEventListener('submit', (event) => {
    event.preventDefault();
  });
  inputContainer?.addEventListener('click', (event) => {
    if(event.target == inputContainer || event.target == toggleBtn) {
      toggleBtn.classList.toggle('--toggle');
      typeOfPlan.forEach((input) => {
        input.toggleAttribute('checked');
      })
      if(plansAvailable.classList.contains('monthly')) {
        plansAvailable.classList.remove('monthly');
        plansAvailable.classList.add('yearly');
      } else {
        plansAvailable.classList.remove('yearly');
        plansAvailable.classList.add('monthly');
      }
    }
  });
})();