import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import express from "../../assets/express.png";
import cl from "../../assets/c.png";
import gemini from "../../assets/gemini.png";
import copilot from "../../assets/microsoft-copilot.png";
import m_designer from "../../assets/microsoft-designer.png";
import office_365 from "../../assets/office_365.png";
import t_css from "../../assets/tailwindcss.png";
import ui from "../../assets/materialui.png";
import aws from "../../assets/aws.png";
import r_cloud from "../../assets/RenderCloud.png"


const services = [
  {
    title: "Frontend",
    items: [
      {
        label: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        label: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        label: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        label: "React Js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        label: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        label: "Express Js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        label: "Node Js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        label: "C",
        icon: cl,
      },
      {
        label: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        label: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
  },
  {
    title: "AI Tools",
    items: [
      {
        label: "ChatGPT",
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      },
      {
        label: "Gemini",
        icon: gemini,
      },
      {
        label: "Copilot",
        icon: copilot,
      },
      {
        label: "Microsoft Designer",
        icon: m_designer,
      },
    ],
  },
  {
    title: "Microsoft Tools",
    items: [
      {
        label: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        label: "Visual Studio",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
      },
      {
        label: "Microsoft 365",
        icon: office_365,
      },
      {
        label: "Office 365",
        icon: "https://cdn.worldvectorlogo.com/logos/microsoft-office-2013.svg",
      },
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      {
        label: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        label: "Tailwind CSS",
        icon: t_css,
      },
      {
        label: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        label: "UiKit",
        icon: ui,
      },
      {
        label: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
  },
  {
    title: "Cloud Database",
    items: [
      {
        label: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        label: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        label: "AWS",
        icon: aws,
      },
      {
        label: "RenderCloud",
        icon: r_cloud,
      },
      {
        label: "Google Cloud",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      },
    ],
  },
];

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="title-box">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-wrapper">
        {services.map((section, idx) => (
          <div className="cards" key={idx}>
            <h2>{section.title}</h2>
            <div className="badges">
              {section.items.map((tech, i) => (
                <div className="badge" key={i}>
                  <img src={tech.icon} alt={tech.label} />
                  <span>{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

// import React from "react";
// import "./Services.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import Services_Data from "../../assets/services_data";
// import arrow_icon from "../../assets/arrow_icon.svg";

// function Services() {
//   return (
//     <div id='services' className='services'>
//       <div className="title-box">
//         <h1>My Services</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//     <div className="container">
//       <div className="card">
//         <h2>Frontend</h2>
//         <div className="badges">
//           <div className="badge">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
//             <span>HTML</span>
//           </div>
//           <div className="badge">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
//             <span>CSS</span>
//           </div>
//           <div className="badge">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
//             <span>Javascript</span>
//           </div>
//           <div className="badge">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
//             <span>React Js</span>
//           </div>
//           <div className="badge">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
//             <span>TypeScript</span>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Services
