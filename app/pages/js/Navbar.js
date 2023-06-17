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

export default function Navbar() {
  const [count, setCount] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("username"));
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    axios.get(`${url}/auth/users/`, {
      headers: {
        Authorization: "Bearer " + localStorage .getItem("Token_user"),
      },
    }).then(res => {
      res.data.map(item => {
        console.log(item);
        if(item.username == user || item.phone == user || item.email == user) {
          console.log(item,'gfyuigjgh')
          setUsers(item)
          // localStorage.setItem('keysdada', item)
        }
      })  
    })
  }, []);

  function localTest() {
    console.log(users);
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
            Homess
          </a>
        </div>
        <div className="a_box">
          <a href="/cars" className="a_fff a_mobile">
            Search
          </a>
        </div>
        <div className="a_box">
          <a href="#" className="a_fff a_mobile">
            Listing
          </a>
        </div>
        <div className="a_box">
          <a href="#" className="a_fff a_mobile">
            Pages
          </a>
        </div>
        <div className="a_box">
          <a href="#" className="a_fff a_mobile">
            More
          </a>
        </div>
      </div>
      <BiMenuAltLeft className="menuLeftIcon" onClick={() => setCount(true)} />
      <div className="navbar_left">
        <a href="/" className="logo">
          <Image src={logo} width={200} height={"auto"} alt="" />
        </a>
        <a href="/" className="a_fff">
          Home
        </a>
        <a href="/cars" className="a_fff">
          Search
        </a>
        <a href="/about" className="a_fff">
          About
        </a>
        <a href="#" className="a_fff">
          Pages
        </a>
        <a href="#" className="a_fff">
          More
        </a>
        <button onClick={() => localTest()}>localTest</button>
      </div>
      {user ? (
        <div>
          <div className="navbar_right">
            <div className="loginIn">
              <AiOutlineUser className="user_icon" />
              <a href="/userpage" className="a_fff">
                {user}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="navbar_right">
            <div className="loginIn">
              <AiOutlineUser className="user_icon" />
              <a href="/login" className="a_fff">
                Login In
              </a>
            </div>
            <a href="/login" className="a_fff">
              Register
            </a>
          </div>
        </div>
      )}
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
      <HiUsers className="usersIcon" />
    </div>
  );
}
