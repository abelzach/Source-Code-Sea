import React, { Component } from 'react';
import "./reg.css"
import Typography from "@material-ui/core/Typography";

class Register extends Component {

    constructor(props) {
     super(props);
     this.nameinput = React.createRef();
   }  
   render() {
       return (
           <div id="nav">
        <div className = "login-box">
        <Typography component="h1" variant="h5">
            <h1 style={{color: 'black'}}>Register as a Programmer</h1>                    
        </Typography>
            <form onSubmit={(event)=>{
                event.preventDefault();
                const name = this.nameinput.current.value
                this.props.registerProgrammer(name)
            }}>
                <center>
                <div class="textbox">

                <br/><br/>
                <input type="text" class="form-control" id="exampleFormControlInput1" ref={this.nameinput} placeholder="Enter your Name"/>
                </div>
                <br/>

                <button className="btn">
                <Typography >
                    <h4 style={{color: 'black'}}>Register</h4>                    
                </Typography>           
                </button>
                </center>
            </form>
               </div>
               </div>
   );
    }
}
export default Register;