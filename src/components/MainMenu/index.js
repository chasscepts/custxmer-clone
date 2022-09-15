import { Link, useLocation } from 'react-router-dom';
import css from './style.module.css';
import { paths } from '../../utils';

const MainMenu = () => {
  const { pathname } = useLocation();

  return (
    <nav className={css.menu}>
      <ul className="plain-list horizontal">
        {Object.keys(paths).map((key) => (
          <li key={key} className={css.menuItem}>
            <Link
              aria-current={pathname === paths[key]}
              className={`${css.link} ${pathname === paths[key] ? css.active : ''}`}
              to={paths[key]}
            >
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
