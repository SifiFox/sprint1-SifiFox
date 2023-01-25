import { Header } from '../../components/header-component';
import { Footer } from '../../components/footer-component';
import { Menu } from '../../components/menu-component';
import { Books } from '../../components/books-component';
import { Contract } from '../../components/contract-component';

export const ContractPage = () => (
  <div className='wrapper'>
    <Header />

    <div className='content'>
      <Menu />
      <Contract />
    </div>

    <Footer />
  </div>
);
