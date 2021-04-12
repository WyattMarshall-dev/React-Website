import React from 'react';
import Footer from './Footer';
import { useLocation } from "react-router-dom";
import { getData } from './Data/Data';
import { Link } from 'react-router-dom';
//import Iframe from 'react-iframe'

const Project = (props) => {

    const Data = getData();    
    let location = useLocation();
    let piece = location.pathname.toString().slice(9);
    let content = Data.filter(obj => obj.id.match(piece));
    console.log(content[0].text);


    return (

        <div>
            <hr />
            <div className="container">
                <img className="project-img" src={content[0].url[0]} alt="idk" />
                <h1>{content[0].title}</h1>
                <h2 className="text-secondary">{content[0].text}</h2>

                <a href={content[0].url[1]} className="btn btn-info m-2">Visit Site</a>
                <a href={content[0].url[1]} className="btn btn-info m-2">GitHub</a>

                <hr />
                <p className="text-light" >{content[0].description}</p>
                <hr />
                <code>tags: {content[0].tags.join(", ")}</code>
            </div>
            <hr />
            <Footer />
        </div>

        
    );
}
 
export default Project;
