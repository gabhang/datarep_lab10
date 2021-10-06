import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/navbar';
import Container from 'react-bootstrap/container';
import Nav from 'react-bootstrap/nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  // on render
  render() {
    return (
      <Router>
        <div className="App">
          {/* create navbar using bootstrap */}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/footer">Footer</Nav.Link>
                <Nav.Link href="/header">Header</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Switch>
            {/* set route to different content */}
            <Route path="/" exact><Content /></Route>
            <Route path="/header" exact><Header /></Route>
            <Route path="/footer" exact><Footer /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App; // export
