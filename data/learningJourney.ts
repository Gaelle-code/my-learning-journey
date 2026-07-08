export const learningJourney = [
  {
    title: "How I’m learning",
    summary:
      "I learn best by finishing small pages, then stepping back to see how the layout and content work together.",
  },
  {
    title: "What I’m practicing",
    summary:
      "I’m strengthening HTML, CSS, JavaScript, React, and responsive design habits through small, focused builds.",
  },
  {
    title: "Where I want to grow",
    summary:
      "I’m learning how frontend interfaces connect with APIs, databases, authentication, and deployment.",
  },
] as const;

export const developmentGoals = [
  "Keep components small enough to read quickly later.",
  "Use the App Router intentionally instead of leaning on defaults.",
  "Make the pages feel consistent and easy to navigate.",
  "Get more comfortable turning a project into a finished deployment.",
] as const;

export const learningFocusAreas = [
  {
    title: "Frontend",
    description:
      "Layout, spacing, component reuse, and the details that make a page feel finished.",
  },
  {
    title: "Backend",
    description:
      "APIs, data flow, server logic, authentication, and how information is stored safely.",
  },
  {
    title: "Mobile",
    description:
      "Touch-friendly interfaces, app navigation, and design choices for smaller screens.",
  },
] as const;
