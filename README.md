# Habit Tracker

A minimal daily habit tracking app built with React. Track your habits, monitor streaks, and stay consistent — data persists locally so nothing is lost on refresh.

**Live → [habit-tracker-alpha-one-96.vercel.app](https://habit-tracker-alpha-one-96.vercel.app)**

---

## Features

- Add and delete habits
- Mark habits done / undone each day
- Streak tracking — consecutive days completed
- Stats page — completion rate, progress bar, per-habit status
- Light / dark mode
- localStorage persistence — no backend, no login

## Tech Stack

| Layer | Tech |
|---|---|
| UI | React 18, Tailwind CSS |
| Routing | React Router v6 |
| State | Context API + useReducer |
| Build | Vite |
| Deploy | Vercel |

## Project Structure

```
src/
├── components/
│   ├── AddHabitForm.jsx
│   ├── HabitCard.jsx
│   └── Navbar.jsx
├── context/
│   └── HabitContext.jsx
├── hooks/
│   ├── useHabits.js        # useReducer + localStorage sync
│   └── useStreak.js        # consecutive day streak logic
├── pages/
│   ├── Home.jsx
│   └── Stats.jsx
└── App.jsx
```

## Getting Started

```bash
git clone https://github.com/kritikakapoor23/habit-tracker.git
cd habit-tracker
npm install
npm run dev
```

## Architecture Notes

**State management** — habits live in a `useReducer` inside the `useHabits` custom hook, exposed via Context. No prop drilling; any component can dispatch actions or read state directly.

**Persistence** — `useEffect` syncs state to localStorage on every change. Initial state is hydrated from localStorage via the `useReducer` initializer, so data survives page refreshes.

**Streak logic** — `useStreak` receives a `completedDates` array and walks backwards from today, counting consecutive days. Pure function, no side effects, safe to call on every render.
<img width="1884" height="1036" alt="image" src="https://github.com/user-attachments/assets/e4617a20-d37c-454e-913d-bf818962d57e" />
<img width="1879" height="1012" alt="image" src="https://github.com/user-attachments/assets/3866efc5-9bed-4ad9-8a65-1d84cf6e1601" />
