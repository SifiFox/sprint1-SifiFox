import React from 'react';

import styles from './star-empty.module.scss';

import star from '../../../assets/icons/starEmpty.svg';

export function StarEmpty() {
  return (
    <div className={styles.starEmpty}>
      <img src={star} alt='' />
    </div>
  );
}
