import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav>
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
