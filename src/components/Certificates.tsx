import "./styles/Certificates.css";

interface Certificate {
  title: string;
  issuer: string;
  description: string;
  file: string;
}

const certificates: Certificate[] = [
  { title: "Dynamic Programming Camp", issuer: "AlgoUniversity", description: "Focused, hands-on training in advanced dynamic programming techniques including Matrix Exponentiation and SQRT Decomposition — strengthening core problem-solving and algorithmic thinking for competitive programming and technical interviews.", file: "/certificates/krishnakanth-m.png" },
  { title: "Linguaskill Business English", issuer: "Cambridge English", description: "An internationally recognized assessment of professional English proficiency across listening, reading, speaking, and writing — validating clear communication skills for workplace and client-facing scenarios.", file: "/certificates/LinguaSkillCertificate.pdf" },
  { title: "Design Thinking – A Primer", issuer: "NPTEL, IIT Madras", description: "An introduction to human-centered design methodology — empathizing with users, defining problems clearly, and iterating on solutions, applied to building more thoughtful, user-focused products.", file: "/certificates/Design_Thinking.pdf" },
  { title: "Generative AI Mastermind", issuer: "INTOPZ", description: "A 3-day intensive workshop covering practical AI tools, prompt engineering, and automation workflows — building applied skills in using generative AI for real-world project development.", file: "/certificates/Krishnakanth_M_.pdf" },
];

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-heading"><h2>My <span>Certificates</span></h2></div>

      <div className="certificates-scroll-row">
        {certificates.map((cert, index) => (
          <article className="certificate-box" key={cert.title}>
            <div className="certificate-info">
              <div className="certificate-title-row">
                <h3>{String(index + 1).padStart(2, "0")}</h3>
                <div className="certificate-name">
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer}</p>
                </div>
              </div>
              <h4 className="certificate-score-title">About this certificate</h4>
              <p className="certificate-score">{cert.description}</p>
              <div className="certificate-links">
                <a href={cert.file} target="_blank" rel="noreferrer" className="certificate-project-link">View Certificate</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificates;