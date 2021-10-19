import React from 'react';
import './Dentist.css'
const Dentist = (props) => {
   const {name,pic,dentics}=props.doctor
    return (
       <div   className="col-lg-4 col-md-6 col-sm-12 col-12 p-3 doctors extra">
            <div>
            <img className="img-fluid image-size" src={pic} alt="" />
            <h3>Our dentist: {name}</h3>
            <p>{dentics}</p>


        </div>
       </div>
    );
};

export default Dentist;