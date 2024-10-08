import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';




const LoginPopup = () => {
  const [currState, setCurrState] = useState("Sign In");

  return (
    
    <div className='background'>
    <img src={assets.figure_1} alt="Figure 1" className="figure-1" />
    <img src={assets.figure_2} alt="Figure 2" className="figure-2" /> 
    <img src={assets.figure_3} alt="Figure 3" className="figure-3" />
    <img src={assets.figure_3_1} alt="Figure 3-1" className="figure-3-1" />
    <img src={assets.figure_4} alt="Figure 4" className="figure-4" />
    <img src={assets.figure_4_1} alt="Figure 4-1" className="figure-4-1" />
    <img src={assets.figure_5} alt="Figure 5" className="figure-5" />
    <img src={assets.figure_5_1} alt="Figure 5-1" className="figure-5-1" />
    <img src={assets.figure_6} alt="Figure 6" className="figure-6" />
    <img src={assets.figure_7} alt="Figure 7" className="figure-7" />

      
      <div className='login-popup'>
      <form className="login-popup-container">
      
        <div className="login-popup-title">
          <h2>{currState}</h2>
        
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
  <>
    <h1 className='input-title'>Enter Your ID</h1>
    <input type="text" placeholder='Your Name' required />
  </>
)}

          <h1 className='input-title'>Enter Your Email</h1>
          <input type="email" placeholder='forexample@gmail.com' required />

          <h1 className='input-title'>Password</h1>
          <input type="password" placeholder='Password' required />
           <div style={{ fontSize: '12px'}}>
    <a href="#" className='forgot-pass' >Forgot Password?</a>
  </div>
        </div>
        <button className='signin' type="submit">{currState === "Sign Up" ? "Create account" : "Sign In"}</button>
        <p>
          {currState === "Sign In" ? (
            <>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></>
          ) : (
            <>Already have an account? <span onClick={() => setCurrState("Login")}>Sign In Here</span></>
          )}
        </p>
        <h4>or continue with</h4>
          <div  className="social-network">
            <button className="social">
              <img src={assets.icon_1} alt="Facebook" className="social-icon" />
            </button>
            <button className="social">
              <img src={assets.icon_2} alt="GitHub" className="social-icon" />
            </button>
            <button className="social">
              <img src={assets.icon_3} alt="Instagram" className="social-icon" />
            </button>
          </div>
        
       
      </form>
      </div>
      </div>
      
      
    
    
   
  );
};

export default LoginPopup;
