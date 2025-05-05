# ☕ Coffee Shop - Landing Page

A modern, responsive landing page for a fictional coffee shop, built with performance, modularity, and best practices using pure HTML, CSS, and JavaScript.

## 📸 Overview

This project showcases the homepage for a fictional coffee shop, featuring a menu, highlighted items, customer testimonials, and a subscription section. It leverages clean visuals, custom fonts, and an interactive carousel to provide a smooth and engaging user experience.

## 🔧 Technologies Used

- **HTML5**
- **CSS3**
- \*\*JavaScript
- **[Glider.js](https://nickpiscitelli.github.io/Glider.js/)** (lightweight responsive carousel)
- **Google Fonts** (custom typography)

## 📁 Folder Structure

```bash
.
├── index.html
└── assets/images/
├── data/
    │   ├── all-items.json
    │   └── feedbacks.json
├── fonts/
├── libs/
├── scripts/
│   ├── modules/
│   ├── services/
│   ├── utils/
│   ├── index.js
└── styles/
```

## 🔄 Features

- Responsive navigation menu with mobile hamburger slide-in
- Dynamic rendering of:
  - Products
  - Filters
  - Feedback carousel
- Email subscription with validation and LocalStorage persistence
- Fully responsive layout for various screen sizes

## 🚀 Getting Started

> This project uses **fetch** for local `.json` files, so a local server is required to function properly.

### Using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code:

1. Install the Live Server extension.
2. Open the project folder in VS Code.
3. Right-click on `index.html` and choose **"Open with Live Server"**.

## ✅ Requirements

- Modern web browser
- Live Server (or another local development server) to support `fetch` with local JSON files
