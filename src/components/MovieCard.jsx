import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./MovieCard.css";
function MovieCard(props) {
  let history = useHistory();

  function handleClick(event) {
    history.push(`/Details/${event}`);
    console.log("tiklandi");
  }
  return (
    <Container className="mt-5">
      <Row className='justify-content-center'>
        {props.result.slice(0, 12).map((item, index) => (
          <Col id="cardColumns" ml={4} key={index} className="mb-5">
            <Card id="card" >
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
                <Button id="button" onClick={()=>(handleClick(item.id))}>
                 <span>More</span> 
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
