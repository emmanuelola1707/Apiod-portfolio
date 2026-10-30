
import "./About.css";

const skills = [
  "Video editing and sequencing",
  "Transitions and pacing",
  "Music synchronization and sound selection",
  "Text animation and motion graphics",
  "Colour correction and grading",
  "Visual storytelling",
  "Social media video formatting",
];

function About() {
  return (
    
    <section className="about section-padding" id="about">
      <div className="about__intro">
        
        <img
          className="about__portrait"
          src="/images/apiod-portrait.PNG"
          alt="Portrait of the video editor behind APIOD Visuals"
          loading="lazy"
        />

        <p className="section-eyebrow">A LITTLE ABOUT ME</p>
        <h2>Thoughtful edits. Clear stories.</h2>

        <p>
          I'm APIOD, a video editor and content creator focused on bringing stories to life through compelling visuals. I create video content for brands, businesses, and events, combining thoughtful storytelling, engaging pacing, and visual clarity to make every edit intentional and suited to its audience.
Using CapCut as my primary editing tool, I transform raw footage into engaging visual stories that communicate ideas and capture attention.
        </p>
{/* 
        <p>
          My primary editing tool is CapCut, which I use to shape
          footage into engaging visual stories.
        </p> */}
      </div>

      <div className="about__skills">
        <p className="section-eyebrow">TOOLS & CREATIVE SKILLS</p>

        <div className="about__tool">
          <span>PRIMARY EDITING SOFTWARE</span>
          <strong>CapCut</strong>
        </div>

        <h3>Editing skills</h3>

        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
