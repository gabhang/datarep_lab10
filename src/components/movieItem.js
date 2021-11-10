import React, { Component } from 'react';
import Card from 'react-bootstrap/card';

// create class movieItem to show movie information
class MovieItem extends Component {
    render() {
        return (
            // get every element and put into card using bootstrap
            <div>
                <Card>
                    <Card.Header>{this.props.myfilm.title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.myfilm.poster}></img>
                            <footer>
                                {this.props.myfilm.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default MovieItem; // export