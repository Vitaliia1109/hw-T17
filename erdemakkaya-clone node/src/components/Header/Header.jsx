import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Top-level container for logo and navigation */}
      <div className="header-container">
        {/* Logo with name */}
        <a className="logo" href="/">
          <span className="logospan">Erdem</span>Akkaya
        </a>

        {/* Navigation section */}
        <nav>
          {/* List of navigation links */}
          <ul className="nav-links">
            {/* Navigation link items */}
            <li>
              <a className="nav-link-item" href="#Work">
                Work
              </a>
            </li>
            <li>
              <a className="nav-link-item" href="#Advertising">
                Advertising
              </a>
            </li>
            <li>
              <a className="nav-link-item" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
