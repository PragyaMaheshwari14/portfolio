import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Java } from "@/components/ui/svgs/java";
import { NeonDB } from "@/components/ui/svgs/neondb";
import { Convex } from "@/components/ui/svgs/convex";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Express } from "@/components/ui/svgs/expressjs";

export const DATA = {
  name: "Pragya Maheshwari",
  initials: "PM",
  url: "https://pragyamaheshwari.com",
  location: "Noida, India",
  locationLink: "https://www.google.com/maps/place/noida",
  description:
    "I’m a full-stack developer passionate about building scalable products and meaningful digital experiences. I enjoy crafting elegant solutions, exploring emerging technologies, and continuously pushing the boundaries of modern web development.",
  summary:
    "I’m a product-driven developer who loves turning ideas into real, impactful software. My work focuses on building robust full-stack applications, designing intuitive user experiences, and leveraging modern technologies to create scalable systems. I believe great software lives at the intersection of thoughtful engineering and purposeful design. Through continuous learning, experimentation, and collaboration with the developer community, I strive to build products that are not only technically strong but also genuinely valuable for the people who use them.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Javascript", icon: Javascript },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Express },
    { name: "MongoDB", icon: MongoDB },
    { name: "Postgres", icon: Postgresql },
    { name: "NeonDB", icon: NeonDB },
    { name: "Convex", icon: Convex },
    { name: "Java", icon: Java },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@pragyamaheshwari.com",
    tel: "+91 7017322542",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/PragyaMaheshwari14",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pragyam1403/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Stilwerk",
      href: "#",
      badges: ["Internship"],
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/stilwerk.png",
      start: "Jun 2025",
      end: "Dec 2025",
      description:
        "Built an interactive pathfinding visualizer that brings complex algorithms like Dijkstra, A*, BFS, and DFS to life through real-time grid animations, making abstract DSA concepts intuitive and easy to understand for users with no prior background. Implemented maze generation algorithms including Binary Tree and Recursive Division, along with adjustable speed controls to let users study each traversal step at their own pace. Developed a clean, responsive UI with light/dark mode support, smooth tile animations, and a docs section covering time complexity, real-world use cases, and algorithm trade-offs. Contributed to codebase health by auditing and resolving TypeScript and ESLint errors across multiple modules, ensuring zero lint failures on every production build.",
    },
  ],
  education: [
    {
      school: "Galgotias University, Greater Noida",
      href: "https://www.galgotiasuniversity.edu.in/",
      degree: "B.Tech in Computer Science",
      logoUrl: "/galgotiaslogo.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Saraswati Vidya Mandir, Etah",
      href: "#",
      degree: "12th PCM",
      logoUrl: "/vidyamandirlogo.png",
      start: "2021",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Spott",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Developed a modern event management platform that allows users to create, manage, and discover events seamlessly. The platform provides real-time event updates, attendee management, and a smooth user experience with a scalable backend powered by Convex.",
      technologies: ["Next.js", "TypeScript", "Convex", "TailwindCSS", "React"],
      links: [
        {
          type: "Website",
          href: "https://spott.pragyamaheshwari.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PragyaMaheshwari14/Spott",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "./pro-01.png",
      video: "",
    },
    {
      title: "Wayfind - Pathfinding Visualizer",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Built an interactive pathfinding visualization tool that demonstrates how algorithms such as Dijkstra and A* work in real time. Users can generate grids, place obstacles, and visualize algorithm execution step-by-step to better understand graph traversal and shortest path concepts.",
      technologies: ["Next.js", "TypeScript", "React", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://wayfind.pragyamaheshwari.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PragyaMaheshwari14/Pathfinding-Visualizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "./pro-02.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "March 2023",
      location: "Greater Noida, India",
      description:
        "Built an AI-powered career guidance platform designed to help students make informed career decisions after completing their 12th grade. The system analyzed student interests, strengths, and academic performance to recommend suitable career paths, educational programs, and learning resources.",
      image: "/sih.png",
      mlh: "",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "March 2024",
      location: "Greater Noida, India",
      description:
        "Developed a student-focused Learning Management System (LMS) that provides personalized learning recommendations. The platform analyzes student progress and performance to suggest the next topics, resources, and learning paths, enabling a more adaptive and efficient educational experience.",
      image: "sih.png",
      mlh: "",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "March 2025",
      location: "Greater Noida, India",
      description:
        "Created an AI-powered waste management platform where users can capture images of waste or garbage in their surroundings and upload them to the platform. The system identifies the location and allows nearby volunteers or workers to clean the area and receive rewards for their contribution, encouraging community-driven environmental responsibility.",
      image: "sih.png",
      mlh: "",
      links: [],
    },
  ],
} as const;
