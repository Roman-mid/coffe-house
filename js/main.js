
// MOBIL-MENU
$('.mobil-menu').on('click', e => {
  $('.menu').toggleClass('active');
})

$('section').on('click', e => {
  $('.menu').removeClass('active');
})

// CTIKY-MENU

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 110)
})