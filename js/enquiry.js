'use strict';

function initEnquiryForm(root) {
  const form = root.querySelector('#enquiry-form');
  const formMsg = root.querySelector('#form-msg');
  const savedList = root.querySelector('#saved-list');

  function renderSaved() {
    if (!savedList) return;
    const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
    if (enquiries.length === 0) {
      savedList.innerHTML = '<p>No saved enquiries.</p>';
      return;
    }

    savedList.innerHTML = enquiries.map((enq, index) => `
      <div style="border-bottom: 1px solid #ddd; padding: 10px 0;">
        <p><strong>${enq.name}</strong> (${enq.department}) - <em>${enq.email} | ${enq.mobile}</em></p>
        <p>${enq.message}</p>
        <button type="button" data-del="${index}" style="background-color: #c92a2a; color: white; border: none; padding: 5px 10px; cursor: pointer;">Delete</button>
      </div>
    `).join('');

    savedList.querySelectorAll('button[data-del]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-del'));
        const list = JSON.parse(localStorage.getItem('enquiries') || '[]');
        list.splice(idx, 1);
        localStorage.setItem('enquiries', JSON.stringify(list));
        renderSaved();
      });
    });
  }

  renderSaved();

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formMsg) formMsg.innerHTML = '';

    let valid = true;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const mobile = form.mobile.value.trim();
    const department = form.department.value;
    const gender = form.gender.value;
    const message = form.message.value.trim();

    const nameErr = root.querySelector('#name-err');
    const emailErr = root.querySelector('#email-err');
    const mobileErr = root.querySelector('#mobile-err');
    const deptErr = root.querySelector('#dept-err');
    const genderErr = root.querySelector('#gender-err');
    const msgErr = root.querySelector('#msg-err');

    if (nameErr) nameErr.textContent = '';
    if (emailErr) emailErr.textContent = '';
    if (mobileErr) mobileErr.textContent = '';
    if (deptErr) deptErr.textContent = '';
    if (genderErr) genderErr.textContent = '';
    if (msgErr) msgErr.textContent = '';

    if (!name) {
      if (nameErr) nameErr.textContent = 'Name is required.';
      valid = false;
    } else if (name.length < 3) {
      if (nameErr) nameErr.textContent = 'Name must be at least 3 characters.';
      valid = false;
    }

    if (!email) {
      if (emailErr) emailErr.textContent = 'Email is required.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (emailErr) emailErr.textContent = 'Enter a valid email address.';
      valid = false;
    }

    if (!mobile) {
      if (mobileErr) mobileErr.textContent = 'Mobile number is required.';
      valid = false;
    } else if (!/^[0-9]{10}$/.test(mobile)) {
      if (mobileErr) mobileErr.textContent = 'Mobile must be 10 digits.';
      valid = false;
    }

    if (!department) {
      if (deptErr) deptErr.textContent = 'Please select a department.';
      valid = false;
    }

    if (!gender) {
      if (genderErr) genderErr.textContent = 'Please select your gender.';
      valid = false;
    }

    if (!message) {
      if (msgErr) msgErr.textContent = 'Message is required.';
      valid = false;
    } else if (message.length < 10) {
      if (msgErr) msgErr.textContent = 'Message must be at least 10 characters.';
      valid = false;
    }

    if (valid) {
      const list = JSON.parse(localStorage.getItem('enquiries') || '[]');
      list.push({ name, email, mobile, department, gender, message, date: new Date().toLocaleString() });
      localStorage.setItem('enquiries', JSON.stringify(list));

      if (formMsg) formMsg.innerHTML = '<p class="success">Enquiry submitted and saved successfully!</p>';
      form.reset();
      renderSaved();
    }
  });

  form.addEventListener('reset', () => {
    if (formMsg) formMsg.innerHTML = '';
    root.querySelectorAll('.error').forEach(el => el.textContent = '');
  });
}
