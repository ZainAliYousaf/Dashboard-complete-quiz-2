import { Link } from "react-router-dom";
import "../style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1><i className="fa-solid fa-cloud-sun"></i>Smart WeatherApp</h1>
      <div className="nav-links">
        <Link to="/"><i className="fa-solid fa-house"></i> Home</Link>
        <Link to="/services"><i className="fa-solid fa-cloud"></i> Services</Link>
        <Link to="/about"><i className="fa-solid fa-users"></i> About Us</Link>
        <Link to="/contact"><i className="fa-solid fa-envelope"></i> Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
