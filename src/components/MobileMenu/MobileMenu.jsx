import styles from './MobileMenu.module.css'
import React from 'react';
import ReactDOM from 'react-dom';

export const MobileMenu = ({ isOpen, onClose}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div  className={styles.menu}>
      <ul>
        <li onClick={onClose}><a href="index.html#about" >About</a></li>
        <li onClick={onClose}><a href="index.html#m-map">M-map</a></li>
        <li onClick={onClose}><a href="index.html#faq">FAQ</a></li>
        <li onClick={onClose}><a href="index.html#collection">ARTS</a></li>
        <li onClick={onClose}><a href="index.html#mint">Mint</a></li>
          </ul>
          <p className={styles.rights}>&copy; Yacht ape 2024 all rights reserved</p>
    </div>,
    document.body
  );
};

