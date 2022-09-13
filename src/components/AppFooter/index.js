import PropTypes from 'prop-types';
import MainMenu from '../MainMenu';
import SocialMedia from '../SocialMedia';
import css from './style.module.css';

const AppFooter = ({ setDrawerOpen }) => {
  const openDrawer = () => setDrawerOpen(true);

  return (
    <footer>
      <div className={css.footerNav}>
        <div className={`container ${css.navWrap}`}>
          <button className={css.hamburger} onClick={openDrawer} >
            <i className="fa-solid fa-bars" />
          </button>
          <div className={css.socialMediaWrap}>
            <SocialMedia />
          </div>
          <div className={css.mainMenuWrap}>
            <MainMenu />
          </div>
          <div className={css.contacts}>
            <a href="tel:+1 XXX XXXX XXXX" target="_blank" rel="noreferrer">
              +1 XXX XXXX XXXX
            </a>
            <a href="mailto:custxmer@myemail.world" target="_blank" rel="noreferrer">
              custxmer@myemail.world
            </a>
          </div>
        </div>
      </div>
      <div className={css.footerInfo}>
        <div className={`container ${css.footerInfoContainer}`}>
          <div>Lorem ipsum dolor</div>
          <div>Lorem ipsum dolor</div>
          <div>Lorem ipsum dolor</div>
          <div>Lorem ipsum dolor</div>
          <div>Lorem ipsum dolor</div>
        </div>
      </div>
    </footer>
  );
};

AppFooter.propTypes = {
  setDrawerOpen: PropTypes.func.isRequired,
};

export default AppFooter;
