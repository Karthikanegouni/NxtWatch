# Nxt Watch

Nxt Watch is a modern, full-featured React-based video streaming Single Page Application (SPA) inspired by YouTube. It provides users with smooth navigation, video browsing, playback, and personalized features powered by authentication and dynamic data fetching.

---

## Live Demo

Explore the live app here: [https://nxtwatchak.netlify.app/](https://nxtwatchak.netlify.app/)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Running](#installation--running)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [User Credentials](#user-credentials)
- [License](#license)

---

## About

Nxt Watch offers a seamless experience to browse, watch, and save videos across various categories like Trending, Gaming, and more. The app includes user login/logout functionality with JWT-based authentication, protected routes, and responsive UI that adapts to light and dark themes.

---

## Features

- User authentication with login and JWT token management stored securely in cookies
- Protected routes ensuring only authenticated access to main content pages
- Routes include Home, Trending, Gaming, Saved Videos, Video Details, and Not Found
- Video playback using React Player with interactive Like, Dislike, and Save controls
- Dynamic fetching and rendering of videos with loading indicators and error handling
- Responsive sidebar navigation with theme toggling (light/dark modes)
- Modal popups for logout confirmation
- Persistence of saved videos across user sessions using global context
- Date display converted to readable relative time using `date-fns`
---

## Tech Stack

- React
- React Router DOM for client-side routing
- Styled Components for scoped, theme-aware styling
- React Icons for intuitive UI icons
- React Loader Spinner for user-friendly loading states
- React Player for video playback
- React JS Popup for modals and popups
- JS Cookie for JWT authentication token management
- Date-fns for date formatting and relative time display

---

## Project Structure

```
├── App.css
├── App.jsx
├── components
│   ├── Banner
│   ├── FailureView
│   ├── GamingVideoItem
│   ├── Header
│   ├── LoaderComponent
│   ├── NavItem
│   ├── NavItemsContainer
│   ├── ProtectedRoute
│   ├── Sidebar
│   ├── TrendingVideoItem
│   └── VideoItem
├── context
│   └── NxtWatchContext.jsx
├── main.jsx
└── pages
├── Gaming
├── Home
├── Login
├── NotFound
├── SavedVideos
├── Trending
└── VideoDetailedView

```

---

## Installation & Running

1. Clone the repository:

```

git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
cd NxtWave_React_practice/NxtWatchApp

```

2. Install dependencies:

```

npm install

```

3. Start the development server:

```

npm run dev

```

4. Open your browser and visit:

```

http://localhost:5173

```

---

## Usage

- Register or sign in using the provided credentials.
- Navigate through Home, Trending, Gaming, and Saved Videos via the sidebar.
- Search for videos using the search bar on Home.
- Watch videos and interact with like, dislike, and save buttons.
- Toggle the app’s theme between light and dark modes.
- Logout with confirmation modal.

---

## API Endpoints Overview

The app consumes data from several API endpoints including:

- `https://apis.ccbp.in/login` for authentication
- `https://apis.ccbp.in/videos/all?search=` for Home videos
- `https://apis.ccbp.in/videos/trending` for Trending videos
- `https://apis.ccbp.in/videos/gaming` for Gaming videos
- `https://apis.ccbp.in/videos/:id` for detailed video data

---

## User Credentials

Use the following credentials for login:

```

Username: rahul
Password: rahul@2021

```

---

## License

This project is licensed under the MIT License.