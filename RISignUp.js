import React, { useState, useContext, useEffect } from "react";
import { RIContext } from "./RIState";
import {Link} from "react-router-dom"
import logo from "./images/ri.jpg"
import "./RIlogin.css"
import axios from "axios";
const URL = "http://riom.theretailinsights.co/api/auth/signup"

function RISignUp() {
    const [signup, setSignup] = useState({ username: "", password: "", email: "", roles: [] });
  
   

    const RIOnBoardSignUp = () => {
        const formDatas1 = { username: signup.username, password: signup.password, email: signup.email, roles: signup.roles };
        axios
          .post(URL, signup)
          .then((response) => {
            console.log(response, "login candidate");
          })
            .catch((error) => {
                console.log(error);
              });
    }


    useEffect(() => {
        RIOnBoardSignUp();
      },[signup]);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("inside login");
        console.log(signup);

      };
    

    return (
        <div className= "main">
          <Link to = "/risignup"> 
 
            <form>
                
                <img className="logo" src= {logo} alt= "name"></img>

                    <div className="container">
                        <label>
                            <b>Username</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            name="username"
                            onChange={(e) =>
                                setSignup({ ...signup, username: e.target.value })
                            }
                            required
                        />
                        <label>
                            <b>Password</b>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            onChange={(e) =>
                                setSignup({ ...signup, password: e.target.value })
                            }
                            required
                        />

                        <label>
                            <b>Email</b>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            onChange={(e) =>
                                setSignup({ ...signup, email: e.target.value })
                            }
                            required
                        />
                        <br/>

                        <label>
                            <b>Role</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Role"
                            name="role"
                            onChange={(e) =>
                                setSignup({ ...signup, roles: e.target.value })
                            }
                            required
                        />
                       
                        <div className="clearfix">
                            <button type="submit" className="signupbtn"  onClick={handleLogin}>
                            Sign Up
                            </button>
                         </div>
                    </div>
            </form>
          </Link>  
    </div>
    )
}

export default RISignUp
