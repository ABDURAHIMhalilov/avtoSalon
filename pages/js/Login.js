"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/Login.css";
import axios from "axios";
import "../../app/globals.css";
// import img from "./img/logo.png"
// import galochka from "./img/Group 62.png"
// import google from "./img/Group 61.png"
// import galoch from "./img/Group 63.png"
// import fon from "./img/image 22.png"
// import fon1 from "./img/image 22 (1).png"

export default function Login() {
  const page = 1;
  const [data, setData] = React.useState(1);
  const [staff, setStaff] = React.useState();
  const [user, setUser] = useState([]);
  const [state, setState] = React.useState();

  useEffect(() => {
    var lang = localStorage.getItem("lang");
    setState(lang ? lang : "ru");
  }, []);

  const plus = () => {
    setData(data + 1);
  };
  const minus = () => {
    if (data > 0) {
      setData(data - 1);
    }
  };
  function agerr(id) {
    setStaff(id);
  }

  function postUser() {
    console.log(staff);
    var usernamee = document.querySelector(".Phone").value;
    var data = new FormData();

    data.append("username", document.querySelector(".Username").value);
    data.append("phone", usernamee);
    data.append("password", document.querySelector(".Password").value);
    data.append("is_staff", false);
    axios
      .post(`https://api.baracar.uz/auth/register/`, data)
      .then((res) => {
        localStorage.setItem("Token_user", res.data.access);
        state === "ru" ? alert("Успех") : alert("Muvaffaqiyatli");
        window.location = "/js/Loginpage";
        localStorage.setItem("username", usernamee);
        localStorage.setItem(
          "onemen",
          JSON.stringify({
            username: document.querySelector(".Username").value,
          })
        );
      })
      .catch((err) => {
        if (localStorage.getItem("lang") == "uz") {
          alert("Ma'lumotni to'liq kiriting");
        } else {
          alert("Введите информацию полностью");
        }
      });
  }
  function userLogin() {
    var datta = new FormData();
    var usernamee = document.querySelector(".userNameEmail").value;
    datta.append("phone", usernamee);
    datta.append("password", document.querySelector(".userPassword").value);
    axios
      .post(`https://api.baracar.uz/auth/login/`, datta)
      .then((res) => {
        // res.data.map(item => {
        // if (res.data.username === asd && res.data.password === asd2) {
        // alert("zo`r");
        console.log(res.data);
        localStorage.setItem("username", usernamee);
        JSON.stringify(localStorage.setItem("Token_user", res.data.access));
        window.location = "/js/Loginpage";
        // } else {
        //   alert('To`g`ri kelmadi')
        // }
        // })
      })
      .catch((err) => {
        if (localStorage.getItem("lang") == "uz") {
          alert("Ma'lumot to'g'ri kelmadi");
        } else {
          alert("Информация была не верна");
        }
      });
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
                  ? {
                      background: "#ff4605",
                      border: "1px solid gray;",
                      color: "white",
                    }
                  : { background: "white" }
              }
              onClick={() => {
                setData(1);
              }}
            >
              {state === "ru" ? "Авторизоваться" : "Tizimga kirish"}
            </button>
            <button
              style={
                data === 2
                  ? {
                      background: "#ff4605",
                      border: "10px solid gray ;",
                      color: "white",
                    }
                  : { background: "white" }
              }
              onClick={() => {
                setData(2);
              }}
            >
              {state === "ru" ? "Регистрация" : "Ro'yxatdan o'tish"}
            </button>
          </div>
          <div className="asos_form">
            {data === 1 ? (
              <div className="login">
                <h2>
                  {state === "ru"
                    ? "Войдите в свой аккаунт"
                    : "Akkauntingizga kiring"}
                </h2>
                <h3>
                  {state === "ru"
                    ? "Добро пожаловать! Войдите в свой аккаунт"
                    : "Xush kelibsiz! Akkauntingizga kiring"}
                </h3>
                <div className="inputs">
                  <input
                    className="userNameEmail"
                    id="userNameEmail"
                    type="text"
                    placeholder={
                      state === "ru"
                        ? "Введите номер телефона*"
                        : "Telefon nomerni kiriting*"
                    }
                  />
                  <input
                    className="userPassword"
                    type="password"
                    placeholder={state === "ru" ? "Пароль*" : "Parol*"}
                  />
                </div>
                <div className="checkbox">
                  {/* <div className="check2">
                    <input id="cb1" type="checkbox" />
                    <p>Remember</p>
                  </div> */}
                  <a className="forgot" href="#">
                    {state === "ru"
                      ? "Забыли пароль?"
                      : "Parolni unutdingizmi?"}
                  </a>
                </div>
                <button onClick={() => userLogin()}>
                  {state === "ru" ? "Авторизоваться" : "Kirish"}
                </button>
              </div>
            ) : (
              <div className="registratsiya">
                <h2>{state === "ru" ? "Регистрация" : "Ro'yxatdan o'tish"}</h2>
                <h3>
                  {state === "ru"
                    ? "Создайте новую учетную запись сегодня."
                    : "Bugun yangi hisob yarating."}
                </h3>
                <div className="inputs">
                  <input
                    type="text"
                    className="Username"
                    placeholder={state === "ru" ? "имя*" : "ism*"}
                  />
                  {/* <input type="text" className="Email" placeholder="Email*" /> */}
                  <input
                    type="text"
                    className="Phone"
                    placeholder={state === "ru" ? "Телефон*" : "Telefon*"}
                  />
                  <input
                    type="password"
                    className="Password"
                    placeholder={state === "ru" ? "Пароль*" : "parol*"}
                  />
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
                <button onClick={() => postUser()}>
                  {state === "ru" ? "Регистрация" : "Ro'yxatdan o'tish"}
                </button>
              </div>
            )}
          </div>
        </div>
      </center>
      <br />
      <Footer />
    </div>
  );
}
