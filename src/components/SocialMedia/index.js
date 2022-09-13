import css from './style.module.css';

const SocialMedia = () => (
  <nav className={css.socialMediaNav}>
    <ul className="plain-list horizontal">
      <li>
        <a
          className={css.socialMediaLink}
          href="https://twitter.com/chasscepts"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter" />
        </a>
      </li>
      <li>
        <a
          className={css.socialMediaLink}
          href="https://www.linkedin.com/in/chasscepts/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
      </li>
    </ul>
  </nav>
);

export default SocialMedia;
