import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useEffect, useState } from 'react';

const Enrolling = () => {
    let {num}=useParams();
    const [enrolls,setEnrolls]=useState([])
    const [enroll,setEnroll]=useState({})
     const history=useHistory()
    useEffect(()=>{
        
        fetch("/fakeData.JSON")
        .then(res=>res.json())
        .then(data=>setEnrolls(data))
    },[])
    useEffect(()=>{
        const foundCorse=enrolls.find((cor)=>cor.id===num)
        setEnroll(foundCorse)
    },[enrolls]);
    const btnhandlar=()=>{
        history.push("/complite")
    }
   
    return (
        <div className="text-center m-5">
            <img className="w-25 m-5" src={enroll?.photo} alt="" />
            <h4>If you confrom to appionment {enroll?.name} click to confrom button</h4>
            
            <button onClick={btnhandlar} className="btn btn-primary">Confrom</button>
        
        </div>
    );
};

export default Enrolling;