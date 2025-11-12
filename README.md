# 🧹 **Cleanliness — Community Issue Reporting Portal**

[![Netlify](https://img.shields.io/badge/Frontend-Netlify-blue?style=for-the-badge&logo=netlify)](https://kaleidoscopic-alpaca-0f5158.netlify.app/)  
[![GitHub](https://img.shields.io/badge/Backend-GitHub-black?style=for-the-badge&logo=github)](https://github.com/Shoybit/Cleanliness-server)  
[![License](https://img.shields.io/badge/License-Free-brightgreen?style=for-the-badge)](#)

> 🌍 **Empowering communities to report, track, and contribute to a cleaner, safer environment.**  
> Fully-featured **MERN stack application** with responsive design, secure authentication, and contribution tracking.

---

## ✨ **Project Overview**

**Cleanliness** is a modern, full-stack web application where users can:

- 🗑️ Report environmental/public cleanliness issues  
- 📊 Track ongoing and resolved complaints  
- 💳 Contribute funds for community cleanup drives  
- 🏆 See transparent contribution records  
- 📄 Download PDF receipts for contributions  

Built using **React.js, Node.js, MongoDB, and Firebase**, the app emphasizes **UI/UX excellence**, **responsive layouts**, and **interactive features** to engage users.  

---

## 🎯 **Core Features**

### 🏠 Home Page (Public)
-  Interactive banner with real-world visuals  
-  Issue categories: Garbage, Illegal Construction, Road Damage, Broken Public Property  
-  Displays the latest 6 issues dynamically  
-  Community statistics and “Join Clean Drive” call-to-action  

### 🔐 Authentication
-  Email/password login & Google authentication via Firebase  
-  Password validation: Uppercase, Lowercase, Minimum 6 characters  
-  All error/success feedback via **SweetAlert2 / React Toastify**

### 🗂️ Add Issue (Private)
-  Submit new issues with title, category, location, description, image, and suggested fix budget  
-  Status automatically set to “Ongoing”  
-  Data stored securely in MongoDB linked to the user  

### 🧾 All Issues
-  View all reported issues in a **3-column responsive grid**  
-  Filter issues by category and status  
-  “See Details” button redirects to the **Issue Detail page**

### 🔍 Issue Details (Private)
- Full issue information with image, description, date, and suggested budget  
- 💳 Contribute to cleanup via modal form  
- 📊 Contributors table with total collected amount and transparent data  

### 🧹 My Issues (Private)
- 🧩 Manage your own issues: update or delete via modal  
- 🔐 Only issues created by the logged-in user are accessible  
- 💡 Status toggle: “Ongoing” / “Ended”

### 💳 My Contributions (Private)
- 🗂️ View all personal contributions  
- 📄 Download **PDF receipts** using jsPDF & jsPDF-AutoTable  
- 🔢 Track contributions per issue  

### ⚡ Additional Features
- 🌗 Dark/Light mode toggle across all pages  
- ⚡ Dynamic route titles  
- 🚨 404 Not Found page  
- ⏳ Global loading spinner during API calls  

---

## 🖌️ **UI & Design Highlights**

- 💎 Modern, clean design with consistent typography and spacing  
- 🖼️ Equal-sized cards and responsive grid layouts  
- 🎨 Smooth animations using **Lottie React** and **React Simple Typewriter**  
- 📱 Fully responsive: mobile, tablet, and desktop  
- 🌟 Consistent color palette and button styles across all pages  

---

## 🧰 **Tech Stack & Packages**

| Category | Technologies |
|----------|--------------|
| **Frontend** | React.js, React Router, Tailwind CSS, Swiper.js |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | Firebase Auth (Email/Password, Google) |
| **UI Enhancements** | SweetAlert2, React Toastify, Lottie React, React Simple Typewriter |
| **PDF Generation** | jsPDF, jsPDF-AutoTable |
| **Hosting** | Netlify (Client), Vercel (Server) |

**NPM Packages Used**  
`firebase`, `tailwindcss`, `react-toastify`, `sweetalert2`, `lottie-react`, `react-simple-typewriter`, `jspdf`, `jspdf-autotable`, `swiper`, `react-icons`

---

## 🗄️ **Database Structure**

### Issues Collection
```json
{
  "title": "Overflowing garbage on Road 21",
  "category": "Garbage",
  "location": "Mohakhali, Dhaka",
  "description": "Garbage has not been collected for 5 days.",
  "image": "https://...",
  "amount": 200,
  "email": "user@mail.com",
  "date": "2025-10-26"
}
```

### Contributions Collection
```json
{
  "issueId": "abc123",
  "amount": 250,
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "01712345678",
  "address": "Banani, Dhaka",
  "date": "2025-11-10T14:30:00Z",
  "additionalInfo": "Looking forward to a cleaner community!"
}
```

---

## 🚀 **Deployment**

| Component | Platform |
|-----------|----------|
| **Frontend** | Netlify |
| **Backend API** | Vercel |
| **Database** | MongoDB Atlas |
| **Auth** | Firebase |

---

## 👨‍💻 **Developer**

**Shoyaib Islam**  
- 💻 MERN Stack Developer  
- 📧 shoyaibchowdhury105@gmail.com  
- 🌐 [GitHub Profile](https://github.com/Shoybit)

---

## 📝 **License**

Open-source for **educational purposes** only.  
**© 2025 Cleanliness Portal — All Rights Reserved.**
