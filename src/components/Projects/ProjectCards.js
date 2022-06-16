import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiFontSize, BiLinkExternal } from "react-icons/bi";
import { Badge } from '@chakra-ui/react'

function ProjectCards(props) {
  console.log(props)
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <p className="badge" style={{fontSize:"16px"}}>Reactjs</p>
        &nbsp;
        &nbsp;
        <p className="badge" style={{fontSize:"16px"}}>Node</p>
        &nbsp;
        &nbsp;
        <p className="badge" style={{fontSize:"16px"}}>Expressjs</p>
        &nbsp;
        &nbsp;
        <p className="badge" style={{fontSize:"16px"}}>MongoDb</p>
        &nbsp;
        &nbsp;
        <p className="badge" style={{fontSize:"16px"}}>Chakra UI</p>
        &nbsp;
        &nbsp;
        {
          props.socketio ?  <p className="badge" style={{fontSize:"16px"}}>Socket-io</p>:null 
        }
        <br />
        <br />
        <Button variant="success" href={props.glink} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Github"}
        </Button>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <Button variant="primary" href={props.nlink} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Netlify"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
