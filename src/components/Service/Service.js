import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'

const Service = (props) => {
    const history=useHistory()
    const {name,title,photo,id}=props.service
    const detailHandlar=()=>{
        history.push(`/service/${id}`)
    }
    return (
        
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 extra-style p-5">
            <img className="img-fluid" src={photo} alt="" />
            <h4>{name}</h4>
            <p>{title}</p>
            
            <button onClick={detailHandlar} className="btn btn-primary text-center ">Details</button>
          
        </div>
    );
};

export default Service;