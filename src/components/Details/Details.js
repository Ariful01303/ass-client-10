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
        <div className="text-center extra-style mb-5 mt-5 w-50 m-auto p-4">
            <h1>{detail?.name}</h1>
            <img className="img-fluid p-5 " src={detail?.photo} alt="" />
            <p>Contract Number {detail?.id}</p>
            <p>{detail?.description}</p>

            <button onClick={buttonHandlar} className="btn btn-primary">Confrom Appiontment</button>
        </div>
    );
};

export default Details;