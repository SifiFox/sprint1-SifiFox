import React from 'react';

import styles from './menu-component.module.scss';

export function Menu() {
  return (
    <asside className={styles.menuWrapper}>
      <div className={styles.menuTabs}>
        <div className={styles.menuActiveTab}>
          <div className={styles.menuActiveTabTitle}>Витрина книг</div>
          <div className={styles.menuTabInner}>
            <ul>
              <li className={styles.menuTabRowActive}>
                <div className={styles.menuTabRowTitle}>
                  <span>Все книги</span> <span className={styles.menuTabRowCount}> </span>
                </div>
              </li>

              <li className={styles.menuTabRow}>
                <div className={styles.menuTabRowTitle}>
                  <span>Бизнес-книги</span> <span className={styles.menuTabRowCount}>14</span>
                </div>
              </li>

              <li className={styles.menuTabRow}>
                <div className={styles.menuTabRowTitle}>
                  <span>Детективы</span> <span className={styles.menuTabRowCount}>8</span>
                </div>
              </li>

              <li className={styles.menuTabRow}>
                <div className={styles.menuTabRowTitle}>
                  <span>Детские книги</span> <span className={styles.menuTabRowCount}>14</span>
                </div>
              </li>

              <li className={styles.menuTabRow}>
                <div className={styles.menuTabRowTitle}>
                  <span>Зарубежная литература</span> <span className={styles.menuTabRowCount}>2</span>
                </div>
              </li>
              <li className={styles.menuTabRow}>
                <div className={styles.menuTabRowTitle}>
                  <span>История</span> <span className={styles.menuTabRowCount}>5</span>
                </div>
              </li>
              <li className={styles.menuTabRow}>
                <div className={styles.menuTabRowTitle}>
                  <span>Классическая литература</span> <span className={styles.menuTabRowCount}>12</span>
                </div>
              </li>
              <li className={styles.menuTabRow}>
                <div className={styles.menuTabRowTitle}>
                  <span>Книги по психологии</span> <span className={styles.menuTabRowCount}>11</span>
                </div>
              </li>
              <li className={styles.menuTabRow}>
                <div className={styles.menuTabRowTitle}>
                  <span>Компьютерная литература</span> <span className={styles.menuTabRowCount}>54</span>
                </div>
              </li>
              <li className={styles.menuTabRow}>
                <div className={styles.menuTabRowTitle}>
                  <span>Культура и искусство</span> <span className={styles.menuTabRowCount}>5</span>
                </div>
              </li>
              <li className={styles.menuTabRow}>
                <div className={styles.menuTabRowTitle}>
                  Наука и образование <span className={styles.menuTabRowCount}>2</span>
                </div>
              </li>
              <li className={styles.menuTabRow}>
                <div className={styles.menuTabRowTitle}>
                  <span>Публицистическая литература</span> <span className={styles.menuTabRowCount}>0</span>
                </div>
              </li>
              <li className={styles.menuTabRow}>
                <div className={styles.menuTabRowTitle}>
                  <span>Справочники</span> <span className={styles.menuTabRowCount}>10</span>
                </div>
              </li>
              <li className={styles.menuTabRow}>
                <div className={styles.menuTabRowTitle}>
                  <span>Фантастика</span> <span className={styles.menuTabRowCount}>12</span>
                </div>
              </li>

              <li className={styles.menuTabRow}>
                <div className={styles.menuTabRowTitle}>
                  <span>Юмористическая &shy; литература</span> <span className={styles.menuTabRowCount}>8</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.menuTab}>
          <div className='menuTabTitle'>Правила пользования</div>
        </div>
        <div className={styles.menuTab}>
          <div className='menuTabTitle'>Договор оферты</div>
        </div>
      </div>
    </asside>
  );
}
