import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <ul>
          <a
            rel="noreferrer"
            href="https://www.facebook.com/sagerdrone/"
            target="_blank"
          >
            <i className="social fa-brands fa-facebook"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/sagerdrone/"
            target="_blank"
          >
            <i className="social fa-brands fa-instagram"></i>
          </a>
        </ul>
        <p style={{ color: "white" }}>copyrights &copy; 2021</p>
      </div>
    </div>
  );
}

export default Footer;
