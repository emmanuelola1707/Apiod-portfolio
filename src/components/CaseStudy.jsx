
import "./CaseStudy.css";

function CaseStudy() {
  return (
    <section className="case-study section-padding" id="case-study">
      <div className="case-study__label">
        FEATURED CASE STUDY
      </div>

      <div className="case-study__content">
        <p className="section-eyebrow">CORPORATE COMMUNICATION</p>
        <h2>Building a story through video.</h2>

        <p>
          An overview of video editing and content creation work
          completed for a pharmaceutical company, subject to approval
          of the project details for public use.
        </p>

        <div className="case-study__details">
          <div>
            <span>INDUSTRY</span>
            <strong>Pharmaceuticals</strong>
          </div>

          <div>
            <span>FOCUS</span>
            <strong>Video & Digital Media</strong>
          </div>
        </div>

        <p className="case-study__note">
          Project details will be published only with the client's permission.
        </p>
      </div>
    </section>
  );
}

export default CaseStudy;
