import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { paths } from '../../utils';
import css from './style.module.css';

const DrawerNav = ({ isOpen, onClose }) => {
  const { pathname } = useLocation();

  return (
    <div className={`${css.drawerNavContainer} ${isOpen ? css.open : ''}`}>
      <div className={css.drawerHeader}>
        <button className={css.drawerCloseBtn} onClick={onClose}>
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      <nav>
        <ul className="plain-list">
          {Object.keys(paths).map((key) => (
            <li key={key} className={css.listItem}>
              <Link
                className={`${css.link} ${pathname === paths[key] ? css.active : ''}`}
                to={paths[key]}
                onClick={onClose}
              >
                {key}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

DrawerNav.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

DrawerNav.defaultProps = {
  isOpen: false,
};

export default DrawerNav;
