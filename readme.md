# MERN SrTrace's Blog Project

This project is a fully responsive MERN stack web application, designed to provide a modern, feature-rich blogging experience. It showcases the power of the MERN stack — MongoDB, Express.js, React, and Node.js — while incorporating best practices for web development.

## Features

- **Modern UI/UX**  
  Built with React.js and styled using **Tailwind CSS**, the app ensures a clean and responsive design. Dark mode is also included for a better user experience.

- **Dynamic Routing**  
  Utilizes React Router DOM to enable seamless navigation between pages.

- **Authentication**  
  Secure authentication using **JSON Web Tokens (JWT)** and **Google OAuth integration**.

- **State Management**  
  Managed efficiently with **Redux Toolkit** for streamlined client-side state management.

- **Admin Dashboard**  
  Includes an admin interface to manage posts, comments, and users with **CRUD operations**, secured via role-based access control.

- **Advanced Search**  
  Search functionality powered by MongoDB queries allows users to filter posts by title, limit results, and sort through a modern sidebar.

- **Community Features**  
  Interactive post pages where users can leave, edit, and delete comments, fostering engagement.

- **Deployment**  
  Deployed using **Render**, making it accessible online and ready to showcase in portfolios.

## Live Demo

Check out the live site here: [MERN Blog Dashboard](https://blog-dashboard-app.onrender.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SrTrace/blog-dashboard-app
   cd blog-dashboard-app
   ```

2. Install server dependencies:

   ```bash
   npm install
   ```

3. Navigate to the `client` folder and install client dependencies:

   ```bash
   cd client
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Tech Stack

- **Frontend:** React.js, FlowBite, Tailwind CSS, Redux Toolkit, React Router DOM
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** bcryptjs, JSON Web Tokens (JWT), Google OAuth
- **Environment Management:** dotenv
- **Deployment:** Render

## Scripts

- `npm run dev` - Starts the development server with live-reload.
- `npm run start` - Launches the production server.
- `npm run build` - Builds the client application.
