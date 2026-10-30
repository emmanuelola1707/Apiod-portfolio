
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay" aria-hidden="true" id="move" >
        <span id="apiod">APIOD </span> Visuals
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">
          VIDEO EDITING · VISUAL STORYTELLING
        </p>

        <h1>
          Turning Ideas Into
          <br />
          <span>Visual Stories</span>
          <br />
          That Connect.
        </h1>

        <p className="hero__description">
          I create engaging video content for brands, businesses,
          and organizations, combining storytelling, thoughtful
          editing, and visual creativity to bring ideas to life.
        </p>

        <div className="hero__actions">
          <a className="hero__button hero__button--primary" href="#work">
            View My Work <span aria-hidden="true">↗</span>
          </a>

          <a className="hero__button hero__button--secondary" href="#contact">
            Let's Work Together
          </a>
        </div>
      </div>

      {/* <div className="hero__visual" aria-hidden="true">
        <div className="hero__visual-overlay" />
        <span className="hero__visual-label">
          STORY FIRST. EVERY FRAME.
        </span>
        <span className="hero__visual-number">01 / 05</span>
      </div> */}

      <div className="hero__bottom">
        <span>INDEPENDENT VIDEO EDITOR</span>
        <span>CREATIVE EDITING · STORYTELLING</span>
      </div>
    </section>
  );
}

export default Hero;
