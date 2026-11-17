'use strict';

const routes = [
  { path: '', title: 'Home', view: homeView },
  { path: 'departments', title: 'Departments', view: departmentsView },
  { path: 'faculty', title: 'Faculty', view: facultyView },
  { path: 'admissions', title: 'Admissions', view: admissionsView },
  { path: 'contact', title: 'Contact', view: contactView }
];

const notFoundRoute = { path: null, title: 'Page Not Found', view: notFoundView };

function parseHash(hash) {
  const clean = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  return { path: clean[0] || '' };
}

function navigate() {
  const hash = window.location.hash;
  const parsed = parseHash(hash);
  const route = routes.find(r => r.path === parsed.path) || notFoundRoute;
  const app = document.getElementById('app');

  app.innerHTML = '';
  const root = document.createElement('div');
  root.className = 'view';
  app.appendChild(root);

  setActiveNav(route.path);
  route.view(root);
  window.scrollTo(0, 0);
}

function startRouter() {
  window.addEventListener('hashchange', navigate);
  navigate();
}
