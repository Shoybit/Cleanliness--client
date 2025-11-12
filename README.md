# 🧹 **Cleanliness — Community Issue Reporting Portal**

> 🌍 _A modern full-stack MERN application empowering communities to report, track, and contribute to cleanliness and sustainability efforts._

---

## 🚀 **Live Demo**

🔗 **Client (Frontend):** [https://kaleidoscopic-alpaca-0f5158.netlify.app/](#)  
🔗 **Server (Backend API):** [https://github.com/Shoybit/Cleanliness-server](#)  

---

## 🪴 **About the Project**

**Cleanliness** is a full-stack **MERN (MongoDB, Express.js, React, Node.js)** web application designed to create cleaner and safer communities.  
Users can **report public cleanliness issues**, **track resolutions**, and **contribute financially** to cleanup efforts — all within a **beautiful, responsive, and modern UI**.  

💡 Built for communities. Powered by technology. Designed for sustainability.  

---

## ✨ **Key Features**

✅ **Report & Manage Issues** — Citizens can report problems like garbage buildup, road damage, or broken public property.  
✅ **Track Progress** — Stay updated on the status of ongoing or resolved issues.  
✅ **Secure Login System** — Email/password and Google login using **Firebase Authentication**.  
✅ **Smart Contribution System** — Donate cleanup funds and view transparent contributor records.  
✅ **Dynamic PDF Reports** — Download your contribution receipts using **jsPDF & AutoTable**.  
✅ **Modern UI + Animations** — Powered by **Tailwind CSS**, **Lottie Animations**, and **React Simple Typewriter**.  
✅ **Dark & Light Mode** — Toggle between elegant dark/light themes seamlessly.  
✅ **Responsive Design** — Optimized for mobile, tablet, and desktop.  

---

## 🧩 **Tech Stack**

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React.js, React Router, Tailwind CSS, Swiper.js |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Atlas) |
| **Authentication** | Firebase Auth (Email/Password, Google) |
| **UI Enhancements** | SweetAlert2, React Toastify, Lottie React, React Simple Typewriter |
| **PDF Generation** | jsPDF, jsPDF-AutoTable |
| **Hosting** | Netlify (Client), Vercel (Server) |

---

## 🧱 **Core Pages & Features**

### 🏠 Home Page (Public)
- Interactive banner slider with real-world visuals  
- Issue categories: Garbage, Illegal Construction, Road Damage, Broken Public Property  
- Latest 6 issues dynamically fetched from MongoDB  
- Community statistics & volunteer call-to-action  

---

### 🔐 Authentication
- Firebase-based **email-password & Google login**  
- Toast/SweetAlert feedback (no default alerts)  
- Password validation: uppercase, lowercase, min. 6 chars  

---

### 🗂️ Add Issue (Private)
- Logged-in users can report new issues  
- Auto-sets issue status = “ongoing”  
- Success toast on submission  
- Stored securely in MongoDB with user email  

---

### 🧾 All Issues
- Displays all reported issues in a responsive grid  
- Includes **category and status filtering**  
- “See Details” button → navigates to issue detail page  

---

### 🔍 Issue Details (Private)
- Full issue information  
- “Pay Clean-Up Contribution” modal  
- Contributions stored in MongoDB  
- Contributors table + total collected amount  

---

### 🧹 My Issues (Private)
- Displays logged-in user’s own issues  
- **Update / Delete** issue via modal  
- Secure CRUD operations with SweetAlert confirmation  

---

### 💳 My Contributions (Private)
- Lists all user’s contributions  
- “Download Report” → Generates PDF receipt dynamically  
- Clean table layout with date, amount, and issue info  

---

### ⚡ Additional Features
- Dynamic route titles  
- 404 Not Found page  
- Global loading spinner during API calls  


---

## 🎨 **UI Highlights**

- Fully responsive layout (mobile → desktop)  
- Smooth animations with **Framer Motion** & **Lottie**  
- Professional typography and spacing consistency  
- Consistent button design and color palette  
- Dark/Light mode toggle across all pages  

---



---

## 💡 **Deployment**

| Component | Platform |
|------------|-----------|
| **Frontend** | Netlify |
| **Backend API** | Vercel |
| **Database** | MongoDB Atlas |
| **Auth** | Firebase |

---

## 🧠 **Developer Notes**

- 🔥 No “Lorem Ipsum” text used  
- 🪄 Custom toasts and alerts for all CRUD operations  
- 🧭 Dynamic titles per route using React Helmet  
- 🔒 JWT-secured private routes  
- 🌗 Full dark/light theme support  

---

## 🧑‍💻 **Author**

👋 **Shoyaib Islam**  
💻 MERN Stack Developer  
📧 [shoyaibchowdhury105@gmail.com](mailto:shoyaibchowdhury105@gmail.com)  
🌐 [GitHub Profile](https://github.com/yourusername)

---

## 🧾 **License**

📝 This project is open-source and free to use for educational purposes.  
**© 2025 Cleanliness Portal — All Rights Reserved.**
