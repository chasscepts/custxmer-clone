import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './style.module.css';
import mobile1 from '../../assets/images/mobile1.webp';
import mobile2 from '../../assets/images/mobile2.webp';
import mobile3 from '../../assets/images/mobile3.webp';
import cartoon1 from '../../assets/images/cartoon1.webp';
import cartoon2 from '../../assets/images/cartoon2.webp';
import slideImage1 from '../../assets/images/slide1.png';
import slideImage2 from '../../assets/images/slide2.jpg';
import slideImage3 from '../../assets/images/slide3.png';
import Slider from '../Slider';

const slides = [
  {
    title: 'Main Heading One',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: slideImage1,
    link: 'https://github.com/Custxmer/Simple-Recruitment-Take-Home-Project',
  },
  {
    title: 'Main Heading Two',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    image: slideImage2,
    link: 'https://github.com/Custxmer/Simple-Recruitment-Take-Home-Project',
  },
  {
    title: 'Main Heading Three',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.',
    image: slideImage3,
    link: 'https://github.com/Custxmer/Simple-Recruitment-Take-Home-Project',
  },
];

const articles = [
  {
    title: 'Title 1',
    iconClass: 'fa-solid fa-image',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://github.com/Custxmer/Simple-Recruitment-Take-Home-Project',
  },
  {
    title: 'Title 2',
    iconClass: 'fa-solid fa-image',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
    link: 'https://github.com/Custxmer/Simple-Recruitment-Take-Home-Project',
  },
  {
    title: 'Title 3',
    iconClass: 'fa-sharp fa-solid fa-city',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
    link: 'https://github.com/Custxmer/Simple-Recruitment-Take-Home-Project',
  },
  {
    title: 'Title 4',
    iconClass: 'fa-sharp fa-solid fa-city',
    text: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et.',
    link: 'https://github.com/Custxmer/Simple-Recruitment-Take-Home-Project',
  },
];

const Slide = ({ slide }) => (
  <div className={css.slide}>
    <div className={css.slideTextWrap}>
      <h1 className={css.slideTitle}>{slide.title}</h1>
      <div className={css.slideText}>
        {slide.text}
      </div>
      <a href={slide.link} target="_blank" rel="noreferrer">Read More</a>
    </div>
    <div className={css.slideImageWrap}>
      <img className={css.slideImage} alt="slide" src={slide.image} />
    </div>
  </div>
);

Slide.propTypes = {
  slide: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

const ArticlesCard = ({
  title,
  iconClass,
  text,
  link,
}) => (
  <section className={css.articleCard}>
    <div className={css.articleIconWrap}>
      <i className={iconClass} />
    </div>
    <h1 className={css.articleTitle}>{title}</h1>
    <div className={css.articleText}>{text}</div>
    <div className={css.articleLinkWrap}>
      <a className={css.articleLink} href={link} target="_blank" rel="noreferrer">Read More</a>
    </div>
  </section>
);

ArticlesCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const Body = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className={css.container}>
      <section>
        <div className="container">
          <h1 className={css.heading}>
            Manage and contact your service providers by simply tapping your phone!
          </h1>
          <div className={css.bannerWrap}>
            <div className={css.bannerWrapInner}>
              <img className={css.bgMobile} alt="mobile app" src={mobile2} />
              <img className={css.bgMobile} alt="mobile app" src={mobile3} />
              <img className={css.fgMobile} alt="mobile app" src={mobile1} />
              <img className={css.cartoon1} alt="mobile app" src={cartoon1} />
              <img className={css.cartoon2} alt="mobile app" src={cartoon2} />
            </div>
          </div>
        </div>
      </section>
      <section className={css.sliderSection}>
        <h1 className="clip">Slide Show</h1>
        <div className={`container ${css.sliderContainer}`}>
          <div className={css.slideWrap}>
            <Slider Slide={Slide} slides={slides} onSlideCompleted={setSlideIndex} paused />
          </div>
          <ol aria-label="Slide Index Indicator" className={css.slideIndexIndicatorWrap}>
            <li aria-current={slideIndex === 0}>
              <span className={`${css.slideIndexIndicator} ${slideIndex === 0 ? css.active : ''}`} />
            </li>
            <li aria-current={slideIndex === 1}>
              <span className={`${css.slideIndexIndicator} ${slideIndex === 1 ? css.active : ''}`} />
            </li>
            <li aria-current={slideIndex === 2}>
              <span className={`${css.slideIndexIndicator} ${slideIndex === 2 ? css.active : ''}`} />
            </li>
          </ol>
        </div>
      </section>
      <section className={css.articleSection}>
        <h1 className="clip">Articles</h1>
        <div className={`container ${css.articesContainer}`}>
          <div className={css.articlesWrap}>
            {articles.map((article) => (
              <ArticlesCard
                key={article.title}
                title={article.title}
                iconClass={article.iconClass}
                text={article.text}
                link={article.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
