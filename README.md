<div align="center">

# 🎓 Développement Web Avancé — UniLaSalle Amiens

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)

**A hands-on repository to learn the fundamentals of React, used in the _"Développement Web Avancé"_ course at [UniLaSalle Amiens](https://www.unilasalle.fr/).**

</div>

---

## 📖 About

This project serves as the practical companion for the **Développement Web Avancé** course taught at **UniLaSalle Amiens**. It is designed to help students discover and master the core concepts of modern front-end development with **React**, **TypeScript**, and **Vite**.

### What you will learn

- ⚛️ React fundamentals — components, props, state, hooks
- 🔷 TypeScript basics in a React context
- ⚡ Modern tooling with Vite (HMR, fast builds)
- 🎨 Styling with Tailwind CSS
- 🧹 Code quality with ESLint

## 🚀 Installation

### Prerequisites

| Tool | Version |
|------|---------|
| [Node.js](https://nodejs.org/) | **≥ 18** |
| [npm](https://www.npmjs.com/) | **≥ 9** |
| [Git](https://git-scm.com/) | latest |

### Getting started

**1. Clone the repository**

```bash
git clone https://github.com/Seraphros/TD_DevWebAvance_2026.git
cd TD_DevWebAvance_2026
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

The app will be available at **http://localhost:5173** with hot-module replacement enabled.

### Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check & build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on the codebase |

## 🛠️ Tech Stack

| Technology | Role |
|------------|------|
| [React 19](https://react.dev/) | UI library |
| [TypeScript 5.9](https://www.typescriptlang.org/) | Type safety |
| [Vite 8](https://vite.dev/) | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS framework |
| [ESLint](https://eslint.org/) | Linting & code quality |

## 📁 Project Structure

```
├── public/                     # Static assets (favicon, icons)
├── src/
│   ├── components/
│   │   ├── Card.tsx            # Reusable card wrapper (title, description, children)
│   │   ├── Light.tsx           # Single light bulb toggle button
│   │   ├── LightHolder.tsx     # Light collection manager (state, add button, counter)
│   │   └── Navbar.tsx          # Top navigation bar
│   ├── types/
│   │   └── LightModel.tsx      # Light data model (id, on)
│   ├── assets/                 # Images (hero, logos)
│   ├── App.tsx                 # Root component — assembles Navbar, Card & LightHolder
│   ├── index.css               # Tailwind import & UniLaSalle theme tokens
│   └── main.tsx                # React entry point
├── index.html                  # HTML shell
├── vite.config.ts              # Vite + Tailwind plugin config
├── tsconfig.json               # TypeScript configuration
├── eslint.config.js            # ESLint configuration
└── package.json                # Dependencies & scripts
```

## 🎨 User Interface

The UI follows the **UniLaSalle visual identity** — navy blue (`#00395C`) and green accent (`#84B926`) — on a light grey background.

### Layout

- **Navbar** — navy blue top bar displaying "UniLaSalle Amiens" with the course name on the right
- **Card** — white rounded card with a header (title + description) and a content area, used to contain each exercise
- **Footer** — discreet course label at the bottom of the page

### Lights exercise

The main exercise is an interactive light panel inside a Card:

- **Light bulbs** — circular toggle buttons; off state is a white circle with a subtle border, on state fills amber with a warm glow effect
- **Add button** — green UniLaSalle-accent button to append a new light to the collection
- **Counter** — small text showing how many lights are currently lit (e.g. "3 / 5 allumées")

### Theme tokens (defined in `index.css`)

| Token | Value | Usage |
|-------|-------|-------|
| `uni-navy` | `#00395C` | Navbar background |
| `uni-green` | `#84B926` | Accent buttons, hover highlights |
| `surface` | `#f4f5f7` | Page background |
| `surface-card` | `#ffffff` | Card background |
| `surface-border` | `#c4c8d8` | Borders |
| `text-primary` | `#000f37` | Headings, body text |
| `text-secondary` | `#495588` | Descriptions, muted text |

## 📝 License

This project is provided for educational purposes as part of the UniLaSalle Amiens curriculum.
