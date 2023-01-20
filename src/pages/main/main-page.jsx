import { Header } from '../../components/header-component';
import { Footer } from '../../components/footer-component';
import { Menu } from '../../components/menu-component';
import { Books } from '../../components/books-component';

export const MainPage = () => (
  <div className='wrapper'>
    <Header />

    <div className='content'>
      <Menu />
      <Books />
    </div>

    <Footer />
  </div>
);
