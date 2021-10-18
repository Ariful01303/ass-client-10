import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name,title,photo}=props.service
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 extra-style p-5">
            <img className="img-fluid" src={photo} alt="" />
            <h3>{name}</h3>
            <p>title:{title}</p>
            <button className="btn btn-primary text-center">Details</button>

        </div>
    );
};

export default Service;