import React from 'react';

import styles from './bookslist-component.module.scss';

import { BookCard } from '../book-component';

export function BooksList() {
  return (
    <>
      <BookCard />
      <BookCard />
      <BookCard />
    </>
  );
}
