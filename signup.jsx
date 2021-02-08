import React, { useState } from "react";


    function SignUp(){
        var [message,setMessage]=useState("");
        const [contact, setContact] = useState({
            fullName: "",
            password: "",
            email: "",

          });
        
          function handleChange(event) {
            const { name, value } = event.target;
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(name === "password"){
                if(value.length<6){
                    setMessage("Password must be at least 6 characters long.");
                }else{
                    setMessage("")
                }
            }
            if(name === "email"){
                if(!mailformat.test(value)){
                    setMessage("Email id does not meet the format !");
                }else{
                    setMessage("");
                }}
            setContact(prevValue => {

                return {
                ...prevValue,
                [name]: value
              };
            });
            console.log(name);
            console.log(value);
          }
          function validateForm(event){
              console.log(event.name);
                alert("Regiteration Successful");
            event.preventDefault();
        }
        
          
        return(
        <div className="signUp">
        <h2>Sign up </h2>
        <form className="signUp" >
        <input onChange={handleChange} type="text" name="email" placeholder="E mail *"  value={contact.email} required/>
        <input onChange={handleChange} type="password" name="password" placeholder="Password *" value={contact.password} required/>
        <input onChange={handleChange} type="text" name="fullName" placeholder="Full Name *" value={contact.fullName} required/>
        <input onChange={handleChange} type="date" name="date" placeholder="Date of Birth *" required/>
        <h3>{message}</h3>
        <div>
          <input type="radio" id="student" name="user" value="student" checked="True" />
          <label htmlFor="student">Student</label>
          <input type="radio" id="faculty" name="user" value="faculty" />
          <label htmlFor="faculty">Faculty</label>
        </div>
        <input onClick={validateForm} type="submit" name={message} value="Sign Up" />
      </form>
      </div>
    )
}

export default SignUp;