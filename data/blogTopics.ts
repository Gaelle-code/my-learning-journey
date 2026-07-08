export const blogTopics = [
  {
    slug: "frontend",
    label: "Frontend",
    title: "Frontend Development",
    summary:
      "Notes on the part of the stack people see first: layout, spacing, interaction, and the tools I use to build them.",
    points: [
      "HTML gives structure and meaning to content.",
      "CSS shapes layout, color, spacing, and responsiveness.",
      "JavaScript and React bring interaction and state.",
      "Next.js and Tailwind CSS help me build faster, cleaner experiences.",
    ],
    projects: [
      "A personal portfolio homepage that feels calm and clear",
      "A responsive landing page with cards and a simple call to action",
      "A study tracker dashboard built from reusable pieces",
    ],
  },
  {
    slug: "backend",
    label: "Backend",
    title: "Backend Development",
    summary:
      "The server-side systems that handle data, rules, authentication, and the logic behind application features.",
    points: [
      "APIs expose structured data to the frontend.",
      "Databases store information that should persist over time.",
      "Authentication protects accounts and personalized features.",
      "Server logic keeps business rules organized and secure.",
    ],
    projects: [
      "A simple notes API with clean endpoints",
      "A login flow with protected content",
      "A reading list app backed by stored data",
    ],
  },
  {
    slug: "mobile",
    label: "Mobile",
    title: "Mobile Development",
    summary:
      "Thinking about smaller screens, touch gestures, and app experiences that feel natural on phones and tablets.",
    points: [
      "Mobile UI needs strong hierarchy and readable tap targets.",
      "React Native and Flutter are popular cross-platform options.",
      "Performance and offline behavior matter more on mobile networks.",
      "Good mobile apps keep flows short and focused.",
    ],
    projects: [
      "A habit tracker with bottom navigation",
      "A mobile reading app with clean cards",
      "A study planner that works well one-handed",
    ],
  },
] as const;

export type BlogTopic = (typeof blogTopics)[number];
