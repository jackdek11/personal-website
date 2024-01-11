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
  digitata,
  git,
  figma,
  docker,
  cybermint,
  currencyassist,
  carrent,
  jobit,
  repl,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Fullstack Developer',
    icon: web,
    hoverText: 'blah',
  },
  {
    title: 'DevOps Engineer',
    icon: mobile,
    hoverText: 'blah',
  },
  {
    title: 'Backend Developer',
    icon: backend,
    hoverText: 'blah',
  },
  {
    title: 'Cloud Engineer',
    icon: creator,
    hoverText: 'blah',
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Backend developer',
    company_name: 'Cyber-Mint (Pty) Ltd',
    icon: cybermint,
    iconBg: '#383E56',
    date: 'March 2021 - September 2023',
    points: [
      "Solutions architected the Django Backend for the company's main project, Teamfu.",
      'Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Set up CI / CD, containerization, and orchestration for various projects.',
      'Participated in code reviews and provided constructive feedback to other developers.',
      'Contributed to Frontend development and design in VueJS.',
    ],
  },
  {
    title: 'Backend developer',
    company_name: 'Currency Assist (Pty) Ltd',
    icon: currencyassist,
    iconBg: '#383E56',
    date: 'Jan 2021 - Feb 2022',
    points: [
      "Built a django backend to aid in automating many of the bussiness's manual tasks.",
      'Collaborated with clients and team members to define and complete requiremented tasks.',
      'Addressed technical debt and broken legacy code.',
    ],
  },
  {
    title: 'Junior DevOps Engineer',
    company_name: 'Digitata (Pty) Ltd',
    icon: digitata,
    iconBg: '#383E56',
    date: 'Oct 2023 - Present',
    points: [
      'Developing and maintaining web applications using Vue.js and other related technologies.',
      'Collaborating cross-departmentally to optimize customer experience, incident resolution, and strategic planning',
      'Maintaining and putting existing deploy architecture into code, using ansible, terrafrom and related tools',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'wg-vpn',
    description:
      'An ultra-light implementation of a simplified configuration service for Wireguard deployments, designed for use with Linux clients.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'ansible',
        color: 'green-text-gradient',
      },
      {
        name: 'opensource',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/Cyber-Mint/wg-vpn',
  },
  {
    name: 'Teamfu',
    description:
      'Teamfu is an intuitive project management tool, with a strong design philosophy that does away with unnecessary constraints and excessive control. It works the way teams should work - just get stuff done.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'vue',
        color: 'green-text-gradient',
      },
      {
        name: 'cloud',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    teamfu_link: 'https://teamfu.tech/',
  },
  {
    name: 'Repl',
    description:
      'Still in active planning and devlopment, repl is an application designed to listen to database replication, and broadcast transactions via websocket connection.',
    tags: [
      {
        name: 'golang',
        color: 'blue-text-gradient',
      },
      {
        name: 'data',
        color: 'green-text-gradient',
      },
      {
        name: 'websocket',
        color: 'pink-text-gradient',
      },
    ],
    image: repl,
    source_code_link: 'https://github.com/jackdek11/repl',
  },
];

export { services, technologies, experiences, testimonials, projects };
