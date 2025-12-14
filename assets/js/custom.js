// header sticky fn
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');

  window.addEventListener('scroll', function () {
    const windowTop = window.scrollY + 1;

    if (windowTop > 50) {
      header.classList.add('header-fixed', 'animated', 'fadeInDown');
    } else {
      header.classList.remove('header-fixed', 'animated', 'fadeInDown');
    }
  });
});



//testimonial slider {slick slider}
$(document).ready(function () {
  $('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
    prevArrow: '<button class="slick-prev btn btn-sm theme-btn"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next btn btn-sm theme-btn"><i class="fas fa-arrow-right"></i></button>',
    adaptiveHeight: true
  });
});



// dynamic year in copyright text in footer
const yearSpan = document.getElementById('currentYear');
yearSpan.textContent = new Date().getFullYear();



// Dark mode toggle
const themeToggleBtn = document.getElementById('themeToggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Check localStorage
const currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i> <span class="ms-1">Light Mode</span>`;
}

themeToggleBtn.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  // Change button icon/text
  if (theme === 'dark') {
    themeToggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i> <span class="ms-1">Light Mode</span>`;
  } else {
    themeToggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i> <span class="ms-1">Dark Mode</span>`;
  }
});