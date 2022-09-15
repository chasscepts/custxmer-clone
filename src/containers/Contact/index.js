import { useState } from 'react';
import css from './style.module.css';
import common from '../../assets/css/common.module.css';

const Contact = () => {
  const [isAlertOpen, openAlert] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    openAlert(true);
    return false;
  };

  const closeAlert = () => openAlert(false);

  return (
    <section className={css.container}>
      <h1 className="clip">Contact Us</h1>
      <div className={`${common.narrow} ${css.content}`}>
        <h2 className={css.heading}>Get In Touch</h2>
        <form className={css.form} onSubmit={submit}>
          <label className={css.label} htmlFor="email">
            <span className={css.labelText}>Email</span>
            <input
              type="email"
              name="email"
              className={css.input}
              id="email"
              placeholder="Enter Email"
              required
            />
          </label>
          <label className={css.label} htmlFor="subject">
            <span className={css.labelText}>Subject</span>
            <input
              type="text"
              name="subject"
              className={css.input}
              id="subject"
              placeholder="Enter Subject"
              required
            />
          </label>
          <label className={`${css.label} ${css.contentLabel}`} htmlFor="content">
            <span className={css.labelText}>Content</span>
            <textarea
              className={css.emailContent}
              name="content"
              id="content"
              placeholder="Content"
            />
          </label>
          <div className={css.controls}>
            <button type="submit" className={css.submitBtn}>
              Contact Us
            </button>
          </div>
        </form>
      </div>
      <section
        role="dialog"
        aria-hidden={!isAlertOpen}
        className={`${common.screen} ${css.alertCover} ${isAlertOpen ? css.open : ''}`}
      >
        <h1 className="clip">Alert</h1>
        <div className={`dim ${common.cover}`} />
        <div className={css.alertContent}>
          Thanks for contacting us!
          <br />
          Our agents will get back to you soon.
        </div>
        <button type="button" className={css.alertCloseBtn} onClick={closeAlert}>
          <i className="fa-solid fa-xmark" />
        </button>
      </section>
    </section>
  );
};

export default Contact;
