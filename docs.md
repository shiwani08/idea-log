# Project Documentation: Next.js + Ant Design + TypeScript Playground

## Project Overview

**Frameworks/Technologies:**  
- Next.js (v15.5.0)  
- Ant Design (v5.27.3)  
- TypeScript (v5.x)  
- Redux Toolkit, React-Redux  
- Additional libs: React Big Calendar, Lucide-react, React Icons, Redux Thunk, etc.

**Purpose:**  
To experiment by using various components and tools from Next.js, Ant Design, and TypeScript in a versatile, mostly random manner across multiple pages. This project serves as a playground for UI patterns and state management techniques.

---

## Pages

### 1. Home Page
- Displays **face cards** of users fetched from an API.
- Includes a **count button** to increase/decrease a numeric count.
- State management using **Redux Toolkit** with a configured Redux store.
- **API**: [DummyJSON Users API](https://dummyjson.com/users?limit=10) used to fetch user data.

### 2. About Page
- Currently under development.

### 3. Calendar Page
- Displays booking or tasks scheduled for the current day.
- Prevents adding overlapping tasks at the same time slot.

### 4. Animes Page
- Lists top animes dynamically fetched from the **Jikan API**.
- **API**: [Jikan Top Anime](https://api.jikan.moe/v4/top/anime)

---

## Project Features Summary

| Feature        | Description                                                   | Tech/API Used                          |
|----------------|---------------------------------------------------------------|--------------------------------------|
| Home           | User face cards, count button controlled with Redux Toolkit   | DummyJSON API, Redux Toolkit          |
| About          | Work in progress                                              | N/A                                  |
| Calendar       | Day task booking with time conflict prevention                | React Big Calendar, Date-fns          |
| Animes         | Dynamic anime listing showing top animes                      | Jikan API (MyAnimeList unofficial API) |

---

## Setup & Installation

1. Clone the repository.
2. Run `npm install` or `yarn` to install dependencies.
3. Run development server: `npm run dev` or `yarn dev`.
4. API routes are consumed from external public endpoints (DummyJSON and Jikan).
5. Configure Redux store, API fetching logic, and calendar restrictions as per source code.

---

## Future Enhancements

- Complete About page content and features.
- Integrate authentication flow using `next-auth` for secure access.
- Extend calendar for multi-day and recurring bookings.
- Add caching or SSR for anime data for better performance.
- Improve UI/UX consistency and responsiveness.

---

## Contact & Contribution

- Maintainer: [Your Name or Contact Info]
- Contributions are welcome via Pull Requests.
- Issues and feature requests can be submitted on GitHub.

---

This project is a playground emphasizing varied use of Next.js features, Ant Design components, Redux state management, and integration with public REST APIs for real-world-like data visualization.



