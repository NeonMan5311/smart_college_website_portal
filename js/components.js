'use strict';

const SITE = {
  name: 'D. Y. Patil College of Engineering, Akurdi',
  tagline: 'Empowerment through Knowledge',
  year: 2026,
  address: 'Sector 29, Nigdi Pradhikaran, Akurdi, Pune - 411044',
  email: 'info@dypcoeakurdi.ac.in',
  phone: '020-27653054'
};

const NAV_ITEMS = [
  { path: '', label: 'Home' },
  { path: 'departments', label: 'Departments' },
  { path: 'faculty', label: 'Faculty' },
  { path: 'admissions', label: 'Admissions' },
  { path: 'contact', label: 'Contact' }
];

function renderHeader(box) {
  box.innerHTML = `
    <img src="images/DYP_LOGO.png" alt="College Logo" width="100">
    <h1>${SITE.name}</h1>
    <p>${SITE.tagline}</p>
  `;
}

async function fillDropdown(menu) {
  try {
    const depts = await getData('departments');
    depts.forEach(dept => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#/departments';
      a.textContent = dept.name;
      li.appendChild(a);
      menu.appendChild(li);
    });
  } catch (e) {}
}

function addDropdown(item) {
  item.classList.add('has-dropdown');
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'dropdown-toggle';
  btn.textContent = ' ▾';
  
  const menu = document.createElement('ul');
  menu.className = 'dropdown';
  menu.style.display = 'none';

  fillDropdown(menu);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  });

  document.addEventListener('click', () => {
    menu.style.display = 'none';
  });

  item.appendChild(btn);
  item.appendChild(menu);
}

function renderNav(box) {
  box.textContent = '';
  const ul = document.createElement('ul');
  NAV_ITEMS.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#/' + item.path;
    a.textContent = item.label;
    a.dataset.route = item.path;
    li.appendChild(a);

    if (item.path === 'departments') {
      addDropdown(li);
    }
    ul.appendChild(li);
  });
  box.appendChild(ul);
}

function setActiveNav(path) {
  document.querySelectorAll('#site-nav a[data-route]').forEach(a => {
    if (a.dataset.route === path) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
}

function renderFooter(box) {
  box.innerHTML = `
    <p>&copy; ${SITE.year} ${SITE.name}</p>
    <p>${SITE.address}</p>
    <p>Email: ${SITE.email} | Phone: ${SITE.phone}</p>
  `;
}
