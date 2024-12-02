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
    // Other work experience...
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
    // Other projects...
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
