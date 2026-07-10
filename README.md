# RankBytes — Frontend

A modern guest post marketplace frontend built with **React 18**, **Vite**, and **Tailwind CSS v4**.

🔗 **Live:** _Coming soon_  
🔗 **Backend Repo:** [rankbytes-backend](https://github.com/aleehassan-5/rankbytes-backend)

---

## ✨ Features

- 🌍 **Global Countries Grid** — Browse publishers from 50+ countries with flag icons
- 🔍 **Advanced Search Panel** — Filter by country, niche, DR, traffic, language & budget
- 📦 **Service Packages** — Tiered package selection with live pricing
- 📝 **Order Modal** — Multi-step order flow: register/login → article upload → submit
- 💬 **Live Chat FAB** — Real-time Socket.io powered chat widget
- 📊 **How It Works** — Step-by-step workflow visualization
- 🛠️ **Tools Section** — Integrated SEO tools display
- 📰 **Blog Section** — Featured articles / blog posts
- 🌙 **Dark-ready** design with custom animations

---

## 🛠 Tech Stack

| Category | Tech |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v4 |
| HTTP | Axios (via `src/api.js`) |
| Real-time | Socket.io Client |
| State | Context API (Auth + OrderModal) |
| Linting | OXLint |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Countries.jsx
│   ├── SearchPanel.jsx
│   ├── Services.jsx
│   ├── HowItWorks.jsx
│   ├── Budget.jsx
│   ├── Tools.jsx
│   ├── Blog.jsx
│   ├── WorldMap.jsx
│   ├── Footer.jsx
│   ├── ChatFab.jsx        ← Socket.io live chat
│   └── OrderModal.jsx     ← Multi-step order form
├── context/
│   ├── AuthContext.jsx    ← JWT auth state
│   └── OrderModalContext.jsx
├── assets/
├── api.js                 ← Axios instance
├── data.js                ← Static content data
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/aleehassan-5/rankbytes-frontend.git
cd rankbytes-frontend

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env and set VITE_API_URL to your backend URL

# Start dev server
npm run dev
```

## 📦 Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview production build
```

---

## 🔑 Environment Variables

```env
VITE_API_URL=http://localhost:5000
```

---

## 🔄 Order Flow

1. User clicks **"Request Any Website"** → OrderModal opens
2. Register/Login (JWT stored in AuthContext)
3. Select website(s) from catalog or enter custom URL
4. Upload article (title, content, optional file)
5. Provide WhatsApp (required), Facebook, LinkedIn
6. Select budget range → **Submit**
7. Live chat thread auto-opens for communication with admin

---

## 📬 Contact

Built by [Ali Hassan](https://github.com/aleehassan-5)
