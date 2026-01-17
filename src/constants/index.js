import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    nextjs,
    nodejs,
    react,
    linkedin,
    twitter,
    arrow,
    contact,
    soundon,
    soundoff,
    linux,
    cprogramming,
    python,
     instagram,
    facebook,
    youtube
} from "../assets/icons";

/* ------------------------------------ */
/*               SKILLS                 */
/* ------------------------------------ */
export const skills = [
  { imageUrl: html, name: "HTML", type: "Frontend" },
  { imageUrl: css, name: "CSS", type: "Frontend" },
  { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
  { imageUrl: react, name: "React.js", type: "Frontend" },
  { imageUrl: nodejs, name: "Node.js", type: "Backend" },
  { imageUrl: express, name: "Express.js", type: "Backend" },
  { imageUrl: mongodb, name: "MongoDB", type: "Database" },
  { imageUrl: git, name: "Git", type: "Version Control" },
  { imageUrl: github, name: "GitHub", type: "Version Control" },
  { imageUrl: python, name: "Python", type: "Version Control" }, 
  { imageUrl: cprogramming, name: "CProgramming", type: "Version Control" }, 
  { imageUrl: linux, name: "linux", type: "Version Control" } 
];

/* ------------------------------------ */
/*             EXPERIENCE                */
/* ------------------------------------ */
export const experiences = [
 
  // WORKSHOP 1
  {
    title: "Workshop - Advanced Excel for Manufacturing Growth",
    company_name: "AI Labs",
    date: "2025",
    certificateUrl: "/certificates/ai-labs-excel.jpg",
    points: [
      "Learned advanced Excel formulas, pivot tables, and data automation.",
      "Explored KPI-based dashboards for manufacturing-related analytics."
    ]
  },

  // WORKSHOP 2
  {
    title: "Workshop - Linux Based C with DSA",
    company_name: "AI Labs",
    date: "2025",
    certificateUrl: "/certificates/ai-labs-linux-c-dsa.jpg",
    points: [
      "Strengthened core C programming concepts in a Linux environment.",
      "Practiced Data Structures & Algorithms including arrays, stacks, queues, and linked lists."
    ]
  },

  // COURSE 1
  {
    title: "Cloud Computing (Certified)",
    company_name: "Udemy",
    iconBg: "#a2d2ff",
    date: "2024",
    certificateUrl: "/certificates/udemy-cloud.jpg",
    points: [
      "Learned fundamentals of cloud architecture and virtualization.",
      "Completed labs related to AWS, deployment, and service models."
    ]
  },

  // COURSE 2
  {
    title: "Blockchain Fundamentals (Certified)",
    company_name: "Infosys Springboard",
    date: "2025",
    certificateUrl: "/certificates/infosys-blockchain.jpg",
    points: [
      "Studied hashing, decentralization, consensus models, and smart contracts.",
      "Explored real-world applications such as crypto and supply chain solutions."
    ]
  },
   {
    title: "Internship - Linux for Present & Future",
    company_name: "WEBEL",
    date: "2025",
    certificateUrl: "/certificates/webel-linux.jpg",
    points: [
      "Completed hands-on training focused on essential Linux commands.",
      "Gained practical experience in file systems, permissions, and process management.",
      "Worked in a real-world Linux environment aligned with industry workflows."
    ]
  }
];

/* ------------------------------------ */
/*             SOCIAL LINKS              */
/* ------------------------------------ */
export const socialLinks = [
  { name: "Contact", iconUrl: contact, link: "mailto:satyabratapal50@gmail.com" },
  { name: "GitHub", iconUrl: github, link: "https://github.com/dikimanu" },
  { name: "LinkedIn", iconUrl: linkedin, link: "https://www.linkedin.com/in/satyabrata-pal-03b5a7373" },
{ name: "Instagram", iconUrl: instagram, link: "https://www.instagram.com/_satyabrata.pal" },
{ name: "Facebook", iconUrl: facebook, link: "https://www.facebook.com/satyabrata.pal.5264" },
{ name: "YouTube", iconUrl: youtube, link: "https://www.youtube.com/channel/UCk9gczK0GAeSZXUA3st5auw" }
];

/* ------------------------------------ */
/*             PROJECTS                  */
/* ------------------------------------ */
export const projects = [
   {
    name: "Social Media App",
    description: "This is a fully functional demo application built using the MERN stack, inspired by modern social media platforms. It implements secure authentication using Clerk for user sign-up and sign-in, and utilizes MongoDB for efficient storage of user profiles, feeds, and stories. The project demonstrates scalable architecture, RESTful APIs, and modern frontend practices.",
    link: "https://social-media-web-eta.vercel.app",
    youtubeUrl: "https://www.youtube.com/embed/kZNsS32-HUY"
  },
  {
    name: "File Encryption Decryption",
    description: "Designed and developed a secure file encryption and decryption application using Python with a Tkinter-based GUI. Implemented AES-GCM for authenticated encryption, Fernet for secure key management, and SHA-256 hashing to ensure data integrity and security.",
    link: "https://file-enc-dec.vercel.app/",
    youtubeUrl: "https://www.youtube.com/embed/qyDxAq-2920"
  },
  {
    name: "Island 3D Portfolio",
    description: "Developed a 3D personal portfolio website using React.js. The site features a clean, modern design with gradient color schemes, custom 3D models, and a visually engaging yet lightweight static architecture.",
    link: "https://island-portfolio-delta.vercel.app/",
    youtubeUrl: "https://www.youtube.com/embed/3tKkdg-VLYc"
  },
  {
    name: "Full Stack Food Delivery Website",
    description: "Developed a full-stack food delivery application using the MERN stack, consisting of three modules: frontend, admin, and backend. The frontend enables users to authenticate, browse menus, and add food items to the cart, while the admin panel provides tools to manage users, food items, and platform content. The backend handles APIs, authentication, and data management.",
    link: "https://food-delivery-ruddy-five-32.vercel.app/",
    youtubeUrl: "https://www.youtube.com/embed/UsKqKB78z-U"
  },
  {
    name: "Portfolio",
    description: "Built a personal portfolio website using Next.js. The project is a simple, static site featuring a modern, clean design with a few interactive sections to enhance user engagement and overall visual appeal.",
    link: "https://portfolio-821i.vercel.app/",
    youtubeUrl: "https://www.youtube.com/embed/5mnanvJGPvw"
  },
  {
    name: "Snake Mania",
    description: "Developed a simple static game using HTML, CSS, and JavaScript, featuring an intuitive and visually engaging user interface designed for an enjoyable gameplay experience.",
    link: "https://snake-mania-black.vercel.app/",
    youtubeUrl: "https://www.youtube.com/embed/lL9KNIwbde8"
  },
  {
    name: "Play Ludo Try Luck",
    description: "Developed a browser-based multiplayer game using HTML, CSS, and JavaScript that supports simultaneous gameplay for up to four players.",
    link: "https://ludo-sigma-ten.vercel.app/",
    youtubeUrl: "https://www.youtube.com/embed/Q0iQlN1Tx64"
  },
  {
    name: "Try Math Problems - Play Math Quiz",
    description: "Developed a browser-based math logic quiz application focused on rapid mental calculations using HTML, CSS, and JavaScript.",
    link: "https://math-quiz-sage.vercel.app/",
    youtubeUrl: "https://www.youtube.com/embed/31YzhXHZiSo"
  }
];