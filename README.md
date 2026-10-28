# Sri Lalith Enterprises - Website

A modern, responsive website for Sri Lalith Enterprises, a leading BOPP tapes and packaging solutions provider.

## Live Demo
- Website: https://srija0770-sri-lalith-enterprises.netlify.app/
- Backend API: https://backend-srija0770-sri-lalith-enterprises.onrender.com/
## Project Overview
This website is designed to present the company’s products, services, and business profile in a clean, professional, and user-friendly format. It helps customers explore BOPP tapes, packaging materials, industrial products, and contact the business through a simple inquiry form.

## Features
- **Single Page Application (SPA)**: No page reloads when navigating between pages
-  Responsive and mobile-friendly design
- Modern single-page application flow
- About page with company background
- Products catalog for packaging solutions
- Services section for manufacturing and industrial support
- Contact page with inquiry form
- Smooth scrolling and modern UI transitions
- Professional branding for the business

## Tech Stack - Frontend
- React
- Vite
- React Router DOM
- CSS3
- JavaScript

## Frontend Project Structure
```
Frontend/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── assets/        # Images and static files
│   │   ├── logo.png   # Company logo
│   │   ├── BOPP Tape (Transparent).png
│   │   ├── BOPP Tape (Brown).png
│   │   ├── BOPP Tapes (Colour).jpg
│   │   ├── Aluminium-foil-tape.png
│   │   ├── packaging products.jpg
│   │   ├── Industrial tapes.jpg
│   │   └── packaging tapes.jpg
│   ├── App.jsx        # Main app component
│   ├── App.css        # Global styles
│   └── main.jsx       # Entry point
├── public/            # Public assets
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── vite.config.js     # Vite configuration
├── start-dev.bat      # Batch file for easy startup
└── README.md          # This file
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

#### Option 1: Using Command Prompt (Recommended)
```cmd
cd Frontend
npm run dev
```

#### Option 2: Using the Batch File (Easiest)
Double-click `start-dev.bat` in the Frontend folder

#### Option 3: Using PowerShell (if you encounter execution policy issues)
```powershell
# First, set execution policy (run PowerShell as Administrator)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Then run the development server
cd Frontend
npm run dev
```

The development server will start at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Routing

The application uses React Router for client-side routing. All navigation happens without page reloads:

- `/` - Home page (BOPP tapes overview)
- `/about` - About page (Company story and team)
- `/products` - Products page (BOPP tapes catalog)
- `/services` - Services page (Manufacturing services)
- `/contact` - Contact page (Get in touch)

## Product Catalog
The website showcases real BOPP tape products:
- **BOPP Transparent Tape** - General packaging applications
- **BOPP Brown Tape** - Heavy-duty packaging
- **BOPP Colored Tapes** - Branded and decorative packaging
- **Aluminium Foil Tape** - Heat resistance and insulation
- **Industrial Tapes** - Specialized applications
- **Packaging Solutions** - Custom packaging services

## Troubleshooting

### Command Prompt Issues
If you get errors in Command Prompt:

1. Make sure you're in the correct directory:
   ```cmd
   cd C:\Users\Srija Srinivas\Downloads\venkatrao-website\Frontend
   ```

2. Check if Node.js is installed:
   ```cmd
   node --version
   npm --version
   ```

3. Install dependencies if needed:
   ```cmd
   npm install
   ```

### Port Already in Use
If port 3000 is already in use:

1. Find the process using the port:
   ```cmd
   netstat -ano | findstr :3000
   ```
2. Kill the process or use a different port:
   ```cmd
   npm run dev -- --port 3001
   ```

### Module Not Found Errors
If you get module not found errors:

1. Delete the `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

## Technologies Used

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **Vite** - Build tool and development server
- **React Icons** - Icon library
- **CSS3** - Styling with modern features

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author
```
Project Owner: MUNDRU SAI SRIJA
GitHub: @Srija0770
Role: Project Owner and Developer
```
## License
This project is proprietary to Sri Lalith Enterprises.
