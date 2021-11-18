import React, { Component } from 'react';
import axios from 'axios';

// create class Read with message
class Edit extends Component {
    constructor() {
        super();
        // bind
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    // lifecycle hook
    componentDidMount() {
        // pull parameter out 
        console.log(this.props.match.params.id)

        // read from database
        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
            .then(response => {
                // set state with data from database
                this.setState({
                    _id: response.data._id,
                    Title: response.data.title,
                    Year: response.data.year,
                    Poster: response.data.poster
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // invoke method when form submitted by output alert to screen with info
    handleSubmit(event) {
        alert("Movie Name: " + this.state.Title + "\nRelease Year: " + this.state.Year + "\nPoster Url: " + this.state.Poster);
        event.preventDefault(); // prevent crashing

        // create newMovie object
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id: this.state._id
        }

        // send newMovie object to server
        axios.put('http://localhost:4000/api/movies/' + this.state._id, newMovie)
            .then(response => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });

        // axios.post('http://localhost:4000/api/movies', newMovie)
        //     .then((res) => { // If successful
        //         console.log(res)
        //     })
        //     .catch((err) => { // In case of an error
        //         console.log(err)
        //     });
    }

    // will change name value in state when input changed
    onChangeMovieName(event) {
        this.setState({
            Title: event.target.value
        })
    }

    // will set year value in state when input changed
    onChangeMovieYear(event) {
        this.setState({
            Year: event.target.value
        })
    }

    // will set poster value in state when input changed
    onChangeMoviePoster(event) {
        this.setState({
            Poster: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>This is my Edit component!</h2>
                {/* create form */}
                <form onSubmit={this.handleSubmit}>
                    {/* input name */}
                    <div className="form-group">
                        <label>Change Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />
                    </div>
                    {/* input year */}
                    <div className="form-group">
                        <label>Change Release Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear}
                        />
                    </div>
                    {/* input poster */}
                    <div className="form-group">
                        <label>Change Poster Url: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeMoviePoster}
                        />
                    </div>
                    {/* add submit button */}
                    <div>
                        <input type="submit" value="Edit Movie" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Edit; // export