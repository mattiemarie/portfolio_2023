import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a className="navbar-brand" href="/">My Portfolio</a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
