import React, { Component } from 'react';
import "./reg.css"

class Register extends Component {

    constructor(props) {
     super(props);
     this.nameinput = React.createRef();
   }  
   render() {
    return (
        <div className = "login-box">
                <h1>Register as a Programmer</h1>
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

                <button type="button" className = "btn">Register</button>
                </center>
            </form>
        </div>
   );
    }
}
export default Register;