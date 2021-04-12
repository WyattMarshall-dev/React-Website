import React, { Component } from 'react';


class Sorting extends Component {
    constructor(props) {
        super(props);
        //this.props = {value: ''};
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(e) {
        this.props.onValueChange(e);
        //console.log("Sort - Call",e);
      }

    render() { 
        const value = "hardware";
        return (
            <ul className="list-group m-1">
                <li onClick={() => this.handleSelection(null)} value={value} className="list-group-item bg-dark text-info">All</li>
                <li onClick={() => this.handleSelection("hardware")} className="list-group-item bg-dark text-info">Hardware</li>
                <li onClick={() => this.handleSelection("software")} className="list-group-item bg-dark text-info">Software</li>
                <li onClick={() => this.handleSelection("moto")} className="list-group-item bg-dark text-info">Moto</li>
            </ul>
        );
    }
}
 
export default Sorting;
