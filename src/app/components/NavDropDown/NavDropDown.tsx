import Link from 'next/link';
import styles from './NavDropDown.module.css';
import navStyles from '../Header/Header.module.css'; // Assuming NavLink is converted here too

interface NavDropDownProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const NavDropDown = ({ isOpen, closeMenu }: NavDropDownProps) => {
  return (
    <div
      className={`${styles.dropdownContainer} ${
        isOpen ? styles.active : styles.hidden
      }`}
    >
      <ul className={styles.dropdownItem} onClick={closeMenu}>
        <li>
          <Link href="#projects" className={navStyles.navLink}>
            Projects
          </Link>
        </li>
      </ul>

      <ul className={styles.dropdownItem} onClick={closeMenu}>
        <li>
          <Link href="#tech" className={navStyles.navLink}>
            Technologies
          </Link>
        </li>
      </ul>

      <ul className={styles.dropdownItem} onClick={closeMenu}>
        <li>
          <Link href="#about" className={navStyles.navLink}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavDropDown;
