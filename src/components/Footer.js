import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Youtube } from "../images/icon-youtube.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";
import logo from "../images/logo-white.svg";
import { useState } from "react";

const Footer = ({ email }) => {
  const [validationText, setValidationText] = useState("");
  const [emailClass, setEmailClass] = useState("");
  const emailField = document && document.querySelector(".subscribe input");
  const formField = document && document.querySelector(".subscribe");

  const emailValidateType = (e) => {
    const value = e.target.value;
    if (!email.test(value)) {
      if (value === "") {
        setEmailClass("");
        setValidationText("");
      } else {
        setEmailClass("invalid");
        setValidationText("Please enter valid email address");
      }
    } else {
      setEmailClass("valid");
      setValidationText("Your email address is valid");
    }
  };

  const emailValidateSubmit = (e) => {
    e.preventDefault();
    let value = emailField.value;
    if (!email.test(value)) {
      setEmailClass("error");
      setValidationText("Invalid email address!");
    } else {
      formField.reset();
      setEmailClass("");
      setValidationText("");
    }
  };

  return (
    <footer>
      <div className="footer">
        <form
          className="subscribe"
          onSubmit={(e) => {
            emailValidateSubmit(e);
          }}
          noValidate
        >
          <input
            type="email"
            placeholder="Updates in your inbox…"
            onChange={(e) => emailValidateType(e)}
          />
          <button className="submit">Go</button>
          <p className={`${emailClass}`}>{validationText}</p>
        </form>
        <div className="footer-link">
          <ul className="link">
            <li className="f-item">Home</li>
            <li className="f-item">Pricing</li>
            <li className="f-item">Products</li>
            <li className="f-item last">About Us</li>
          </ul>
          <ul className="link">
            <li className="f-item">Careers</li>
            <li className="f-item">Community</li>
            <li className="f-item last">Privacy Policy</li>
          </ul>
        </div>
        <div className="bottom-logo">
          <div className="social-link">
            <ul>
              <li>
                <Facebook fill="white" className="logo-link" />
              </li>
              <li>
                <Youtube fill="white" className="logo-link" />
              </li>
              <li>
                <Twitter fill="white" className="logo-link" />
              </li>
              <li>
                <Pinterest fill="white" className="logo-link" />
              </li>
              <li>
                <Instagram fill="white" className="logo-link" />
              </li>
            </ul>
          </div>
          <img src={logo} alt="bottom-logo" className="logo" />
        </div>
      </div>
      <p>Copyright 2020. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
