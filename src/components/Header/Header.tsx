import React, { useState } from 'react';
import NavLink from '@components/NavLinks/NavLinks.tsx';
import menuImage from '@assets/menu.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className="header">
      <h1 className="header-name">Nino</h1>
      <div className="burger-menu">
        <img
          src={menuImage}
          alt="Menu icon"
          className="menu-icon"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div className="burger-menu-content">
            <NavLink />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
