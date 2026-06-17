import type { ProjectType } from "../types/projectType";
import FigmaIcon from "../components/portfolio/icons/Stack/FigmaIcon.astro";
import EyeIcon from "../components/portfolio/icons/EyeIcon.astro";

const data: ProjectType[] = [
  {
    title: "Archit (Productive App)",
    status: "building",
    srcImg: "/projects/project-archit.png",
    description: `This is a community app that allow the users to share challenges about any topic, know new people, track their time-work... it's an environment for people can reach their goals`,
    link: {
      view: {
        icon: FigmaIcon,
        title: "Figma Design",
        href: "https://www.figma.com/design/FQ8MnQH6LaXT5WSTphUHjT/Archit?node-id=0-1&t=rcTd4OLT7H4PB3C9-1"
      }
    }
  },
  {
    title: "ComLang (Language App)",
    status: "building",
    srcImg: "/projects/project-app-languages.png",
    description: `ComLang allow you to increase your vocabulary in any language by tracking the new word you found across, allow you to save your favorite material to review constantly, see the stadistic about your progress and the posibility the reading and listening content at the same time`,
    link: {
      view: {
        icon: FigmaIcon,
        title: "Figma Design",
        href: "https://www.figma.com/design/j6NhW3EjNLkiEPZ4Scqqmb/AppLanguages?node-id=0-1&t=rcTd4OLT7H4PB3C9-1"
      },
    },
  },
  {
    title: "Salem Taxi LLC",
    status: "production",
    srcImg: "/projects/project-salem-taxi.png",
    description: `Taxi Services Company. Through the site, their clients were able to learn about their services and get in touch with the company`,
    link: {
      view: {
        icon: EyeIcon,
        title: "Preview",
        href: "https://www.salem-taxi.com"
      },
    }
  },
  {
    status: "production",
    link: {
      view: {
        icon: EyeIcon,
        title: "Preview",
        href: "https://www.aortegaconstruction.com"
      },
    },
    srcImg: "/projects/project-a-ortega-construction.png",
    title: "A Ortega Construction",
    description: `Construction Company Landing Page. Through the site, their clients were able to learn about their services and get in touch with the company`,
  },
  {
    status: "production",
    link: {
      view: {
        icon: EyeIcon,
        title: "Preview",
        href: "https://www.rocknrollblunts.com"
      },
    },
    srcImg: "/projects/project-rock-n-roll.png",
    title: "Rock N` Roll Blunts",
    description: `Company about Cannabis Sales. Through the site, their clients were able to learn about their services and get in touch with the company`,
  },
  {
    status: "production",
    link: {
      view: {
        icon: EyeIcon,
        title: "Preview",
        href: "https://www.premezcladosdehormigonfjp.com"
      },
    },
    srcImg: "/projects/project-fjp.jpg",
    title: "Premezclados de hormigon FJP",
    description: `Construction Company. Through the site, their clients were able to learn about their services and get in touch with the company`,
  },
  {
    status: "production",
    link: {
      view: {
        icon: EyeIcon,
        title: "Preview",
        href: "https://www.americabtaxisalem.com/"
      },
    },
    srcImg: "/projects/project-americab-taxi-salem.png",
    title: "Americab Taxi Salem",
    description: `Taxi Services Company. Through the site, their clients were able to learn about their services and get in touch with the company`,
  },
  {
    status: "disabled",
    srcImg: "/projects/project-wm-alarm-systems.webp",
    title: "WM Alarm System",
    description: "El WM Alarm System es una solución de seguridad avanzada de grado industrial diseñada para ofrecer protección híbrida y conectividad total",
    link: {
      view: {
        icon: EyeIcon,
        title: "Preview",
        href: "https://wmalarmsystem-com-lake.vercel.app"
      }
    }
  },
  {
    status: "disabled",
    link: {
      view: {
        icon: EyeIcon,
        title: "Preview",
        href: "https://lawrance-collision-center-inc-pi.vercel.app"
      },
    },
    srcImg: "/projects/project-lawrance-collision-center.png",
    title: "Lawrance Collision Center INC",
    description: `Services about Repair Vehicules. Through the site, their clients were able to learn about their services and get in touch with the company`,
  },
  // INCOMPLETE
  /*{
    title: "Gaby's Crepes & Waffles",
    srcImg: "/projects/project-gabys-crepes-&-waffles.webp",
    description: `Gaby's Crepes & Waffles is a shop of crepes and waffles`,
    status: "incomplete",
    link: {
      view: {
        icon: EyeIcon,
        title: "Preview",
        href: "https://gaby-shop-project.vercel.app"
      }
    }
  },*/
  {
    status: "design",
    srcImg: "/projects/project-banco-santiago-sa.webp",
    title: "Banco Santiago SA",
    description: `Check out my project for BancoSantiagoSA! Created this during my time at Cincinnatus Institute`,
    link: {
      view: {
        icon: EyeIcon,
        title: "Preview",
        href: "https://banco-santiago-sa.vercel.app"
      }
    }
  },
  {
    status: "design",
    srcImg: "/projects/project-kool-pro.webp",
    title: "Kool Pro",
    description: `Kool Pro is a boutique e-commerce platform tailored for high-performance culinary professionals`,
    link: {
      view: {
        icon: FigmaIcon,
        title: "Figma Design",
        href: "https://www.figma.com/design/9sJygCgtBRb4qaQoE3sXmv/Kool-Pro-Shop?node-id=0-1&t=VUnRw9gnGkywH3Pg-1"
      }
    }
  },
  {
    status: "design",
    srcImg: "/projects/project-my-sweet-home-day.webp",
    title: "My Sweet Home Day Care",
    description: `This page serves as a comprehensive resource for families seeking high-quality, licensed home-based childcare`,
    link: {
      view: {
        icon: FigmaIcon,
        title: "Figma Design",
        href: "https://www.figma.com/design/GOHTydMEUbn2BD8ndpaT1w/My-sweet-home-day-care-Karina?node-id=0-1&t=i2a5JVcRkeWolD3o-1",
      }
    },
  }
];

export default data;