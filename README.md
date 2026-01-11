# Task Management Dashboard (Frontend)

A frontend task management dashboard built using **HTML, CSS, and JavaScript**.
The project demonstrates authentication flow, protected routes, and full CRUD functionality with search and edit support.

This project was created as part of an internship assignment to showcase frontend logic, JavaScript fundamentals, and clean project structure.

---

## 🚀 Features

* User Authentication (Login & Register – frontend simulated)
* Protected Dashboard (cannot access without login)
* Task Management (CRUD)

  * Add tasks
  * Edit tasks
  * Delete tasks
  * Search tasks
* Data persistence using browser **localStorage**
* Logout functionality
* Clean and structured folder architecture

---

## 🛠️ Tech Stack

* **HTML** – Structure
* **CSS** – Styling
* **JavaScript (Vanilla JS)** – Logic & Interactivity
* **localStorage** – Mock database for persistence

---

## 📁 Project Structure

```
project-folder/
│
├── index.html        # Login Page
├── register.html     # Register Page
├── dashboard.html    # Dashboard Page
│
├── css/
│   └── style.css     # Common styles
│
├── js/
│   ├── auth.js       # Login & Register logic
│   └── dashboard.js  # Dashboard CRUD logic
│
└── README.md
```

---

## 🔐 Authentication Flow (Frontend)

* User credentials are stored in **localStorage**
* On successful login, a token flag is saved
* Dashboard checks authentication before loading
* Unauthorized users are redirected to the login page

> Note: This is a frontend-only simulation of authentication.

---

## 📋 CRUD Functionality

* **Create:** Add a new task
* **Read:** Search and view tasks
* **Update:** Edit existing tasks
* **Delete:** Remove tasks

Tasks are stored in localStorage and managed using JavaScript state handling.

---

## 🔍 Search Behavior

* Tasks are hidden by default after refresh
* Tasks appear only when searched
* Ensures clean UI and controlled rendering

---

## 🧠 Key Learnings

* JavaScript DOM manipulation
* State management using variables and localStorage
* Scope handling and debugging
* Clean code organization
* Frontend-only authentication logic

---

## 🔮 Future Improvements

* Replace localStorage with a backend API
* Add real authentication using JWT
* Integrate database (MongoDB / MySQL)
* Convert project into React-based application
* Improve UI/UX and accessibility

---

## ⚠️ Disclaimer

This project is **frontend-focused**.
Backend and database functionalities are intentionally simulated to demonstrate frontend logic and scalability planning.

---

## 👨‍💻 Author

**[Sneha Budhauliya]**
Frontend Developer (Fresher / Intern)

* Portfolio: [https://snehabudhauliya.github.io/portfolio/]
* GitHub: [https://github.com/snehabudhauliya/portfolio]

---

