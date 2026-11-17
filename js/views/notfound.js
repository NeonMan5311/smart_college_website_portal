function notFoundView(app) {
    app.innerHTML = `
        <section>
            <article style="text-align: center; padding: 40px 20px;">
                <h2>Page Not Found</h2>
                <p>The requested page does not exist.</p>
                <br>
                <a href="#/home" style="background-color: #003366; color: white; padding: 10px 20px; text-decoration: none;">Go to Home</a>
            </article>
        </section>
    `;
}
