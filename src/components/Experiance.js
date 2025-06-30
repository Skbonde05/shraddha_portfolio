import React from "react";
import backgroundImage from "../assets/img/bg.jpg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Optional: if you want icons
// import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <>
      <div
        className="exp-title"
        style={{
          textAlign: "center",
          padding: "20px 0",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

        }}
      >
        <h3 style={{ marginBottom: "10px", color: "#aaa" }}>
          WHAT I HAVE DONE SO FAR
        </h3>
        <h1 style={{ fontWeight: "bold" }}>WORK EXPERIENCE</h1>
      </div>

      <div className="experience" id="experiences">
        <VerticalTimeline lineColor="rgba(170, 54, 124, 0.5)">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="July 2023"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer Intern
            </h3>
            <h5>DK Robotics</h5>
            <p>
              ◦ Worked as a Web Development Intern, tasked with designing and
              developing the company website using HTML, CSS, and JavaScript.
            </p>
            <p>
              ◦ Strengthened frontend development skills and gained hands-on
              exposure to real-world project workflows.
            </p>
            <p>
              ◦ Learned about clean code, cross-browser compatibility, and
              building user-friendly interfaces aligned with branding.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2024"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Agile & Six Sigma Intern
            </h3>
            <h5>Pursullence</h5>
            <p>
              ◦ Completed one-month internship in Agile & Six Sigma Yellow Belt
              Certification.
            </p>
            <p>
              ◦ Worked on process improvement tasks using Lean and Agile
              frameworks.
            </p>
            <p>
              ◦ Applied Monte Carlo Simulation to assess variability and risks
              in workflows.
            </p>
            <p>
              ◦ Gained insights into quality control, data-driven decisions, and
              efficiency.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025-Feb 2025"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Web Development Intern
            </h3>
            <h5>MotionCut</h5>
            <p>
              ◦ Successfully completed a 1-month internship focused on frontend web development.
            </p>
            <p>
              ◦ Contributed to project-based tasks, applying theoretical knowledge to real-world scenarios.
            </p>
            <p>
              ◦ Demonstrated strong problem-solving skills and dedication to assigned projects.
            </p>
            <p>
              ◦ Enhanced skills in HTML, CSS, JavaScript, and modern frontend frameworks.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
}

export default Experience;
