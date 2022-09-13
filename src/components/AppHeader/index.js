import { Link, useLocation } from 'react-router-dom';
import MainMenu from '../MainMenu';
import SocialMedia from '../SocialMedia';
import css from './style.module.css';
import logo from '../../assets/images/custxmer-logo.webp';
import { formatPath } from '../../utils';

const AppHeader = () => {
  const { pathname } = useLocation();

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
          <SocialMedia />
        </div>
      </div>
      <div className={css.location}>
        <div className={`container ${css.locationInner}`}>
          <span className={css.locationText}>
            {formatPath(pathname)}
          </span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
