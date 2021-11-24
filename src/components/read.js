import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

// create class Read with movie information and message
class Read extends Component {

    constructor() {
        super();
        // bind
        this.ReloadData = this.ReloadData.bind(this);
    }

    // reload when movie deleted
    ReloadData() {
        // get movie information from our own api
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                this.setState({ movies: response.data }) // update state
            }) // getting http response
            .catch((error) => {
                console.log(error);
            }); // if execption happens
    }

    // lifecycle method
    componentDidMount() {
        // get movie information from our own api
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                this.setState({ movies: response.data }) // update state
            }) // getting http response
            .catch((error) => {
                console.log(error);
            }); // if execption happens
    }

    state = {
        movies: []
    };

    render() {
        return (
            <div>
                <h2>This is my Read component!</h2>
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}></Movies>
            </div>
        )
    }
}

export default Read; // export