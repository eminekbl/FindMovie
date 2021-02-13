import React from "react";
import { Link} from "react-router-dom";
import {  Card } from "react-bootstrap";
import "./MovieCard.css";
function Categories(props) {
  return (
    <div id="cardColumns">
      <Card
        id="card"
        as={Link}
        to={`/Category/${props.category}/0`}
      >
        <Card.Img id="cardImg" src={props.url} />
        <Card.Body>
          <Card.ImgOverlay className="overlay">
            <Card.Title id="title">{props.category}</Card.Title>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Categories;
