Educational Website Using React.js
~Muhammad Unair Faridi

This project is a responsive educational website developed using React.js and Tailwind CSS. The purpose of this project is to create a modern and user-friendly educational platform where users can view courses, teachers, manage student tasks, and contact the institute.

The project demonstrates the use of React components, React Router DOM, Props, useState, reusable components, event handling, and responsive web design.

The main objectives of this project are:

* To learn React.js fundamentals
* To implement routing using React Router DOM
* To create reusable components
* To use Props for dynamic data display
* To use useState for state management
* To design responsive pages using Tailwind CSS
* To build a complete educational website interface

The following technologies were used in this project:

| Technology       | Purpose                       |
| ---------------- | ----------------------------- |
| React.js         | Frontend framework            |
| React Router DOM | Page routing                  |
| Tailwind CSS     | Styling and responsive design |
| JavaScript       | Functionality                 |
| HTML             | Structure                     |
| CSS              | Design support                |
| Vite             | React project setup           |


Features of the Website

1. Navbar Component

The website contains a reusable navigation bar with:

* Logo
* Navigation links
* Active link highlighting
* Responsive design

2. Home Page

The Home page contains:

* Hero section
* Welcome message
* Featured courses
* Call-to-action button

The page uses gradient backgrounds, shadows, hover effects, and responsive layouts.

3. Courses Page

The Courses page dynamically displays course cards using Props and Array Mapping.

Each course card contains:

* Course image
* Course name
* Instructor name
* Duration
* Price

Reusable component:

* CourseCard.jsx

4. Teachers Page

The Teachers page dynamically displays teacher information.

Each teacher card contains:

* Teacher image
* Teacher name
* Subject
* Experience

Reusable component:

* TeacherCard.jsx

5. Student Dashboard

The Student Dashboard allows students to:

* Add tasks
* Delete tasks
* Mark tasks as completed

This page uses:

* useState
* Event handling
* Conditional rendering

6. Contact Page

The Contact page contains a form with:

* Name field
* Email field
* Message field

Features:

* Prevents page reload
* Displays success alert after submission

7. Footer Component

The website contains a reusable footer with:

* Copyright
* Social media links
* Developer name

The following React concepts were implemented:

* Functional Components
* Props
* useState Hook
* React Router DOM
* Array Mapping
* Event Handling
* Conditional Rendering
* Reusable Components

The following Tailwind CSS features were used:

* Flexbox
* Grid System
* Responsive Design
* Hover Effects
* Rounded Corners
* Shadows
* Gradient Backgrounds
* Spacing Utilities

Folder Structure

src/
│
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── CourseCard.jsx
│ └── TeacherCard.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── Courses.jsx
│ ├── Teachers.jsx
│ ├── Dashboard.jsx
│ └── Contact.jsx
│
├── assets/
│
├── App.jsx
├── main.jsx
└── index.css

This project helped in understanding modern frontend web development using React.js and Tailwind CSS. It improved knowledge about routing, reusable components, state management, responsive design, and user interface development.

The project successfully fulfills all assignment requirements and demonstrates practical implementation of React concepts in a real-world educational website.
