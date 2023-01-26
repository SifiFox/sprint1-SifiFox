import styles from './book-details-info.module.scss';

import mainImage from '../../../assets/images/book1.png';
import { PrimaryBtn } from '../../btns-components/primary-btn';

export function BookDetailsInfo() {
  const btnTitle = 'Забронировать';

  const btnSize = 'root';

  return (
    <div className={styles.root}>
      <div className={styles.mainImage}>
        <img src={mainImage} alt='' />
      </div>
      <div className={styles.mainInfo}>
        <div className={styles.title}>
          Грокаем алгоритмы. Иллюстрированное пособие для программистов &shy; и любопытствующих
        </div>
        <div className={styles.author}>Адитья Бхаргава, 2019</div>

        <PrimaryBtn size={btnSize} title={btnTitle} />

        <div className={styles.description}>
          <div className={styles.discriptionTitle}>О книге</div>
          <div className={styles.descriptionContent}>
            <p>
              Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
              решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
              изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
              время?
            </p>

            <p>
              Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
              алгоритмы — это веселое и увлекательное занятие.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
