import {
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    fs_academy,
    dhs,
    amazonclone,
    flavorburst,
    watchify,
    threejs,
    typescript,
    nextjs,
    materialui,
    supabase,
    postgresql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "FullStack Developer",
      icon: creator,
    }
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Materiaul UI",
      icon: materialui,
    },
    {
      name: "Supabase",
      icon: supabase,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
  ];
  
  const experiences = [
    {
      title: "Epic Clin Doc Analyst",
      company_name: "",
      icon: dhs,
      iconBg: "#E6DEDD",
      date: "Dec 2019 - Present",
      points: [
      ],
    },
    {
      title: "FullStack Academy Graduate",
      company_name: "FullStack Academy",
      icon: fs_academy,
      iconBg: "#E6DEDD",
      date: "March 2023 - September 2023",
      points: [
        "Developed fullstack web applications using React.js, node.js and other related technologies.",
        "Collaborated with team members including product managers, designers,  and other developers to create high-quality products.",
        "Implemented responsive designs to ensure cross-browser and mobile compatibility.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Spike makes beautiful websites. I highly recommend him to future clients.",
      name: "Jeny Lee",
      designation: "CFO",
      company: "Acme Foundation",
      image: "https://randomuser.me/api/portraits/women/19.jpg",
    },
    {
      testimonial:
        "Spike built us a website that truly captures our company's vision.",
      name: "John Doe",
      designation: "CEO",
      company: "Ethyl Corp",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      testimonial:
        " Spike built us a great website, and now our stocks keep going up",
      name: "Liza Bets",
      designation: "CMO",
      company: "Foo Stock",
      image: "https://randomuser.me/api/portraits/women/13.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Amazon Clone",
      description:
        "Web-based ecommerce shop that allows users to search and buy products",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: amazonclone,
      live_site_link: "https://spike-amazon-clone.vercel.app/",
      source_code_link: "https://github.com/spikey2023/amazone-clone",
    },
    {
      name: "WATCHIFY",
      description:
        "A web app that provides movie recommendations to users based on movie popularity and personalized user ratings.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: watchify,
      live_site_link: "https://watchify-gqtf.onrender.com/",
      source_code_link: "https://github.com/spikey2023/watchify-updated",
    },
    {
      name: "FlavorBurst Burgers",
      description:
        " A food ordering app that streamlines the process of selecting and customizing gourmet burgers from a menu.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: flavorburst,
      source_code_link: "https://github.com/spikey2023/food-ordering-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };