"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../images/logobmw.png";
import uzb from "../images/[removal.ai]_tmp-64abfa5fc8358.png";
import rus from "../images/depositphotos_242484092-stock-video-animated-russian-flag-on-the_1_-removebg-preview.png";
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
        <h3 className="a_box">
          <h3
            onClick={() => {
              window.location = "/";
            }}
            href="/"
            className="a_fff a_mobile"
            style={{ cursor: "pointer" }}
          >
            {state === "ru" ? "Главная" : "Bosh sahifa"}
          </h3>
        </h3>
        <div className="a_box">
          <h3
            onClick={() => {
              window.location = "/js/Search";
            }}
            href="/js/Search"
            className="a_fff a_mobile"
            style={{ cursor: "pointer" }}
          >
            {state === "ru" ? "Поиск" : "Qidiruv"}
          </h3>
        </div>
        <div className="a_box">
          <h3
            onClick={() => {
              window.location = "/js/About";
            }}
            href="/js/About"
            className="a_fff a_mobile"
            style={{ cursor: "pointer" }}
          >
            {state === "ru" ? "Автокредит" : "Avtokredit"}
          </h3>
        </div>
        <div className="a_box">
          <h3
            onClick={() => {
              window.location = "/js/OurTeam";
            }}
            href="/js/OurTeam"
            className="a_fff a_mobile"
            style={{ cursor: "pointer" }}
          >
            {state === "ru" ? "Trade-in " : "Trade-in"}
          </h3>
        </div>

        <div className="a_box">
          <h3
            onClick={() => {
              window.location = "/js/Contact";
            }}
            href="/js/Contact"
            className="a_fff a_mobile"
            style={{ cursor: "pointer" }}
          >
            {state === "ru" ? "Cвязь" : "Bog'lanish"}
          </h3>
        </div>
        <div
          onClick={() => {
            window.location.reload();
          }}
          className="perevod2"
        >
          <Image
            onClick={() => {
              localStorage.setItem("lang", "uz");
            }}
            id="per"
            style={{ width: "50px" }}
            src={uzb}
            alt=""
          />

          <Image
            onClick={() => {
              localStorage.setItem("lang", "ru");
            }}
            id="pere"
            style={{ width: "100px" }}
            src={rus}
            alt=""
          />
          {user ? (
            <h3
              onClick={() => {
                window.location = "/js/Loginpage";
              }}
            >
              <AiOutlineUser className="user_icon" id="user1" />
            </h3>
          ) : (
            <h3
              onClick={() => {
                window.location = "/js/Login";
              }}
            >
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
          {state === "ru" ? "Автокредит" : "Avtokredit"}
        </h3>
        <h3
          onClick={() => {
            window.location = "/js/OurTeam";
          }}
          className="a_fff"
          style={{ cursor: "pointer" }}
        >
          {state === "ru" ? "Trade-in " : "Trade-in"}
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
            <div
              className="loginIn"
              onClick={() => {
                window.location = "/js/Login";
              }}
            >
              <AiOutlineUser className="user_icon" />
              {state === "ru" ? (
                <h3
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
      {user ? (
        <div
          onClick={() => {
            window.location = "/js/Loginpage";
          }}
          style={{ cursor: "pointer" }}
        >
          <div className="navbar_right" style={{ width: "100px" }}>
            <div className="loginIn" style={{ borderRight: "0px" }}>
              <AiOutlineUser className="user_icon" />
              <h3 className="a_fff">{user.username}</h3>
            </div>
          </div>
        </div>
      ) : (
        <>&nbsp;</>
      )}
      <div
        onClick={() => {
          window.location.reload();
        }}
        className="perevod"
        id="til"
      >
        <Image
          onClick={() => {
            localStorage.setItem("lang", "uz");
          }}
          id="per"
          style={{ width: "35px", cursor: "pointer", borderRadius: "50%" }}
          src={uzb}
          alt=""
        />
        <div className="perediv">
          <Image
            onClick={() => {
              localStorage.setItem("lang", "ru");
              window.location.reload();
            }}
            id="pere"
            style={{ width: "71px", cursor: "pointer" }}
            src={rus}
            alt=""
          />
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          onClick={() => {
            sessionStorage.setItem("valuta", "dollar");
            axios
            .get(
              `https://api.baracar.uz/api/${
                localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
              }/cars_get/?reload_currency=true`
            ).then((res)=>{})
            window.location.reload();
          }}
        />
        <p             style={{ color: "red", cursor: "pointer" }}>dollar</p>
        <div className="perediv">
          <input
            type="checkbox"
            onClick={() => {
              sessionStorage.setItem("valuta", "sum");
              axios
              .get(
                `https://api.baracar.uz/api/${
                  localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
                }/cars_get/?reload_currency=true`
              ).then((res)=>{})
              window.location.reload();
            }}
          />
                  <p style={{ color: "red", cursor: "pointer" }}>sum</p>
        </div>
      </div>
    </div>
  );
}
