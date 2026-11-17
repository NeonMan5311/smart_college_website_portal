'use strict';

document.documentElement.classList.add('js');

renderHeader(document.getElementById('site-header'));
renderNav(document.getElementById('site-nav'));
renderFooter(document.getElementById('site-footer'));

const skipLink = document.getElementById('skip-link');
if (skipLink) {
  skipLink.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('app').focus();
  });
}

startRouter();
