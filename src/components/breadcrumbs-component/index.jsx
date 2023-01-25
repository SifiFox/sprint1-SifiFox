import React from 'react';

import { Link } from 'react-router-dom';

import styles from './breadcrumbs.module.scss';
import separator from '../../assets/icons/breadcrumbsSeparator.svg';

export function Breadcrumbs() {
  return (
    <div className={styles.root}>
      <div className={styles.breadcrumbsContent}>
        <ul className={styles.breadcrumbsList}>
          <li className={styles.breadcrumb}>
            <Link to='#'>Бизнес книги</Link>
          </li>
          <li className={styles.breadcrumb}>
            <Link to='#'>Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
