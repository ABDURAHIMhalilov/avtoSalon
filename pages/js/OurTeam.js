"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../css/About.css";
import Image from "next/image";
import gm from "../images/avtomobili-v-nalichii-v-avtosalonah-gm-uzbekistan-v-tashkente-i-po-uzbekistanu-spark-cobalt-i-malibu.jpg";
import us from "../images/us.png";
import gr from "../images/802fb0e427c5ead5459397eb9fed8454.jpg";
import Team from "./Team";
import img1 from "../images/4631-5479.jpg";
import img2 from "../images/l36xwdcedqa7b_226q75.jpeg";
import img3 from "../images/wr-960.webp";
import img4 from "../images/scale_1200.webp";
import img5 from "../images/1667561645_55-sportishka-com-p-uzbekskii-shevrole-pinterest-55.jpg";
import img6 from "../images/G8JptdLTeAk.jpg";
import img7 from "../images/scale_1200 (1).webp";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../app/globals.css";
import Footer from "./Footer";
import bank from "../images/photo_2023-07-06_17-50-05.jpg";
import "../css/Ourteam.css"

export default function About() {
  const [state, setstate] = useState();
  useEffect(() => {
    setstate(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
    );
  }, []);
  return (
    <div className="gray1">
      <Navbar />
      <div className="about">
        <div className="about_left">
          <Image className="bank" src={bank} alt="" />
          <h1>{state === "ru" ? "Trade-in.  " : "Trade-in. "}</h1>
          <h4>
            {state === "ru"
              ? "Сервис по трейд-ин. "
              : "Trade-in xizmati."}
          </h4>
          <p className="about_info" style={{fontSize:"18px"}}>
            {state === "ru"
              ? "Получите оценку своего авто за короткий срок, и по рыночной цене.   "
              : "Avtomobilingizning bahosini qisqa vaqt ichida va bozor narxida oling."}
          </p>
          <p className="about_border" style={{fontSize:"18px"}}>
            {state === "ru"
              ?( <div> Мы гарантируем: <br /> 1. Рыночную цену за ваше авто <br /> <br /> 2. Мгновенную выплату в любой для вас форме <br /><br /> 3. 10% скидка за trade-in при покупке нового авто на Baracar. </div>): (<div>Bizning shartlar: <br /> 1. Avtomobilingizni bozor narxida baholaymiz <br /> <br /> 2. Siz uchun istalgan shaklda qulay va tez to'lov <br /><br /> 3. Trade-in qilganingizda yangi mashina sotib olishda 10% chegirma</div>)}
          </p>
        </div>
        <Image src={gr} alt="" className="aboutImage" />
      </div>
      <div className="seo">
        <div className="seo_left">
          
          
        </div>
        <Image src={gm} alt="" className="seo_img" />
        <div className="seo_center">
          <h3>
            {state === "ru"
              ? "Закажите тест-драйв!"
              : "Sinov uchun buyurtma bering!"}
          </h3>
          <button className="center_btn" onClick={() =>{window.location="/js/Contact"}}>
            {state === "ru" ? "Связаться с нами" : "Biz bilan bog'laning"}
          </button>
        </div>
      </div>
      <Team />
      <div className="about_images">
        <div className="image_left">
          <Image src={img1} alt="" className="about_img1" />
          <div className="img_box">
            <Image src={img2} alt="" className="about_img2" />
            <Image src={img3} alt="" className="about_img2" />
          </div>
        </div>
        <div className="image_right">
          <div className="img_box">
            <Image src={img4} alt="" className="about_img2" />
            <Image src={img5} alt="" className="about_img2" />
          </div>
          <div className="img_box">
            <Image src={img6} alt="" className="about_img2" />
            <Image src={img7} alt="" className="about_img2" />
          </div>
        </div>
      </div>
      <div className="question" style={{ marginBottom: "60px" }}>
        <h1>
          {state === "ru"
            ? "Часто задаваемые вопросы"
            : "Tez-tez so'raladigan savollar"}
        </h1>
        
        <button className="question_btn">
          {state === "ru" ? "Узнать больше" : "Ko'proq bilib oling"}
        </button>
      </div>
      <Footer />
    </div>
  );
}
