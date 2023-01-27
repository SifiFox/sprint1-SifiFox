import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header-component.module.scss';

import logo from '../../assets/images/brand.svg';
import avatar from '../../assets/images/avatar.jpg';

export function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.headerLeftSide}>
        <div className={styles.headerBurgerWrapper}>
          <div className={styles.headerBurger}> </div>
        </div>
        <Link to='/books/all'>
          <div className={styles.logo}>
            <img src={logo} alt='' />
          </div>
        </Link>
        <div className='title h3'>Библиотека</div>
      </div>
      <div className='headerRightSide'>
        <div className={styles.profile}>
          <div className={styles.profileDesc}>Привет, Иван!</div>
          <div className={styles.profileImageWrapper}>
            <img src={avatar} alt='avatar' />
          </div>
        </div>
      </div>
    </header>
  );
}
