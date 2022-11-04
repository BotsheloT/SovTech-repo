# SovTech Portfolio

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Features](#features)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Overview
For this project, I designed a portfolio website with information about me and my reason for wanting to work at SovTech.
The Website allows users to toggle to a Dark Mode, download my CV to get more information about my skills and education
and send me a personal email. Open https://botshelot.github.io/SovTech-repo/ to see my work.

Deployment was not fully successful with Vercel or Netflify, and GitHub Pages only shows the README. To see the application
fully functional it has to be run locally with the installations and Getting started command.

## Installations (for standard modern project)


### React-Icons
```bash
yarn add react-icons
# or
npm install react-icons --save
```

### Tailwind

Setting up Tailwind with cli is really simple, just install Tailwind:

```sh
npm install tailwindcss
```

Then add it to your PostCSS config (use a separate `postcss.config.js` file):

```js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```

Next, create a CSS file for your Tailwind styles. We've stored in it `src/assets/tailwind.css` for this example:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


### Built With

- [NextJs]
- [TailwindCSS]

