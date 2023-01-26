import React from 'react';

import styles from './book-component.module.scss';
import bookImage from '../../assets/images/book1.png';

import { BookBtn } from '../btns-components/book-btn';
import { DisabledBtn } from '../btns-components/disabled-btn';
import { Rating } from '../rating-components/rating-list';

export function BookCard({ author, year, title, bookedTill, isBooked, rating, listType }) {
  const date = new Date(bookedTill);
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

  let slicedTitle = title.slice(0, 54);
  if (slicedTitle.length < title.length) {
    slicedTitle += '...';
  }

  return (
    <div data-test-id='card' className={listType === 'square' ? styles.bookSquare : styles.bookLine}>
      <div className={styles.bookImageWrapper}>
        <img className={styles.bookImage} src={bookImage} alt='' />
      </div>

      <div className={styles.bookContent}>
        {rating <= 0 ? (
          <div className={styles.bookRating}>ещё нет оценок</div>
        ) : (
          <Rating rating={rating} listType={listType} />
        )}

        <div className={styles.bookTitle}>{slicedTitle}</div>

        <div className={styles.bookAuthor}>
          {author}, {year}
        </div>
        {isBooked ? <DisabledBtn month={month} day={day} /> : <BookBtn />}
      </div>
    </div>
  );
}
