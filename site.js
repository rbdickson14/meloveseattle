// Phone menu: the ☰ button opens and closes the nav links.
(function () {
  var nav = document.querySelector('nav');
  var button = document.querySelector('.nav-toggle');
  if (!nav || !button) return;

  button.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', open);
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  // Close the menu after a link is tapped.
  nav.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    });
  });
})();
