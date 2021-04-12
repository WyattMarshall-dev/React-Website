import React from 'react';

const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return (
            <h1 className="m-2 text-info">Projects</h1>
        );
    } return <h1>Please Sign Up</h1>
    
}
 
export default Greeting;