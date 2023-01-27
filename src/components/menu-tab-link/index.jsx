import { Link, useMatch } from 'react-router-dom';
import { MenuTabInner } from '../menu-tab-inner';

export function MenuTabLink({ to, ...props }) {
  const match = useMatch(to);

  return (
    <div className={match ? props.menuActiveTab : props.menuTab}>
      <Link to={to} className={match ? props.menuActiveTabTitle : props.menuTabTitle}>
        {props.title}
      </Link>

      {props.innerItems ? <MenuTabInner data={props.innerItems} /> : ''}
    </div>
  );
}
