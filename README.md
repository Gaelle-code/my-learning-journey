# My Learning Journey Website

`My Learning Journey Website` is a responsive Next.js App Router project that introduces the student, explains their learning path, and organizes blog-style study notes about frontend, backend, and mobile development.

## Features

- Next.js App Router structure with nested layouts
- TypeScript throughout the project
- Tailwind CSS for responsive styling
- Shared root layout with global navigation and footer
- Nested blog layout for `/blog/*` pages
- Unique metadata for every page
- Custom `404` page
- Loading states for the root and blog routes
- Reusable `Button`, `Card`, `PageHero`, and heading components
- Professional, mobile-friendly layout

## Technologies Used

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- `next/font` with locally bundled font assets for offline builds

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
```

## Folder Structure

```text
app/
components/
data/
lib/
public/
```

## Pages and Routes

- `/` - Home
- `/about` - About
- `/contact` - Contact
- `/blog` - Blog overview
- `/blog/frontend` - Frontend learning notes
- `/blog/backend` - Backend learning notes
- `/blog/mobile` - Mobile learning notes
- `404` - Custom not found page

## App Router Concepts Demonstrated

- Root layout at `app/layout.tsx`
- Nested blog layout at `app/blog/layout.tsx`
- Page routes with `page.tsx`
- Loading UI with `loading.tsx`
- Custom `not-found.tsx`
- File-based metadata with unique titles and descriptions

## Root Layout

The root layout provides the shared shell for the whole site:

- `html` and `body` tags
- Global font setup using `next/font`
- Navbar on every page
- Footer on every page
- Base background and typography styling

## Nested Blog Layout

The blog layout wraps `/blog`, `/blog/frontend`, `/blog/backend`, and `/blog/mobile`.

- Blog header at the top
- Blog sidebar on desktop
- Stacked blog navigation on mobile
- Shared blog content area

## SEO Metadata

Every route exports unique metadata with its own title and description so the pages are easier to identify in search and sharing previews.

## Responsive Design

The site is designed for mobile, tablet, and desktop:

- Responsive navbar with mobile menu
- Flexible card grids
- Sidebar that stacks on small screens
- Readable text widths and spacing
- Tap-friendly buttons and links

## Bonus Features Implemented

- Custom `404` page
- Root loading state
- Blog loading state
- Reusable button component used across the site

## Deployment

### GitHub

- Create a repository for this project
- Push the code from this workspace

### Vercel

- Import the GitHub repository into Vercel
- Use the default Next.js settings
- Deploy from the `main` branch

### Placeholders

- GitHub repository link: `https://github.com/your-username/your-repo`
- Live Vercel deployment link: `https://your-project.vercel.app`

## Notes

- No backend or environment variables are required for this assignment.
- The contact form is frontend-only and does not submit data to a server.
