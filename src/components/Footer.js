import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <form className="subscribe">
          <input type="email" placeholder="Updates in your inbox…" />
          <button className="submit">Go</button>
        </form>
        <div className="footer-link">
          <ul className="link">
            <li className="f-item">Home</li>
            <li className="f-item">Pricing</li>
            <li className="f-item">Products</li>
            <li className="f-item">About Us</li>
          </ul>
          <ul className="link">
            <li className="f-item">Careers</li>
            <li className="f-item">Community</li>
            <li className="f-item">Privacy Policy</li>
          </ul>
        </div>
        <div className="bottom-logo">
          <div className="social-link">
            <ul>
              <li>
                <img src={facebook} alt="Facebook link" />
              </li>
              <li>
                <img src={youtube} alt="youtube link" />
              </li>
              <li>
                <img src={twitter} alt="twitter link" />
              </li>
              <li>
                <img src={pinterest} alt="pinterest link" />
              </li>
              <li>
                <img src={instagram} alt="instagram link" />
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
