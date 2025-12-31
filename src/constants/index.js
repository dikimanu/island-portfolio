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
  { name: "Contact", iconUrl: contact, link: "/contact" },
  { name: "GitHub", iconUrl: github, link: "https://github.com/dikimanu" },
  { name: "LinkedIn", iconUrl: linkedin, link: "https://www.linkedin.com/in/satyabrata-pal-03b5a7373/" },
{ name: "Instagram", iconUrl: instagram, link: "https://www.instagram.com/_satyabrata.pal/?next=%2F" },
{ name: "Facebook", iconUrl: facebook, link: "https://www.facebook.com/satyabrata.pal.5264" },
{ name: "YouTube", iconUrl: youtube, link: "https://www.youtube.com/channel/UCk9gczK0GAeSZXUA3st5auw" }
];

/* ------------------------------------ */
/*             PROJECTS                  */
/* ------------------------------------ */
export const projects = [
  {
    name: "File Encryption Decryption",
    description: "Designed and implemented a secure file encryption and decryption system using Python with a Tkinter-based graphical interface. The application utilizes AES-GCM for authenticated encryption, Fernet for secure key management, and SHA-256 for hashing and data integrity verification.",
    link: "https://file-enc-dec.vercel.app/",
    youtubeUrl: "https://www.youtube.com/embed/qyDxAq-2920"
  },
  {
    name: "Island 3D Portfolio",
    description: "My first 3D portfolio made with React.js. Simple and static site but designed with gradient color combinations, created some 3D models. Modern and cool look.",
    link: "https://island-portfolio-delta.vercel.app/",
    youtubeUrl: "https://www.youtube.com/embed/3tKkdg-VLYc"
  },
  {
    name: "Full Stack Food Delivery Website",
    description: "Full stack food delivery site made with MERN. Three sections - frontend, admin and backend. Frontend allows users to login, add food items to cart, etc. Admin can manage users and items.",
    link: "https://food-delivery-ruddy-five-32.vercel.app/",
    youtubeUrl: "https://www.youtube.com/embed/UsKqKB78z-U"
  },
  {
    name: "Portfolio",
    description: "My first portfolio made with Next.js. Simple and static site with a few interactive sections. Modern and cool look.",
    link: "https://portfolio-821i.vercel.app/",
    youtubeUrl: "https://www.youtube.com/embed/5mnanvJGPvw"
  },
  {
    name: "Snake Mania",
    description: "A simple static game made with HTML, CSS & JavaScript. Fun to play with a cool interface.",
    link: "https://snake-mania-black.vercel.app/",
    youtubeUrl: "https://www.youtube.com/embed/lL9KNIwbde8"
  },
  {
    name: "Play Ludo Try Luck",
    description: "Created with HTML, CSS, and JavaScript. Four players can play simultaneously.",
    link: "https://ludo-sigma-ten.vercel.app/",
    youtubeUrl: "https://www.youtube.com/embed/Q0iQlN1Tx64"
  },
  {
    name: "Try Math Problems - Play Math Quiz",
    description: "Random math logic questions focused on fast calculations. Created with HTML, CSS, and JavaScript.",
    link: "https://math-quiz-sage.vercel.app/",
    youtubeUrl: "https://www.youtube.com/embed/31YzhXHZiSo"
  }
];