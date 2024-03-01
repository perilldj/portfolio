import React from 'react'
import './styles/App.css'
import portfolioImage from './assets/portfolioImage.png'
import { School } from '@mui/icons-material';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SkillSection from './components/SkillSection';
import {otherSkills, programmingSkills} from './helpers/Skills';
import ProjectSection from './components/ProjectSection';
import Projects from './helpers/Projects';

function App() {
  return (
    <div>
        <div className="front-page">
            <h3>Hello there!</h3>
            <h3>I'm</h3>
            <h1><strong>Dean Perillo</strong></h1>
            <div id="arrowAnim">
                <div className="arrowSliding">
                    <div className="arrow"></div>
                </div>
                <div className="arrowSliding delay1">
                    <div className="arrow"></div>
                </div>
                <div className="arrowSliding delay2">
                    <div className="arrow"></div>
                </div>
                <div className="arrowSliding delay3">
                    <div className="arrow"></div>
                </div>
            </div>
        </div>
        <br></br>
        <section className="about-me-section">
      <div className="about-me-content">
        <div className="about-me-image">
          <img src={portfolioImage} alt="Your Name" />
        </div>
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            I'm Dean Perillo, a passionate and creative software developer. 
          </p>
          <p>
            My journey in the world of programming began when I was young, making silly little programs with
            Microsoft Small Basic. I programmed as a hobby since then, learning Java and making various games and projects 
            throughout middle school and high school. I then decided to pursue a Bachelor's in Computer and Information Science, attending SUNY
            Polytechnic Institute at Utica, at which I earned my degree.

            Currently, I am enrolled in SUNY New Paltz's Computer Science graduate program in pursuit of a Master's
            degree. I am seeking an internship this spring/summer to improve my skills and gain experience in 
            the field.
          </p>
          <p>
          I have accumulated many skills, from classes at college to various personal projects on topics that I find
            interesting! Much of which is listed below in the skills and projects sections.
          </p>
        </div>
      </div>
    </section>
    <div>
    <h1>Skills</h1>
    <h1>Programming Languages</h1>
    <SkillSection logos={programmingSkills} sliderColor ="#1e2044"></SkillSection>
    <br/>
    <h1>Other Skills</h1>
    <SkillSection logos={otherSkills} sliderColor ="#121329"></SkillSection>
    <br/><br/>
    <h1>Projects</h1>
    <ProjectSection projectData={Projects[0]}></ProjectSection>
    <br/><br/>
    <ProjectSection projectData={Projects[1]}></ProjectSection>
    <br/><br/>
    <ProjectSection projectData={Projects[2]}></ProjectSection>
    <h1>Education</h1>
    <br/><br/>
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2023-2024 (Expected)"
          iconStyle={{background: "#de497a", color: "#fff"}}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">SUNY New Paltz, New Paltz, NY</h3>
          <p> M.S. in Computer Science, Ongoing. </p>
          <p><strong>Current GPA: 3.9/4.0</strong></p>
          <p><em><strong>Course work includes:</strong></em> Programming and Data Structures, Discrete Structures,
                 Web and Database Programming, Artificial Intelligence, Cybersecurity, and Deep Learning.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2020-2023"
          iconStyle={{background: "#9e497a", color: "#fff"}}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">SUNY Polytechnic Institute, Utica, NY</h3>
          <p> B.S. in Computer and Information Science </p>
          <p><strong>GPA: 3.75/4.0 Overall, 3.88/4.0 In-major.</strong></p>
          <p><em><strong>Course work includes:</strong></em>  Computer Fundamentals, Data Structures, Computer Organization,
                  Object Oriented Programming, Operating Systems and Networking, Software Engineering,
                  Git, Docker, Kubernetes, Calculus, Discrete Math, Linear Algebra, Statistical Methods,
                  Information and Knowledge Management, Principles of Programming Languages, Computer
                  Vision & Image Processing, Artificial Intelligence, and Computer Graphics.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2016-2020"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">Wallkill Senior High School, Wallkill, NY</h3>
          <p> High School Advanced Regents Diploma </p>
          <p> Participated in Project Lead the Way</p>
          <p><em><strong>PLTW Courses:</strong></em> Introduction To Engineering Design, Digital Logic,
                 Principles of Engineering, Engineering Design and Development, Automation and Robotics</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </div>
  )
}

export default App