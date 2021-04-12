//import { getData } from '../components/Data/Data';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


//const Data = getData();

class Hero extends Component {
    state = {  }

    
    render() { 
        return (
            <div id="hero">
                <div className="hero-content text-info">
                    <h1>Wyatt Marshall,</h1>
                    <h2 className="text-light">I make stuff...</h2>
                    <hr />
                    <Link to="/resume">
                        <button type="button" className="btn btn-info m-2">
                            Resume
                        </button>
                    </Link>
                    <Link to="/resume">
                        <button type="button" className="btn btn-info m-2">
                            Contact
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
 
export default Hero;