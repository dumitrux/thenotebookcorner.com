# [thenotebookcorner.com](https://thenotebookcorner.com/) <!-- omit in toc -->

The Notebook Corner website source code.

> A Notebook for every you.
> Reading journal, meeting notes, bullet journal, diary, blog, libreta, note taking and notes.

<!-- NOTE, TIP, CAUTION, WARNING -->

> [!IMPORTANT]
> Temporally at: https://dumitrux.github.io/thenotebookcorner.com

## Table of Contents <!-- omit in toc -->

- [Development](#development)
  - [Astro Starter Kit: Basics](#astro-starter-kit-basics)
    - [🚀 Project Structure](#-project-structure)
    - [🧞 Commands](#-commands)
- [Deployment](#deployment)


## Development

Tools:

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tabler Icons](https://tablericons.com/)

```bash
npm create astro@latest
dir > .
tmpl > Include sample files
deps > Yes
ts > No
use > Strict

npm run dev
npm run build
npx astro add tailwind
```

### Astro Starter Kit: Basics

[Astro documentation](https://docs.astro.build)

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)


#### 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

#### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## Deployment

[Deploy your Astro Site to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
