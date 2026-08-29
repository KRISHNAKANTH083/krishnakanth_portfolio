import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Internship Training</h4>
                <h5>AJTECH Research Labs</h5>
              </div>
              <h3>JUNE 2025</h3>
            </div>
            <p>
              Designed and trained machine-learning models using Python, performed data
              preprocessing and model evaluation, and worked on AI-driven problem solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Science & Engineering</h4>
                <h5>Sri Ramakrishna Institute of Technology</h5>
              </div>
              <h3>2023 – PRESENT</h3>
            </div>
            <p>
              Computer Science and Engineering undergraduate building skills across programming,
              web development, databases, AI/ML and practical software projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Full Stack Workshop</h4>
                <h5>Sri Ramakrishna Institute of Technology</h5>
              </div>
              <h3>WORKSHOP</h3>
            </div>
            <p>
              Gained hands-on experience in full-stack concepts, database integration and modern
              development practices.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
