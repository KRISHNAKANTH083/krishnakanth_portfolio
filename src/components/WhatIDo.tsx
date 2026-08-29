import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    const containers = containerRef.current;

    if (ScrollTrigger.isTouch) {
      containers.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", handleClick);
        }
      });
    }

    return () => {
      containers.forEach((container) => {
        if (container) {
          container.removeEventListener("click", handleClick);
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      {/* LEFT SIDE */}
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="what-box">
        <div className="what-box-in">

          {/* Vertical border */}
          <div className="what-border2">
            <svg width="100%" height="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />

              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* WEB DEVELOPMENT */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%" width="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />

                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>WEB DEVELOPMENT</h3>

              <h4>Description</h4>

              <p>
                Building practical web applications and AI-powered systems
                across the frontend, backend and data layers.
              </p>

              <h5>Skillset &amp; tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">React</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">Java</div>
                <div className="what-tags">FastAPI</div>
                <div className="what-tags">PostgreDBMS</div>
                <div className="what-tags">HTML/CSS</div>
                <div className="what-tags">DBMS</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">AI/ML</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* AI / ML */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%" width="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI / ML</h3>

              <h4>Description</h4>

              <p>
                Designing and training machine-learning models with Python,
                including data preprocessing, model evaluation and AI-driven
                problem solving.
              </p>

              <h5>Skillset &amp; tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">Machine Learning</div>
                <div className="what-tags">Data Preprocessing</div>
                <div className="what-tags">Model Evaluation</div>
                <div className="what-tags">AI Solutions</div>
                <div className="what-tags">Computer Vision</div>
                <div className="what-tags">OCR</div>
                <div className="what-tags">Problem Solving</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(event: Event) {
  const container = event.currentTarget as HTMLDivElement;

  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}