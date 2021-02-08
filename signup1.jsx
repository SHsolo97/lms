import React, { useState } from "react";


    function SignUp(){
        var [message,setMessage]=useState("");
        function checkPass(event){
            var pass=event.target.value;
            if(pass.length<6){
                setMessage("Password must be at least 6 characters long.");
            }else{
                setMessage("")
            }
        }
        function validateform(event){
            if(!(message === "")){
                alert("Password must be at least 6 characters long.");
            }event.preventDefault();
        }
        return(
        <div className="signUp">
        <h2>Sign up </h2>
        <form className="signUp" >
        <input type="text" name="email" placeholder="E mail *"  />
        <input onChange={checkPass} type="password" name="password" placeholder="Password *" />
        <input type="text" name="Fullname" placeholder="Full Name *" />
        <input type="text" name="date" placeholder="Date of Birth *" />
        <h3>{message}</h3>
        <div>
          <input type="radio" id="student" name="user" value="faculty" checked="True" />
          <label htmlFor="faculty">Faculty</label>
          <input type="radio" id="faculty" name="user" value="student" />
          <label htmlFor="student">Student</label>
        </div>
        <input onClick={validateform} type="submit" name="" value="Sign Up" />
      </form>
      </div>
    )
}

export default SignUp;