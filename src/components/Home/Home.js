import React, { useEffect, useState } from 'react';
import './Home.css'
import Service from '../Service/Service';
import Dentist from '../Dentists/Dentist';
import image from '../images/PSX_20210402_092435.jpg'

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
            <div>
                <h2 className="service-title mt-5 mb-5 " id="service">Our Best Service</h2>
                <div className="d-flex row mb-5 p-4">
              {
                services.slice(0,6).map(service=><Service
                     key={service.id}
                     service={service}
                     ></Service>)
              }
            </div>
            
            </div>
          
           <div>
                <h2 className="service-title mt-5 mb-5" id="dantists">Our Dentists</h2>
                <div className="d-flex row p-4  mb-5">
              {
                 services.slice(7,13).map(doctor=><Dentist
                     key={doctor.id}
                     doctor={doctor}
                     ></Dentist>)
              }
               </div>
            
            </div>
            </div>
            <div className="mt-5 mb-5 container">
            <h2 className="service-title mt-5 mb-5" id="about">About us</h2>
            <div className="d-flex justify-content-cente align-items-center row ">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
               <p>Committed to Dental Excellence
At Vitta Dental in Murray Hill, Midtown East, <span className="col-title">New York City</span> , skilled general and cosmetic dentist, <span className="col-title"> Dr. Andrew</span> , DMD, has a remarkable aptitude for providing superior, individualized dental care. <span className="col-title"> Dr. James</span> Ojjeh works to restore functionality and create aesthetically pleasing results utilizing the latestadvanced <span className="col-title"> technology, tools, and techniques</span>.</p>
             </div>

             <div className="col-lg-6">
               <img className="w-100 p-3" src={image} alt="" />
            </div>
            </div>
            

            </div>
            
           
          
           
        </div>
    );
};

export default Home;