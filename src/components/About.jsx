import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SiThemoviedatabase } from "react-icons/si";
export default function About(props) {
  return (
    <Container className="text-light text-center">
      <Row className="justify-content-center mt-5">
        <h1>
          <SiThemoviedatabase size="10vh" /> About FındMovie
        </h1>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col sm={6}>
          <p>
            Using the search bar on the home page, you can search for movies in
            'the movie app'. You can check the movie overview and release date
            and search for similar movies. The Movie Database API is used on
            this website, be sure to change the api key before cloning.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
