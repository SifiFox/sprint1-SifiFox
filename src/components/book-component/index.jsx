import React from 'react';

import styles from './book-component.module.scss';

import bookImage from '../../assets/images/book1.png';

export function BookCard() {
  const data = 'Грокаем алгоритмы. Иллюстрированное пособие для программистов';

  let sliced = data.slice(0, 54);
  if (sliced.length < data.length) {
    sliced += '...';
  }

  return (
    <div className={styles.root}>
      <div className={styles.bookImageWrapper}>
        <img className={styles.bookImage} src={bookImage} alt='' />
      </div>

      <div className={styles.bookRating}>ещё нет оценок</div>

      <div className={styles.bookTitle}>{sliced}</div>

      <div className={styles.bookAuthor}>Адитья Бхаргава, 2019</div>

      <div className={styles.bookBtn}>забронировать</div>
    </div>
  );
}
