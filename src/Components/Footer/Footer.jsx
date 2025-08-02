import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo20.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" className='logo' />
            <p>I am Passionate full stack developer eager to build scalable web applications using MongoDB, Express.js, React, and Node.js.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div> */}
      <hr />
      <div className="footer-bottom">
        <div class="link">
          <div className="media">
            <a
              class="linkedin"
              href="https://www.linkedin.com/in/debasisha-behera-691a1828a"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              class="twitter"
              href="https://x.com/Debasisha0075?s=09"
              target="_blank"
            >
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a
              class="Discord"
              href="https://discord.com/channels/@me"
              target="_blank"
            >
              <i class="fa-brands fa-discord"></i>
            </a>
            <a class="github" href="https://github.com/JaganParida">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
          <p className="footer-bottom-left">
            © 2025 Debx. All rights reserved.
          </p>
        </div>

        {/* <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
