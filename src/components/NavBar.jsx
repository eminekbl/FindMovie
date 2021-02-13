import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar(props) {
  const linkItems = props.links
    .filter((item) => item.islink)
    .map((item, index) => (
      <Nav.Link as={Link} to={item.link} key={index}>
        {item.title}
      </Nav.Link>
    ));

  return (
    <div>
      <Navbar className="navbar" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <SiThemoviedatabase size="2em" />
          {`FindMovie`}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">{linkItems}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
