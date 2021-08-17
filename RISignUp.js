import React, { useState, useContext, useEffect } from "react";
import { useFormik } from 'formik';
import { RIContext } from "./RIState";
import {Link} from "react-router-dom"
import logo from "./images/ri.jpg"
import "./RIlogin.css"
import axios from "axios";
const URL = "http://riom.theretailinsights.co/api/auth/signup"

const validate = values => {
    const errors = {};
  
    if (!values.username) {
      errors.username = 'Required !!';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required !!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!values.password) {
      errors.password = 'Required !!';
    }  
    

     if (values.password != values.confirm_password) {
        
        errors.password = "Passwords don't match.";
    
    }
    
    
  
    if (!values.role) {
      errors.role = 'Required !!';
    } 
    return errors;
  };
  
  const RISignUp = () => {
    const formik = useFormik({
      initialValues: {
        username: '',  
        password: '',
        confirm_password: '',
        email: '',
        role: ''
  
      },
      validate,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });

    const RIOnBoardSignUp = () => {
        axios
          .post('http://riom.theretailinsights.co/api/auth/signin', formik.values)
          .then((response) => {
            console.log(response, "login candidate");
          })
            .catch((error) => {
                console.log(error);
              });
    }


    useEffect(() => {
        RIOnBoardSignUp();
      },[formik.values]);


    return (
      <div className= "main">
         <Link to = "/risignup"> 
      <form onSubmit={formik.handleSubmit}>
      <img className="logo" src= {logo} alt= "name"></img>
  
      <div className="container">
  
        <label htmlFor="username">First Name</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className= 'validate'>{formik.errors.username}</div>
        ) : null}
  
        <br />
  
        
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className= 'validate'>{formik.errors.email}</div>
        ) : null}
  
  <br />
  
        
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className= 'validate'>{formik.errors.password}</div>
        ) : null}
  
  <br />

  <label htmlFor="password">Confirm Password</label>
        <input
          id="confirm_password"
          name="confirm_password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirm_password}
        />
        {formik.touched.confirm_password && formik.errors.confirm_password ? (
          <div className= 'validate'>{formik.errors.confirm_password}</div>
        ) : null}
  
  <br />
  
  
  <label htmlFor="role">Role</label>
        <input
          id="role"
          name="role"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.role}
        />
        {formik.touched.role && formik.errors.role ? (
          <div className= 'validate'>{formik.errors.role}</div>
        ) : null}
  
  <br />
                  <div className="clearfix">
                              <button type="submit" className="signupbtn">
                              Sign Up
                              </button>
                  </div>
        </div>
      </form>
     </Link> 
  
      </div>
    );
  };
  
  
  
  export default RISignUp