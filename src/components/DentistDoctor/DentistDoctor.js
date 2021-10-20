import React, { useEffect, useState } from 'react';
import Dentist from '../Dentists/Dentist';

const DentistDoctor = () => {
    const [doctors,setdoctors]=useState([])
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setdoctors(data))
    },[])
    return (
        
            <div className="container">
                <h2 className="service-title mt-5 mb-5" id="dantists">Our Dentists</h2>
                <div className="d-flex row p-4  mb-5">
              {
                 doctors.slice(7,13).map(doctor=><Dentist
                     key={doctor.id}
                     doctor={doctor}
                     ></Dentist>)
              }
               </div>
            
            </div>
        
    );
};

export default DentistDoctor;