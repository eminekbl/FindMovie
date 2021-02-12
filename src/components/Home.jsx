import React from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";

import Categories from "./Categories";

export default function Home(props) {
  const [value, setValue] = React.useState("");
  let history = useHistory();

  function handleSubmit(event) {
    setValue(value.toLowerCase());
    history.push(`/search/${value}`);
  }

  return (
    <div className="justify-content-center">
      <div id="home">
        <div fluid className="landing-text">
          <h1 className="text-light mb-3">Search Movie</h1>
          <Row className="justify-content-center">
            <Col sm={6}>
              <InputGroup
                as={Form}
                className="mb-3 mt-5"
                onSubmit={handleSubmit}
              >
                <FormControl
                  id="form-control"
                  placeholder="'Matrix'"
                  aria-describedby="basic-addon2"
                  size="lg"
                  value={value}
                  onChange={(event) => {
                    setValue(event.target.value);
                  }}
                />
                <InputGroup.Append>
                  <Button
                    id="input-button"
                    variant="outline-secondary"
                    type="submit"
                  >
                    Search
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </div>
      </div>
      <Container>
        <Row className="mt-5 justify-content-center">
          <Col sm={4}>
            <Categories
              category="popular"
              url="https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
            />
          </Col>
          <Col sm={4}>
            <Categories
              category="upcoming"
              url="https://image.tmdb.org/t/p/original/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg"
            />
          </Col>
          <Col sm={4}>
            <Categories
              category="top rated"
              url="https://image.tmdb.org/t/p/original/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
