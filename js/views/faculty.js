function facultyView(app) {
    app.innerHTML = `
        <section>
            <article>
                <h2>Faculty Directory</h2>
                <label for="department-select"><strong>Select Department:</strong></label><br><br>
                <select id="department-select" class="department-select">
                    <option value="">-- Choose Department --</option>
                    <option value="aids">Artificial Intelligence & Data Science</option>
                    <option value="comp">Computer Engineering</option>
                    <option value="it">Information Technology</option>
                </select>
            </article>
        </section>
        <section>
            <article id="department-faculty">
                <p>Please select a department above to view faculty members.</p>
            </article>
        </section>
    `;

    const select = app.querySelector('#department-select');
    const container = app.querySelector('#department-faculty');

    select.addEventListener('change', async () => {
        const deptId = select.value;
        if (!deptId) {
            container.innerHTML = '<p>Please select a department above to view faculty members.</p>';
            return;
        }

        container.innerHTML = '<p>Loading faculty data...</p>';
        try {
            const res = await fetch('data/faculty.json');
            const data = await res.json();
            const list = data[deptId] || [];

            if (list.length === 0) {
                container.innerHTML = '<p>No faculty data found.</p>';
                return;
            }

            container.innerHTML = list.map(f => `
                <details>
                    <summary><strong>${f.name}</strong> - <em>${f.role}</em></summary>
                    <div style="padding: 8px;">
                        <div><strong>Qualification:</strong> ${f.qual}</div>
                        <div><strong>Designation:</strong> ${f.role}</div>
                        <div><strong>Experience:</strong> ${f.exp}</div>
                    </div>
                </details>
            `).join('');
        } catch (e) {
            container.innerHTML = `<p style="color:red">Error loading faculty data.</p>`;
        }
    });
}
