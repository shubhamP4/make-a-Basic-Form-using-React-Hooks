import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName:"",
    email:""
  })

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const firstNameHandler = (event) => {
    setValues({...values,firstName: event.target.value})
  }
  const lastNameHandler = (event) => {
    setValues({...values,lastName: event.target.value})
  }
  const emailHandler = (event) => {
    setValues({...values,email: event.target.value})
  } 

  const submitHandler = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);
  }
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={submitHandler}>
        {/* Uncomment the next line to show the success message */}
         {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : " "}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={firstNameHandler}
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={lastNameHandler}
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={emailHandler}
        />
        {/* Uncomment the next line to show the error message */}
       {submitted && !values.email ? <span id="email-error">Please enter an email address</span>: null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
