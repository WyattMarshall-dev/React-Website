import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        //this.props = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onValueChange(e.target.value);
        //console.log(e.target.value);
      }
    
    render() { 
        const value = this.props.value;
        return (
            <form className="d-flex">
                <input className="form-control me-2" type="search" value={value} onChange={this.handleChange} placeholder="Search" aria-label="Search" />
            </form> 
        );
    }
}
 
export default Search;