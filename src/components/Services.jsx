
import { useEffect, useRef, useState } from "react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Corporate Video Editing",
    description:
      "Company introductions, internal communications, and corporate presentations.",
  },
  {
    number: "02",
    title: "Brand & Product Videos",
    description:
      "Product showcases, promotional videos, and brand storytelling.",
  },
  {
    number: "03",
    title: "Social Media Content",
    description:
      "Instagram Reels, TikTok videos, YouTube Shorts, and platform-specific edits.",
  },
  {
    number: "04",
    title: "Event Highlights",
    description:
      "Event recaps, conferences, celebrations, and promotional highlights.",
  },
  {
    number: "05",
    title: "Talking-Head Videos",
    description:
      "Interviews, educational videos, personal brands, and business content.",
  },
  {
    number: "06",
    title: "Creative Editing & Motion Graphics",
    description:
      "Animated text, transitions, visual effects, and typography-driven edits.",
  },
];

function Services() {
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
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`services section-padding ${
        isVisible ? "services--visible" : ""
      }`}
      id="services"
    >
      <div className="section-heading">
        <p className="section-eyebrow">WHAT I DO</p>
        <h2>Editing with purpose.</h2>
        <p>
          Creative support for stories, brands, and businesses.
        </p>
      </div>

      <div className="services__grid">
        {services.map((service, index) => (
          <article
            className="service-card"
            key={service.number}
            style={{ "--card-index": index }}
          >
            <span className="service-card__number">
              {service.number}
            </span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <span
              className="service-card__arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
