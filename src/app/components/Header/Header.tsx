'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
  AiOutlineMenu,
} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import NavDropDown from '../NavDropDown/NavDropDown';
import { BsSun, BsMoon } from 'react-icons/bs';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // Load theme: use saved preference or fall back to system
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = systemPrefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, []);

  // Toggle menu
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Toggle theme & persist
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={styles.container}>
      <NavDropDown isOpen={isMenuOpen} closeMenu={closeMenu} />

      <div className={styles.div1}>
        <Link href="/" passHref>
          <div className={styles.logo}>
            <DiCssdeck size="5rem" />
            <span>Portfolio</span>
          </div>
        </Link>
      </div>

      <div className={styles.div2}>
        <ul className={styles.navLink}>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#tech">Technologies</Link></li>
          <li><Link href="#about">About</Link></li>
        </ul>
      </div>

      <div className={styles.div3}>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <BsMoon size="2rem" /> : <BsSun size="2rem" />}
        </button>

        <a className={styles.socialIcons} href="https://www.github.com/peekaycee/" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
          <AiFillGithub size="3rem" />
        </a>
        <a className={styles.socialIcons} href="https://www.linkedin.com/in/kalu-kalu-okomba/" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
          <AiFillLinkedin size="3rem" />
        </a>
        <a className={styles.socialIcons} href="https://www.instagram.com/peekayc/" target="_blank" rel="noopener noreferrer" title="Instagram Profile">
          <AiFillInstagram size="3rem" />
        </a>

        <button
          className={`${styles.socialIcons} ${styles.dropDown}`}
          onClick={toggleMenu}
          aria-label="Menu Toggle"
        >
          {isMenuOpen ? <AiOutlineClose size="3rem" /> : <AiOutlineMenu size="3rem" />}
        </button>
      </div>
    </div>
  );
};

export default Header;
