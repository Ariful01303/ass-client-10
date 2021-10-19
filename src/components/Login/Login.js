import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import url from '../images/login.jpg';
import { useHistory,useLocation} from 'react-router-dom';

const Login = () => {
    const {singInGoogle,user,logOut, handleUserRegister,handleUserLogin}=useAuth()
    console.log(user)
    const location=useLocation();
    const history=useHistory();
    const redirectUrl=location.state?.from||'/';
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const hanldeEmail = (e) => {
      setEmail(e.target.value);
      
     
    };
    const hanldePassword = (e) => {
      setPassword(e.target.value);
     
      
    };
  
    console.log(email, password);
  
    const handleRegister = () => {
      handleUserRegister(email, password)
      .then((result) => {
        history.push(redirectUrl)
       })
    };
  
    const handleLogin = () => {
      handleUserLogin(email, password)
      .then((result) => {
        history.push(redirectUrl)
       })
    };
    console.log(email,password);
    const handleSingInGoogle=()=>{
        singInGoogle()
        .then(result=>{
           history.push(redirectUrl);
        })
    }
    return (
        <div className="div d-flex mt-5 mb-5 justify-content-center align-items-center">
        <div className="row ">
          <div className="col-md-6">
            <div>
              <div className="form-input mt-5">
                <input
                  onChange={hanldeEmail}
                  className="mt-2 p-2"
                  type="email"
                  placeholder="Email"
                />
                <br />
                <input
                onChange={hanldePassword}
                  className="mt-2 p-2"
                  type="password"
                  placeholder="Password"
                />
                <br />
               <div className="login-regiater-btn mt-4">
               <button 
                  onClick={handleLogin} 
                  className="btn btn-primary me-1">
                    Login
                  </button>

                  <button
                    onClick={handleRegister}
                    className="btn btn-primary ms-1"
                  >
                    Register
                  </button>
                  
                </div>
              </div>
              <div className="login-btn mt-4">
               {user?.email? <button
                  onClick={logOut}
                  className="btn btn-warning m-2"
                >
                  google sign out
                </button> :
                <button
                  onClick={handleSingInGoogle}
                  className="btn btn-warning m-2"
                >
                  google sign in
                </button>}
                
              </div>
            </div>
          </div>
          <div className="col-md-6">
            
              {user?.email?
              <img className="w-100 p-5 ms-5 mt-5" src={user?.photoURL} alt=""/>:<img className="w-100 " src={url} alt=""/>}
            
            ;
          </div>
        </div>
      </div>
    );
  };
   
export default Login;