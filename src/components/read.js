import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

// create class Read with movie information and message
class Read extends Component {
    // lifecycle method
    componentDidMount() {
        // get movie information from api
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
        .then((response)=>{
            this.setState({mymovies:response.data.movies}) // update state
        }) // getting http response
        .catch((error)=>{
            console.log(error);
        }); // if execption happens
    }
    
    state = {
        mymovies: []
    };

    render() {
        return (
            <div>
                <h2>This is my Read component!</h2>
                <Movies films={this.state.mymovies}></Movies>
            </div>
        )
    }
}

export default Read; // export