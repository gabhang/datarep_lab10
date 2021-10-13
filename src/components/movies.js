import React, { Component } from 'react';
import MovieItem from './movieItem';

// create class Movies with individual movies listed
class Movies extends Component {
    render() {
        // get films and map to individual elements/film
        return this.props.films.map((film) => {
            return <MovieItem myfilm={film} key={film.imdbID}></MovieItem>
        });
    }
}

export default Movies; // export