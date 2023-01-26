import React from 'react';

import styles from './book-details-rating.module.scss';

import { DetailsStarEmpty } from '../details-star-empty';
import { DetailsStarFilled } from '../details-star-filled';

export function DetailsRating({ rating }) {
  const starsArr = [];
  for (let i = 0; i < 5; i++) {
    if (i <= rating - 1) {
      starsArr.push(<DetailsStarFilled />);
    } else {
      starsArr.push(<DetailsStarEmpty />);
    }
  }

  return <div className={styles.ratingList}>{starsArr}</div>;
}
