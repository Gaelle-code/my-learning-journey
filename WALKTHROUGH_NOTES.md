# Walkthrough Notes

## Project Overview

`My Learning Journey Website` is a beginner-friendly Next.js App Router assignment that presents a student profile and learning topics in a clean, responsive layout.

## Folder Structure Explanation

- `app/` contains the routes, layouts, loading states, and not-found page
- `components/` contains shared layout and UI components
- `data/` stores reusable content arrays
- `lib/` stores small helper utilities and site config

## Root Layout Explanation

- Loads global fonts
- Wraps every page with Navbar and Footer
- Applies shared background and typography
- Uses a single responsive shell for the whole app

## Nested Blog Layout Explanation

- Wraps all `/blog/*` routes automatically
- Shows a blog header at the top
- Places the sidebar beside the content on desktop
- Stacks the navigation naturally on mobile

## Navbar and Footer Explanation

- Navbar uses `Link` and active states for navigation
- Navbar is responsive and includes a mobile menu
- Footer shows the site name, a learning message, and quick links

## Metadata and SEO Setup

- Every page has unique metadata
- Titles and descriptions match the page purpose
- The root layout provides default metadata values

## Global Font and Colors

- Uses locally bundled font files through `next/font/local`
- Uses a consistent neutral background
- Uses indigo-blue accent colors
- Applies the font and color system globally

## Responsive Design Approach

- Card grids collapse gracefully on small screens
- The navigation becomes mobile-friendly
- Blog content uses a sidebar-plus-content layout
- Buttons and tap targets remain easy to use

## Bonus Features Completed

- Custom `404` page
- Root `loading.tsx`
- Blog `loading.tsx`
- Reusable `Button` component used across the app

## Challenges and Solutions

- The starter scaffold was replaced with a structured App Router layout.
- Shared content was moved into data files to avoid repeating copy.
- The contact page stays frontend-only so the assignment remains static and safe.

## How to Run Locally

```bash
npm install
npm run dev
```

## How to Deploy on Vercel

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Deploy with the default Next.js settings.
