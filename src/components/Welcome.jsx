// <Welcome name=" *input here* " />

import React, { Component } from 'react';


class Welcome extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>Welcome, {this.props.name}</h1>
            </div>
        );
    }
}
 
export default Welcome;