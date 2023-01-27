import styles from './menu-component.module.scss';

import data from '../../assets/categories.json';
import { MenuTabLink } from '../menu-tab-link';

export function Menu() {
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menuTabs}>
        <MenuTabLink
          to='/books/:category'
          menuTab={styles.menuTab}
          menuActiveTab={styles.menuActiveTab}
          menuTabTitle={styles.menuTabTitle}
          menuActiveTabTitle={styles.menuActiveTabTitle}
          title='Витрина книг'
          innerItems={data}
        />

        <MenuTabLink
          to='/terms'
          menuTab={styles.menuTab}
          menuActiveTab={styles.menuActiveTab}
          menuTabTitle={styles.menuTabTitle}
          menuActiveTabTitle={styles.menuActiveTabTitle}
          title='Правила пользования'
          innerItems=''
        />

        <MenuTabLink
          to='/contract'
          menuTab={styles.menuTab}
          menuActiveTab={styles.menuActiveTab}
          menuTabTitle={styles.menuTabTitle}
          menuActiveTabTitle={styles.menuActiveTabTitle}
          title='Договор оферты'
          innerItems=''
        />
      </div>
    </div>
  );
}
