let throttleTimeout;

window.addEventListener('scroll', () => {
  if (!throttleTimeout) {
    throttleTimeout = setTimeout(() => {
      throttleTimeout = null;
      const scrollPosition = window.scrollY;
      const navList = document.querySelector('.nav__list');
      const nav = document.querySelector('.nav');

      if (scrollPosition >= 50) {
        navList?.classList.remove('ul_active');
        nav?.classList.add('nav_active');
      } else {
        navList?.classList.add('ul_active');
        nav?.classList.remove('nav_active');
      }
    }, 100);
  }
});

const navBars = document.querySelector('.nav_bars');
const closeBtn = document.querySelector('.close-btn');
const navMobile = document.querySelector('#nav_mobile');

navBars?.addEventListener('click', () => {
  navMobile?.classList.add('open_mobile_menu');
});

closeBtn?.addEventListener('click', () => {
  navMobile?.classList.remove('open_mobile_menu');
});