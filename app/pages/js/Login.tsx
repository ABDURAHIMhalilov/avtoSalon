"use client";

import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/Login.css";
import axios from "axios";
import url from "./Host";
// import img from "./img/logo.png"
// import galochka from "./img/Group 62.png"
// import google from "./img/Group 61.png"
// import galoch from "./img/Group 63.png"
// import fon from "./img/image 22.png"
// import fon1 from "./img/image 22 (1).png"

export default function Login() {
  const page = 1;
  const [data, setData] = React.useState(1);
  const [ staff, setStaff ] = React.useState()



  const plus = () => {
    setData(data + 1);
  };
  const minus = () => {
    if (data > 0) {
      setData(data - 1);
    }
  };
function agerr(id) {
  setStaff(id)
}
  function postUser() {
    console.log(staff);
    var usernamee = document.querySelector(".Username").value
    var data = new FormData();
    data.append("username", usernamee);
    data.append("phone", document.querySelector(".Phone").value);
    data.append("password", document.querySelector(".Password").value);
    data.append("is_staff", false);
    axios.post(`${url}/auth/register/`, data)
      .then((res) => {
        localStorage.setItem('Token_user', res.data.access)
        alert("success");
        window.location = "/userpage";
        localStorage.setItem('username', usernamee)
      })
      .catch((err) => {
        alert(err);
      })
  }

  return (
    <div>
      <Navbar />

      <center>
        <div className="form">
          <div className="all-button">
            <button
              style={
                data === 1
                  ? { background: "#ff4605", border: "1px solid gray;" }
                  : { background: "white" }
              }
              onClick={() => {
                setData(1);
              }}
            >
              Login
            </button>
            <button
              style={
                data === 2
                  ? { background: "#ff4605", border: "10px solid gray ;" }
                  : { background: "white" }
              }
              onClick={() => {
                setData(2);
              }}
            >
              Register
            </button>
          </div>
          <div className="asos_form">
            {data === 1 ? (
              <div className="login">
                <h2>Log in to your account</h2>
                <h3>Welcome back! Sign in to your account</h3>
                <div className="inputs">
                  <input type="text" placeholder="Email or Username" />
                  <input type="password" placeholder="Password" />
                </div>
                <div className="checkbox">
                  {/* <div className="check2">
                    <input id="cb1" type="checkbox" />
                    <p>Remember</p>
                  </div> */}
                  <a className="forgot" href="#">
                    Forgotten password?
                  </a>
                </div>
                <button>Login</button>
              </div>
            ) : (
              <div className="registratsiya">
                <h2>Register</h2>
                <h3>Create new account today.</h3>
                <div className="inputs">
                  <input type="text" className="Username" placeholder="Username*" />
                  {/* <input type="text" className="Email" placeholder="Email*" /> */}
                  <input type="text" className="Phone" placeholder="Phone*" />
                  <input type="password" className="Password" placeholder="Password*" />
                  {/* <div className="checkbox1">
                    <div className="check">
                      <input onClick={() => agerr(false)}  id="cb1" type="radio" className="radio" name="radio" />
                      <p>Private seller</p>
                    </div>
                    <div className="check">
                      <input onClick={() => agerr(true)} id="cb1" className="radio2" type="radio" name="radio" />
                      <p>Business seller</p>
                    </div>
                  </div> */}
                </div>
                {/* <div className="checkbox1">
                  <div className="check2">
                    <input id="cb1" type="checkbox" />
                    <p>I accept the</p>
                  </div>
                  <a className="privacy" href="#">
                    privacy policy
                  </a>
                </div> */}
                <button onClick={() => postUser()}>Register</button>
              </div>
            )}
          </div>
        </div>
      </center>
      {/* <Footer /> */}
    </div>
  );
}
