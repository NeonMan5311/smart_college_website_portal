async function homeView(app) {
  app.innerHTML = `
        <section>
            <article>
                <h2>Vision</h2>
                <p>To be a leading institution in engineering education that empowers students through knowledge, innovation, and ethical values.</p>
            </article>
        </section>
        <section>
            <article>
                <h2>Mission</h2>
                <ul>
                    <li>Provide quality technical education.</li>
                    <li>Develop competent and responsible engineers.</li>
                    <li>Encourage research, innovation, and entrepreneurship.</li>
                    <li>Promote lifelong learning and professional ethics.</li>
                </ul>
            </article>
        </section>
        <section>
            <article>
                <h2>Announcements</h2>
                <div id="announcements-container"><p>Loading announcements...</p></div>
            </article>
        </section>
        <section>
            <article>
                <h2>About the College</h2>
                <p>D. Y. Patil College of Engineering, Akurdi, Pune is one of the premier engineering institutes affiliated with Savitribai Phule Pune University. The college offers undergraduate and postgraduate engineering programs with excellent academic facilities, laboratories, and placement opportunities.</p>
            </article>
        </section>
    `;

  try {
    const res = await fetch('data/notices.json');
    const notices = await res.json();
    const container = app.querySelector('#announcements-container');
    container.innerHTML = notices.map(n => `<p>${n}</p>`).join('');
  } catch (e) {
    app.querySelector('#announcements-container').innerHTML = `<p style="color:red">Error loading announcements.</p>`;
  }
}

