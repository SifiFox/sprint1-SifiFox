import styles from './primary-btn.module.scss';

export function PrimaryBtn({ size, title }) {
  console.log(size);
  return <div className={size === 'full' ? styles.primaryBtnFull : styles.root}>{title}</div>;
}
