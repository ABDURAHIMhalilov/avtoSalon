
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
import Link from "next/link";
import "../../app/globals.css"
// import uz from '../images/uzbekistan_round_button_with_iso_code_64.png'

export default function Navbar() {
  const [count, setCount] = useState(false);
  const [user, setUser] = useState(false)
  const [state, setState] = useState("")

useEffect(() => {
      setUser((localStorage.getItem("onemen") ? JSON.parse(localStorage.getItem("onemen")) : false))
      setState(localStorage.getItem('lang')?localStorage.getItem('lang'):"ru")
}, [])

  function setLanguage() { 
    window.location.reload()
    // var a=document.querySelector("#til").value
    // localStorage.setItem("lang",a)
    
  }
  


  return (
    <div className="navbar">
      <div
        className="modalMenu"
        style={count === true ? { display: "flex" } : { display: "none" }}
      >
        <MdClose className="close_btn" onClick={() => setCount(false)} />
        <div className="a_box">
          <Link href="#" className="a_fff a_mobile">

            {state === 'ru' ? ("Главная") : ("Bosh sahifa")}
            
          </Link>
        </div>
        <div className="a_box">
          <Link href="/js/Search" className="a_fff a_mobile">

            {state === 'ru' ? ("Поиск") : ("Qidiruv")}
          </Link>
        </div>
        <div className="a_box">
          <Link href="/js/About" className="a_fff a_mobile">
            {state === 'ru' ? ("О нас") : ("Biz haqimizda")}
          </Link>
        </div>
        <div className="a_box">
          <Link href="#" className="a_fff a_mobile">

            {state === 'ru' ? ("Страницы") : ("Sahifalar")}
          </Link>
        </div>

        <div className="a_box">
          <Link href="#" className="a_fff a_mobile">

            {state === 'ru' ? ("Более") : ("Ko'proq")}
          </Link>
        </div>
        <div className="perevod2">

          <img onClick={() => {
            localStorage.setItem('lang', 'uz')
          }} id="per" style={{ width: "50px" }} src="https://st4.depositphotos.com/8804418/21485/v/600/depositphotos_214857244-stock-illustration-uzbekistan-flag-glass-button-vector.jpg" alt="" />
          
          <img onClick={() => {
            localStorage.setItem('lang', 'ru')
          }} id="pere" style={{ width: "100px" }} src="https://st4.depositphotos.com/15822962/24248/v/600/depositphotos_242484092-stock-video-animated-russian-flag-on-the.jpg" alt="" />
          {/* {state==="ru"?( <img src="https://st.depositphotos.com/1575949/1356/v/450/depositphotos_13564006-stock-illustration-russia-flag-butto.jpg" alt="" />):( <img id="pere" src="https://img.freepik.com/premium-vector/uzbekistan-flag-button-round-flag-of-uzbekistan-vector-flag-symbol-colors-and-proportion-correctly_847658-237.jpg?w=826" alt="" />)} */}
         {
          user ? (
             <Link href="/js/Login">
          <AiOutlineUser className="user_icon" id="user1" />
         </Link>
          ) : ( 
             <Link href="/userpaage">
          <AiOutlineUser className="user_icon" id="user1" />
         </Link>
          )
         }
        
        </div>
      </div>
      <BiMenuAltLeft className="menuLeftIcon" onClick={() => setCount(true)} />

      <div className="navbar_left">
        <Link href="/" className="logo">
          <Image className="vehicaimg" src={logo} width={200} height={"auto"} alt="" />
        </Link>
        <Link href="/" className="a_fff">
          {state === 'ru' ? ("Главная") : ("Bosh sahifa")}
        </Link>



        <Link href="/js/Search" className="a_fff">

          {state === 'ru' ? ("Поиск") : ("Qidiruv")}
        </Link>
        <Link href="/js/About" className="a_fff">
          {state === 'ru' ? ("О нас") : ("Biz haqimizda")}
        </Link>
        <Link href="#" className="a_fff">
          {state === 'ru' ? ("Страницы") : ("Sahifalar")}
        </Link>
        <Link href="#" className="a_fff">
          {state === 'ru' ? ("Более") : ("Ko'proq")}
        </Link>
      </div>

      {user ? (
        <div>
          <div className="navbar_right">
            <div className="loginIn">
              <AiOutlineUser className="user_icon" />
              <Link href="/userpage" className="a_fff">
                {user.username}
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="navbar_right">
            <div className="loginIn">
              <AiOutlineUser className="user_icon" />
                {state === 'ru' ? (
              <Link href="/js/Login" style={{ width: '155px' }} className="a_fff" id="a_df">
                Войти в систему
              </Link>
              ) : (
                <Link style={{ width: '129px' }} href="/js/Login" className="a_fff" id="a_df">
                  Tizimga kirish
                </Link>
              )}
              {/* </a> */}
              {/* </a> */}
            </div>
            {/* <a href="/login" className="a_fff"> */}
            <Link href="/js/Login" className="a_fff" id="a_sd">
              {state === 'ru' ? ("Регистрация") : ("Ro'yxatdan o'tish")}
            </Link>
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
        <AiOutlineUser className="user_icon" id="user1" />
      </div>
    </div>


  );
}