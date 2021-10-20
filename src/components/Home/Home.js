import React, { useEffect, useState } from 'react';
import './Home.css'
import Service from '../Service/Service';



const Home = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className="dantal-banner d-flex justify-content-center align-items-center"id="home">
                <div   className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10">
                          <h2 className="title">Take Care Your Teeth</h2>
                          <p className="sub-title">With Our Services</p>
                        </div>
                        <div className="col-lg-4 col-md-2">

                        </div>
                    </div>
                </div>
               
            </div>
            <div className="container">
           
                <h2 className="service-title mt-5 mb-5 " id="service">Our Best Services</h2>
                <div className="d-flex row mb-5 p-4">
              {
                services.slice(0,6).map(service=><Service
                     key={service.id}
                     service={service}
                     ></Service>)
              }
            </div>
           
            </div>
             
        </div>
    );
};

export default Home;