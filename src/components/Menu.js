import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Menu() {
  return (
    <div>
      <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand>
            <strong>SACE</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="accueil">
                <Nav.Link>Accueil</Nav.Link>
              </LinkContainer>
              <LinkContainer to="formulaire">
                <Nav.Link>Formulaire</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    </div>
  );
}

export default Menu;
