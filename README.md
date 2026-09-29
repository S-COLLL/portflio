# Shreya Konduskar · Portfolio

A single-page application built with **React.js**, **React Router** and **Vite**.

Live site: https://s-colll.github.io/portflio/

## Run it locally

```
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173/portflio/).

## Project structure

```
index.html            Page shell that loads the React app
src/
  main.jsx            Starts React and the router
  App.jsx             Layout and routes (one per page)
  data.js             All content: projects, experience, gallery, skills
  index.css           Styles, colours, dark mode
  components/         Reusable pieces (Header, ProjectCard, Lightbox, ...)
  pages/              One file per page (Home, Projects, About, ...)
  assets/images/      Photos and certificates
```

To change the site's text, edit `src/data.js`.

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages automatically (see `.github/workflows/deploy.yml`).
