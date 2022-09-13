import css from './style.module.css';

const SocialMedia = () => (
  <nav className={css.socialMediaNav}>
    <ul className="plain-list horizontal">
      <li className={css.listItem}>
        <a
          className={css.socialMediaLink}
          href="https://twitter.com/chasscepts"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter" />
        </a>
      </li>
      <li className={css.listItem}>
        <a
          className={css.socialMediaLink}
          href="https://www.linkedin.com/in/chasscepts/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in" />
        </a>
      </li>
    </ul>
  </nav>
);

export default SocialMedia;
