import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.jpg";
import project from "../assets/projects/project.png";
import lift from "../assets/projects/lift.png";
// import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="RTC-Application"
              description="I've designed a real-time chat application using HTML, CSS, and ReactJS, incorporating the Socket.IO library for enhanced communication. The CSS-styled frontend offers an intuitive interface. ReactJS facilitates dynamic updates, while Socket.IO enables bidirectional communication for instant messaging. Users experience seamless, responsive chats with messages updating in real-time. This project showcases proficiency in ReactJS and Socket.IO, providing an engaging user experience.Through the integration of ReactJS and Socket.IO, this chat application demonstrates the ability to create interactive, real-time features. The combination of frontend development with ReactJS and the communication capabilities of Socket.IO results in a seamless and dynamic user experience."
              ghLink="https://github.com/KushagraGupta15/RTC-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Myntra Clone"
              description="I've crafted a Myntra clone using HTML, CSS, and JavaScript, closely mimicking the user interface and visual elements of the original Myntra platform. The application employs responsive design principles for seamless experiences across devices. JavaScript enhances interactivity, providing features like dynamic product displays. The use of a frontend library or framework, such as React, streamlines component-based development for maintainability. Depending on the complexity, backend technologies like Node.js and Express may handle server-side logic and data storage. The clone includes typical e-commerce functionalities such as a product catalog and shopping cart. This project serves as a hands-on exploration of web development and e-commerce features."

              ghLink="https://github.com/KushagraGupta15/Myntra-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Weather App"
              description="I've developed a weather app using HTML, CSS, and JavaScript, integrating a ready-made API for accurate weather information. The app allows users to input a location, triggering API requests to fetch and display real-time weather conditions. The interface is styled with CSS for a user-friendly experience across devices. JavaScript handles user input, validates locations, and dynamically updates the UI with fetched weather data. The integration of a ready-made API ensures up-to-date information on temperature, conditions, and forecasts. Optional features include unit conversion and geolocation for added convenience. Thorough testing has been conducted to ensure functionality and responsiveness, making this app a practical showcase of API integration in web development."
              ghLink="https://github.com/KushagraGupta15/Weather-App-Mini"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Apple Vision Pro Website Clone"
              description="I've developed a clone of the Apple Vision Pro website using HTML, CSS, and JavaScript. The project closely replicates Apple's design aesthetics, including color schemes and typography. Responsive design ensures a seamless experience across various devices. Optional integration of React facilitates component-based development for enhanced modularity. Media assets such as images and videos have been curated to mimic Apple's original content. Interactive elements, powered by JavaScript, provide a dynamic user experience. The navigation structure mirrors Apple's menu layout for familiar user interaction. The project focuses on optimization, employing techniques like image compression for fast loading times. Thorough testing has been conducted across browsers and devices to ensure consistency and eliminate bugs. This clone serves as both a learning exercise and a showcase of web development skills."
              ghLink="https://github.com/KushagraGupta15/Apple-Vision-Pro-Frontend-Clone-"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects