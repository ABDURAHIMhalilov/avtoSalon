"use client";
import React, { useEffect,useState } from "react";
import "../css/Team.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import cardimg from "../images/user.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import "../../app/globals.css"
import "../../app/page.module.css"

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
            <h1>Наша команда</h1>
            <div className="left_body">
              <div className="left_box2">
                <div className="team_box">
                  <BsCheckCircleFill />
                  <p>Это грустный мультфильм</p>
                </div>
                <div className="team_box">
                  <BsCheckCircleFill />
                  <p>Adipsing elit</p>
                </div>
                <div className="team_box">
                  <BsCheckCircleFill />
                  <p>Это грустный мультфильм</p>
                </div>
              </div>
              <div className="left_box1">
                <div className="team_box">
                  <BsCheckCircleFill />
                  <p>Это грустный мультфильм</p>
                </div>
                <div className="team_box">
                  <BsCheckCircleFill />
                  <p>Лорем Ипсум.</p>
                </div>
              </div>
            </div>
            <button className="team_btn">Узнать больше</button>
          </div>
          

          

          <Swiper
        id="swiper2"
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
