import {
  mobile,
  backend,
  creator,
  web,
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
  camera,
  meta,
  starbucks,
  tesla,
  shopify,
  pharma01,
  meetx,
  zenzone,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
  {
    name: "camera",
    icon: camera,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Zenzone",
    icon: starbucks,
    iconBg: "#383E56",
    date: "octuber 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Web Developer",
    company_name: "Pharmax",
    icon: shopify,
    iconBg: "#383E56",
    date: "December 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "GuRePe",
    icon: shopify,
    iconBg: "#383E56",
    date: "December 2022",
    points: [
      "Our wedding guest website stands as a testament to personalized celebration and seamless event planning. Crafted with care and attention to detail, this website offers a unique digital experience for our guests, ensuring they feel warmly welcomed and well-informed about the upcoming festivities.",
      "As the developer and designer behind this project, I aimed to create a platform that not only showcases our love story but also facilitates seamless communication, RSVP management, and sharing of important event details.",
      "It's more than just a website; it's a digital extension of our joy and excitement, bringing our loved ones closer together as we embark on this beautiful journey.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as some professional websites but Tanay helped me in creating one.",
    name: "Varun",
    designation: "Student",
    company: "Chandigarh University",
    image: "https://i.ibb.co/9WKh9vT/varunl.jpg",
  },
  {
    testimonial:
      "Tanay helped me a lot in developing our product for SIH-2023 ",
    name: "Amit",
    designation: "Student",
    company: "Chandigarh University",
    image: "https://i.ibb.co/DQBCXXp/amitl.jpg",
  },
  {
    testimonial:
      "Hi and thankyou for  developing a portfolio website for my use",
    name: "Anshuman",
    designation: "Student",
    company: "Chandigarh University",
    image: "https://i.ibb.co/fXHSqkK/anshumanl.jpg",
  },
];

const projects = [
  {
    name: "MeetX",
    description:
      "I have developed an innovative online video conferencing platform equipped with cutting-edge features to enhance communication and collaboration. This robust platform seamlessly integrates advanced functionalities, including screen sharing, one-on-one meetings, and group calls. By prioritizing user-friendly design and optimal performance, our platform provides a sophisticated and efficient solution for virtual meetings, fostering seamless interaction and collaboration among users",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Zegocloud",
        color: "blue-text-gradient",
      },
    ],
    image: meetx,
    source_code_Link:
      "https://github.com/TANAYCHAKRABORTY5/MEETXZ_videoconference/tree/master",
  },
  {
    name: "RxPro",
    description:
      "Welcome to RxPro, a leading online platform dedicated to facilitating the seamless purchase of pharmaceuticals. Our user-friendly website is designed to provide customers with a convenient and secure environment to procure essential medicines. Explore our extensive range of high-quality pharmaceutical products, and experience the ease of acquiring your prescribed medications from the comfort of your home. At RxPro, we prioritize your well-being and strive to enhance your healthcare experience through reliable and efficient online pharmacy services.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: pharma01,
    source_code_Link: "https://github.com/TANAYCHAKRABORTY5",
  },
  {
    name: "ZenZone",
    description:
      "Spearheaded the development of a cuttng-edge mental and physical wellbeing website leveraging React, JavaScript, and machine learning algorithms. Significantly enhanced user engagement by implementing personalized health recommendations, resulting in a 35% increase in average user session duration and a 20% decrease in bounce rate.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: zenzone,
    source_code_Link: "https://github.com/TANAYCHAKRABORTY5/ZenZone/tree/Tanay",
  },
];

export { services, technologies, experiences, testimonials, projects };
