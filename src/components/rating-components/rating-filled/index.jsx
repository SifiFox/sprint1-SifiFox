import React from 'react';

import styles from './rating-filled.module.scss';

import star from '../../../assets/icons/starFilled.svg';

export function StarFilled() {
  return (
    <div className={styles.starFilled}>
      <img src={star} alt='' />
    </div>
  );
}
