import React, { Component } from 'react';
import Logo from './Data/Logo.svg';
import { Link } from 'react-router-dom';

class Navbar extends Component {
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
        const UrlLink = "www.facebook.com";
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img height={50} src={Logo} alt="WM Logo Here"/></a>

                    <button 
                        className="navbar-toggler" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/">
                                    <p className="nav-link" >Home</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/resume">
                                    <p className="nav-link" >Resume</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact">
                                    <p className="nav-link" >Contact</p>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href={UrlLink} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Socials
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href={UrlLink}>Github</a></li>
                                    <li><a className="dropdown-item" href={UrlLink}>Instagram</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" value={value} onChange={this.handleChange} placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;