import React from 'react'
import "../css/reg.css"
const Reg = () => {
    return (
    <div className = "login-box">
        <h1>Register</h1>
            <div className = "textbox">
                <input type="text" placeholder = "Name" ></input>
            </div>
        <div class = "textbox">
             <input type="text" placeholder = "Details"  ></input>
        </div>
        <div style = {{backgroundImage:"url(/bg.png)"}}>
           <div className = "b">
               <button type="button" className = "btn">Submit</button>
            </div>
        </div>
    </div>
   
    );
  };
  
  export default Reg;