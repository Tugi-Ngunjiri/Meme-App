import React from "react";
import {isSubmitted} from './User.login'

// user login info
const database = [
    {
        username: "user1",
        password: "pass1"
    },
    {
        username: "user2",
        password: "pass2"
    }
];

const errors = {
    uname: "invalid username",
    pass: "invalid password"
};

const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
        if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
        } else {
            setIsSubmitted(true);
        }
    } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
    }
};
function submitted() {
    return (
        <div className="login-form">
         <form onSubmit={handleSubmit}></form>
        <div  className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
        )
}






export default User.Login;