# React Router Demo Project

A comprehensive React application demonstrating React Router DOM functionality with a modern setup using Vite, Tailwind CSS, and various routing features.

## 🚀 Project Overview

This project showcases a complete React Router implementation with multiple pages, dynamic routing, data fetching, and modern web development practices. It serves as a learning resource and template for building single-page applications with client-side routing.

## ✨ Features

### Core Functionality
- **Multi-page Navigation**: Seamless navigation between Home, About, Contact, and GitHub profile pages
- **Dynamic Routing**: User profile pages with URL parameters (`/user/:id`)
- **Data Fetching**: GitHub API integration with React Router loaders for optimized data loading
- **Responsive Design**: Mobile-first responsive layout using Tailwind CSS
- **Layout System**: Consistent header and footer across all pages using Layout component

### Technical Features
- **React 19**: Latest React features and performance improvements
- **React Router DOM v7**: Modern routing with loaders and error boundaries
- **Vite**: Fast build tool with HMR (Hot Module Replacement)
- **Tailwind CSS v4**: Utility-first CSS framework for styling
- **ESLint**: Code quality and consistency enforcement

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Routing**: React Router DOM 7.8.0
- **Build Tool**: Vite 7.1.0
- **Styling**: Tailwind CSS 4.1.11
- **Code Quality**: ESLint with React-specific rules
- **Development**: Fast Refresh for instant feedback

## 📁 Project Structure

```
src/
├── components/
│   ├── About/          # About page component
│   ├── Contact/        # Contact page component
│   ├── Footer/         # Footer component
│   ├── Github/         # GitHub profile with API integration
│   ├── Header/         # Navigation header
│   ├── Home/           # Landing page
│   └── User/           # Dynamic user profile page
├── assets/             # Static assets
├── App.jsx            # Main app component
├── Layout.jsx         # Layout wrapper with Outlet
├── main.jsx           # Router configuration and app entry
└── index.css          # Global styles
```

## 🚦 Available Routes

- `/` - Home page with hero section and featured content
- `/about` - About page with project information
- `/contact` - Contact form and information
- `/user/:id` - Dynamic user profile pages
- `/github` - GitHub profile integration with live data

## 🎯 Key Learning Points

### React Router Concepts Demonstrated
1. **Browser Router**: Client-side routing configuration
2. **Route Components**: Organizing routes with JSX syntax
3. **Layout Routes**: Shared components across multiple pages
4. **Dynamic Segments**: URL parameters for user profiles
5. **Data Loaders**: Efficient data fetching before route rendering
6. **Link Navigation**: Declarative navigation between routes

### Modern React Patterns
- Functional components with hooks
- Component composition and reusability
- Separation of concerns between routing and UI logic
- API integration with async/await patterns

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation & Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-router
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

### Build & Deploy

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```

3. **Run linting**
   ```bash
   npm run lint
   ```

## 🔧 Configuration Files

- **vite.config.js**: Vite build configuration
- **eslint.config.js**: ESLint rules and settings
- **package.json**: Dependencies and scripts
- **index.html**: HTML template

## 🌟 Best Practices Implemented

- **Component Organization**: Logical folder structure by feature
- **Responsive Design**: Mobile-first approach with Tailwind
- **Performance**: Optimized builds and code splitting
- **Code Quality**: ESLint integration for consistent code style
- **Modern Syntax**: ES6+ features and React best practices

## 📱 Responsive Features

- Mobile-friendly navigation
- Adaptive layouts for different screen sizes
- Optimized images and content presentation
- Touch-friendly interface elements

## 🔗 External Integrations

- **GitHub API**: Live user profile data fetching
- **Unsplash Images**: High-quality placeholder images
- **Modern Web APIs**: Fetch API for HTTP requests

This project serves as an excellent foundation for understanding React Router fundamentals and modern React development practices.
