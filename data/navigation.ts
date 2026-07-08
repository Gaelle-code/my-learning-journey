export const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
] as const;

export const blogNavigation = [
  { href: "/blog", label: "Blog Overview" },
  { href: "/blog/frontend", label: "Frontend" },
  { href: "/blog/backend", label: "Backend" },
  { href: "/blog/mobile", label: "Mobile" },
] as const;

export const quickLinks = [
  { href: "/blog/frontend", label: "Frontend basics" },
  { href: "/blog/backend", label: "Backend thinking" },
  { href: "/blog/mobile", label: "Mobile design" },
] as const;

