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

// The resume data object
export const RESUME_DATA = {
  name: "Sean Derham",
  initials: "SD",
  location: "seanderham.com",
  locationLink: "https://seanderham.com/",
  about:
    "Detail-oriented Motion Graphic Designer dedicated to creating high-quality animations and virtual experiences.",
  summary:
    "Motion Graphic Designer with four years of experience working both in studio and remotely with global clients. Specialist in healthcare communications and taking projects from concept to launch. I work primarily with Adobe Suite, Blender, Cinema 4D, JS/CSS and Unreal Engine.",
  avatarUrl: "https://raw.githubusercontent.com/seanderham1/cv-section/refs/heads/main/src/images/logos/profile.jpg",
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
    company: "Truth Creative",
    link: "https://www.truth-creative.co.uk/",
    badges: ["Contract"],
    title: "Motion Designer",
    logo: ConsultlyLogo,
    start: "Jun 2025",
    end: null,
    description:
      "Creating motion-led content for social platforms (TikTok and Instagram), including editing short-form video ads and animations. Responsible for filming on-site, managing raw multicam footage. Crafting high-end product visualisations using Cinema 4D and Redshift. Technologies: After Effects, Premiere Pro, Cinema 4D, Redshift",
  },
  {
    company: "Freelance",
    link: "https://www.linkedin.com/in/seanderham/",
    badges: ["Remote"],
    title: "Motion Designer",
    logo: ConsultlyLogo,
    start: "Mar 2025",
    end: "May 2025",
    description:
      "Creating motion graphic and typographic animations for internal meetings and events. Working directly with clients across sectors to deliver focused, high-quality motion design. Technologies: Premiere Pro, After Effects, Cinema 4D",
  },
  {
    company: "Travelling",
    link: "https://boxbear.co.uk/",
    badges: [],
    title: "Career Break",
    logo: ConsultlyLogo,
    start: "Jun 2024",
    end: "Mar 2025",
    description:
      "Asia, Oceania.",
  },
  {
    company: "Box Bear",
    link: "https://boxbear.co.uk/",
    badges: [],
    title: "Motion Graphic Designer",
    logo: ConsultlyLogo,
    start: "May 2022",
    end: "May 2024",
    description:
      "Delivered 3D animation projects for pharmaceuticals, EV, and consumer goods companies with continuous input across all stages, from development to output. Handled pre-production planning, on-site event filming, and post-production editing for multi-camera video projects and live streaming. Designed and optimised 3D assets for VR and AR platforms. Technologies: Premiere Pro, After Effects, Photoshop, Cinema 4D, Blender",
  },
    {
      company: "Freelance",
      link: "https://www.linkedin.com/in/seanderham/",
      badges: ["Remote"],
      title: "2D & 3D Designer",
      logo: ParabolLogo,
      start: "Jun 2021",
      end: "Apr 2022",
      description:
        "Independently source and manage freelance projects, building strong client relationships through effective communication and attention to detail. Execute company rebrands and generate relevant brand guidelines. Create 2D logo animations and 3D motion graphics for global clients. Technologies: After Effects, Blender, DaVinci Resolve",
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
        "Adobe Suite",
        "iClone",
        "Character Creator",
      ],
      description:
        "Animation for ONDEXXYA, illustrating its solution for life-threatening bleeding",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://seanderham.com/astrazeneca",
      },
    },
    {
      title: "Ubitricity",
      techStack: [
        "Cinema 4D",
        "Adobe Suite",
        "After Effects",
      ],
      description:
        "Video showcasing Ubitricity’s innovative urban EV charging solutions",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://seanderham.com/ubitricity",
      },
    },
    {
      title: "Evo Agency",
      techStack: [
        "Blender",
        "Adobe Suite",
        "After Effects",
      ],
      description: "Dynamic animation for Evo Agency’s brand overhaul, highlighting digital solutions",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://seanderham.com/evoagency",
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
        href: "https://seanderham.com/dstillery",
      },
    },
    {
      title: "Contrast Security",
      techStack: ["Blender", "Adobe Suite", "After Effects"],
      description:
        "Video featuring a senior team to highlight security innovations",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://seanderham.com/contrastsecurity",
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
        href: "https://seanderham.com/varietal",
      },
    },
  ],
} as const;

// postMessage functionality to dynamically adjust iframe height
if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    const iframe = document.querySelector('iframe.cv-iframe') as HTMLIFrameElement; // Cast to HTMLIFrameElement
    if (iframe) {
      iframe.onload = () => {
        const height = iframe.contentWindow?.document.body.scrollHeight;
        if (height) {
          window.parent.postMessage({ type: "iframeHeight", height }, "*");
        }
      };
    }
  });
}


// Exporting ResumeData component
const ResumeData = () => {
  return (
    <div>
      {/* Your content that renders the resume data */}
      {/* Example: */}
      <h1>{RESUME_DATA.name}</h1>
      <p>{RESUME_DATA.about}</p>
      {/* Continue rendering other data... */}
    </div>
  );
};

export default ResumeData;
