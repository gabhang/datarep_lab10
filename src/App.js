import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Read from './components/read';
import Create from './components/create';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Edit from './components/edit';

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
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Switch>
            {/* set route to different content */}
            <Route path="/" component={Content} exact />
            <Route path="/read" component={Read} />
            <Route path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App; // export
