import React from 'react';
import { BooksList } from '../bookslist-component';
import { NavList } from '../navlist-component';

import styles from './books-component.module.scss';

export function Books() {
  return (
    <div className={styles.root}>
      <div className={styles.navListWrapper}>
        <NavList />
      </div>
      <div className={styles.booksListWrapper}>
        <BooksList />
      </div>
    </div>
  );
}
