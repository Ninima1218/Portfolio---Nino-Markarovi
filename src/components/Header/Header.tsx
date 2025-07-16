import React, { useState, useEffect, useRef } from 'react';
import NavLink from '@components/NavLinks/NavLinks';
import logo from '@assets/logo.jpg';
import menuIcon from '@assets/menu.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside); // ➕ use mousedown
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header-logo" />
      <div className="burger-menu">
  <img src={menuIcon} className="menu-icon" onClick={toggleMenu} />
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
