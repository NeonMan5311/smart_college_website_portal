const routes = {
  '/home': homeView,
  '/departments': departmentsView,
  '/faculty': facultyView,
  '/admissions': admissionsView,
  '/contact': contactView
};

function router() {
  const hash = window.location.hash.slice(1) || '/home';
  const view = routes[hash] || homeView;
  const app = document.getElementById('app');

  view(app);

  document.querySelectorAll('#main-nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${hash}`);
  });

  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

