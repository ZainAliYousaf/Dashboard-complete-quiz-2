import "../style.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} WeatherApp | Designed by Zain Ali Yousaf</p>
    </footer>
  );
}

export default Footer;
