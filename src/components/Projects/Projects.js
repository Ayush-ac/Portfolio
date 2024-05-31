import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatApp from "../../Assets/Projects/chatApp.avif";
import Currency from "../../Assets/Projects/Currency.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Chat-App"
              description="Created a real-time chat application using the MERN
              stack. This project aimed to provide users with a
              seamless communication platform, featuring instant
              messaging and user authentication functionalities
              Technologies Used:
                •Frontend: React.js, HTML5, CSS3,
                JavaScript
                •Backend: Node.js, Express.js
                •Database: MongoDB
                •Authentication: JSON Web Tokens
                (JWT)
                •Real-Time Communication:
                Socket.IO
                •Version Control: Git, GitHub"
               
              ghLink="https://github.com/Ayush-ac/Chat-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Currency}
              isBlog={false}
              title="Currency-Converter"
              description="🚀 Key Features:

              Real-time currency conversion using the latest exchange rates.
              Support for over 30 currencies worldwide.
              Simple and intuitive interface for quick conversions.
              Ability to customize conversion settings based on your preferences."
              ghLink="https://github.com/Ayush-ac/CurrencyConverter"
              demoLink = "https://currency-converter-lovat-three.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
