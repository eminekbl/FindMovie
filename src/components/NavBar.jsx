import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";

function NavBar(props) {
  const [value, setValue] = React.useState("");
  let history = useHistory();
  const linkItems = props.links
    .filter((item) => item.islink)
    .map((item, index) => (
      <Link className="nav-link" to={item.link} href={item.href} key={index}>
        {item.title}
      </Link>
    ));

  function handleSubmit(event) {
    setValue(value.toLowerCase());
    history.push(`/search/${value}`);
  }

  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Link className="navbar-brand" to="/">
        <SiThemoviedatabase size="2em" className='mx-3'/>
        {`FindMovie`}
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">{linkItems}</Nav>
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            className="mr-sm-2"
            placeholder="Search Movies"
            aria-label="Search"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <Button variant="outline-light" type="submit">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
