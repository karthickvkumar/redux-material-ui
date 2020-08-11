import React, { Component } from 'react';

class ProfileClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }
    showText() {
        this.setState({
            message: "This is profile page!"
        })
    }

    render() {
        return (
            <div>
                <h2>Profile Page</h2>
                <h2>{this.state.message}</h2>
                <button onClick={() => { this.showText() }}>Click</button>
            </div>
        );
    }
}

export default ProfileClass;