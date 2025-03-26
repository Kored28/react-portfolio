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
  wordpress,
  nextjs,

  // Experience
  carpenterlogo,
  aveon,
  hng,

  //projects
  bima,
  flash,
  fodsgym,
  youtube,
  crypto,
  van,
  apple,
  chatbot,
  xclone,
  bukastore,
  bukaseller,
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
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "NextJS Developer",
    icon: mobile,
  },
  {
    title: "WordPress Developer",
    icon: web,
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "WordPress",
    icon: wordpress,
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
{
    title: "Frontend Developer Intern",
    company_name: "HNG",
    icon: hng,
    iconBg: "#E6DEDD",
    date: "July 2024 - August 2024",
    points: [
    "Achieved finalist status in the HNG Internship 11 (2024) program, ranking in the top 523 out of 24,123 participants.",
    "Achieved promotion from Stage 0 to Stage 10 by demonstrating consistent growth, technical expertise, and delivering key features throughout all phases of project development.",
    "Acquired practical expertise in Front-End Development, with a focus on technologies like Next.js.",
    "Collaborated with cross-functional teams to design and implement scalable and responsive user interfaces.",
    "Implemented the design from Figma, translating UI/UX concepts into fully functional and responsive front-end components.",
    ],
},

];


const projects = [
  {
    name: "Buka Seller's Dashboard",
    description:
    "This is a web appliaction that allows local food sellers put their products online ",
    tags: [
    {
      name: "Next Js",
      color: "blue-text-gradient",
    },
    {
      name: "ShadCN UI",
      color: "green-text-gradient",
    },
    {
      name: "Tailwind CSS",
      color: "pink-text-gradient",
    },
    ],
    image: bukaseller,
    source_code_link: "https://github.com/Kored28/buko-seller-dashboard",
    netlify_code_link: "https://buko-seller-dashboard.vercel.app/",
  },
  {
    name: "Buka Store",
    description:
    "This is a web application where customers can buy food from local sellers",
    tags: [
    {
      name: "Next Js",
      color: "blue-text-gradient",
    },
    {
      name: "Zustand",
      color: "green-text-gradient",
    },
    {
      name: "Tailwind CSS",
      color: "pink-text-gradient",
    },
    ],
    image: bukastore,
    source_code_link: "https://github.com/Kored28/buko-store",
    netlify_code_link: "https://buko-store.vercel.app/",
  },
  {
    name: "X-Clone",
    description:
    "A social media app",
    tags: [
    {
      name: "Next Js",
      color: "blue-text-gradient",
    },
    {
      name: "zustand",
      color: "green-text-gradient",
    },
    {
      name: "Tailwind CSS",
      color: "pink-text-gradient",
    },
    ],
    image: xclone,
    source_code_link: "https://github.com/Kored28/Nextjs-X",
    netlify_code_link: "https://nextjs-x-gamma.vercel.app/",
  },
  {
    name: "Chatbot",
    description:
    "This is Chatbot app that uses AI to chat with you ",
    tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "Express",
      color: "green-text-gradient",
    },
    {
      name: "Node",
      color: "pink-text-gradient",
    },
    ],
    image: chatbot,
    source_code_link: "https://github.com/Kored28/react-gemini-chatbot",
    netlify_code_link: "https://react-gemini-chatbot-frontend.vercel.app/",
  },
  {
    name: "Apple Home",
    description:
    "This is an e-commerce site where you can buy apple gadgets",
    tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "Tailwind CSS",
      color: "green-text-gradient",
    },
    {
      name: "Redux",
      color: "pink-text-gradient",
    },
    ],
    image: apple,
    source_code_link: "https://github.com/Kored28/vanLife",
    netlify_code_link: "https://apple-shop-home.netlify.app/",
  },
  {
    name: "VanLife",
    description:
    "A specialized automobile dealership website for purchasing vans and commercial vehicles.",
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
{
  name: "Fods-Gym",
  description:
  "A comprehensive platform dedicated to home workouts, designed to provide users with a wide range of exercises.",
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
  "a YouTube clone website designed to provide users with a platform to share, and view video content.",
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

];

export { services, technologies, experiences, projects };