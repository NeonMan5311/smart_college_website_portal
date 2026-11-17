'use strict';

const DATA_URLS = {
  departments: 'data/departments.json',
  faculty: 'data/faculty.json',
  notices: 'data/notices.json'
};

const dataCache = {};

async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Could not load ' + url + ' (HTTP ' + response.status + ')');
  }
  return response.json();
}

async function loadOne(name) {
  const url = DATA_URLS[name];
  const data = await fetchJSON(url);
  return data;
}

function getData(name) {
  if (!dataCache[name]) {
    dataCache[name] = loadOne(name).catch(function (error) {
      delete dataCache[name];
      throw error;
    });
  }
  return dataCache[name];
}

function showLoading(box, text) {
  box.className = 'data-status loading';
  box.textContent = text;
  box.hidden = false;
}

function showError(box, error, retry) {
  box.className = 'data-status error';
  box.textContent = '';
  const p = document.createElement('p');
  p.textContent = error.message || 'Could not load data.';
  box.appendChild(p);

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = 'Try again';
  btn.addEventListener('click', retry);
  box.appendChild(btn);
  box.hidden = false;
}

function clearStatus(box) {
  box.hidden = true;
  box.textContent = '';
}

async function populate(box, names, loadingText, render) {
  showLoading(box, loadingText);
  try {
    const results = await Promise.all(names.map(getData));
    render.apply(null, results);
    clearStatus(box);
  } catch (error) {
    showError(box, error, function () { populate(box, names, loadingText, render); });
  }
}
