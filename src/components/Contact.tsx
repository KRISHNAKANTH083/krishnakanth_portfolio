import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>

            <p>
              <a
                href="mailto:krishnakanthpm98@gmail.com"
                data-cursor="disable"
              >
                krishnakanthpm98@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>

            {/* GitHub */}
            <a
              href="https://github.com/KRISHNAKANTH083"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/krishnakanth-m-522b9b3a3"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-resume"
            >
              <TbDownload /> Download Resume
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Built by <span>Krishnakanth M</span>
            </h2>

            <h5>
              <MdCopyright /> 2026 Krishnakanth M. All Rights Reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;