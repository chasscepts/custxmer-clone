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
      <div className={css.header}>
        <Link to="/">
          <img className={css.logo} alt="logo" src={logo} />
        </Link>
        <div className={css.mainMenuWrap}>
          <MainMenu />
        </div>
        <SocialMedia />
      </div>
      <div className={css.location}>
        {formatPath(pathname)}
      </div>
    </header>
  );
};

export default AppHeader;
