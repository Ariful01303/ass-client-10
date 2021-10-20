import React from 'react';
import image from '../images/PSX_20210402_092435.jpg'

const About = () => {
    return (
        <div>
             <div className="mt-5 mb-5 container">
            <h2 className="service-title mt-5 mb-5" id="about">About us</h2>
            <div className="d-flex justify-content-cente align-items-center row ">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
               <p>Committed to Dental Excellence
            At Vitta Dental in Murray Hill, Midtown East, <span className="col-title">New York City</span>
            , skilled general and cosmetic dentist,
           <span className="col-title"> Dr. Andrew</span> 
          , DMD, has a remarkable aptitude for providing superior, individualized dental care. 
         <span className="col-title"> Dr. James</span>
          Ojjeh works to restore functionality and create aesthetically pleasing results utilizing the latestadvanced 
         <span className="col-title"> technology, tools, and techniques</span>.</p>
             </div>

             <div className="col-lg-6">
               <img className="w-100 p-3" src={image} alt="" />
            </div>
            </div>
            

            </div>
        </div>
    );
};

export default About;