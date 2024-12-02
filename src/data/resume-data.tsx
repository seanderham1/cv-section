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
  locationLink: "https://www.google.com/maps/place/London",
  about:
    "Detail-oriented Motion Graphic Designer dedicated to creating high-quality animations and virtual experiences.",
  summary:
    "As a Motion Graphic Designer, I am driven by taking projects from concept to launch. I excel in collaborative team settings and deliver high-quality work independently. I work primarily with Adobe Suite, Blender, Cinema 4D, JS/CSS and Unreal Engine. I have four years of experience working in person and remotely with companies worldwide.",
  avatarUrl: "https://raw.githubusercontent.com/seanderham1/cv-section/refs/heads/main/src/images/logos/profile-cv.webp",
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
      "Delivered 3D animation projects for pharmaceuticals, EV, and consumer goods companies with continuous input across all stages, from development to output. Handled pre-production planning, on-site event filming, and post-production editing for multi-camera video projects and live streaming. Designed and optimised 3D assets for VR and AR platforms. Technologies: Premiere Pro, After Effects, Photoshop, Cinema 4D, Blender",
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
        "Independently source and manage freelance projects, building strong client relationships through effective communication and attention to detail. Execute company rebrands and generate relevant brand guidelines. Create 2D logo animations and 3D motion graphics for global clients. Technologies: After Effects, Blender, DaVinci Resolve",
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
        "Worked with designers to develop sustainable water bottle concepts for Polar Gear. Focused on materials, design, and manufacturing processes. Created illustrations and CAD models to reduce the reliance on physical prototypes. Technologies: SolidWorks, Illustrator",
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
        "Assessed how McLaren Applied technology could be integrated into partner products to drive innovation. Presented solutions during weekly meetings. Gathered insights and analytics and delivered findings with the Marketing Director and team.",
    },
  ],
  skills: [
    "Adobe Suite",
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
        "Blender",
        "Premiere Pro",
        "iClone",
        "Character Creator",
      ],
      description:
        "Animation for ONDEXXYA, illustrating its solution for life-threatening bleeding",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Ubitricity",
      techStack: [
        "Cinema 4D",
        "Premiere Pro",
        "After Effects",
      ],
      description:
        "Video showcasing Ubitricity’s innovative urban EV charging solutions",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Evosite",
      techStack: [
        "Blender",
        "Premiere Pro",
        "After Effects",
      ],
      description: "Dynamic animation for Evo Agency’s brand overhaul, highlighting digital solutions",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "dstillery",
      techStack: ["After Effects", "Illustrator"],
      description:
        "Logo animation reinforcing Dstillery's AI-powered audience targeting",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Contrast Security",
      techStack: ["Blender", "Premiere Pro", "After Effects"],
      description:
        "Video featuring a senior team to highlight security innovations",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Varietal",
      techStack: ["Personal Project", "Blender"],
      description:
        "Animated journey of the Varietal armchair, showcasing modern design and craftsmanship",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
  ],
} as const;
