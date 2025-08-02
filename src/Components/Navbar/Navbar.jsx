import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo20.PNG";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import themes_pattern from "../../assets/theme_pattern.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home" offset={100}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={85} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={85} href="#services">
            <p onClick={() => setMenu("services")}>Skills</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={85} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={85} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <a
            className="anchor-link nav-git"
            href="https://github.com/DebasishaBehera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p onClick={() => setMenu("navbar")}>GitHub Profile</p>
          </a>
          {menu === "navbar" ? <img src={underline} alt="" /> : null}
        </li>
      </ul>
      <div className="nav-connect">
        <a
          className="anchor-link git-link"
          href="https://github.com/DebasishaBehera"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.simpleicons.org/github/000000"
            alt="GitHub"
            className="githubicon"
          />
          GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default Navbar;
