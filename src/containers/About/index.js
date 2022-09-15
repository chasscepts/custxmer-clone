import css from './style.module.css';
import common from '../../assets/css/common.module.css';
import global from '../../assets/images/slide3.png';

const About = () => (
  <section className={css.container}>
    <h1 className="clip">About Us</h1>
    <div className={css.bannerWrap}>
      <div className={`${common.screen} container ${css.banner}`} />
      <div className={`${common.screen} dim ${common.cover}`} />
    </div>
    <div className={`${common.screen} ${common.narrow} ${css.homeTitle}`}>
      <h2 className={css.h1}>Our Story</h2>
    </div>
    <div className={css.bg}>
      <div className={`${common.narrow} ${css.aboutText}`}>
        <p>
          Est aspernatur esse qui possimus possimus et tenetur expedita sed necessitatibus
          laborum est dolorem dolorum qui voluptatem ipsam. Et nobis assumenda qui enim voluptas
          eos quis ipsam 33 omnis dolores. Vel provident expedita quo quisquam atque aut excepturi
          ut eligendi nihil. Vel autem provident ut eveniet repellendus sit dignissimos voluptatibus
          est provident doloremque et obcaecati repellat.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ut omnis quam aut quia illo ea fugit nemo! Et nihil inventore
          33 accusamus minima eum soluta nemo qui rerum corrupti eum veritatis commodi hic
          reprehenderit quod.
        </p>
        <p>
          33 internos odit qui nihil rerum quasi similique eum voluptates sint! Est quia rerum et
          necessitatibus voluptatibus sit placeat perferendis sit corrupti quia qui maiores saepe.
        </p>
        <p>
          Qui iste veniam ut doloremque laboriosam eum quos sint est explicabo similique est
          quibusdam expedita qui quos illum et magnam saepe. Qui dolorum velit non reiciendis
          dolorum At corporis porro qui Quis possimus et corporis distinctio est totam omnis
          et sint exercitationem.
        </p>
        <p>
          Ut laboriosam molestiae et quaerat quos aut quaerat nesciunt qui voluptatem quis sed
          nulla laboriosam aut exercitationem incidunt eum odio eveniet. Et velit beatae non quia
          possimus qui odio cupiditate. Est dolor ipsa a dolor modi et cupiditate tempore et
          ratione libero non quia internos quo earum tempore sit nihil voluptatum.
          Non soluta officiis et rerum exercitationem ut galisum quos est expedita galisum
          accusantium deserunt et fugit distinctio eum numquam ipsum.
        </p>
        <p>
          Vel quisquam aliquam et esse quia et sint minima id voluptatem facilis qui consectetur
          porro sed amet laborum qui accusantium modi. Qui libero porro ea animi facilis a omnis
          voluptatum eos dolorum dignissimos. Quos quae eos nemo tenetur ut fugiat possimus et
          omnis ipsam ex impedit architecto aut autem asperiores. Non quia quasi id quia
          voluptas et expedita adipisci.
        </p>
      </div>
      <div className={css.imageWrap}>
        <img className={css.global} src={global} alt="global" />
      </div>
      <div className={`${common.narrow} ${css.aboutText}`}>
        <p>
          Est aspernatur esse qui possimus possimus et tenetur expedita sed necessitatibus
          laborum est dolorem dolorum qui voluptatem ipsam. Et nobis assumenda qui enim voluptas
          eos quis ipsam 33 omnis dolores. Vel provident expedita quo quisquam atque aut excepturi
          ut eligendi nihil. Vel autem provident ut eveniet repellendus sit dignissimos voluptatibus
          est provident doloremque et obcaecati repellat.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ut omnis quam aut quia illo ea fugit nemo! Et nihil inventore
          33 accusamus minima eum soluta nemo qui rerum corrupti eum veritatis commodi hic
          reprehenderit quod.
        </p>
        <p>
          33 internos odit qui nihil rerum quasi similique eum voluptates sint! Est quia rerum et
          necessitatibus voluptatibus sit placeat perferendis sit corrupti quia qui maiores saepe.
        </p>
        <p>
          Qui iste veniam ut doloremque laboriosam eum quos sint est explicabo similique est
          quibusdam expedita qui quos illum et magnam saepe. Qui dolorum velit non reiciendis
          dolorum At corporis porro qui Quis possimus et corporis distinctio est totam omnis
          et sint exercitationem.
        </p>
        <p>
          Ut laboriosam molestiae et quaerat quos aut quaerat nesciunt qui voluptatem quis sed
          nulla laboriosam aut exercitationem incidunt eum odio eveniet. Et velit beatae non quia
          possimus qui odio cupiditate. Est dolor ipsa a dolor modi et cupiditate tempore et
          ratione libero non quia internos quo earum tempore sit nihil voluptatum.
          Non soluta officiis et rerum exercitationem ut galisum quos est expedita galisum
          accusantium deserunt et fugit distinctio eum numquam ipsum.
        </p>
        <p>
          Vel quisquam aliquam et esse quia et sint minima id voluptatem facilis qui consectetur
          porro sed amet laborum qui accusantium modi. Qui libero porro ea animi facilis a omnis
          voluptatum eos dolorum dignissimos. Quos quae eos nemo tenetur ut fugiat possimus et
          omnis ipsam ex impedit architecto aut autem asperiores. Non quia quasi id quia
          voluptas et expedita adipisci.
        </p>
      </div>
    </div>
  </section>
);

export default About;
