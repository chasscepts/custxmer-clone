import MainMenu from '../MainMenu';
import SocialMedia from '../SocialMedia';
import css from './style.module.css';

const AppFooter = () => (
  <footer>
    <div className={css.footerNav}>
      <SocialMedia />
      <div className={css.mainMenuWrap}>
        <MainMenu />
      </div>
      <div className={css.contacts}>
        <span>+1 XXX XXXX XXXX</span>
        <a href="mailto:custxmer@myemail.world" target="_blank" rel="noreferrer">
          custxmer@myemail.world
        </a>
      </div>
    </div>
    <div className={css.footerInfo}>
      <div>Lorem ipsum dolor</div>
      <div>Lorem ipsum dolor</div>
      <div>Lorem ipsum dolor</div>
      <div>Lorem ipsum dolor</div>
      <div>Lorem ipsum dolor</div>
    </div>
  </footer>
);

export default AppFooter;
