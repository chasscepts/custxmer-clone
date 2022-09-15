import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import css from './style.module.css';
import campaign from '../../assets/images/campaign.jpg';

const services = [
  {
    title: 'Service Title One',
    poster: campaign,
    text: 'Ut illum sapiente ea adipisci blanditiis id iusto suscipit in accusantium ducimus? Ad saepe unde eum maiores quibusdam ut voluptatibus minima et animi voluptatum. Ut quis veritatis et similique sequi in laborum autem.',
    link: 'https://github.com/Custxmer/Simple-Recruitment-Take-Home-Project',
  },
  {
    title: 'Service Title Two',
    poster: campaign,
    text: 'Ut illum sapiente ea adipisci blanditiis id iusto suscipit in accusantium ducimus? Ad saepe unde eum maiores quibusdam ut voluptatibus minima et animi voluptatum. Ut quis veritatis et similique sequi in laborum autem.',
    link: 'https://github.com/Custxmer/Simple-Recruitment-Take-Home-Project',
  },
  {
    title: 'Service Title Three',
    poster: campaign,
    text: 'Ut illum sapiente ea adipisci blanditiis id iusto suscipit in accusantium ducimus? Ad saepe unde eum maiores quibusdam ut voluptatibus minima et animi voluptatum. Ut quis veritatis et similique sequi in laborum autem.',
    link: 'https://github.com/Custxmer/Simple-Recruitment-Take-Home-Project',
  },
  {
    title: 'Service Title Four',
    poster: campaign,
    text: 'Ut illum sapiente ea adipisci blanditiis id iusto suscipit in accusantium ducimus? Ad saepe unde eum maiores quibusdam ut voluptatibus minima et animi voluptatum. Ut quis veritatis et similique sequi in laborum autem.',
    link: 'https://github.com/Custxmer/Simple-Recruitment-Take-Home-Project',
  },
];

const Service = ({ service }) => {
  const [translate, setTranslate] = useState('100%');
  const link = useRef(null);

  useEffect(() => {
    const a = link.current;

    if (translate === '100%') {
      setTranslate(`${a.clientHeight - 100}px`);
      return;
    }

    a.addEventListener('mouseenter', () => {
      if (translate) {
        setTranslate(0);
      }
    });

    a.addEventListener('mouseleave', () => {
      if (!translate) {
        setTranslate(`${a.clientHeight - 100}px`);
      }
    });
  });

  return (
    <a
      ref={link}
      href={service.link}
      className={css.serviceLink}
      style={{ backgroundImage: `url(${service.poster})` }}
    >
      <section className={css.serviceSection} style={{ transform: `translate(0, ${translate})` }}>
        <h1 className={css.serviceTitle}>{service.title}</h1>
        <p>{service.text}</p>
        <span className={css.serviceLearnMore}>Learn More</span>
      </section>
    </a>
  );
};

Service.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string,
    poster: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

const Services = () => (
  <section className={`container ${css.container}`}>
    <h1 className={css.heading}>Our Services</h1>
    <p>
      Lorem ipsum dolor sit amet. Qui dolorum consectetur sit quia necessitatibus qui voluptas error
      illo voluptate aut eius molestias aut obcaecati dolorum qui illum placeat. Et voluptatem omnis
      qui voluptatem veniam vel assumenda consequuntur. Ab accusamus dolores quo exercitationem
      velit sit aspernatur recusandae non sunt velit.
    </p>
    <div className={css.grid}>
      {services.map((service) => <Service key={service.title} service={service} />)}
    </div>
  </section>
);

export default Services;
