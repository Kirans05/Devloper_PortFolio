import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Chat_logo from "../../images/chat_logo.jpg"
import Diet_logo from "../../images/diet_logo.jpg"
import Pizza_logo from "../../images/pizza_logo.jpg"
import Shoe_logo from "../../images/shoe_logo.jpg"

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
              imgPath={Chat_logo}
              isBlog={false}
              title="Random Chat"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Chakra-UI. Have features which allows user for realtime messaging."
              glink="https://github.com/Kirans05/frondEnd_chatApp"
              nlink="https://random-chat-app-2022.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Diet_logo}
              isBlog={false}
              title="Diet Suggestion"
              description="Diet and nutrition app is a type of nutrition tracking app that helps users lose weight, be healthy, and get stronger."
              glink="https://github.com/Kirans05/capstone_project_frontEnd_code"
              nlink="https://bespoke-madeleine-c013f7.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pizza_logo}
              isBlog={false}
              title="Pizza Booking"
              description="The Popularity of food delivery apps is increasing presently as they offer usres to  quickly and conveniently ordering food directly to their home or office from their favourite restaurants"
              glink="https://github.com/Kirans05/pizza-app-fron-end-2022"
              nlink="https://pizza-app-2022.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shoe_logo}
              isBlog={false}
              title="Shoe Ecommerce Website"
              description="This is your place for athletic and easygoing shoes for the entire family from many name brands. You’ll discover styles for ladies, men and children from Top Most brands"
              glink="https://github.com/Kirans05/shoe-app-front-end"
              nlink="https://shoe-app-2022.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
