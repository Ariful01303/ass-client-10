import React from 'react';
const url=`https://alauddinali.com/wp-content/uploads/2020/07/podcast-banner-1060x561.jpg`

const Noservice = () => {
    return (
        <div>
        <div className="error-bg text-center">
        <img src={url} alt="" />

 <h1 className="text-danger mt-5">Cant found error 404 !!!</h1>
</div>
   </div>
    );
};

export default Noservice;