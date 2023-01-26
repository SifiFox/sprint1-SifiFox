import styles from './details-star-filled.module.scss';

import star from '../../../assets/icons/starFilled.svg';

export function DetailsStarFilled() {
  return (
    <div className={styles.detailsStarFilled}>
      <img src={star} alt='' />
    </div>
  );
}
