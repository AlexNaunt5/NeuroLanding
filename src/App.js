import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Player } from 'video-react';
import { Navbar, NavDropdown, Nav, Form, Button, FormControl, Container, Card, CardDeck } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="light" className="Navbar">
          <Navbar.Brand href="#home">Codo$</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Video</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <p>
          Codo$
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/neurofinanzasac/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saber mas
        </a>
      </header>
      <Container className="Container">
        <Player
          playsInline
          poster="/assets/poster.png"
          src="C:\Users\alexn\NeuroFinanzas\Landing\FirstComponent\my_last_app\src\asses\dinero.mp4"
        />
      </Container>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="C:\Users\alexn\NeuroFinanzas\Landing\FirstComponent\my_last_app\src\asses\portada.jpg" />
          <Card.Body>
            <Card.Title>Testimonio 1</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Enrique</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="C:\Users\alexn\NeuroFinanzas\Landing\FirstComponent\my_last_app\src\asses\portada.jpg" />
          <Card.Body>
            <Card.Title>Testimonio 2</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
        content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Diego</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="C:\Users\alexn\NeuroFinanzas\Landing\FirstComponent\my_last_app\src\asses\portada.jpg" />
          <Card.Body>
            <Card.Title>Testimonio 3</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Alex</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default App;
