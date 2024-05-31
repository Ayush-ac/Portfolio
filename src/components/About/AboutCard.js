import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayush Awasthi </span>
            , a graduate of <span className="purple"> Pranveer Singh Institute Of Technology, </span>Kanpur.
            <br />
            "with a Master of Computer Applications (MCA) degree earned in 2022. Over the past 1.5 years, I've delved deeply into various aspects of 
            web development, honing my skills in front-end and back-end technologies, database 
            management, and system architecture. Fueled by a passion for technology and a relentless 
            drive for innovation, I'm excited to leverage my expertise to make meaningful contributions 
            in the dynamic field of web development."
            <br />
            
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs and Cosmology
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "My greatest competition is, only me".{" "}
          </p>
          <footer className="blockquote-footer">Ayush Awasthi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
