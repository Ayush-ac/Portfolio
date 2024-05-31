import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiBootstrap,
  
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiExpress,

} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Container>
  <Row className="justify-content-center pb-2">
    <Col xs={2} md={4} className="tech-icons">
      <DiJavascript1 />
    </Col>
    <Col xs={2} md={4} className="tech-icons">
      <DiNodejs />
    </Col>
  </Row>
  <Row className="justify-content-center">
    <Col xs={2} md={4} className="tech-icons">
      <DiReact />
    </Col>
    <Col xs={2} md={4} className="tech-icons">
      <DiMongodb />
    </Col>
  </Row>
  <Row className="justify-content-center pt-2">
    <Col xs={2} md={4} className="tech-icons">
      <SiNextdotjs />
    </Col>
    <Col xs={2} md={4} className="tech-icons">
      <SiFirebase />
    </Col>
  </Row>
  <Row className="justify-content-center pt-2">
    <Col xs={2} md={4} className="tech-icons">
      <DiBootstrap />
    </Col>
    <Col xs={2} md={4} className="tech-icons">
      <SiExpress/>
    </Col>
  </Row>
</Container>

  );
}

export default Techstack;
