# D. Y. Patil College of Engineering - Website Portal

A single-page application (SPA) portal for D. Y. Patil College of Engineering, Akurdi, built using HTML5, CSS3, and JavaScript without external frameworks.

## Features

- **SPA Navigation:** Page views update dynamically without browser reload.
- **Client-Side Routing:** Hash-based routing (`#/home`, `#/departments`, `#/faculty`, `#/admissions`, `#/contact`).
- **Dynamic JSON Data:** Fetches notices, departments, and faculty details dynamically from JSON files via Fetch API.
- **Form Validation & Storage:** Client-side JavaScript validation for student enquiries, with data stored and managed in `localStorage`.
- **Responsive Design:** Mobile-friendly layout and responsive data tables.

## Project Structure

```
├── index.html              # Main HTML shell
├── style.css               # Stylesheet
├── data/
│   ├── departments.json    # Department details and intake
│   ├── faculty.json        # Faculty list by department
│   └── notices.json        # Announcements
├── images/
│   └── DYP_LOGO.png        # College logo
└── js/
    ├── router.js           # Client-side hash router
    └── views/
        ├── home.js         # Home view
        ├── departments.js  # Departments view
        ├── faculty.js      # Faculty directory view
        ├── admissions.js   # Admissions view
        └── contact.js      # Contact and enquiry view
```

## How to Run

Because the project fetches local JSON files, run it using a local web server:

### Option 1: Python
```bash
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 2: VS Code Live Server
Right-click `index.html` and choose **Open with Live Server**.
