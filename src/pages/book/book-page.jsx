import { Header } from '../../components/header-component';
import { Breadcrumbs } from '../../components/breadcrumbs-component';
import { Footer } from '../../components/footer-component';
import { BookDetailsInfo } from '../../components/book-details/book-details-info';
import { BookDetailsReviews } from '../../components/book-details/book-details-reviews';

export const BookPage = () => (
  <div className='wrapper'>
    <Header />
    <Breadcrumbs />
    <div className='book-details__content'>
      <BookDetailsInfo />
      <BookDetailsReviews />
    </div>
    <Footer />
  </div>
);
