import React, { useState, useContext, useEffect } from "react";
import { RIContext } from "./RIState";
import {Link} from "react-router-dom"
import logo from "./images/ri.jpg"
import "./RIlogin.css"
import axios from "axios";
// const URL = "http://riom.theretailinsights.co/api/auth/signin"

function RILogin() {
    const [login, setLogin] = useState({ username: "", password: "" });
  
   

    const RIOnBoardLogin = () => {
        const formDatas = { username: login.username, password: login.password };
        axios
          .post('http://riom.theretailinsights.co/api/auth/signin', login)
          .then((response) => {
            console.log(response, "login candidate");
          })
            .catch((error) => {
                console.log(error);
              });
    }


    useEffect(() => {
        RIOnBoardLogin();
      },[login]);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("inside login");
        // candidateOnBoardLogin({ ...loginData, history: props.history });
        // CandidateProfile();
        // loginRedirect();
      };
    

    return (
        <div className= "main">
          <Link to = "/rilogin"> 
 
            <form>
                
                <img className="logo" src= {logo} alt= "name"></img>

                    <div className="container">
                        <label>
                            <b>Email</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            onChange={(e) =>
                            setLogin({ ...login, username: e.target.value })
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
                            setLogin({ ...login, password: e.target.value })
                            }
                            required
                        />
                       
                        <div className="clearfix">
                            <button type="submit" className="signupbtn"  onClick={handleLogin}>
                            Sign In
                            </button>
                         </div>
                    </div>
            </form>
          </Link>  
    </div>
    )
}

export default RILogin
