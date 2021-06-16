import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          JOIN OUR EMAIL LIST TO RECEIVE THE BEST VACA DEALS
        </p>
        <p className="footer-subscription-text">
          Cancel subscription at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Navigation</h2>
            <Link to="/home">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">About</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
        <div class="footer-link-items">
          <h2>Contact Us</h2>
          <a role="button" className="btn btn-link" href="tel:+12065551234">
            <i className="fa fa-phone" /> 1-206-555-1234
          </a>
          <br />
          <a
            role="button"
            className="btn btn-link"
            href="mailto:notreal@notreal.co"
          >
            <i className="fa fa-envelope-o" /> greatadventures@yahoo.com
          </a>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              ADVENTURES
            </Link>
          </div>
          <small class="website-rights">VACA-SPOT © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            ></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
