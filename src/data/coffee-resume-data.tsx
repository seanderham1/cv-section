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
    "Organised, people-focused team leader with three years of high-volume catering and hospitality experience.",
  summary:
    "Team leader with three years running food and beverage service at The Championships, Wimbledon, where I managed a team serving players, high-profile guests and staff across the site. Since then I have worked as a designer, and I am now looking to get back into a hands-on, customer-facing role. Calm under pressure, quick to learn, and reliable through long shifts and busy service.",
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
      roles: [
        {
          title: "Lead Web Designer",
          start: "Aug 2025",
          end: null,
          description:
            "Lead technical ownership of theadarecollection.com — interactive property maps, virtual tours, SEO with structured data, and ongoing deployment on Firebase Hosting. Technologies: React, TypeScript, Vite, Express, Tailwind CSS, Firebase",
        },
        {
          title: "Web Designer",
          start: "Mar 2025",
          end: "Jul 2025",
          description:
            "Built the luxury accommodation platform for Ryder Cup 2027 from the ground up — site framework, property catalogue, page templates, and enquiry foundations. Technologies: React, TypeScript, Vite, Tailwind CSS, Firebase",
        },
      ],
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
        "Delivered 3D animation projects for pharmaceuticals, EV, and consumer goods companies with continuous input across all stages, from development to output. Handled pre-production planning, on-site event filming, and post-production editing for multi-camera video projects and live streaming. Designed and optimised 3D assets for VR and AR platforms. Technologies: Premiere Pro, After Effects, Photoshop, Cinema 4D, Blender",
    },
    {
      company: "Wimbledon, Championships",
      link: "https://www.wimbledon.com/",
      badges: ["Team Lead"],
      title: "Catering & Hospitality Team Lead",
      start: "Jul 2018",
      end: "Jul 2021",
      description:
        "Led a front-of-house team delivering meals, tea and coffee service for players, high-profile guests and on-site staff throughout The Championships. Ran shift rotas and daily briefings, coordinated orders across multiple service points, and kept service on time through peak periods. Trained new starters, handled dietary requirements and individual client requests directly, and maintained stock, presentation and hygiene standards in a fast-paced environment.",
    },
  ],
  skills: [
    "Team Leadership",
    "Customer Service",
    "Staff Training",
    "Rota & Shift Planning",
    "Stock Management",
    "Communication",
    "Working Under Pressure",
  ],
  projects: [],
};
