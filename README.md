# Gaelle Learning Journey Website

`Gaelle Learning Journey Website` is a responsive Next.js App Router project that introduces a student, explains their learning path, and organizes blog-style study notes about frontend, backend, and mobile development.

## Features

- Next.js App Router structure with nested layouts
- TypeScript throughout the project
- Tailwind CSS 4 for responsive styling
- Shared root layout with global navigation and footer
- Nested blog layout for `/blog/*` pages
- Unique metadata for every page
- Custom `404` page
- Loading states for the root and blog routes
- Reusable `Button`, `Card`, `PageHero`, and heading components
- Professional, mobile-friendly design

## Technologies Used

- Next.js 16.2.10
- React 19.2.4
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

## Metadata and SEO Setup

- Every page exports unique metadata
- Page titles and descriptions match the page purpose
- Default metadata is provided by the root layout

## Responsive Design

- Mobile-first layout
- Collapsible or stacked navigation
- Flexible card grids
- Readable text widths
- No horizontal overflow
- Comfortable tap targets

## Project Background

This assignment demonstrates a clean App Router project with student profile content and learning topic organization. It replaces the starter scaffold with typed reusable components and a structured content flow.

## Development Notes

- Shared content is organized in data files to reduce repetition
- The contact page is frontend-only and static
- Navbar and footer are centralized for consistent layout
- Blog routes share a nested layout and sidebar navigation

## Deployment

### GitHub

- Create a repository for this project
- Push the code from this workspace

### Vercel

- Import the GitHub repository into Vercel
- Keep the default Next.js settings
- Deploy from the `main` branch
- Verify the live site on desktop and mobile

## Environment Variables

- None required

## Final Submission Checklist

- [x] App builds successfully
- [x] Required pages exist
- [x] Root layout is in place
- [x] Nested blog layout is in place
- [x] Metadata is unique per page
- [x] Loading states are implemented
- [x] Custom `404` page exists
- [x] Documentation is consolidated into this README

## Security Review

- No secrets or `.env` files are committed
- No unsafe HTML injection patterns are used
- Contact page does not submit data to a backend
- The project remains static and frontend-focused
- No backend endpoints are exposed

## Known Limitations

- The contact form is visual only and does not submit anywhere
- Deployment URLs are placeholders until the app is deployed

## Notes

- No backend or environment variables are required for this assignment.
- The contact form is frontend-only and does not submit data to a server.
