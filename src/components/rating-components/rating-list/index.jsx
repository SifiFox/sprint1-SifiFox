import React from 'react';

import styles from './rating-component.module.scss';

import { StarEmpty } from '../rating-empty';
import { StarFilled } from '../rating-filled';

export function Rating({ rating }) {
  const starsArr = [];

  // i <= rating ? starsArr.push(<StarFilled />) :starsArr.push(<StarEmpty />)

  for (let i = 0; i < 5; i++) {
    if (i <= rating) {
      starsArr.push(<StarFilled key={i} />);
    } else {
      starsArr.push(<StarEmpty key={i} />);
    }
  }

  return <div className={styles.ratingList}>{starsArr}</div>;
}
