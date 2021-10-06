import React, { Component } from 'react';

// create class Content with words and time
class Content extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Content; // export