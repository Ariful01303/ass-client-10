import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const Details = () => {
    let {code}=useParams()
    const history=useHistory()
    const [details,setDetails]=useState([])
    const [detail,setDetail]=useState({})
    useEffect(()=>{
         fetch('/fakeData.json')
         .then(res=>res.json())
         .then(data=>setDetails(data))
    },[])
    useEffect(()=>{
        const founddel=details.find((del)=>del.id===code)
               setDetail(founddel)
    },[details])
    const buttonHandlar=()=>{
        history.push(`/enroll/${detail.id}`)

    }
    return (
       <div className="container p-2">
            <div className="text-center extra-style mb-5 mt-5 p-2  m-auto">
            <h1>{detail?.name}</h1>
            <img className="img-fluid " src={detail?.photo} alt="" />
            <p>Contract Number {detail?.id}</p>
            <p>{detail?.description}</p>

            <button onClick={buttonHandlar} className="btn p-2 btn-primary">Confrom Appiontment</button>
        </div>
       </div>
    );
};

export default Details;