
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
import url from "./Host";
// import uz from '../images/uzbekistan_round_button_with_iso_code_64.png'

export default function Navbar() {
  const [count, setCount] = useState(false);
  const [user, setUser] = useState((localStorage.getItem("onemen") ? JSON.parse(localStorage.getItem("onemen")) : false))
  const [state, setState] = React.useState(localStorage.getItem('lang'))


  function setLanguage() {
    // var a=document.querySelector("#til").value
    // localStorage.setItem("lang",a)
    window.location.reload()
  }


  return (
    <div className="navbar">
      <div
        className="modalMenu"
        style={count === true ? { display: "flex" } : { display: "none" }}
      >
        <MdClose className="close_btn" onClick={() => setCount(false)} />
        <div className="a_box">
          <a href="#" className="a_fff a_mobile">

            {state === 'ru' ? ("Главная") : ("Bosh sahifa")}
            
          </a>
        </div>
        <div className="a_box">
          <a href="/search" className="a_fff a_mobile">

            {state === 'ru' ? ("Поиск") : ("Qidiruv")}
          </a>
        </div>
        <div className="a_box">
          <a href="/about" className="a_fff a_mobile">
            {state === 'ru' ? ("О нас") : ("Biz haqimizda")}
          </a>
        </div>
        <div className="a_box">
          <a href="#" className="a_fff a_mobile">

            {state === 'ru' ? ("Страницы") : ("Sahifalar")}
          </a>
        </div>
        
        <div className="a_box">
          <a href="#" className="a_fff a_mobile">

            {state === 'ru' ? ("Более") : ("Ko'proq")}
          </a>
        </div>
      </div>
      <BiMenuAltLeft className="menuLeftIcon" onClick={() => setCount(true)} />
      <div className="navbar_left">
        <a href="/" className="logo">
          <Image className="vehicaimg" src={logo} width={200} height={"auto"} alt="" />
        </a>
        <a href="/" className="a_fff">
          {state === 'ru' ? ("Главная") : ("Bosh sahifa")}
        </a>



        <a href="/search" className="a_fff">

          {state === 'ru' ? ("Поиск") : ("Qidiruv")}
        </a>
        <a href="/about" className="a_fff">
          {state === 'ru' ? ("О нас") : ("Biz haqimizda")}
        </a>
        <a href="#" className="a_fff">
          {state === 'ru' ? ("Страницы") : ("Sahifalar")}
        </a>
        <a href="#" className="a_fff">
          {state === 'ru' ? ("Более") : ("Ko'proq")}
        </a>
      </div>

      {user ? (
        <div>
          <div className="navbar_right">
            <div className="loginIn">
              <AiOutlineUser className="user_icon" />
              <a href="/userpage" className="a_fff">
                {user.username}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="navbar_right">
            <div className="loginIn">
              <AiOutlineUser className="user_icon" />
              {/* <a href="/login" className="a_fff" > */}
                {state === 'ru' ? (
              <a href="/login" style={{ width: '155px' }} className="a_fff" id="a_df">
                Войти в систему
              </a>
              ) : (
                <a style={{ width: '129px' }} href="/login" className="a_fff" id="a_df">
                  Tizimga kirish
                </a>
              )}
              {/* </a> */}
              {/* </a> */}
            </div>
            {/* <a href="/login" className="a_fff"> */}
            <a href="/login" className="a_fff" id="a_sd">
              {state === 'ru' ? ("Регистрация") : ("Ro'yxatdan o'tish")}
            </a>
          </div>
        </div>
      )}
      <div className="perevod" id="til" onClick={() => setLanguage()}> 

        <img onClick={() => {
          localStorage.setItem('lang', 'uz')
        }} id="per" style={{ width: "35px" }} src="https://st4.depositphotos.com/8804418/21485/v/600/depositphotos_214857244-stock-illustration-uzbekistan-flag-glass-button-vector.jpg" alt="" />
        <img onClick={() => {


          localStorage.setItem('lang', 'ru')
        }} id="pere" style={{ width: "71px" }} src="https://st4.depositphotos.com/15822962/24248/v/600/depositphotos_242484092-stock-video-animated-russian-flag-on-the.jpg" alt="" />
        {/* {state==="ru"?( <img src="https://st.depositphotos.com/1575949/1356/v/450/depositphotos_13564006-stock-illustration-russia-flag-butto.jpg" alt="" />):( <img id="pere" src="https://img.freepik.com/premium-vector/uzbekistan-flag-button-round-flag-of-uzbekistan-vector-flag-symbol-colors-and-proportion-correctly_847658-237.jpg?w=826" alt="" />)} */}
        <AiOutlineUser className="user_icon" id="user1" />
      </div>
      {/* <div className='navbar_right'>
        <div className='loginIn'>
          <AiOutlineUser className='user_icon' />
          <a href='/login' className='a_fff'>
            Login In
          </a>
        </div>  
        <a href='/login' className='a_fff'>
          Register
        </a>
      </div> */}
      {/* <HiUsers className="usersIcon" />
      <div id="google_translate_element"></div> */}
    </div>


  );
}