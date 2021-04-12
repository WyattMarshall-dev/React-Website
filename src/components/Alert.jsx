import React from 'react';

const Alert = () => {
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Hey There!</strong> None of the footer links lead anywhere, but they sure look good!
            <button type="button" className="btn btn-close" data-bs-dismiss="alert" aria-label="Close">X</button>
        </div>
    );
}
 
export default Alert;