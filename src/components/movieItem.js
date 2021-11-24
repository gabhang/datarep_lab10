import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// create class movieItem to show movie information
class MovieItem extends Component {
    constructor() {
        super();
        // bind else will get exception
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie() {
        console.log("Delete: " + this.props.movie._id)

        axios.delete('http://localhost:4000/api/movies/' + this.props.movie._id)
            .then(() => {
                // reload data when movie is deleted
                this.props.ReloadData();
            })
            .catch();
    }

    render() {
        return (
            // get every element and put into card using bootstrap
            <div>
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.movie.poster}></img>
                            <footer>
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* button for edit/update by changing url with id*/}
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
                    {/* button for delete */}
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        )
    }
}

export default MovieItem; // export