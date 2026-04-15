# WordWeaver

A fast, lightweight text analyzer and manipulation tool built with **React 18** and **Bootstrap 5**.

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Uppercase / Lowercase** | Convert text case instantly |
| **Title Case** | Capitalize the first letter of every word |
| **Remove Extra Spaces** | Collapse multiple whitespace into single spaces |
| **Extract Numbers** | Pull all digits out of mixed text |
| **Extract Letters** | Pull all letters out of mixed text |
| **Extract Links** | Find and isolate all URLs from text |
| **Listen / Stop** | Use the browser's Speech Synthesis API to read text aloud |
| **Copy to Clipboard** | One-click copy |
| **Clear** | Reset the editor |
| **Live Summary** | Real-time word count, character count, and estimated reading time |
| **Dark Mode** | Toggle between light and dark themes |

## 🖥️ Screenshots

> Light and dark modes supported out of the box.

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 16
- npm ≥ 8

### Installation

```bash
git clone https://github.com/soufiane/WordWeaver.git
cd WordWeaver
npm install
npm start
```

The app will run at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

## 🛠️ Tech Stack

- **React 18** — UI framework
- **React Router v6** — Client-side routing
- **Bootstrap 5** — Responsive styling (via CDN)
- **Web Speech API** — Text-to-speech
- **Clipboard API** — One-click copy

## 📁 Project Structure

```
src/
├── App.js                  # Root component (routing + global state)
├── index.js                # React entry point
├── index.css               # Global styles
└── components/
    ├── TextForm.js         # Core text editor and transformations
    ├── Navbar.js           # Navigation bar with dark mode toggle
    ├── About.js            # About page (accordion)
    ├── Alert.js            # Toast notification component
    └── Footer.js           # Footer
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).
