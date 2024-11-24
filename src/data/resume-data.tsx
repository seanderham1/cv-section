import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sean Derham",
  initials: "SD",
  location: "London, England",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Detail-oriented Motion Graphic Designer dedicated to creating high-quality animations and virtual experiences.",
  summary:
    "As a Motion Graphic Designer, I specialize in taking projects from concept to launch. I excel in collaborative team settings and deliver high-quality work independently. Currently, I work primarily with Adobe, Cinema 4D, Blender, JS/CSS and Unreal Engine. I have 4 years of experience working in person and remotely with companies worldwide.",
  avatarUrl: "https://raw.githubusercontent.com/seanderham1/cv-section/refs/heads/main/src/images/logos/profile-cv.jpg",
  personalWebsiteUrl: "https://seanderham.com",
  contact: {
    email: "seanderham@hotmail.com",
    tel: "+447775692249",
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
      {
        name: "X",
        url: "https://twitter.com/seanderham",
        icon: XIcon,
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
    company: "Box Bear",
    link: "https://boxbear.co.uk/",
    badges: [],
    title: "Motion Graphic Designer",
    logo: ConsultlyLogo,
    start: "2022",
    end: "2024",
    description:
      "Delivered 3D animation projects for pharmaceuticals, EV and consumer goods companies, from concept development to final output. Designed and optimized 3D assets for seamless integration in VR and AR platforms. Handled pre-production planning, on-site event filming, and post-production editing for multi-camera video projects and livestreams. Technologies: Premiere Pro, After Effects, Photoshop, Cinema 4D, Blender",
  },
    {
      company: "Freelance",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "2D & 3D Designer",
      logo: ParabolLogo,
      start: "2021",
      end: null,
      description:
        "Independently managed freelance projects. Executed company rebrands and generated relevant brand guidelines. Created 2D logo animations and 3D motion graphics for global clients. Technologies: After Effects, Blender, DaVinci Resolve",
    },
    {
      company: "DNC UK Limited",
      link: "https://www.dnc-uk.com/",
      badges: [],
      title: "Product Designer",
      logo: ClevertechLogo,
      start: "2019",
      end: "2019",
      description:
        "Worked with designers to develop sustainable water bottle concepts for Polar Gear. Focused on materials, design, and manufacturing processes with an emphasis on environmental impact. Created illustrations and CAD models to reduce reliance on physical prototypes. Technologies: SolidWorks, Illustrator",
    },
    {
      company: "McLaren Applied",
      link: "https://mclarenapplied.com/",
      badges: [],
      title: "Design Intern",
      logo: JojoMobileLogo,
      start: "2018",
      end: "2018",
      description:
        "Assessed how McLaren Applied Technology could be integrated into partner products to enhance the brand. Presented design ideas and proof-of-concept solutions during weekly meetings. Shared final findings with the Marketing Director and team.",
    },
  ],
  skills: [
    "Adobe Creative Suite",
    "Blender",
    "Cinema 4D",
    "JS/CSS",
    "DaVinci Resolve",
    "Unreal Engine",
    "VR/AR",
  ],
  projects: [
    {
      title: "Astrazeneca",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Ubitricity",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Evosite",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "dstillery",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Contrast Security",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Varietal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
  ],
} as const;
