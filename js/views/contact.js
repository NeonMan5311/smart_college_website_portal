function contactView(root) {
  root.innerHTML = `
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

  initEnquiryForm(root);
}
