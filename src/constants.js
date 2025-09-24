// Skills Section Logo's

import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import srklogo from './assets/srklogo.webp';
import sflogo from './assets/sflogo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's

import poornimalogo from './assets/education_logo/poornimalogo.jpg';
import bllogo from './assets/education_logo/school.jpg';
import sslogo from './assets/education_logo/sschoollogo.jpg';
 // Certificate Logo
 import Postmanlogo from './assets/certificates_logo/postman.png';
 import servicelogo from './assets/certificates_logo/servicenow.jpg';
 import nptelLogo from './assets/certificates_logo/nptel.jpg';
 import aiLogo from './assets/certificates_logo/linkedin.png';
 import ibmLogo from './assets/certificates_logo/ibm.png';
 import sqlLogo from './assets/certificates_logo/hackerrank.jpg';
 import frontendLogo from './assets/certificates_logo/infosys.jpg';



// Project Section Logo's
import banking from './assets/bankingss.png';
import library from './assets/libraryss.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
     
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
     
      { name: 'Vercel', logo: vercelLogo },
     
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: srklogo,
      role: "Frontend/Wordpress Intern",
      company: "SRKWebApp Innovations LLP ",
      date: "May 2025 - July 2025",
      desc: "Developed responsive, user-friendly web pages using HTML, CSS, JavaScript, and React.js, and customized WordPress themes for client-specific designs.Collaborated with design and backend teams to build dynamic UIs and gained hands-on experience with modern web development tools and practices.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Wordpress",
        "Bootstrap CSS"
      ],
    },
    {
      id: 1,
      img: sflogo,
      role: "Web Developer Intern",
      company: "The Sparks Foundation",
      date: "June 2024 - July 2024",
      desc: "Built scalable web applications using HTML, CSS, and Flask with a focus on responsive design.Enhanced user experience through UI optimizations and clean, maintainable code.",
      skills: [
        "Flask",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    
  ];
  
  export const education = [
    
    {
      id: 1,
      img: poornimalogo,
      school: "Poornima University , Jaipur",
      date: "July 2022 - April 2026",
      grade: "8.99CGPA ",
      desc: "I am pursuing  my Bachelor's degree in Technology from Poornima University,Jaipur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at  college allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - BTech (Computer Science)",
    },
    {
      id: 2,
      img: sslogo,
      school: "Government Senior Secondary School, Mania",
      date: "May 2021 - April 2022 ",
      grade: "84%",
      desc: "I completed my class 12 education from Government Senior Secondary School, Mania, under the RBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
      degree: "RBSE(XII) - PCM ",
    },
    {
      id: 3,
      img: bllogo,
      school: "B.L. Agarwal Public School, Mania",
      date: "Apr 2019 - March 2020",
      grade: "89.5%",
      desc: "I completed my class 10 education from B.L. Agarwal Public School, Mania, under the RBSE board, where I studied all compulsory subjects.",
      degree: "RBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Basic Banking Website",
      description:
        "The Basic Banking Website is a user-friendly platform that allows users to securely transfer money between accounts and check their current balance. It provides a streamlined interface for managing simple banking transactions online.",

      image: banking,
      tags: ["HTML", "CSS", "JavaScript","Flask(Python)","SQL"],
      github: "https://github.com/Vanshikajain1308/Basic_banking_website-",
     
    },
    {
      id: 1,
      title: "Library Catalog",
      description:
        "Library Book Management System is a web-based application designed to manage the cataloging, issuing, and returning of books in a library. It allows librarians to efficiently handle book records and user data while ensuring smooth day-to-day library operations.",
      image: library,
      tags: ["React JS",  "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Vanshikajain1308/library-book-catalog",
      
    },
    
  ];  
  export const certificates = [
  {
    id: 0,
    name: "ReactJS - Infosys",
    date: "July 9, 2025",
    logo: frontendLogo, // import or link to your logo image
    link: "https://drive.google.com/file/d/1Kch6mp9DYwyos4WrOZCzq9e3UW-kMxR6/view?usp=drive_link"
  },
  {
    id: 1,
    name: "Complete Front-End Development Journey - Infosys",
    date: "Jan 22, 2025",
    logo: frontendLogo,
    link: "https://drive.google.com/file/d/1jFlCUrjzRd30OgAMKwc4v1rw5DIsAFee/view?usp=drive_link"
  },
  {
    id: 2,
    name: "Python for Data Science - IBM",
    date: "Jan 25, 2025",
    logo: ibmLogo,
    link: "https://drive.google.com/file/d/1-BBg7Oh1bkMNphrLz405GlB7dGvRz_5m/view?usp=drive_link"
  },
  {
    id: 3,
    name: "SQL (Intermediate) - HackerRank",
    date: "July 2024",
    logo: sqlLogo,
    link: "https://drive.google.com/file/d/10nMsHtVLXBCHDpAGpO5qvWY3Y8zFfFiP/view?usp=drive_link"
  },
  {
    id: 4,
    name: "Generative AI - Microsoft (LinkedIn)",
    date: "March 2024",
    logo: aiLogo,
    link: "https://drive.google.com/file/d/1uZbq573L90DfzwR14LCNDNCyHObgZNVk/view?usp=drive_link"
  },
  {
    id: 5,
    name: "Cloud Computing - NPTEL",
    date: "Jan - Apr 2024",
    logo: nptelLogo,
    link: "https://drive.google.com/file/d/1a16eNgWsZKSN8kQKjtV5dLBzZqw3hr-C/view?usp=drive_link"
  },
   {
    id: 6,
    name: "Postman API Fundamentals - Postman",
    date: "Jan 2025",
    logo: Postmanlogo,
    link: "https://drive.google.com/file/d/1AKU5wkUkaAjqwtSV9PGF1TVSunOxI4aV/view?usp=drive_link"
  },
   {
    id: 7,
    name: "Micro-Certification - Welcome to ServiceNow",
    date: "Jan 2025",
    logo: servicelogo,
    link: "https://drive.google.com/file/d/1XTIjRgHouOjwQcb7p19mNUBxq1qftUVu/view?usp=drive_link"
  }
];
