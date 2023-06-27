"use client";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "../css/About.css"
import Image from "next/image";
import office from "../images/office.jpg";
import us from "../images/us.png";
import gr from "../images/gr.jpg";
import Team from "./Team";
import img1 from "../images/galery.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../app/globals.css"

export default function About() {
  const [ state, setState ] = React.useState();
  useEffect(()=>{
    setState(localStorage.getItem('lang'))
  })
  return (
    <div>
      <Navbar />
      <div className="about">
        <div className="about_left">
          <h1>{state==='ru'?("О нас"):("Biz haqimizda")}</h1>
          <h4>
          {state==='ru'?("Чем закончилось приключение, увидим позже. Однако Ауда волновалась.она ничего не сказала."):("Sarguzasht qanday tugadi, keyinroq ko'ramiz. Biroq, Auda xavotirda edi.u hech narsa demadi.")}</h4>
          <p className="about_info">
          {state==='ru'?("Что касается Паспарту, то он счел маневр мистера Фогга простославный. Капитан сказал: «между одиннадцатью и двенадцатью узлами».и Генриетта подтвердила его предсказание. Чем закончилось приключениебудет видно анон. Ауда встревожилась, хотя ничего не сказала. Какчто касается Паспарту, то маневр мистера Фогга показался ему просто великолепным.— сказал капитан."):("Passepartga kelsak, u janob Foggning manevrasini oddiy deb topdishonli. Kapitan: o'n bir va o'n ikki tugun o'rtasida, dedi. va Henrietta uning bashoratini tasdiqladi. Sarguzasht qanday tugadiAnton ko'rinadi. Auda hech narsa demagan bo'lsa ham, xavotirga tushdi. Qanday qilibPassepartga kelsak, janob Foggning manevrasi unga juda zo'r tuyuldi.- dedi kapitan.")}
          </p>
          <p className="about_border">
          {state==='ru'?("В первые дни они шли достаточно гладко. Море былоне очень неблагоприятный, ветер казался неподвижным в северо-восточном направлении."):("Dastlabki kunlarda ular etarlicha silliq yurishdi. Dengiz bor edijuda noqulay emas, shamol shimoli-Sharqiy yo'nalishda harakatsiz bo'lib tuyuldi.")}</p>
          <p className="about_info">
          {state==='ru'?("Что касается Паспарту, то он счел маневр мистера Фогга простославный. Капитан сказал: «между одиннадцатью и двенадцатью узлами».и Генриетта подтвердила его предсказание. Чем закончилось приключениебудет видно анон. Ауда встревожилась, хотя ничего не сказала. Какчто касается Паспарту, то маневр мистера Фогга показался ему просто великолепным.— сказал капитан."):("Passepartga kelsak, u janob Foggning manevrasini oddiy deb topdishonli. Kapitan: o'n bir va o'n ikki tugun o'rtasida, dedi.va Henrietta uning bashoratini tasdiqladi. Sarguzasht qanday tugadiAnton ko'rinadi. Auda hech narsa demagan bo'lsa ham, xavotirga tushdi. Qanday qilibPassepartga kelsak, janob Foggning manevrasi unga juda zo'r tuyuldi.- dedi kapitan.")}
          </p>
        </div>
        <Image src={office} alt="" className="aboutImage" />
      </div>
      <div className="seo">
        <div className="seo_left">
          <Image src={us} alt="" />
          <div className="left_box">
            <h2>{state==='ru'?("Наш генеральный директор Сэй"):("Bizning Bosh direktorimiz say")}</h2>
            <p>
            {state==='ru'?("Качество никогда не бывает случайным; это всегда результат высокойнамерение."):("Sifat hech qachon tasodifiy emas; bu har doim yuqori natijadirniyat.")}
            </p>
          </div>
        </div>
        <Image src={gr} alt="" className="seo_img" />
        <div className="seo_center">
          <h3>{state==='ru'?("Закажите тест-драйв!"):("Sinov drayveriga buyurtma bering!")}</h3>
          <button className="center_btn">{state==='ru'?("Связаться с нами"):("Biz bilan bog'laning")}</button>
        </div>
      </div>
      <Team />
      <div className="about_images">
        <div className="image_left">
          <Image src={img1} alt="" className="about_img1" />
          <div className="img_box">
            <Image src={img1} alt="" className="about_img2" />
            <Image src={img1} alt="" className="about_img2" />
          </div>
        </div>
        <div className="image_right">
          <div className="img_box">
            <Image src={img1} alt="" className="about_img2" />
            <Image src={img1} alt="" className="about_img2" />
          </div>
          <div className="img_box">
            <Image src={img1} alt="" className="about_img2" />
            <Image src={img1} alt="" className="about_img2" />
          </div>
        </div>
      </div>
      <div className="question">
        <h1>{state==='ru'?("Часто задаваемые вопросы"):("Tez-tez so'raladigan savollar")}</h1>
        <div className="question_body">
          <div className="question_left">
            <Accordion>
              <AccordionSummary
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
              >
                <Typography>{state==='ru'?("Вы предлагаете какие-либо гарантии?"):("Siz har qanday kafolatni taklif qilasizmi?")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                {state==='ru'?("Мы можем помочь с вашим планом финансирования, мы можем предложить несколько советов и рекомендаций. Уезжайте на этой машине вашей мечты, независимо от вашей кредитной истории."):("Biz sizning moliyalashtirish rejangizda yordam bera olamiz, ba'zi maslahatlar va tavsiyalarni taklif qilishimiz mumkin. Kredit tarixingizdan qat'i nazar, orzuingizdagi ushbu mashinani haydab chiqing.")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>{state==='ru'?("Аккордеон 2"):("Akkordeon 2")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                {state==='ru'?("Клиент очень важен, за клиентом последует клиент.Suspendisse malesuada lake ex, пусть это будет очень лестно для лео политикипотребности"):("Mijoz juda muhim, mijozdan keyin mijoz keladi.Suspendisse malesuada lake ex, Leo siyosati uchun juda xushomadgo'y bo'lsinehtiyojlar")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>{state==='ru'?("Аккардион 2"):("Akkardion 2")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                {state==='ru'?("Клиент очень важен, за клиентом последует клиент.Suspendisse malesuada lake ex, пусть это будет очень лестно для лео политикипотребности"):("Mijoz juda muhim, mijozdan keyin mijoz keladi.Suspendisse malesuada lake ex, Leo siyosati uchun juda xushomadgo'y bo'lsinehtiyojlar")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>{state==='ru'?("Аккардион 2"):("Akkardion 2")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
{state==='ru'?("Клиент очень важен, за клиентом последует клиент.Suspendisse malesuada lake ex, пусть это будет очень лестно для лео политикипотребности"):("Mijoz juda muhim, mijozdan keyin mijoz keladi.Suspendisse malesuada lake ex, Leo siyosati uchun juda xushomadgo'y bo'lsinehtiyojlar")}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="question_right">
            <Accordion>
              <AccordionSummary
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
              >
                <Typography>{state==='ru'?("Аккардион 1"):("Akkardion 1")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                {state==='ru'?("Клиент очень важен, за клиентом последует клиент.Suspendisse malesuada lake ex, пусть это будет очень лестно для лео политикипотребности"):("Mijoz juda muhim, mijozdan keyin mijoz keladi.Suspendisse malesuada lake ex, Leo siyosati uchun juda xushomadgo'y bo'lsinehtiyojlar")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>{state==='ru'?("Аккардион 2"):("Akkardion 2")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                {state==='ru'?("Клиент очень важен, за клиентом последует клиент.Suspendisse malesuada lake ex, пусть это будет очень лестно для лео политикипотребности"):("Mijoz juda muhim, mijozdan keyin mijoz keladi.Suspendisse malesuada lake ex, Leo siyosati uchun juda xushomadgo'y bo'lsinehtiyojlar")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>{state==='ru'?("Аккардион 2"):("Akkardion 2")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                {state==='ru'?("Клиент очень важен, за клиентом последует клиент.Suspendisse malesuada lake ex, пусть это будет очень лестно для лео политикипотребности"):("Mijoz juda muhim, mijozdan keyin mijoz keladi.Suspendisse malesuada lake ex, Leo siyosati uchun juda xushomadgo'y bo'lsinehtiyojlar")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>{state==='ru'?("Аккардион 2"):("Akkardion 2")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                {state==='ru'?("Клиент очень важен, за клиентом последует клиент.Suspendisse malesuada lake ex, пусть это будет очень лестно для лео политикипотребности"):("Mijoz juda muhim, mijozdan keyin mijoz keladi.Suspendisse malesuada lake ex, Leo siyosati uchun juda xushomadgo'y bo'lsinehtiyojlar")}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <button className="question_btn">{state==='ru'?("Узнать больше"):("Ko'proq bilib oling")}</button>
      </div>
    </div>
  );
}
