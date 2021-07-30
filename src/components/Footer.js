import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Youtube } from "../images/icon-youtube.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";
import logo from "../images/logo-white.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <form
          className="subscribe"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          // noValidate
        >
          <input type="email" placeholder="Updates in your inbox…" />
          <button className="submit">Go</button>
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
