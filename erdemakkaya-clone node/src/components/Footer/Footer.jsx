import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Copyright notice */}
      <p>&copy; 2011 All Rights Reserved</p>

      {/* Original website link */}
      <p>
        Original website:{" "}
        <a className="link-origin" href="https://www.erdemakkaya.com/">
          https://www.erdemakkaya.com/
        </a>
      </p>
    </footer>
  );
}

export default Footer;
