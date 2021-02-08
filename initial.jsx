import React from "react";
import SignUp from "./signup";
import LogIn from "./login";
function Initial(){
    return (
        <div className="container">
          <div className="he">
                <h1>Custom LMS</h1>
          </div>
          <SignUp />
          <LogIn />
        </div>
      );
}

export default Initial;