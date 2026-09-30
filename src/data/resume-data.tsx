import { ConsultlyLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import type { ResumeData } from "@/components/resume";

const cvBasePath =
  process.env.GITHUB_ACTIONS === "true" || process.env.NODE_ENV === "production"
    ? "/cv-section"
    : "";

// Motion design CV — kept aligned with seanderham.com/info (MotionCv).
export const RESUME_DATA: ResumeData = {
  name: "Sean Derham",
  initials: "SD",
  location: "London · Available immediately",
  locationLink: "https://seanderham.com/",
  about: "Motion Designer",
  summary:
    "Motion designer with four years delivering branded and educational video for clients, from concept through shoot and final delivery. I build motion graphics and 3D in After Effects and Cinema 4D, edit and grade in Premiere Pro and DaVinci Resolve, and can take a piece from green screen capture to a finished composite. Comfortable leading small-crew shoots when the work needs it, then owning the cut, graphics and client amends through to export. Founder of keymotion.ai, an AI motion graphics editor built for editors.",
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
        url: "https://www.linkedin.com/in/seanderham/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Sussex",
      degree: "First Class Honours, Product Design",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Keymotion.ai",
      link: "https://www.keymotion.ai/",
      badges: ["Founder"],
      title: "Founder",
      logo: ConsultlyLogo,
      start: "Jul 2026",
      end: null,
      bullets: [
        "Building keymotion.ai, an in-browser editor for AI motion graphics made for editors and motion designers",
        "Designed the product end to end: prompt or reference in, AI draft, then finish motion in a real keyframe editor before export",
        "Shipped templates across kinetic type, lower thirds, logo reveals, transitions and social graphics for day-to-day edit workflows",
        "Built the full stack myself: browser motion editor, AI generation, project files for After Effects, billing and credits",
      ],
    },
    {
      company: "The Adare Collection",
      link: "https://theadarecollection.com/",
      badges: ["Remote"],
      title: "Digital Designer",
      logo: ConsultlyLogo,
      start: "Mar 2025",
      end: null,
      bullets: [
        "Designed and built the company website from scratch, including layout, UI and interactive property maps and virtual tours",
        "Create and refine digital assets for the live site, keeping visual design consistent across pages and features",
        "Work with the team on new features end to end, from concept and design through to launch on deadline",
        "Use AI-assisted workflows to speed up design and delivery",
      ],
    },
    {
      company: "Truth Creative",
      link: "https://www.truth-creative.co.uk/",
      badges: ["Contract"],
      title: "Motion Designer & Videographer",
      logo: ConsultlyLogo,
      start: "Jun 2025",
      end: "Feb 2026",
      bullets: [
        "Edited raw footage to final delivery: multicam sync, cut to script and colour grade",
        "Keyed and composited green screen footage and built motion graphics into the final edits",
        "Ran client review rounds and turned around amends to deadline",
        "Led small-crew branded shoots at client sites across the UK, owning the day from setup through wrap",
        "Set up lighting, camera and audio for client interviews, green screen capture and multicam shoots",
        "Conducted client interviews on camera and refined the script on shoot day",
      ],
    },
    {
      company: "Box Bear",
      link: "https://boxbear.co.uk/",
      badges: ["In-house studio"],
      title: "Motion Graphic Designer & Production Assistant",
      logo: ConsultlyLogo,
      start: "May 2022",
      end: "May 2024",
      bullets: [
        "Edited footage into informative videos shaped to each client's brief, from talking-head interviews to pieces led by 3D graphics",
        "Designed motion graphics in After Effects and 3D assets in Cinema 4D, assembled in Premiere Pro",
        "Responsible for organisation of media and versioning on each project through to final export",
        "Planned and filmed interviews with healthcare professionals for pharmaceutical clients",
        "Set up the in-house studio for shoots and live sessions, including cameras, lighting and audio",
        "Ran the multicamera and live-stream kit for virtual reality meetings, with healthcare professionals joining live from around the world",
      ],
    },
    {
      company: "Freelance",
      link: "https://www.linkedin.com/in/seanderham/",
      badges: ["Alongside employed roles"],
      title: "Motion Designer & Editor",
      logo: ConsultlyLogo,
      start: "Jun 2021",
      end: "May 2025",
      bullets: [
        "Created motion graphic and typographic animations for internal meetings and events",
        "Edited multicamera interviews and motion content for clients across sectors",
        "Took projects from offline edit through colour and graphics to finished deliverables",
      ],
    },
  ],
  skills: [
    "After Effects, Cinema 4D and Blender: motion graphics, 3D and compositing",
    "Premiere Pro and DaVinci Resolve: edit, multicam sync, colour grade and delivery",
    "Camera, lighting and audio for interviews, multicam and green screen",
    "Unreal Engine and VR/AR asset prep alongside traditional motion workflows",
    "Client reviews, media organisation, versioning and on-time delivery",
  ],
  personalProjects:
    "I shoot, edit and grade short films on my own Sony FX3, and keep building motion and 3D skills through personal work alongside client delivery.",
  projects: [],
};
