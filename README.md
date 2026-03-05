<div align="center">

# 💎 Arka Jewels

### *Elegance Crafted in Every Piece*

A modern, fully responsive jewellery e-commerce web application built with **React 18** and deployed as a static site on **Render**.

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Deployed on Render](https://img.shields.io/badge/Deployed_on-Render-46E3B7?style=flat-square&logo=render&logoColor=white)](https://render.com/)
[![License](https://img.shields.io/badge/License-MIT-gold?style=flat-square)](LICENSE)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Pages & Components](#-pages--components)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Product Catalogue](#-product-catalogue)

---

## 🌟 Overview

**Arka Jewels** is a premium jewellery store front end showcasing a curated collection of necklaces, rings, earrings, and bracelets. It features a polished gold-accent design, smooth navigation, a live shopping cart counter, category browsing, product filtering, customer testimonials, and a contact form — all without any backend dependency.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🛍️ **Product Catalogue** | 8 handpicked products across 4 categories |
| 🔎 **Filter & Sort** | Filter by category; sort by price, rating, or name |
| 🛒 **Cart Counter** | Live cart badge in the Navbar, persists across pages |
| 📱 **Fully Responsive** | Mobile-first design that looks great on all screen sizes |
| 🏷️ **Product Badges** | Bestseller / New / Sale labels on product cards |
| 🖼️ **Category Grid** | Visual category cards with hover overlay effects |
| 💬 **Testimonials** | Real-style customer reviews on the Home page |
| 📋 **Contact Form** | Styled contact page with form fields |
| ⚡ **PWA Ready** | Includes `manifest.json` and a Service Worker |
| 🚀 **Static Deployment** | Zero-config deploy to Render as a static site |

---

## 📄 Pages & Components

### Pages

| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Hero banner, features strip, category grid, featured products, promo banner, testimonials |
| **Shop** | `/shop` | Full product grid with category filter and sort controls |
| **About** | `/about` | Brand story and values |
| **Contact** | `/contact` | Enquiry form and contact details |

### Components

| Component | Description |
|---|---|
| `Navbar` | Sticky top bar with logo, nav links, and animated cart icon badge |
| `Hero` | Full-width hero section with call-to-action buttons |
| `Categories` | 4-column image grid linking to the Shop page |
| `ProductCard` | Reusable card with image, badge, rating, price & Add-to-Cart button |
| `Footer` | Site-wide footer with links and branding |

---

## 🛠️ Tech Stack

- **[React 18](https://reactjs.org/)** — UI library
- **[React Router DOM v6](https://reactrouter.com/)** — Client-side routing
- **[Create React App](https://create-react-app.dev/)** — Build toolchain
- **[serve](https://github.com/vercel/serve)** — Static file server for production
- **CSS Modules (plain CSS)** — Component-scoped styling with a gold colour palette
- **Font Awesome** — Icon set used in the features strip
- **[Render](https://render.com/)** — Hosting & deployment

---

## 📁 Project Structure

```
arka-jewels/
├── public/
│   ├── index.html          # HTML shell
│   ├── manifest.json       # PWA manifest
│   └── service-worker.js   # Service Worker
├── src/
│   ├── assets/             # Product & category images
│   ├── components/
│   │   ├── Navbar.js/.css
│   │   ├── Hero.js/.css
│   │   ├── Categories.js/.css
│   │   ├── ProductCard.js/.css
│   │   └── Footer.js/.css
│   ├── data/
│   │   └── products.js     # Product catalogue data
│   ├── pages/
│   │   ├── Home.js/.css
│   │   ├── Shop.js/.css
│   │   ├── About.js/.css
│   │   └── Contact.js/.css
│   ├── App.js              # Root component & routing
│   ├── App.css             # Global styles
│   └── index.js            # React entry point
├── render.yaml             # Render deployment config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 16
- **npm** ≥ 8

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/karthikj30/Arka-Jewels.git
cd Arka-Jewels

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will open at **[http://localhost:3000](http://localhost:3000)**.

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Starts CRA dev server with hot-reload |
| Build | `npm run build` | Creates an optimised production build in `/build` |
| Serve | `npm start` | Serves the `/build` folder on port **10000** |

---

## ☁️ Deployment

The project is configured for **zero-config deployment on [Render](https://render.com/)** as a Static Site.

```yaml
# render.yaml
services:
  - type: web
    name: arka-jewels
    runtime: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./build
    pullRequestPreviewsEnabled: true
    routes:
      - type: rewrite
        source: /*
        destination: /index.html   # SPA fallback
```

Push to `main` and Render will automatically build and deploy the latest version. Pull Request previews are also enabled.

---

## 🛍️ Product Catalogue

| # | Product | Category | Price (₹) |
|---|---|---|---|
| 1 | Royal Kundan Necklace | Necklaces | ₹45,999 |
| 2 | Diamond Solitaire Ring | Rings | ₹89,999 |
| 3 | Pearl Drop Earrings | Earrings | ₹12,499 |
| 4 | Gold Bangle Set | Bracelets | ₹34,999 |
| 5 | Emerald Gold Pendant | Necklaces | ₹28,500 |
| 6 | Ruby Stud Earrings | Earrings | ₹18,750 |
| 7 | Sapphire Tennis Bracelet | Bracelets | ₹62,000 |
| 8 | Antique Jadau Ring | Rings | ₹39,900 |

---

<div align="center">

Made with ❤️ by [karthikj30](https://github.com/karthikj30)

</div>