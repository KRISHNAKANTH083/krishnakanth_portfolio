import "./styles/Work.css";

interface WorkProject {
  name: string;
  category: string;
  description: string;
  tech: string;
  link?: string;
  webpage?: string;
}

const projects: WorkProject[] = [
  { name: "AI in Life Insurance Underwriting Intelligence", category: "AI / Full Stack", description: "AI-powered web application for automated life insurance risk assessment and underwriting decision support, with OCR-based document processing, AI risk prediction and secure data management.", tech: "React, FastAPI, Python, PostgreSQL, Tesseract.js",link: "https://github.com/teamgraphiks024-jpg/insure-final", webpage: "https://insure-final.vercel.app/" },
  { name: "AI Virtual Trial Room", category: "AI / Computer Vision", description: "AI-powered virtual trial-room application for an interactive clothing try-on experience.", tech: "Node.js, Express.js, JavaScript, EJS, SQLite, HTML, CSS, GitHub, Render", link: "https://github.com/KRISHNAKANTH083/virtual-tryon-app", webpage: "https://virtual-tryon-app-47za.onrender.com/" },
];

const Work = () => {
  return (
    <section className="work-section" id="work">
      <div className="work-heading"><h2>My <span>Work</span></h2></div>

      <div className="work-flex">
        {projects.map((project, index) => (
          <article className="work-box" key={project.name}>
            <div className="work-info">
              <div className="work-title">
                <h3>{String(index + 1).padStart(2, "0")}</h3>
                <div className="work-name">
                  <h4>{project.name}</h4>
                  <p>{project.category}</p>
                </div>
              </div>
              <p className="work-description">{project.description}</p>
              <h4 className="work-tools-title">Tools and features</h4>
              <p className="work-tech">{project.tech}</p>
              <div className="work-links">
                {project.webpage && <a href={project.webpage} target="_blank" rel="noreferrer" className="work-project-link">Live Demo</a>}
                {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="work-project-link">GitHub</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;