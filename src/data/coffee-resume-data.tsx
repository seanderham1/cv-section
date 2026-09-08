import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import type { ResumeData } from "@/components/resume";

const cvBasePath =
  process.env.GITHUB_ACTIONS === "true" || process.env.NODE_ENV === "production"
    ? "/cv-section"
    : "";

// Hospitality-focused variant of the CV, served at /coffee.
export const COFFEE_RESUME_DATA: ResumeData = {
  name: "Sean Derham",
  initials: "SD",
  location: "seanderham.com",
  locationLink: "https://seanderham.com/",
  about:
    "Collaborative motion designer and team leader, experienced in studio work and high-volume hospitality.",
  summary:
    "Motion graphic designer with four years delivering projects for global clients. Previously team lead at Wimbledon, Championships, running the media bar and restaurant. Reliable, organised, and calm under pressure — now looking for a hands-on, customer-facing role.",
  avatarUrl: `${cvBasePath}/profile.jpg`,
  personalWebsiteUrl: "https://seanderham.com",
  contact: {
    email: "sjderham@protonmail.com",
    tel: "+447597368482",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/seanderham1",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://uk.linkedin.com/in/seanderham",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Sussex",
      degree: "First Class Bachelor's Degree in Product Design",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "The Adare Collection",
      link: "https://theadarecollection.com/",
      badges: ["Remote"],
      title: "Lead Web Designer",
      start: "Mar 2025",
      end: null,
      description:
        "Built the luxury accommodation platform for Ryder Cup 2027 from the ground up, and now lead it technically — interactive property maps, virtual tours, SEO, and deployment. Technologies: React, TypeScript, Vite, Express, Tailwind CSS, Firebase",
    },
    {
      company: "Truth Creative",
      link: "https://www.truth-creative.co.uk/",
      badges: ["Contract"],
      title: "Motion Designer",
      start: "Jun 2025",
      end: "Feb 2026",
      description:
        "On-location filming and interviews for branded content — travel to client sites, lighting setups, chroma keying and multicam capture nationwide. Colour grading, multicam editing, and motion-led short form content, including Cinema 4D and Redshift product visualisations. Technologies: Premiere Pro, After Effects, DaVinci Resolve, Cinema 4D, Redshift",
    },
    {
      company: "Freelance",
      link: "https://www.linkedin.com/in/seanderham/",
      badges: ["Remote"],
      title: "Motion Designer",
      start: "Jun 2024",
      end: "May 2025",
      description:
        "Creating motion graphic and typographic animations for internal meetings and events. Working directly with clients across sectors to deliver focused, high-quality motion design. Technologies: Premiere Pro, After Effects, Cinema 4D",
    },
    {
      company: "Box Bear",
      link: "https://boxbear.co.uk/",
      badges: [],
      title: "Motion Graphic Designer",
      start: "May 2022",
      end: "May 2024",
      description:
        "3D animation and video projects for pharmaceutical, EV, and consumer brands — from concept through to delivery. Technologies: Premiere Pro, After Effects, Photoshop, Cinema 4D, Blender",
    },
    {
      company: "Wimbledon, Championships",
      link: "https://www.wimbledon.com/",
      badges: ["Team Lead"],
      title: "Media Bar & Restaurant Team Lead",
      start: "Jul 2018",
      end: "Jul 2021",
      description:
        "Ran the media bar and restaurant throughout The Championships, serving press, players and high-profile guests. Managed staffing and shift rotas, placed and tracked orders, controlled stock, and kept service moving through peak periods. Trained new starters and handled guest requests directly in a fast-paced, high-volume environment.",
    },
  ],
  skills: [
    "Collaborative",
    "Reliable",
    "Team Leadership",
    "Customer Service",
    "Communication",
    "Working Under Pressure",
    "Attention to Detail",
  ],
  projects: [],
};
