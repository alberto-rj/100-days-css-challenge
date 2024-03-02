'use strict';

var menu = document.querySelector('.menu');
menu.addEventListener('click', toggleMenu);

function toggleMenu () {
  this.classList.toggle('active');
  var menuBars = this.querySelectorAll('.menu-bar');
  menuBars.forEach(function (menuBar) {
    menuBar.classList.remove('no-animation');
  });
}