import logo from "../images/logo.svg";
import ham from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Navbar = ({ active, show, appear, activateNav }) => {
  return (
    <div className={`navbar ${appear}`}>
      <div className="logo">
        <img src={logo} alt="" />
        <div className={`hamburger ${show}`} onClick={activateNav}>
          {!active ? <img src={ham} alt="" /> : <img src={close} alt="" />}
        </div>
      </div>
      <nav className={`${show}`}>
        <div className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">Pricing</li>
            <li className="nav-item">Product</li>
            <li className="nav-item">About Us</li>
            <li className="nav-item">Careers</li>
            <li className="nav-item">Community</li>
          </ul>
        </div>
      </nav>
      <button className="get-started">Get Started</button>
    </div>
  );
};

export default Navbar;
