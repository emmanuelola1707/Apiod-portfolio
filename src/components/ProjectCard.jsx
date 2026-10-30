
import { useEffect, useRef, useState } from "react";
import "./ProjectCard.css";


function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  const previewRef = useRef(null);
  const modalVideoRef = useRef(null);

  // Autoplay previews only while they are visible.
  useEffect(() => {
    const video = previewRef.current;

    if (!video || !project.videoUrl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [project.videoUrl]);

  // Handle the modal, Escape key, and background scrolling.
  useEffect(() => {
    if (!isOpen) return;

   const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    if (project.videoUrl) {
      modalVideoRef.current?.play().catch(() => {});
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, project.videoUrl]);

  function closeViewer() {
    setIsOpen(false);
  }

  // Choose the correct MIME type based on the video file extension.
function videoType(url) {
    const cleanUrl = url.toLowerCase().split("?")[0];

    if (cleanUrl.endsWith(".mov")) return "video/quicktime";
    if (cleanUrl.endsWith(".webm")) return "video/webm";

    return "video/mp4";
  }

  return (
    <>
      <article className="project-card">
        <button
          type="button"
          className="project-card__media-button"
          onClick={() => setIsOpen(true)}
          aria-label={`Open ${project.title} preview`}
        >
          <div className="project-card__media">
            {project.videoUrl ? (
              <video
                ref={previewRef}
                className="project-card__video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source
                  src={project.videoUrl}
                  type={videoType(project.videoUrl)}
                />
                Your browser does not support video playback.
              </video>
            ) : project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
              />
            ) : (
              <div className="project-card__placeholder">
                <span>PROJECT PREVIEW</span>
              </div>
            )}

            <div className="project-card__overlay">
              <span className="project-card__play">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="project-card__play-icon"
                >
                  <path
                    d="M8 5.5v13l10-6.5z"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <span className="project-card__watch">
                {project.videoUrl ? "Watch project" : "View project"}
              </span>
            </div>

            {project.videoUrl && (
              <span className="project-card__video-label">
                VIDEO
              </span>
            )}
          </div>
        </button>

        <div className="project-card__details">
          <div className="project-card__heading">
            <p className="project-card__category">
              {project.category}
            </p>

            <h3>{project.title}</h3>
          </div>

          <p className="project-card__description">
            {project.description}
          </p>

          <p className="project-card__role">
            <span>ROLE</span>
            {project.role}
          </p>
        </div>
      </article>

      {isOpen && (
        <div
          className="project-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project viewer`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeViewer();
            }
          }}
        >
          <button
            type="button"
            className="project-viewer__close"
            onClick={closeViewer}
            aria-label="Close project viewer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="project-viewer__content">
            <div className="project-viewer__screen">
              {project.videoUrl ? (
                <video
                  ref={modalVideoRef}
                  className="project-viewer__video"
                  autoPlay
                  controls
                  playsInline
                  preload="auto"
                  poster={project.thumbnail || undefined}
                >
                  <source
                    src={project.videoUrl}
                    type={videoType(project.videoUrl)}
                  />
                  Your browser does not support video playback.
                </video>
              ) : project.thumbnail ? (
                <img
                  className="project-viewer__image"
                  src={project.thumbnail}
                  alt={project.title}
                />
              ) : (
                <div className="project-card__placeholder">
                  <span>NO PREVIEW AVAILABLE</span>
                </div>
              )}
            </div>

            <div className="project-viewer__details">
              <p className="project-card__category">
                {project.category}
              </p>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <p className="project-viewer__role">
                <span>ROLE</span>
                {project.role}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
