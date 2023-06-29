"use client";
import React, { useEffect,useState } from "react";
import "../css/Team.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import cardimg from "../images/user.jpg";
import emilyimg from "../images/p7-1-336x284.jpg"
import isabellaimg from "../images/p6-1-336x284.jpg"
import jacobimg from "../images/p2-1-336x284.jpg"
import kateimg from "../images/p4-1-336x284.jpg"
import ralfimg from "../images/p1-1-336x284.jpg"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "swiper/css/navigation";
import { Pagination,Navigation } from "swiper";
import "../../app/globals.css"
import "../../app/page.module.css"
// import { Navigation } from "swiper";

export default function Team() {
  const [state,setState]=useState()

  useEffect(()=>{
    setState(localStorage.getItem('lang')?localStorage.getItem('lang'):"ru")
  })
  return (
    <>
    {
                  
        <div className="teamkatta">
          <div className="team">
          <div className="team_left">
            <h1>{state==="ru"?("Наша команда"):("Bizning jamoamiz")}</h1>
            <div className="left_body">
              <div className="left_box2">
                <div className="team_box">
                  <BsCheckCircleFill />
                  <p>{state==="ru"?("Это грустный мультфильм"):("Bu qayg'uli multfilm")}</p>
                </div>
                <div className="team_box">
                  <BsCheckCircleFill />
                  <p>{state==="ru"?("Adipsing elit"):("Adipsing elit")}</p>
                </div>
                <div className="team_box">
                  <BsCheckCircleFill />
                  <p>{state==="ru"?("Это грустный мультфильм"):("Bu qayg'uli multfilm")}</p>
                </div>
              </div>
              <div className="left_box1">
                <div className="team_box">
                  <BsCheckCircleFill />
                  <p>{state==="ru"?("Это грустный мультфильм"):("Bu qayg'uli multfilm")}</p>
                </div>
                <div className="team_box">
                  <BsCheckCircleFill />
                  <p>{state==="ru"?("Лорем Ипсум."):("Lorem Ipsum.")}</p>
                </div>
              </div>
            </div>
            <button className="team_btn">{state==="ru"?("Узнать больше"):("Qo'shimcha")}</button>
          </div>
          

          

          <Swiper
        id="swiper2"
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={false}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView:1,
            spaceBetween:10,
          },
        600: {
            slidesPerView:2,
            spaceBetween:30,
          },
          1100: {
            slidesPerView:2,
            spaceBetween:15,
          },
          1100: {
            slidesPerView:2,
            spaceBetween:15,
          },
          1300: {
            slidesPerView:3,
            spaceBetween:30,
          }
        }}
      >
          
        <SwiperSlide className="team_card1">
              <Image src={emilyimg} alt="" />
              <div className="Tcard_box1">
                <div className="tel_box1"></div>
                <div className="email_box1"></div>
                <h2>Emily Rees</h2>
                <p>Mijoz maslahatchisi</p>
                <a className="Tcard_email1" href="#!">
                emily@vehica.com
                </a>
                <a className="Tcard_tel1" href="tel: +998931513776">
                  (123) 345-6789
                </a>
              </div>
            </SwiperSlide>
        <SwiperSlide className="team_card1">
              <Image src={cardimg} alt="" />
              <div className="Tcard_box1">
                <div className="tel_box1"></div>
                <div className="email_box1"></div>
                <h2>George Brown</h2>
                <p>Mijoz maslahatchisi</p>
                <a className="Tcard_email1" href="#!">
                  george@vehica.com
                </a>
                <a className="Tcard_tel1" href="tel: +998931513776">
                  (123) 345-6789
                </a>
              </div>
            </SwiperSlide>
        <SwiperSlide className="team_card1">
              <Image src={isabellaimg} alt="" />
              <div className="Tcard_box1">
                <div className="tel_box1"></div>
                <div className="email_box1"></div>
                <h2>Isabella Evans</h2>
                <p>Mijoz maslahatchisi</p>
                <a className="Tcard_email1" href="#!">
                isabella@vehica.com
                </a>
                <a className="Tcard_tel1" href="tel: +998931513776">
                  (123) 345-6789
                </a>
              </div>
            </SwiperSlide>
        <SwiperSlide className="team_card1">
              <Image src={jacobimg} alt="" />
              <div className="Tcard_box1">
                <div className="tel_box1"></div>
                <div className="email_box1"></div>
                <h2>Jacob Austin</h2>
                <p>Mijoz maslahatchisi</p>
                <a className="Tcard_email1" href="#!">
                jacob@vehica.com
                </a>
                <a className="Tcard_tel1" href="tel: +998931513776">
                  (123) 345-6789
                </a>
              </div>
            </SwiperSlide>
        <SwiperSlide className="team_card1">
              <Image src={kateimg} alt="" />
              <div className="Tcard_box1">
                <div className="tel_box1"></div>
                <div className="email_box1"></div>
                <h2>Kate Hendricks</h2>
                <p>Mijoz maslahatchisi</p>
                <a className="Tcard_email1" href="#!">
                kate@vehica.com
                </a>
                <a className="Tcard_tel1" href="tel: +998931513776">
                  (123) 345-6789
                </a>
              </div>
            </SwiperSlide>
        <SwiperSlide className="team_card1">
              <Image src={ralfimg} alt="" />
              <div className="Tcard_box1">
                <div className="tel_box1"></div>
                <div className="email_box1"></div>
                <h2>Ralph Davin</h2>
                <p>Mijoz maslahatchisi</p>
                <a className="Tcard_email1" href="#!">
                ralph@vehica.com
                </a>
                <a className="Tcard_tel1" href="tel: +998931513776">
                  (123) 345-6789
                </a>
              </div>
            </SwiperSlide>
        <SwiperSlide className="team_card1  team_card2">
              <Image src={emilyimg} alt="" />
              <div className="Tcard_box1">
                <div className="tel_box1"></div>
                <div className="email_box1"></div>
                <h2>Emily Rees</h2>
                <p>Mijoz maslahatchisi</p>
                <a className="Tcard_email1" href="#!">
                emily@vehica.com
                </a>
                <a className="Tcard_tel1" href="tel: +998931513776">
                  (123) 345-6789
                </a>
              </div>
            </SwiperSlide>
        <SwiperSlide className="team_card1 team_card2">
              <Image src={cardimg} alt="" />
              <div className="Tcard_box1">
                <div className="tel_box1"></div>
                <div className="email_box1"></div>
                <h2>George Brown</h2>
                <p>Mijoz maslahatchisi</p>
                <a className="Tcard_email1" href="#!">
                  george@vehica.com
                </a>
                <a className="Tcard_tel1" href="tel: +998931513776">
                  (123) 345-6789
                </a>
              </div>
            </SwiperSlide>
      </Swiper>



        </div></div>
        
    }
    </>
  );
}
