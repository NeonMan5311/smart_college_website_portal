async function departmentsView(app) {
    app.innerHTML = `
        <section>
            <article>
                <h2>Department List</h2>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Department</th>
                                <th>Intake</th>
                            </tr>
                        </thead>
                        <tbody id="departments-list">
                            <tr><td colspan="2">Loading departments...</td></tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </section>
        <section>
            <article>
                <h2>Course Offerings</h2>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Course</th>
                                <th>Duration</th>
                                <th>Degree</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>B.E. Computer Engineering</td><td>4 Years</td><td>Bachelor of Engineering</td></tr>
                            <tr><td>B.E. Information Technology</td><td>4 Years</td><td>Bachelor of Engineering</td></tr>
                            <tr><td>B.E. Artificial Intelligence & Data Science</td><td>4 Years</td><td>Bachelor of Engineering</td></tr>
                            <tr><td>B.E. Electronics & Telecommunication</td><td>4 Years</td><td>Bachelor of Engineering</td></tr>
                            <tr><td>B.E. Mechanical Engineering</td><td>4 Years</td><td>Bachelor of Engineering</td></tr>
                            <tr><td>B.E. Civil Engineering</td><td>4 Years</td><td>Bachelor of Engineering</td></tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </section>
    `;

    try {
        const res = await fetch('data/departments.json');
        const depts = await res.json();
        const tbody = app.querySelector('#departments-list');
        tbody.innerHTML = depts.map(d => `<tr><td>${d.name}</td><td>${d.intake}</td></tr>`).join('');
    } catch (e) {
        app.querySelector('#departments-list').innerHTML = `<tr><td colspan="2" style="color:red">Error loading departments.</td></tr>`;
    }
}
