import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainMenu from '../MainMenu';
import SocialMedia from '../SocialMedia';
import DrawerNav from '../DrawerNav';
import css from './style.module.css';
import logo from '../../assets/images/custxmer-logo.webp';
import { formatPath } from '../../utils';

const AppHeader = ({ isDrawerOpen, setDrawerOpen }) => {
  const { pathname } = useLocation();

  const openDrawer = () => setDrawerOpen(true);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header>
      <h1 className="clip">Custxmer</h1>
      <div className={css.headerWrap}>
        <div className={`container ${css.header}`}>
          <div className={css.logoWrap}>
            <Link to="/">
              <img className={css.logo} alt="logo" src={logo} />
            </Link>
          </div>
          <div className={css.mainMenuWrap}>
            <MainMenu />
          </div>
          <div className={css.socialMediaWrap}>
            <SocialMedia />
          </div>
          <div className={css.hamburgerWrap}>
            <button type="button" className={css.hamburger} onClick={openDrawer}>
              <i className="fa-solid fa-bars" />
            </button>
          </div>
        </div>
      </div>
      <div className={css.location}>
        <div className={`container ${css.locationInner}`}>
          <span className={css.locationText}>
            {formatPath(pathname)}
          </span>
        </div>
      </div>
      <DrawerNav isOpen={isDrawerOpen} onClose={closeDrawer} />
    </header>
  );
};

AppHeader.propTypes = {
  isDrawerOpen: PropTypes.bool,
  setDrawerOpen: PropTypes.func.isRequired,
};

AppHeader.defaultProps = {
  isDrawerOpen: false,
};

export default AppHeader;
