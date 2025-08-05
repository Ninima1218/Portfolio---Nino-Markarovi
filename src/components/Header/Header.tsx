import React, { useState, useEffect, useCallback, useRef } from 'react';
import NavLink from '../../components/NavLinks/NavLinks';
import logo from './assets/logo.jpg';
import menuIcon from './assets/menu.png';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const touchStartY = useRef(0);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimatingOut(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleClickOutside = useCallback((e: MouseEvent) => {
    const isClickOutside = !(e.target as HTMLElement).closest('.burger-menu');
    if (isClickOutside && isMenuOpen) {
      toggleMenu();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        toggleMenu();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchEndY = e.touches[0].clientY;
      if (touchEndY - touchStartY.current > 50) {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMenuOpen, handleClickOutside]);

  return (
    <header id="header" className="header">
      <img src={logo} alt="Logo" className="header-logo" />

      <div className="burger-menu">
        <img
          src={menuIcon}
          alt="Menu Icon"
          className="menu-icon"
          onClick={toggleMenu}
        />

        {isMenuOpen && (
          <>
            <div className="burger-menu-overlay" onClick={toggleMenu} />
            <div
              className={`burger-menu-content ${
                isAnimatingOut ? 'fade-out' : 'fade-in'
              }`}
            >
              <NavLink />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
