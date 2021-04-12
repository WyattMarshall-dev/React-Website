import React from 'react';
import Card from './Card';
import Greeting from './Greeting';
import Hero from './Hero';
import Footer from './Footer';
import Alert from './Alert';
import { getData } from './Data/Data';


const Home = (props) => {

    const Data = getData();
    let filtered = '';

    if(props.value){
        filtered = Data.filter(obj => JSON.stringify(obj.tags).match(props.value));
    } else {
        filtered = Data;
    }
    
    return (
        <div>
            <Alert />
            <hr />
            <div className="hero">
                <Hero />
            </div>
            <hr />
            <div className="container-fluid">
                <Greeting isLoggedIn={true}/>
                <hr />
                <div className="Container">
                    <Card value={filtered}/>
                </div>
            </div>
            <hr />
            <Footer />
        </div>
    );
}
 
export default Home;
