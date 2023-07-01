'use client'
import React ,{useEffect} from "react";

import "../css/Contact.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Head from "next/head";
import "../../app/globals.css"


export default function Contact() {
const [state, setstate] = React.useState()

useEffect(() => {
setstate(localStorage.getItem("lang"))
}, [])
  return (
    <div>
        <Head>
        <title>{state==='ru'?("BaraCar-домашняя страница"):("BaraCar-Bosh sahifa")}</title>
      </Head>
      <Navbar />
      <div className="contact">
        <div className="contact_left">
          <h1>{state==='ru'?("Связаться с нами"):("Biz bilan bog'lani")}</h1>
          <p className="contact_info">
            {state==='ru'?("Спасибо вам за вашу постоянную поддержку. Слепонет... мы находимся в нужном месте в нужное время... спасаясь от астрологииархитектор."):("Doimiy qo'llab-quvvatlaganingiz uchun tashakkur. Ko'ryo'q... biz kerakli vaqtda kerakli joyda turibmiz... astrologiyadan qochisharxitektor.")}
          </p>
          <p className="contact_address">{state==='ru'?(" Западная 12-я улица Нью-Йорк, штат Нью-Йорк, США"):("G'arbiy 12-ko'cha Nyu-York, Nyu-York, AQSh")}</p>
          <a className="contact_tel" href="tel: +998931513776">
            (123) <span> 456-78901</span>
          </a>
          <div className="email_box">
            <MdEmail className="email_icon" />
            <a href="mailto: asliddinumirzoqov3@gmail.com">
              support@vehica.com
            </a>
          </div>
          <div className="feat_left contact_icons">
            <p>{state==='ru'?("Подписывайтесь на нас"):("Bizga obuna bo'ling")}</p>
            <a href="#" className="iconBox ">
              <FaFacebookF className="icon icon4" />
            </a>
            <a href="#" className="iconBox">
              <FaTwitter className="icon icon4" />
            </a>
            <a href="#" className="iconBox">
              <FaInstagram className="icon icon4" />
            </a>
          </div>
        </div>
        <div className="contact_right">
          <div className="inputs_top">
            <input type="text" className="contact_inp" placeholder= {state==='ru'?("Имя*"):("Ism*")}/>
            <input type="text" className="contact_inp" placeholder= {state==='ru'?("Электронная почта*"):("Elektron pochta*")}/>
            <input type="text" className="contact_inp" placeholder= {state==='ru'?("Телефон*"):("Telefon*")}/>
          </div>
          <textarea
            rows={10}
            placeholder={state==='ru'?("Сообщение*"):("Habar*")}
            className="contact_textarea"
          ></textarea>
          <div className="inputs_bottom">
            <label className="container">
            {state==='ru'?("я принимаю"):("men qabul qilaman")} <a href="#!"> {state==='ru'?("политика конфиденциальности"):("maxfiylik siyosati")}</a>
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <button className="contact_btn">{state==='ru'?("Отправлять"):("yuborish")}</button>
          </div>
        </div>
      </div>
      <div className="iframe" style={{marginBottom:'20px'}} >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.724080796138!2d69.36349267638798!3d41.29310917131201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5f1f3347f27%3A0x9a5455de3245cf1f!2z0KjQutC-0LvQsCDihJYyODI!5e0!3m2!1sru!2s!4v1685612426244!5m2!1sru!2s"
          loading="lazy"
        ></iframe>
      </div>
      <Footer/>
    </div>
  );
}

