import React, { useState, useContext, useEffect } from "react";
import { useFormik } from "formik";
import { RIContext } from "./RIState";
import {Link} from "react-router-dom"
import logo from "./images/ri.jpg"
import "./RIlogin.css"
import axios from "axios";
// const URL = "http://riom.theretailinsights.co/api/auth/signin"



      const validate = values => {
        const errors = {};
      
        if (!values.username) {
          errors.username = 'Required !!';
        } else if (values.username.length > 15) {
          errors.username = 'Must be 15 characters or less';
        }
      
      
        if (!values.password) {
          errors.password = 'Required !!';
        }  
    
        return errors;
      };
      
      const RILogin = () => {
        const formik = useFormik({
          initialValues: {
            username: '',  
            password: '',
           
      
          },
          validate,
          onSubmit: values => {
            alert(values);
          },
        });

        const RIOnBoardLogin = () => {
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
        RIOnBoardLogin();
      },[formik.values]);

      
    const handleLogin = (e) => {
      e.preventDefault();
      alert(formik.values.username);

    };

        return (
          <div className= "main">
          <Link to = "/rilogin"> 

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
      
     
                      <div className="clearfix">
                                  <button type="submit" className="signupbtn" onClick={handleLogin} >
                                  Sign In
                                  </button>
                      </div>
            </div>
          </form>
          </Link>
      
          </div>
        );
      };
      
      
      
      export default RILogin