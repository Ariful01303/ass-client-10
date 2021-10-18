import React from 'react';
import useAuth from '../Hooks/useAuth';
import url from '../images/login.jpg'

const Login = () => {
    const {singInGoogle,user,logOut}=useAuth()
    console.log(user)
    return (
        <div className="div d-flex mt-5 mb-5 justify-content-center align-items-center">
        <div className="row ">
          <div className="col-md-6">
            <div>
              <div className="form-input mt-5">
                <input
                //   onChange={}
                  className="mt-2 p-2"
                  type="email"
                  placeholder="Email"
                />
                <br />
                <input
                // onChange={hanldePassword}
                  className="mt-2 p-2"
                  type="password"
                  placeholder="Password"
                />
                <br />
                <div className="login-regiater-btn mt-4">
                  <button
                    // onClick={handleRegister}
                    className="btn btn-primary me-1"
                  >
                    Register
                  </button>
                  <button 
                //   onClick={handleLogin} 
                  className="btn btn-primary ms-1">
                    Login
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
                  onClick={singInGoogle}
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