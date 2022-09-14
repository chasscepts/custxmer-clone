import css from './style.module.css';
import common from '../../assets/css/common.module.css';

const Contact = () => {
  const submit = (e) => {
    e.preventDefault();
    alert('Thanks for contacting! Our agents will get back to you soon.');
    return false;
  };

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
    </section>
  );
};

export default Contact;
