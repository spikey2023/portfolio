import {
    mobile,
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
    palestra,
    jobit,
    watchify,
    threejs,
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
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Epic Clin Doc Analyst",
      company_name: "Deaconess Health System",
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
      name: "Palestra Attire",
      description:
        "Web-based ecommerce shop that allows users to buy fitness related products built in collaboration with peers",
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
      image: palestra,
      live_site_link: "https://palestraattire.onrender.com/",
      source_code_link: "https://github.com/Nothing-But-Genius/grace-shopper",
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
      name: "Food Delivery App",
      description:
        " A 3d product landing page to showcase the main product with call to action to turn impressions to purchases.",
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
      image: jobit,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };