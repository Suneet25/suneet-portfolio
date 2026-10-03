// All of the site's content lives here. Edit this file to make the portfolio yours.

export const site = {
  name: "Suneet Panigrahi",
  url: "https://example.com",
  email: "suneetpanigrahi53@gmail.com",
  avatar: "/avatar.jpeg",
  headline: "Software engineer, builder, and lifelong learner.",
  // Plain strings and { text, href } links are rendered inline.
  intro: [
    "Software engineer focused on crafting fast, delightful digital products. I enjoy turning ideas into things people love to use, and I write ",
    { text: "posts", href: "/posts" },
    " about what I learn along the way. Check out my ",
    { text: "projects", href: "/projects" },
    ".",
  ] as (string | { text: string; href: string })[],
  description: "Software engineer, builder, and lifelong learner.",
};

export const newsletter = {
  title: "Stay up to date",
  description: "Get an email when I publish something new. No spam, unsubscribe any time.",
  // Form URL from your newsletter service, e.g. Buttondown:
  // "https://buttondown.com/api/emails/embed-subscribe/<your-username>"
  // Left empty, Subscribe opens an email to you instead.
  action: "",
};

export const socials = [
  { name: "GitHub", href: "https://github.com/", icon: "github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { name: "X", href: "https://x.com/", icon: "x" },
  { name: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { name: "Email", href: `mailto:${site.email}`, icon: "mail" },
] as const;

// Five photos shown as a tilted gallery on the home page. Drop your own into /public/gallery.
export const gallery = [
  { src: "/gallery/photo-1.svg", alt: "Photo 1" },
  { src: "/gallery/photo-2.svg", alt: "Photo 2" },
  { src: "/gallery/photo-3.svg", alt: "Photo 3" },
  { src: "/gallery/photo-4.svg", alt: "Photo 4" },
  { src: "/gallery/photo-5.svg", alt: "Photo 5" },
];

export type Work = {
  company: string;
  title: string;
  start: string;
  end?: string;
  href?: string;
  logo?: string;
};

export const work: Work[] = [
  { company: "Company One", title: "Software Engineer", start: "2023", href: "#" },
  { company: "Company Two", title: "Software Engineering Intern", start: "2022", end: "2023", href: "#" },
  { company: "University", title: "B.Tech, Computer Science", start: "2019", end: "2023", href: "#" },
];

export type Project = {
  title: string;
  description: string;
  href?: string;
  tags: string[];
  year: string;
};

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "A full-stack web app that helps people track habits with a clean, minimal interface.",
    href: "https://github.com/",
    tags: ["Next.js", "TypeScript", "Postgres"],
    year: "2026",
  },
  {
    title: "Project Beta",
    description: "A CLI tool that automates repetitive developer workflows and saves hours each week.",
    href: "https://github.com/",
    tags: ["Node.js", "CLI"],
    year: "2025",
  },
  {
    title: "Project Gamma",
    description: "A machine-learning experiment that classifies images in the browser in real time.",
    href: "https://github.com/",
    tags: ["Python", "TensorFlow.js"],
    year: "2024",
  },
];

export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string; // YYYY-MM-DD
  body: string[]; // one entry per paragraph
};

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello, world",
    summary: "Why I built this site and what I plan to write about.",
    date: "2026-10-03",
    body: [
      "Welcome to my corner of the internet. I built this site to share what I'm working on and what I'm learning.",
      "Expect posts about software engineering, design, productivity, and the occasional side project.",
    ],
  },
  {
    slug: "my-dev-setup",
    title: "My development setup",
    summary: "The editor, terminal, and tools I use every day.",
    date: "2026-09-15",
    body: [
      "A good setup removes friction. Here's a quick look at the tools I rely on daily and why I picked them.",
      "See the Uses page for the full list.",
    ],
  },
  {
    slug: "lessons-from-my-first-year",
    title: "Lessons from my first year as an engineer",
    summary: "What I wish I'd known when I started writing code professionally.",
    date: "2026-08-01",
    body: [
      "Ship small, ask questions early, and write things down. Those three habits made the biggest difference for me.",
      "Above all: be kind to your future self by leaving the codebase a little better than you found it.",
    ],
  },
];

export const about = {
  paragraphs: [
    "I'm Suneet, a software engineer who loves building products end to end, from the first sketch to the final deploy.",
    "I care about craft: fast interfaces, clear code, and details that make software feel good to use. Outside of work I enjoy reading, exploring new tech, and working on side projects.",
    "I'm always happy to chat about engineering, design, or interesting ideas. Feel free to reach out.",
  ],
};

export const uses: { category: string; items: { name: string; description: string }[] }[] = [
  {
    category: "Hardware",
    items: [
      { name: "MacBook", description: "My main machine for everything." },
      { name: "External monitor", description: "More screen space for code and docs." },
    ],
  },
  {
    category: "Software",
    items: [
      { name: "VS Code", description: "Editor of choice, with Claude Code." },
      { name: "iTerm / Terminal", description: "zsh with a minimal prompt." },
      { name: "Figma", description: "For quick mockups and design work." },
    ],
  },
];

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/posts", label: "Posts" },
  { href: "/projects", label: "Projects" },
  { href: "/uses", label: "Uses" },
];
