import { NavLink } from 'react-router-dom';

import styles from './menu-tab-inner.module.scss';

export function MenuTabInner({ data }) {
  const setActive = ({ isActive }) => (isActive ? styles.menuTabRowTitleActive : styles.menuTabRowTitle);

  return (
    <div className={styles.menuTabInner}>
      <ul>
        {data.map((category) => (
          <li key={category.id} className={styles.menuTabRow}>
            <div className={styles.menuTabRowTitle}>
              <NavLink to={`/books/${category.type}`} className={setActive}>
                <span>{category.name}</span>
              </NavLink>
              <span className={styles.menuTabRowCount}>{category.count}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
