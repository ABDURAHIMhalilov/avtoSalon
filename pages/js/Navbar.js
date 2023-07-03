"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import "../css/Navbar.css";
import axios from "axios";
// import h3 from "next/h3";
import "@/app/globals.css";
import Link from "next/link";
// import "../../app/globals.css"
// import uz from '../images/uzbekistan_round_button_with_iso_code_64.png'

export default function Navbar() {
  const [count, setCount] = useState(false);
  const [user, setUser] = useState(false);
  const [state, setState] = useState("");
  const [modal1, setModal1] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    setUser(
      localStorage.getItem("onemen")
        ? JSON.parse(localStorage.getItem("onemen"))
        : false
    );
    setState(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
    );
    axios
      .get(
        `https://api.baracar.uz/api/${
          localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
        }/series_get/`
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  function setLanguage() {
    window.location.reload();
    // var a=document.querySelector("#til").value
    // localStorage.setItem("lang",a)
  }
  function aa(item) {
    sessionStorage.setItem("series", item.id);
    sessionStorage.setItem("model", item.model.id);
    sessionStorage.setItem("position", -1);
    window.location = "/js/Search";
  }

  return (
    <div className="navbar">
      <div
        className="black"
        style={count === true ? { display: "flex" } : { display: "none" }}
      ></div>
      <div
        className="modalMenu"
        style={count === true ? { display: "flex" } : { display: "none" }}
      >
        <MdClose className="close_btn" onClick={() => setCount(false)} />
        <div className="a_box">
          <Link href="/" className="a_fff a_mobile" style={{ cursor: "pointer" }}>
            {state === "ru" ? "Главная" : "Bosh sahifa"}
          </Link>
        </div>
        <div className="a_box">
          <Link
            href="/js/Search"
            className="a_fff a_mobile"
            style={{ cursor: "pointer" }}
          >
            {state === "ru" ? "Поиск" : "Qidiruv"}
          </Link>
        </div>
        <div className="a_box">
          <Link
            href="/js/About"
            className="a_fff a_mobile"
            style={{ cursor: "pointer" }}
          >
            {state === "ru" ? "О нас" : "Biz haqimizda"}
          </Link>
        </div>
        <div className="a_box">
          <Link href="/js/OurTeam" className="a_fff a_mobile" style={{ cursor: "pointer" }}>
            {state === "ru" ? "Команда" : "Jamoa"}
          </Link>
        </div>

        <div className="a_box">
          <Link href="/js/Contact" className="a_fff a_mobile" style={{ cursor: "pointer" }}>
            {state === "ru" ? "Cвязь" : "Bog'lanish"}
          </Link>
        </div>
        <div className="perevod2">
          <img
            onClick={() => {
              localStorage.setItem("lang", "uz");
            }}
            id="per"
            style={{ width: "50px" }}
            src="https://st4.depositphotos.com/8804418/21485/v/600/depositphotos_214857244-stock-illustration-uzbekistan-flag-glass-button-vector.jpg"
            alt=""
          />

          <img
            onClick={() => {
              localStorage.setItem("lang", "ru");
            }}
            id="pere"
            style={{ width: "100px" }}
            src="https://st4.depositphotos.com/15822962/24248/v/600/depositphotos_242484092-stock-video-animated-russian-flag-on-the.jpg"
            alt=""
          />
          {user ? (
            <h3 href="/js/Login">
              <AiOutlineUser className="user_icon" id="user1" />
            </h3>
          ) : (
            <h3 href="/js/Loginpage">
              <AiOutlineUser className="user_icon" id="user1" />
            </h3>
          )}
        </div>
      </div>
      <BiMenuAltLeft className="menuLeftIcon" onClick={() => setCount(true)} />

      <div className="navbar_left">
        <h3
          onClick={() => {
            window.location = "/";
          }}
          className="logo"
          style={{ cursor: "pointer" }}
        >
          <Image
            className="vehicaimg"
            src={logo}
            width={200}
            height={"auto"}
            alt=""
          />
        </h3>
        <h3
          onClick={() => {
            window.location = "/";
          }}
          className="a_fff"
          style={{ cursor: "pointer" }}
        >
          {state === "ru" ? "Главная" : "Bosh sahifa"}
        </h3>

        {modal1 === 0 ? (
          <h3
            onMouseEnter={() => {
              setModal1(1);
            }}
            onClick={() => {
              window.location = "/js/Search";
            }}
            className="a_fff"
            style={{ cursor: "pointer" }}
          >
            {state === "ru" ? "Поиск" : "Qidiruv"}
          </h3>
        ) : (
          <h3
            onClick={() => {
              window.location = "/js/Search";
            }}
            onMouseLeave={() => {
              setModal1(0);
            }}
            onMouseEnter={() => {
              setModal1(1);
            }}
            className="a_fff  togle12"
            style={{ cursor: "pointer" }}
          >
            <div class="dots active">
              {state === "ru" ? "Поиск" : "Qidiruv"}
              <div class="shadow cut"></div>
              <div class="container cut">
                <div class="drop cut2"></div>
              </div>
              <div class="list">
                <ul>
                  {data.map((item, key) => {
                    if (key < 6) {
                      return (
                        <li onClick={() => aa(item)}>
                          {item.model.name} {item.name}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </h3>
        )}
        <h3
          onClick={() => {
            window.location = "/js/About";
          }}
          className="a_fff"
          style={{ cursor: "pointer" }}
        >
          {state === "ru" ? "О нас" : "Biz haqimizda"}
        </h3>
        <h3
          onClick={() => {
            window.location = "/js/OurTeam";
          }}
          className="a_fff"
          style={{ cursor: "pointer" }}
        >
          {state === "ru" ? "Команда" : "Jamoa"}
        </h3>

        <h3
          onClick={() => {
            window.location = "/js/Contact";
          }}
          className="a_fff"
          style={{ cursor: "pointer" }}
        >
          {state === "ru" ? "Cвязь" : "Bog'lanish"}
        </h3>
      </div>

      {user ? (
        <div>&nbsp;</div>
      ) : (
        <div>
          <div className="navbar_right">
            <div className="loginIn">
              <AiOutlineUser className="user_icon" />
              {state === "ru" ? (
                <h3
                  onClick={() => {
                    window.location = "/js/Login";
                  }}
                  style={{ width: "155px", cursor: "pointer" }}
                  className="a_fff"
                  id="a_df"
                  // style={{ cursor: "pointer" }}
                >
                  Войти в систему
                </h3>
              ) : (
                <h3
                  onClick={() => {
                    window.location = "/js/Login";
                  }}
                  style={{ width: "129px", cursor: "pointer" }}
                  className="a_fff"
                  id="a_df"
                  // style={{ cursor: "pointer" }}
                >
                  Tizimga kirish
                </h3>
              )}
            </div>
            <h3
              onClick={() => {
                window.location = "/js/Login";
              }}
              className="a_fff"
              id="a_sd"
              style={{ cursor: "pointer" }}
            >
              {state === "ru" ? "Регистрация" : "Ro'yxatdan o'tish"}
            </h3>
          </div>
        </div>
      )}
      <div className="perevod" id="til" onClick={() => setLanguage()}>
        <img
          onClick={() => {
            localStorage.setItem("lang", "uz");
          }}
          id="per"
          style={{ width: "35px", cursor: "pointer" }}
          src="https://st4.depositphotos.com/8804418/21485/v/600/depositphotos_214857244-stock-illustration-uzbekistan-flag-glass-button-vector.jpg"
          alt=""
        />
        <img
          onClick={() => {
            localStorage.setItem("lang", "ru");
          }}
          id="pere"
          style={{ width: "71px", cursor: "pointer" }}
          src="https://st4.depositphotos.com/15822962/24248/v/600/depositphotos_242484092-stock-video-animated-russian-flag-on-the.jpg"
          alt=""
        />
        {user ? (
          <div style={{ cursor: "pointer" }}>
            <div className="navbar_right">
              <div className="loginIn">
                <AiOutlineUser className="user_icon" />
                <h3
                  onClick={() => {
                    window.location = "/js/Loginpage";
                  }}
                  className="a_fff"
                >
                  {user.username}
                </h3>
              </div>
            </div>
          </div>
        ) : (
          <>&nbsp;</>
        )}
        {/* <AiOutlineUser className="user_icon" id="user1" /> */}
      </div>
    </div>
  );
}
