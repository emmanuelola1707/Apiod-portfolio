
import { useEffect, useRef, useState } from "react";
import "./Showreel.css";

function Showreel() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`showreel section-padding ${
        isVisible ? "showreel--visible" : ""
      }`}
      id="showreel"
    >
      <div className="section-heading showreel__heading">
        <p className="section-eyebrow">THE HIGHLIGHTS</p>
        <h2>A few seconds. A bigger story.</h2>
        <p>
          A selection of visual moments, edits, and stories.
        </p>
      </div>

      <div className="showreel__frame">
        <div className="showreel__placeholder">
          <div className="showreel__topline">
            <span>AP / VISUALS</span>
            <span>SHOWREEL — 001</span>
          </div>

          <div className="showreel__center">
            <span className="showreel__play" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6.5L18 12L9 17.5V6.5Z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <p className="showreel__title">
              Every frame tells a story.
            </p>

            <p className="showreel__status">
              SHOWREEL COMING SOON
            </p>
          </div>

          <div className="showreel__bottomline">
            <span>30–45 SECONDS</span>
            <span>SELECTED WORK · CREATIVE EDITING</span>
          </div>

          <div className="showreel__progress" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>

      <p className="showreel__note">
        A curated look at the ideas, details, and stories behind the edits.
      </p>
    </section>
  );
}

export default Showreel;
