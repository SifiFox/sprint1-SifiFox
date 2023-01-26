import styles from './details-star-empty.module.scss';

import star from '../../../assets/icons/starEmpty.svg';

export function DetailsStarEmpty() {
  return (
    <div className={styles.detailsStarEmpty}>
      <img src={star} alt='' />
    </div>
  );
}
