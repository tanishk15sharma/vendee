import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-detail">
          <span>
            <i className="fa-solid fa-location-dot"></i> India{" "}
          </span>
          <div>©2022 vendee India Marketing Pvt. Ltd</div>
        </div>

        <div className="footer-link-div">
          <a
            href="https://github.com/tanishk15sharma"
            target="_blank"
            className="footer-link"
          >
            <i className="fa-brands fa-github footer-icon"></i>
          </a>
          <a
            href="https://twitter.com/_tanishksharma"
            target="_blank"
            className="footer-link"
          >
            <i className="fa-brands fa-twitter footer-icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tanishk15sharma/"
            target="_blank"
            className="footer-link"
          >
            <i className="fa-brands fa-linkedin-in footer-icon"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
