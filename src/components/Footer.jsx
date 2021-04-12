import React, { Component } from 'react';
import Logo from './Data/Logo.svg';


class Footer extends Component {
    render() { 
        return (
        <div className="footer">
            <footer className="container py-5 bg-dark">
                <div className="row">
                    <div className="col-12 col-md">
                    <img height={50} src={Logo} alt="WM Logo Here"/>
                    <hr />
                        <small className="d-block mb-3 text-muted">Wyatt Marshall &copy; 2021</small>
                    </div>
                    <div className="col-6 col-md">
                    <h5 className="text-light">Features</h5>
                    <ul className="list-unstyled text-small">
                        <li><span className="link-secondary text-info" href="#">Cool stuff</span></li>
                        <li><span className="link-secondary text-info" href="#">Random feature</span></li>
                        <li><span className="link-secondary text-info" href="#">Team feature</span></li>
                        <li><span className="link-secondary text-info" href="#">Stuff for developers</span></li>
                        <li><span className="link-secondary text-info" href="#">Another one</span></li>
                        <li><span className="link-secondary text-info" href="#">Last time</span></li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5 className="text-light">Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><span className="link-secondary text-info" href="#">Resource name</span></li>
                        <li><span className="link-secondary text-info" href="#">Resource</span></li>
                        <li><span className="link-secondary text-info" href="#">Another resource</span></li>
                        <li><span className="link-secondary text-info" href="#">Final resource</span></li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5 className="text-light">Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><span className="link-secondary text-info" href="#">Business</span></li>
                        <li><span className="link-secondary text-info" href="#">Education</span></li>
                        <li><span className="link-secondary text-info" href="#">Government</span></li>
                        <li><span className="link-secondary text-info" href="#">Gaming</span></li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5 className="text-light">About</h5>
                    <ul className="list-unstyled text-small">
                        <li><span className="link-secondary text-info" href="#">Team</span></li>
                        <li><span className="link-secondary text-info" href="#">Locations</span></li>
                        <li><span className="link-secondary text-info" href="#">Privacy</span></li>
                        <li><span className="link-secondary text-info" href="#">Terms</span></li>
                    </ul>
                    </div>
                </div>
            </footer>
        </div>

        );
    }
}
 
export default Footer;