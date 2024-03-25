import styles from './Header.module.css'
import sprite from '../../images/svg/sprite.svg'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import { useState } from 'react'
export const Header = ({isMobile}) => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
        <header className={styles.header}>
            <a href='/'>
              <svg className={`${styles.logoIcon} ${isMenuOpen && isMobile ? styles.menuIconOpen : ''}`}>
                <use width="100%" height="100%" xlinkHref={`${sprite}#icon-logo`}></use>
              </svg>
            </a>
            <ul className={`${styles.menuList} ${styles.navText} ${isMenuOpen && isMobile ? styles.menuIconOpen : ''}` }>
                <li className={`${styles.menuItem} ${isMenuOpen && isMobile ? styles.menuIconOpen : ''}`} onClick={toggleMenu}>
                      {isMenuOpen ? 'Close' : 'Menu'}  
                </li>
                <li className={`${styles.menuItem} ${isMenuOpen && isMobile ? styles.menuIconOpen : ''}`}>
                    <svg className={`${styles.logoSocial} ${isMenuOpen && isMobile ? styles.menuIconOpen : ''}`}>
                <use width="100%" height="100%" xlinkHref={`${sprite}#icon-discord`}></use>
              </svg>
                </li>
                <li className={`${styles.menuItem} ${isMenuOpen && isMobile ? styles.menuIconOpen : ''}`}>
                    <svg className={`${styles.logoSocial} ${isMenuOpen && isMobile ? styles.menuIconOpen : ''}`}>
                <use width="100%" height="100%" xlinkHref={`${sprite}#icon-sailboat`}></use>
              </svg>
                </li>
                <li className={`${styles.menuItem} ${isMenuOpen && isMobile ? styles.menuIconOpen : ''}`}>
                    <svg className={`${styles.logoSocial} ${isMenuOpen && isMobile ? styles.menuIconOpen : ''}`}>
                <use width="100%" height="100%" xlinkHref={`${sprite}#icon-X`}></use>
              </svg>
                </li>
            </ul>
        <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} isMobile={isMobile} />
      </header>  
    )
}