import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { IoMdArrowUp } from 'react-icons/io';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <ul className={styles.linkList}>
        <li className={styles.linkColumn}>
          <h4 className={styles.linkTitle}>Call or Whatsapp</h4>
          <a href="tel:+2348064772024" className={styles.linkItem}>+234-806-477-2024</a>
          <a href="tel:+2347088996255" className={styles.linkItem}>+234-708-899-6255</a>
        </li>
        <li className={styles.linkColumn}>
          <h4 className={styles.linkTitle}>Email</h4>
          <a href="mailto:kalukaluokomba@gmail.com" className={styles.linkItem}>
            kalukaluokomba@gmail.com
          </a>
        </li>
      </ul>

      <div className={styles.socialIconsContainer}>
        <div className={styles.companyContainer}>
          <p className={styles.slogan}>Delivering Innovative Solutions.</p>
        </div>
        <div className={styles.socialContainer}>
          <a
            href="https://www.github.com/peekaycee/"
            target="_blank"
            rel="noopener"
            className={styles.socialIcon}
            title="GitHub Profile"
          >
            <AiFillGithub size="3rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/kalu-kalu-okomba/"
            target="_blank"
            rel="noopener"
            className={styles.socialIcon}
            title="LinkedIn Profile"
          >
            <AiFillLinkedin size="3rem" />
          </a>
          <a
            href="https://www.instagram.com/peekayc/"
            target="_blank"
            rel="noopener"
            className={styles.socialIcon}
            title="Instagram Profile"
          >
            <AiFillInstagram size="3rem" />
          </a>
        </div>
      </div>

      <a href="#" title="Back to top" aria-label="Back to top">
        <div className={styles.arrow}>
          <IoMdArrowUp />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
