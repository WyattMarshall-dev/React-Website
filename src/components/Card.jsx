import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
//import Project from './Project';
//import Footer from './Footer';

const Card = (props) => {

    return (
        <React.Fragment>
            {props.value.map((item) => (
                <div key={item.title} className="card bg-dark">
                    <img src={item.url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-info">{item.title}</h5>
                        <p className="card-text text-light">{item.text}</p>
                        <Link to={{
                            pathname: `/project/${item.id}`}}>
                            <p className="btn btn-info">{item.buttonText}</p>
                        </Link>
                    
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{item.tags.join(", ")}</small>
                    </div>
                </div>
            ))}
        </React.Fragment>
        
    );
}
 
export default Card;

