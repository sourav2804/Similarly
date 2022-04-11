// ==============================================================
// For more Features to implement in the future.
// Excluded as of now for CS 855 final project submission.
// ==============================================================

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './Components/Tabs';
import SignUp from './Components/login';


import db from "../Firebase/firebase";
import auth from "../Firebase/firebase";


export default function Login () {

    const [user, setUser] = useState({
        email: "",
        password: "",
      });
     const checkUser = () => {
        signInWithEmailAndPassword(auth, user.email, user.password)
          .then((userCredential) => {
            // Signed in
            <NavigationContainer>
            <SignUp/>
         </NavigationContainer> 

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      };
    
      const handleChange = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;
    
        setUser({
          ...user,
          [name]: value,
        });
      };

const navigate = ()=>{
<NavigationContainer>
            <Tabs/>
         </NavigationContainer> 
};
    
        return (
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" onChange={handleChange} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange} className="form-control" placeholder="Enter password" />
                </div>
              
                <button type="submit" onClick={checkUser} className="btn btn-primary btn-block">Submit</button>
               
                <button type="submit" onClick={navigate} className="btn btn-primary btn-block">Dont have a account? Register</button>

            </form>
        );
    
}