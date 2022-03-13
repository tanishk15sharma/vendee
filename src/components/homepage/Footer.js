import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer-detail">
          <span>
            <i class="fa-solid fa-location-dot"></i> India{" "}
          </span>
          <div>©2022 vendee India Marketing Pvt. Ltd</div>
        </div>

        <div class="footer-link-div">
          <a
            href="https://github.com/tanishk15sharma"
            target="_blank"
            class="footer-link"
          >
            <i class="fa-brands fa-github footer-icon"></i>
          </a>
          <a
            href="https://twitter.com/_tanishksharma"
            target="_blank"
            class="footer-link"
          >
            <i class="fa-brands fa-twitter footer-icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tanishk15sharma/"
            target="_blank"
            class="footer-link"
          >
            <i class="fa-brands fa-linkedin-in footer-icon"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
