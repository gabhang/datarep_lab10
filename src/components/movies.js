import React, { Component } from 'react';
import MovieItem from './movieItem';

// create class Movies with individual movies listed
class Movies extends Component {
    render() {
        // get films and map to individual elements/film
        return this.props.movies.map((movie) => {
            return <MovieItem movie={movie} key={movie._id} ReloadData={this.props.ReloadData}></MovieItem>
        });
    }
}

export default Movies; // export