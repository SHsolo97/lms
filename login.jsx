import React from "react";

function LogIn(){
    return(
        <div className="login">
        <h2>Log in</h2>
        <form className="" action="index.html" method="post">
        <input type="text" name="email1" placeholder="E mail" />
        <input type="password" name="password1" placeholder="Password" />
        <div>
        <input type="radio" id="student1" name="user1" value="student" checked="True" />
        <label htmlFor="faculty">Student</label>
        <input type="radio" id="faculty1" name="user1" value="faculty" />
        <label htmlFor="student">Faculty</label>
        </div>
        <input type="submit" name="" value="Log In" />
      </form>
      </div>
    )
}

export default LogIn;