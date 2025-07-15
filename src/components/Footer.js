import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="footer-logo-icon">
            <div className="footer-logo-symbol">⬡</div>
          </div>
        </div>

        <div className="footer-main">
          <span className="footer-cta">TALK TO THE TEAM</span>
          <div className="footer-contact">
            <a href="tel:+16173708800" className="footer-phone">
              96578 44488
            </a>
            <a href="mailto:info@chevronpartners.com" className="footer-email">
              info@vbdesigns.com
            </a>
          </div>

          <div className="footer-address">
            <p>FIRST FLOOR, MAHESH CHAMBERS</p>
            <p>SATARA ROAD </p>
            <p>PUNE, MAHARASHTRA</p>
          </div>
        </div>

        <div className="footer-social">
          <span className="follow-text">FOLLOW US</span>
          <div className="social-links">
            <a href="#" className="social-link facebook">
              f
            </a>
            <a href="#" className="social-link instagram">
              ⬡
            </a>
            <a href="#" className="social-link linkedin">
              in
            </a>
            <a href="#" className="social-link pinterest">
              p
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© VB DESIGNS LLC</p>
        <p>ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
