import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import img from "../../assets/simon1.png";

const projects = [
  {
    title: "Simon Says Game",
    date: "July 20",
    image: img,
    tech: ["HTML", "CSS", "JS"],
    description:
      'Simon Says is a classic memory and reflex game where players follow commands only if prefixed with "Simon says." Ignoring or wrongly acting results in elimination.',
    github: "https://github.com/DebasishaBehera/Simon_Says_Game",
    live: "https://debasishabehera.github.io/Simon_Says_Game/",
  },
  {
    title: "Comming soon...",
    date: "mm-dd",
    image: "Working on this project...",
    tech: ["XXX", "XXX", "XXX"],
    description:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.",
    github: "#",
    live: "#",
  },
  {
    title: "Comming soon...",
    date: "mm-dd",
    image: "Working on this project...",
    tech: ["XXX", "XXX", "XXX"],
    description:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.",
    github: "#",
    live: "#",
  },
];

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {projects.map((proj, index) => (
          <div className="card" key={index}>
            <div className="image-container">
              <img src={proj.image} alt={proj.title} />
            </div>
            <div className="tags">
              {proj.tech.map((tech, i) => (
                <span key={i} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <h3 className="card-title">{proj.title}</h3>
            <p className="card-date">{proj.date}</p>
            <p className="card-desc">{proj.description}</p>
            <div className="card-footer">
              <a href={proj.github} target="_blank" rel="noreferrer">
                <img
                  src="https://cdn.simpleicons.org/github/000000"
                  alt="GitHub"
                  className="github-icon"
                />
              </a>
              <a
                href={proj.live}
                target="_blank"
                rel="noreferrer"
                className="view-btn"
              >
                view live
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <a
          className="anchor-link"
          href="https://github.com/DebasishaBehera"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Show More</span>
          <img
            src={arrow_icon}
            alt="arrow"
          />
        </a>
        {/* <span>Show More</span>
        <img src={arrow_icon} alt="" /> */}
      </div>
    </div>
  );
};

export default MyWork;
