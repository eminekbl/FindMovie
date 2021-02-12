import React from "react";
import {Link, useParams } from "react-router-dom";
import { Container, Col, Row,Button } from "react-bootstrap";
export default function Details(props) {
  const params = useParams();
  const { query } = params;
  const [result, setResult] = React.useState("");
  React.useEffect(() => {
    getMovie();
  }, []);
  function getMovie(event) {
    fetch(
      `https://api.themoviedb.org/3/movie/${query}?api_key=28ca7c57c8782bba24844aebcf7d3ca4`
    )
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
      })
      .catch((error) => console.log("error", error));
  }
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={6}>
          <img
            src={["https://image.tmdb.org/t/p/w342", result.poster_path].join(
              ""
            )}
            alt=""
          />
        </Col>
        <Col sm={6}>
          <div className="text-light">
            <h1>{result.title}</h1>
            <h4>{`release date: ${result.release_date}`}</h4>
            <h6>{result.tagline}</h6>
            <br />
            <p>{result.overview}</p>
          </div>
          <Button id="input-button" as={Link}
        to={`/Category/similar/${query}`} >Find Similar Movies</Button>
        </Col>
      </Row>
    </Container>
  );
}
