import {
  mobile,
  backend,
  web,

  //Tech
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,

  // Experience
  carpenterlogo,
  aveon,

  //projects
  bima,
  flash,
  fodsgym,
  youtube,
  crypto,
  van,
} from "../assets";
  
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
];
  
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];
  
const experiences = [
{
  title: "Junior Web Developer",
  company_name: "The Carpenter's Church",
  icon: carpenterlogo,
  iconBg: "#383E56",
  date: "Jun 2022 - Oct 2022",
  points: [
  "Developing and maintaining web applications using Wordpress and other related technologies.",
  "Updated the website regularly in audio messages, photos, videos and checking the buying and selling of audio messages on the website.",
  "Implementing responsive design and ensuring cross-browser compatibility.",
  ],
},
{
    title: "IT Specialist intern",
    company_name: "Aveon Offshore Limited",
    icon: aveon,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Apr 2024",
    points: [
    "Developing and maintaining web applications using Wordpress and other related technologies.",
    "Expanding my React.JS knowledge",
    "Provide technical support to end-users, including troubleshooting hardware, software, and network issues.",
    "Monitor network performance and ensure the network is secure and operating efficiently.",
    "Evaluate, install, and maintain software applications and updates.",
    ],
},

];


const projects = [
{
  name: "Bima Store",
  description:
  "Web-based platform that allows users to search, and order selection of fashionable apparel, accessories, and footwear for men and women.",
  tags: [
  {
    name: "HTML",
    color: "blue-text-gradient",
  },
  {
    name: "CSS",
    color: "green-text-gradient",
  },
  {
    name: "JavaScript",
    color: "pink-text-gradient",
  },
  ],
  image: bima,
  source_code_link: "https://github.com/Kored28/Ecommerce",
  netlify_code_link: "https://bima-store.netlify.app/",
},
{
  name: "The Flash",
  description:
  "Web application that is designed to provide readers with up-to-date and insightful news coverage across various topics.",
  tags: [
  {
    name: "HTML",
    color: "blue-text-gradient",
  },
  {
    name: "CSS",
    color: "green-text-gradient",
  },
  {
    name: "JavaScript",
    color: "pink-text-gradient",
  },
  ],
  image: flash,
  source_code_link: "https://github.com/",
  netlify_code_link: "https://theflesh.netlify.app/",
},
{
  name: "Fods-Gym",
  description:
  "A comprehensive platform dedicated to home workouts, designed to provide users with a wide range of exercises, workout plans, and fitness resources that can be accessed anytime, anywhere.",
  tags: [
  {
    name: "React",
    color: "blue-text-gradient",
  },
  {
    name: "Restapi",
    color: "green-text-gradient",
  },
  {
    name: "CSS",
    color: "pink-text-gradient",
  },
  ],
  image: fodsgym,
  source_code_link: "https://github.com/Kored28/fods-gym",
  netlify_code_link: "https://theflesh.netlify.app/",
},
{
  name: "Youtube_Clone",
  description:
  "a YouTube clone website designed to provide users with a platform to share, and view video content. The site features a clean, modern interface with robust functionalities, similar to YouTube, including user channels, and video recommendations.",
  tags: [
  {
    name: "Typescript",
    color: "blue-text-gradient",
  },
  {
    name: "Restapi",
    color: "green-text-gradient",
  },
  {
    name: "CSS",
    color: "pink-text-gradient",
  },
  ],
  image: youtube,
  source_code_link: "https://github.com/Kored28/you-tube",
  netlify_code_link: "https://youtube-clonene.netlify.app/",
},
{
  name: "All Crypto",
  description:
  "A comprehensive cryptocurrency information Website designed to provide users with up-to-date news, market data, educational resources, and community interaction features.",
  tags: [
  {
    name: "React",
    color: "blue-text-gradient",
  },
  {
    name: "Restapi",
    color: "green-text-gradient",
  },
  {
    name: "CSS",
    color: "pink-text-gradient",
  },
  ],
  image: crypto,
  source_code_link: "https://github.com/Kored28/fods-gym",
  netlify_code_link: "https://allcryptos.netlify.app/",
},
{
  name: "VanLife",
  description:
  "A specialized automobile dealership website for mobile phones designed to provide detailed information and easy navigation for purchasing vans and commercial vehicles.",
  tags: [
  {
    name: "React",
    color: "blue-text-gradient",
  },
  {
    name: "React-Router",
    color: "green-text-gradient",
  },
  {
    name: "Tailwind CSS",
    color: "pink-text-gradient",
  },
  ],
  image: van,
  source_code_link: "https://github.com/Kored28/vanLife",
  netlify_code_link: "https://vanife.netlify.app/",
},
];

export { services, technologies, experiences, projects };