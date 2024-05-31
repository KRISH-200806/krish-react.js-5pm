import React, { useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Themecontex } from "../contex/Themecontex";

function Midsection() {
  const { theme } = useContext(Themecontex);
  return (
    <div className="container">
      <div
        className="row w-100 h-100"
        style={{
          backgroundColor: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white",
          minHeight:"100vh",paddingTop:"10%"
         }}

      >
        <div className="col-6">
          <div className="context">
            <h3>Hi, I'm Krish</h3>
            <h1>Web Developer</h1>
            <p>
              I'm a professional web Developer. our main goal to help & <br />
              satisficed the local & global clients by web Development
              <br /> solutions
            </p>
          </div>
          <div className="button">
            <button
              variant="outline-primary"
              size="sm"
              className="w-25 rounded"
            >
              Submit
            </button>
          </div>
          <div className="social-buttons">
            <a
              href="https://www.instagram.com"
              class="social-button social-button--instagram"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/home"
              class="social-button social-button--linkedin"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/signup?user_email=&source=form-home-signup"
              class="social-button social-button--instagram"
              aria-label="Instagram"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://x.com/?lang=en"
              class="social-button social-button--linkedin"
              aria-label="LinkedIn"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/login/device-based/regular/login?_rdc=1&_rdr"
              class="social-button social-button--instagram"
              aria-label="Instagram"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <div
            className="vision"
            style={{ borderColor: theme === "light" ? "black" : "white" }}
          >
            <div className="image">
              <img src="krish.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Midsection;
