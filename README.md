# Jove Mariel Tomaroy — Personal Portfolio

A clean, responsive **React.js frontend** built with Vite. Inspired by the supplied desktop/mobile portfolio reference, with its own soft sage, warm off-white, and deep forest-green aesthetic.

## Get started

You'll need Node.js 18+ installed.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

To create a production build:

```bash
npm run build
npm run preview
```

## Personalize it

**All portfolio text and project data is in `src/content.js`.** Change your introduction, work interests, social links, project descriptions, and leadership entries there.

### Replace photos and screenshots

Go to `public/images/` — seven editable SVG image placeholders are included. You can add PNG, JPG, or WebP files there. Then edit the corresponding paths in `src/content.js`.

For example:

1. Put your portrait at `public/images/jove-photo.jpg`.
2. In `src/content.js`, update `portrait: '/images/jove-photo.jpg'`.
3. Put your My.GUIDE screenshot at `public/images/myguide-screen.png`.
4. Update the My.GUIDE project's `image` to `'/images/myguide-screen.png'`.

To replace the leadership feature image, change its image path in `src/App.jsx` (search for `leadership-placeholder.svg`).

**For best results:** Portrait: 4:5 or vertical; about image: 4:5; project screenshots: 16:9; leadership image: landscape 3:2.

### Projects and GitHub links

Each project has a `github` field. Add a public repository URL once it is ready for visitors. The website intentionally doesn't invent GitHub links; until set, it shows an unobtrusive placeholder.

### Résumé

Your uploaded CV is included in `public/resume/Jove_Mariel_Tomaroy_CV.pdf`. Replace this file with a newer résumé when needed, or change `resume` in `src/content.js`.

### Leadership / Constitution Convention

The leadership section reflects entries in the provided CV. For the suggested speaker spotlight, a commented example is already in `src/content.js`; add the confirmed event name, year, exact role, and a photo before publishing the speaker claim. You can also edit the description in the leadership feature card in `src/App.jsx`.

## Features

- Six requested sections: Home, About, Skills, Projects, Leadership, Contact
- Responsive desktop/tablet/mobile design with an animated mobile menu
- Scroll entrance transitions, subtle hover effects, and smooth anchor navigation
- Interactive project category filters
- Résumé PDF download and direct social links
- Contact email button and copy-to-clipboard action
- Reduced-motion support for users who prefer it
- No backend, database, API key, or environment variable required

## Tech stack

React 18 · Vite 6 · Framer Motion · Lucide React · CSS
