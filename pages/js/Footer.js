"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../images/logobmw.png"
import "../css/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../css/Featured.css";
import "../../app/globals.css";

export default function Footer() {
  // const [language, setLanguage ] = React.useState("ru")
  const [state, setstate] = useState();
  useEffect(() => {
    setstate(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
    );
  }, []);
  return (
    <>
      {state === "uz" ? (
        <div className="footer" style={{ marginTop: "30px" }}>
          <div className="footer_body">
            <div className="ff">
              <a href="/" className="logo">
                <Image style={{marginLeft:"-20px"}} src={logo} width={200} alt="" />
              </a>
              <div className="footer_right">
                <div className="right_left">
                  <div className="ul ul2">
                    <a style={{ cursor: "pointer" }} onClick={() =>{window.location="/"}} className="li">
                      <span>•</span> Bosh sahifa
                    </a>
                    <a style={{ cursor: "pointer" }} onClick={() =>{window.location="/js/Search"}}  className="li">
                      <span>•</span> Qidiruv
                    </a>
                    <a style={{ cursor: "pointer" }} onClick={() =>{window.location="/js/About"}} className="li">
                      <span>•</span> Avtokredit
                    </a>
                  </div>
                  <div className="ul">
                    <a style={{ cursor: "pointer" }} onClick={() =>{window.location="/js/OurTeam"}}  className="li">
                      <span>•</span> Trade-in
                    </a>
                    <a style={{ cursor: "pointer" }}  onClick={() =>{window.location="/js/Contact"}} className="li">
                      <span>•</span> Bog'lanish
                    </a>
                    <a style={{ cursor: "pointer" }} onClick={() =>{window.location="/js/Faq"}} className="li">
                      <span>•</span> FAQ
                    </a>
                  </div>
                </div>
                <p className="footer_info">
                Baracar har bir avtomobilning kamida 30 kun xizmat ko'rsatishiga kafolat beradi. Agar kafolat muddati davomida mashinada muammo yuzaga kelsa, texnik xizmat ko'rsatish bo'yicha hamkorlarimiz uni tuzatadilar. 
                </p>
              </div>
            </div>
            <div className="f_right_right">
              <p className="aaa">
              Baracar har bir avtomobilning kamida 30 kun xizmat ko'rsatishiga kafolat beradi. Agar kafolat muddati davomida mashinada muammo yuzaga kelsa, texnik xizmat ko'rsatish bo'yicha hamkorlarimiz uni tuzatadilar. 
              </p>
            <a href="tel:330321112">  <h2 className="footerh2">
                (33) <span>032 11 12 </span>
              </h2></a>
              <a className="Tcard_email" href="mailto: avtobaracar@gmail.com">
                    avtobaracar@gmail.com</a>
              <p>Mirobod tumani,</p>
              <p>Kichik Halqa Yo’li, Toshkent 100015</p>
            </div>
            <div className="f_bot">
              <div className="a_box a">
                <a 
                  onClick={() => {
                    window.location = "/";
                  }}
                  className="a_fff f_mobile"
                  style={{ cursor: "pointer" }} 
                >
                  Bosh sahifa
                </a>
              </div>
              <div className="a_box a">
                <a
                  onClick={() => {
                    window.location = "/js/Search";
                  }}
                  className="a_fff f_mobile"
                  style={{ cursor: "pointer" }}
                >
                  Qidiruv
                </a>
              </div>
              <div className="a_box a">
                <h3
                  onClick={() => {
                    window.location = "/js/About";
                  }}
                  className="a_fff f_mobile"
                  style={{ cursor: "pointer" }}
                >
                  Biz haqimizda
                </h3>
              </div>
              <div className="a_box a">
                <h3
                  onClick={() => {
                    window.location = "/js/OurTeam";
                  }}
                  className="a_fff f_mobile"
                  style={{ cursor: "pointer" }}
                >
                  Trade-in
                </h3>
              </div>
              <div className="a_box a">
                <h3
                  onClick={() => {
                    window.location = "/js/Contact";
                  }}
                  className="a_fff f_mobile"
                  style={{ cursor: "pointer" }}
                >
                  Bog'lanish
                </h3>
              </div>
              <div className="a_box a">
                <h3
                  onClick={() => {
                    window.location = "/js/Faq";
                  }}
                  className="a_fff f_mobile"
                  style={{ cursor: "pointer" }}
                >
                  FAQ
                </h3>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <p className="privacy">
              © 2023.<a href="tel:996487223">  Abbas Team{" "}
              </a>
            </p>
            <div className="feat_left">
              <a href="#" className="iconBox icon2">
                <FaFacebookF className="icon" />
              </a>
              <a href="#" className="iconBox icon2">
                <FaTwitter className="icon" />
              </a>
              <a href="#" className="iconBox icon2">
                <FaInstagram className="icon" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="footer">
          <div className="footer_body">
            <div className="ff">
              <a href="/" className="logo">
                <Image src={logo} style={{marginLeft:"-20px"}} width={200} alt="" />
              </a>
              <div className="footer_right">
                <div className="right_left">
                  <div className="ul ul2">
                    <a style={{ cursor: "pointer" }} onClick={() =>{window.location="/"}}  className="li">
                      <span>•</span> Главная
                    </a>
                    <a style={{ cursor: "pointer" }} onClick={() =>{window.location="/js/Search"}} className="li">
                      <span>•</span> Поиск
                    </a>
                    <a style={{ cursor: "pointer" }} onClick={() =>{window.location="/js/About"}}  className="li">
                      <span>•</span> Автокредит
                    </a>
                  </div>
                  <div className="ul">
                    <a style={{ cursor: "pointer" }} onClick={() =>{window.location="/js/OurTeam"}}  className="li">
                      <span>•</span> Trade-in
                    </a>
                    <a style={{ cursor: "pointer" }} onClick={() =>{window.location="/js/Contact"}} className="li">
                      <span>•</span> Cвязь
                    </a>
                    <a style={{ cursor: "pointer" }} onClick={() =>{window.location="/js/Faq"}}  className="li">
                      <span>•</span> FAQ
                    </a>
                  </div>
                </div>
                <p className="footer_info">
                Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их.  
                </p>
              </div>
            </div>
            <div className="f_right_right">
              <p className="aaa">
              Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их.  
              </p>
              <a href="tel:3330321112"><h2 className="footerh2">
                (33) <span>032 11 12 </span>
              </h2></a>
              <a className="Tcard_email" href="mailto: avtobaracar@gmail.com">
                    avtobaracar@gmail.com</a>
              <p>Мирабадский район,</p>
              <p>Малая кольцевая дорога, Ташкент, 100015</p>
            </div>
            <div className="f_bot">
              <div className="a_box a">
                <h3
                  href="#"
                  className="a_fff f_mobile"
                  style={{ cursor: "pointer" }}
                  onClick={() => {window.location = "/"}}
                >
                  Главная страница
                </h3>
              </div>
              <div className="a_box a">
                <h3
                  href="#"
                  className="a_fff f_mobile"
                  onClick={() => {window.location = "/js/Search"}}
                  style={{ cursor: "pointer" }}
                >
                  Поиск
                </h3>
              </div>
              <div className="a_box a">
                <h3
                  href="#"
                  className="a_fff f_mobile"
                  onClick={() => {window.location = "/js/About"}}
                  style={{ cursor: "pointer" }}
                >
                  Автокредит
                </h3>
              </div>
              <div className="a_box a">
                <h3
                  href="#"
                  className="a_fff f_mobile"
                  onClick={() => {window.location = "/js/OurTeam"}}
                  style={{ cursor: "pointer" }}
                >
                  Trade-in
                </h3>
              </div>
              <div className="a_box a">
                <h3
                  href="#"
                  className="a_fff f_mobile"
                  onClick={() => {window.location = "/js/Contact"}}
                  style={{ cursor: "pointer" }}
                >
                  Связь
                </h3>
              </div>
              <div className="a_box a">
                <h3
                  href="#"
                  className="a_fff f_mobile"
                  onClick={() => {window.location = "/js/Faq"}}
                  style={{ cursor: "pointer" }}
                >
                  FAQ
                </h3>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <p className="privacy">
            © 2023.<a href="tel:996487223">  Команда Аббаса{" "}</a>
            </p>
            <div className="feat_left">
              <a href="#" className="iconBox icon2">
                <FaFacebookF className="icon" />
              </a>
              <a href="#" className="iconBox icon2">
                <FaTwitter className="icon" />
              </a>
              <a href="#" className="iconBox icon2">
                <FaInstagram className="icon" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
