import { Header } from '../../components/header-component';
import { Footer } from '../../components/footer-component';
import { Menu } from '../../components/menu-component';
import { Books } from '../../components/books-component';
import { Breadcrumbs } from '../../components/breadcrumbs-component';

export const BookPage = () => (
  <div className='wrapper'>
    <Header />

    <Breadcrumbs />

    <div className='content'>test</div>

    <Footer />
  </div>
);
