import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-detail">
        <span className="footer-heading">
          <i className="fa-solid fa-location-dot"></i> India{" "}
        </span>
        <div>©2022 vendee India Marketing Pvt. Ltd</div>
        <div className="mt-8">
          Made with <i class="fa-brands fa-gratipay"></i> By Tanishk Sharma
        </div>
        <p className="footer-note">
          Vendee let you shop easily and with quickly. It has a lot of products
          for various customer. Product Quality at vendee is 100% secure and
          worthy. <br />
          Thank you for spending time with vendee.
        </p>
      </div>

      <div className="footer-nav">
        <span className="footer-heading">
          {" "}
          <i class="fa-solid fa-location-arrow"></i> NAVIGATION
        </span>
        <ul>
          <Link to="/">
            <li>
              <i class="fa-solid fa-house"></i>
              HOME
            </li>
          </Link>
          <Link to="/products">
            <li>
              <i class="fa-solid fa-bag-shopping"></i>
              PRODUCTS
            </li>
          </Link>{" "}
          <Link to="/cart">
            <li>
              <i class="fa-solid fa-cart-arrow-down"></i>
              CART
            </li>
          </Link>{" "}
          <Link to="/wishlist">
            <li>
              <i class="fa-solid fa-heart-circle-plus"></i>
              WISHLIST
            </li>
          </Link>
        </ul>
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
  );
};

export { Footer };
