import MainMenu from '../MainMenu';
import SocialMedia from '../SocialMedia';
import css from './style.module.css';

const AppFooter = () => (
  <footer>
    <div className={css.footerNav}>
      <div className={`container ${css.navWrap}`}>
        <SocialMedia />
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

export default AppFooter;
