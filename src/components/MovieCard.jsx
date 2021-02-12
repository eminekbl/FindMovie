import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./MovieCard.css";
function MovieCard(props) {
  let history = useHistory();

  function handleClick(event) {
    history.push(`/search/detail/${event}`);
    console.log("tiklandi");
  }
  return (
    <Container className="mt-5">
      <Row>
        {props.result.map((item, index) => (
          <Col id="cardColumns" sm={4} key={index} className="mb-3">
            <Card id="card" style={{ width: "18rem" }}>
              <Card.Img
                id="cardImg"
                variant="top"
                src={[
                  "https://image.tmdb.org/t/p/original",
                  item.poster_path,
                ].join("")}
                alt="https://image.freepik.com/free-vector/vector-metal-icon_1394-1748.jpg"
              />
              <Card.Body>
                <Button id="button" as={Link} to={`/Details/${item.id}`}>
                  incele
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MovieCard;
