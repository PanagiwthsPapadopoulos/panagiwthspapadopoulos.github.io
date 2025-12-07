# Personal Portfolio - Panagiotis P.

A modern, responsive personal portfolio website built with React. This project showcases my professional experience, projects, and technical "toolbox" using a clean component-based architecture.

## 🚀 Features

* **Responsive Design:** Fully adaptable layout that looks great on mobile, tablet, and desktop.
* **Dynamic Navigation:** Sticky header with a hamburger menu for mobile devices.
* **Data-Driven UI:** The "Toolbox" and other sections are generated dynamically from structured data files, making updates easy.
* **Modern Styling:** Built using Tailwind CSS utility classes for rapid and consistent design.
* **Iconography:** Semantic icons provided by `lucide-react`.

## 🛠️ Tech Stack

* **Framework:** [React](https://reactjs.org/) 
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) 
* **Routing:** [React Router v7](https://reactrouter.com/)
* **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```text
my-portfolio/
│   
├── public/
│   ├── index.html       # Entry HTML (Tailwind script included here)
│   └── assets/          # Images Used 
│   
├── src/
│   ├── content/
│   │   ├── about.js     # Biography Information
│   │   ├── contact.js   # Personal Information
│   │   ├── projects     # Collection of Projects
│   │   └── tools.js # Configuration for the Toolbox section
│   │
│   ├── layouts/
│   │   └── MainLayout.js # Sticky header and Mobile Menu logic
│   │
│   ├── pages/
│   │   ├── AboutPage.jsx   # About Page
│   │   ├── ContactPage.jsx # Contact Page
│   │   ├── NotFoundPage.jsx    # Default 404 Page
│   │   ├── ProjectsPage.jsx    # Projects Page
│   │   └── ToolsPage.jsx       # Tools Page
│   │
│   ├── router/
│   │   └── AppRouter.js # Route definitions
│   │
│   ├── App.js           # Main application entry
│   └── index.js         # React DOM rendering
│   
└── package.json         # Dependencies and scripts
```