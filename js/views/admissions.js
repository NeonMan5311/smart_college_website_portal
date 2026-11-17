function admissionsView(app) {
    app.innerHTML = `
        <section>
            <article>
                <h2>Admission Process</h2>
                <ol>
                    <li>Appear for MHT-CET or JEE Main Examination.</li>
                    <li>Register for the Centralized Admission Process (CAP).</li>
                    <li>Select D. Y. Patil College of Engineering, Akurdi as your preferred college.</li>
                    <li>Complete document verification.</li>
                    <li>Pay the admission fees and confirm your seat.</li>
                </ol>
            </article>
        </section>
        <section>
            <article>
                <h2>Eligibility Criteria</h2>
                <ul>
                    <li>Passed 10+2 (HSC) or equivalent examination.</li>
                    <li>Physics and Mathematics are compulsory subjects.</li>
                    <li>Qualified in MHT-CET or JEE Main.</li>
                    <li>Admission as per Government of Maharashtra rules.</li>
                </ul>
            </article>
        </section>
        <section>
            <article>
                <h2>Courses Offered</h2>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr><th>Course</th><th>Duration</th><th>Intake</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>B.E. Artificial Intelligence & Data Science</td><td>4 Years</td><td>180</td></tr>
                            <tr><td>B.E. Computer Engineering</td><td>4 Years</td><td>180</td></tr>
                            <tr><td>B.E. Information Technology</td><td>4 Years</td><td>180</td></tr>
                            <tr><td>B.E. Electronics & Telecommunication</td><td>4 Years</td><td>180</td></tr>
                            <tr><td>B.E. Mechanical Engineering</td><td>4 Years</td><td>120</td></tr>
                            <tr><td>B.E. Civil Engineering</td><td>4 Years</td><td>120</td></tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </section>
    `;
}
