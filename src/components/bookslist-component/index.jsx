import React from 'react';

import styles from './bookslist-component.module.scss';

import { BookCard } from '../book-component';
import data from '../../assets/books-template.json';

export function BooksList({ listType }) {
  const [books, setBooks] = React.useState(data);

  return (
    <>
      {books.map((book) => (
        <BookCard
          key={book.id}
          author={book.author}
          year={book.year}
          title={book.title}
          bookedTill={book.bookedTill}
          isBooked={book.isBooked}
          rating={book.rating}
          listType={listType}
        />
      ))}
    </>
  );
}
