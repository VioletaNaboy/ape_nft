import styles from './Header.module.css'
// import { useEffect, useState } from 'react'
import sprite from '../../images/svg/sprite.svg'
export const Header = () => {
    // const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsMobile(window.innerWidth <= 768);
    //     };

    //     handleResize();

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    return (
        <header className={styles.header}>
            <a href='/'>
              <svg className={styles.logoIcon}>
                <use width="100%" height="100%" xlinkHref={`${sprite}#icon-logo`}></use>
              </svg>
            </a>
            <ul className={`${styles.menuList} ${styles.navText}` }>
                <li className={styles.menuItem}>
                        Menu
                </li>
                <li className={styles.menuItem}>
                    <svg className={styles.logoSocial}>
                <use width="100%" height="100%" xlinkHref={`${sprite}#icon-discord`}></use>
              </svg>
                </li>
                <li className={styles.menuItem}>
                    <svg className={styles.logoSocial}>
                <use width="100%" height="100%" xlinkHref={`${sprite}#icon-sailboat`}></use>
              </svg>
                </li>
                <li className={styles.menuItem}>
                    <svg className={styles.logoSocial}>
                <use width="100%" height="100%" xlinkHref={`${sprite}#icon-X`}></use>
              </svg>
                </li>
            </ul>
           
      </header>  
    )
}