import { Header } from '../../components/header-component';
import { Footer } from '../../components/footer-component';
import { Menu } from '../../components/menu-component';
import { Terms } from '../../components/terms-component';

export const TermsPage = () => (
  <div className='wrapper'>
    <Header />

    <div className='content'>
      <Menu />
      <Terms />
    </div>

    <Footer />
  </div>
);
