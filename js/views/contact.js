function contactView(app) {
    app.innerHTML = `
        <section>
            <article>
                <h2>College Address</h2>
                <p>
                    D. Y. Patil College of Engineering,<br>
                    Sector 29, Nigdi Pradhikaran,<br>
                    Akurdi, Pune - 411044
                </p>
                <p><strong>Email:</strong> info@dypcoeakurdi.ac.in</p>
                <p><strong>Phone:</strong> 020-27653054</p>
            </article>
        </section>
        <section>
            <article>
                <h2>Student Enquiry Form</h2>
                <div id="form-msg"></div>
                <form id="enquiry-form" novalidate>
                    <div>
                        <label>Full Name:</label><br>
                        <input type="text" id="name" name="name" placeholder="Enter your name">
                        <span id="name-err" class="error"></span>
                    </div><br>

                    <div>
                        <label>Email:</label><br>
                        <input type="email" id="email" name="email" placeholder="Enter your email">
                        <span id="email-err" class="error"></span>
                    </div><br>

                    <div>
                        <label>Mobile Number:</label><br>
                        <input type="tel" id="mobile" name="mobile" placeholder="10-digit mobile number">
                        <span id="mobile-err" class="error"></span>
                    </div><br>

                    <div>
                        <label>Department:</label><br>
                        <select id="department" name="department">
                            <option value="">Select Department</option>
                            <option>Artificial Intelligence & Data Science</option>
                            <option>Computer Engineering</option>
                            <option>Information Technology</option>
                            <option>Electronics & Telecommunication</option>
                            <option>Mechanical Engineering</option>
                            <option>Civil Engineering</option>
                        </select>
                        <span id="dept-err" class="error"></span>
                    </div><br>

                    <div>
                        <label>Gender:</label><br>
                        <label><input type="radio" name="gender" value="Male"> Male</label>
                        <label><input type="radio" name="gender" value="Female"> Female</label>
                        <span id="gender-err" class="error"></span>
                    </div><br>

                    <div>
                        <label>Message:</label><br>
                        <textarea id="message" name="message" rows="5" placeholder="Enter your enquiry"></textarea>
                        <span id="msg-err" class="error"></span>
                    </div><br>

                    <input type="submit" value="Submit">
                    <input type="reset" value="Reset">
                </form>
            </article>
        </section>
        <section id="saved-section">
            <article>
                <h2>Saved Enquiries</h2>
                <div id="saved-list"></div>
            </article>
        </section>
    `;

    const form = app.querySelector('#enquiry-form');
    const formMsg = app.querySelector('#form-msg');
    const savedList = app.querySelector('#saved-list');

    function renderSaved() {
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

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formMsg.innerHTML = '';

        let valid = true;

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const mobile = form.mobile.value.trim();
        const department = form.department.value;
        const gender = form.gender.value;
        const message = form.message.value.trim();

        const nameErr = app.querySelector('#name-err');
        const emailErr = app.querySelector('#email-err');
        const mobileErr = app.querySelector('#mobile-err');
        const deptErr = app.querySelector('#dept-err');
        const genderErr = app.querySelector('#gender-err');
        const msgErr = app.querySelector('#msg-err');

        nameErr.textContent = '';
        emailErr.textContent = '';
        mobileErr.textContent = '';
        deptErr.textContent = '';
        genderErr.textContent = '';
        msgErr.textContent = '';

        if (!name) {
            nameErr.textContent = 'Name is required.';
            valid = false;
        } else if (name.length < 3) {
            nameErr.textContent = 'Name must be at least 3 characters.';
            valid = false;
        }

        if (!email) {
            emailErr.textContent = 'Email is required.';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailErr.textContent = 'Enter a valid email address.';
            valid = false;
        }

        if (!mobile) {
            mobileErr.textContent = 'Mobile number is required.';
            valid = false;
        } else if (!/^[0-9]{10}$/.test(mobile)) {
            mobileErr.textContent = 'Mobile must be 10 digits.';
            valid = false;
        }

        if (!department) {
            deptErr.textContent = 'Please select a department.';
            valid = false;
        }

        if (!gender) {
            genderErr.textContent = 'Please select your gender.';
            valid = false;
        }

        if (!message) {
            msgErr.textContent = 'Message is required.';
            valid = false;
        } else if (message.length < 10) {
            msgErr.textContent = 'Message must be at least 10 characters.';
            valid = false;
        }

        if (valid) {
            const list = JSON.parse(localStorage.getItem('enquiries') || '[]');
            list.push({ name, email, mobile, department, gender, message, date: new Date().toLocaleString() });
            localStorage.setItem('enquiries', JSON.stringify(list));

            formMsg.innerHTML = '<p class="success">Enquiry submitted and saved successfully!</p>';
            form.reset();
            renderSaved();
        }
    });

    form.addEventListener('reset', () => {
        formMsg.innerHTML = '';
        app.querySelectorAll('.error').forEach(el => el.textContent = '');
    });
}
