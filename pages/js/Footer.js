"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../images/logo.png";
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
                <Image src={logo} width={200} alt="" />
              </a>
              <div className="footer_right">
                <div className="right_left">
                  <div className="ul ul2">
                    <a href="#" className="li">
                      <span>•</span> Yangilanish
                    </a>
                    <a href="#" className="li">
                      <span>•</span> FAQ
                    </a>
                    <a href="#" className="li">
                      <span>•</span> Yangilanish
                    </a>
                  </div>
                  <div className="ul">
                    <a href="#" className="li">
                      <span>•</span> Yangilanish
                    </a>
                    <a href="#" className="li">
                      <span>•</span> FAQ
                    </a>
                    <a href="#" className="li">
                      <span>•</span> Yangilanish
                    </a>
                  </div>
                </div>
                <p className="footer_info">
                  Mukofotga sazovor bo'lgan oilaga tegishli yangi va ishlatilgan
                  avtomobil sotuvchisi shahar atrofida bir nechta nuqtaga ega
                  avtomobillar. Eng past narxlar va eng yaxshi mijozlarga xizmat
                  kafolatlangan.
                </p>
              </div>
            </div>
            <div className="f_right_right">
              <p className="aaa">
                Mukofotga sazovor bo'lgan oilaga tegishli yangi va ishlatilgan
                avtomobil sotuvchisi shahar atrofida bir nechta nuqtaga ega
                avtomobillar. Eng past narxlar va eng yaxshi mijozlarga xizmat
                kafolatlangan.
              </p>
              <h2>
                (123) <span>456-78901</span>
              </h2>
              <p>support@vehica.com</p>
              <p>G'arbiy 12-ko'cha</p>
              <p>Nyu-York, Nyu-York, AQSh</p>
            </div>
            <div className="f_bot">
              <div className="a_box a">
                <a
                  onClick={() => {
                    window.location = "/";
                  }}
                  className="a_fff f_mobile"
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
                >
                  Qidiruv
                </a>
              </div>
              <div className="a_box a">
                <a
                  onClick={() => {
                    window.location = "/js/About";
                  }}
                  className="a_fff f_mobile"
                >
                  Biz haqimizda
                </a>
              </div>
              <div className="a_box a">
                <a
                  onClick={() => {
                    window.location = "/js/OurTeam";
                  }}
                  className="a_fff f_mobile"
                >
                  Jamoa
                </a>
              </div>
              <div className="a_box a">
                <a
                  onClick={() => {
                    window.location = "/js/Contact";
                  }}
                  className="a_fff f_mobile"
                >
                  Bog'lanish
                </a>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <p className="privacy">
              © 2023. Barcha huquqlar himoyalangan.{" "}
              <a href="#!"> Maxfiylik siyosati</a>
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
                <Image src={logo} width={200} alt="" />
              </a>
              <div className="footer_right">
                <div className="right_left">
                  <div className="ul ul2">
                    <a href="#" className="li">
                      <span>•</span> Объявления
                    </a>
                    <a href="#" className="li">
                      <span>•</span> FAQ
                    </a>
                    <a href="#" className="li">
                      <span>•</span> Объявления
                    </a>
                  </div>
                  <div className="ul">
                    <a href="#" className="li">
                      <span>•</span> Объявления
                    </a>
                    <a href="#" className="li">
                      <span>•</span> FAQ
                    </a>
                    <a href="#" className="li">
                      <span>•</span> Объявления
                    </a>
                  </div>
                </div>
                <p className="footer_info">
                  Удостоенный наград семейный дилер новых и подержанных
                  автомобилей автомобили с несколькими точками по всему городу.
                  Самые низкие цены и гарантировано лучшее обслуживание
                  клиентов.
                </p>
              </div>
            </div>
            <div className="f_right_right">
              <p className="aaa">
                Удостоенный наград семейный дилер новых и подержанных
                автомобилей автомобили с несколькими точками по всему городу.
                Самые низкие цены и гарантировано лучшее обслуживание клиентов.
              </p>
              <h2>
                (123) <span>456-78901</span>
              </h2>
              <p>support@vehica.com</p>
              <p>Западная 12-я улица</p>
              <p>Нью-Йорк, штат Нью-Йорк, США</p>
            </div>
            <div className="f_bot">
              <div className="a_box a">
                <a href="#" className="a_fff f_mobile">
                  Главная страница
                </a>
              </div>
              <div className="a_box a">
                <a href="#" className="a_fff f_mobile">
                  Поиск
                </a>
              </div>
              <div className="a_box a">
                <a href="#" className="a_fff f_mobile">
                  Листинг
                </a>
              </div>
              <div className="a_box a">
                <a href="#" className="a_fff f_mobile">
                  Страницы
                </a>
              </div>
              <div className="a_box a">
                <a href="#" className="a_fff f_mobile">
                  Более
                </a>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <p className="privacy">
              © 2023. Все права защищены.{" "}
              <a href="#!"> политика конфиденциальности</a>
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
