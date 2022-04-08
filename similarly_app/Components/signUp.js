import React, { Component, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import db from "../Firebase/firebase";
import auth from "../Firebase/firebase";

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
 const createUser = () => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const fUser = userCredential.user;
        const uid = fUser["localId"];


        set(ref(db, "/userTable/"+ uid), {
          email: user.email,
        });
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
 

  return (
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <button
        type="submit"
        onClick={createUser}
        className="btn btn-primary btn-block"
      >
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
    </form>
  );
}
