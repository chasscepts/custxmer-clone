import css from './style.module.css';
import { paths } from '../../utils';
import { Link } from 'react-router-dom';

const MainMenu = () => (
  <nav className={css.menu}>
    <ul className="plain-list horizontal">
      {Object.keys(paths).map((key) => (
        <li key={key}>
          <Link className={css.link} to={paths[key]}>{key}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default MainMenu;
