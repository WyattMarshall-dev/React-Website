import React, { Component } from 'react';

class Checkbox extends Component {
    state = {  }
    render() { 
        return (
            <ul class="list-group">
                <li className="list-group-item active" aria-current="true">Hardware</li>
                <li className="list-group-item">Software</li>
            </ul>
            
        );
    }
}
 
export default Checkbox;