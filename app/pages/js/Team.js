"use client";
import React from "react";
import "../css/Team.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import cardimg from "../images/user.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Navigation } from "swiper";

export default function Team() {
  return (
    <>
      {
        localStorage.getItem('lang') == "uz" ? (
          <div className="team">
            <div className="team_left">
              <h1>Bizning Jamoa</h1>
              <div className="left_body">
                <div className="left_box2">
                  <div className="team_box">
                    <BsCheckCircleFill />
                    <p>Zamonaviy Avtomobillar!</p>
                  </div>
                  <div className="team_box">
                    <BsCheckCircleFill />
                    <p>Zamonaviy Jamoa!</p>
                  </div>
                  <div className="team_box">
                    <BsCheckCircleFill />
                    <p>Hamyonbob narxlar!</p>
                  </div>
                </div>
                <div className="left_box1">
                  <div className="team_box">
                    <BsCheckCircleFill />
                    <p>Yuqori dizaynga ega avtomobillar</p>
                  </div>
                </div>
              </div>
              <button className="team_btn">Qo'shimcha ma'lumot olish</button>
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              className="mySwiper" id="swiper"
            >
              <SwiperSlide className="team_card">
                <Image src={cardimg} alt="" />
                <div className="Tcard_box">
                  <div className="tel_box"></div>
                  <div className="email_box"></div>
                  <h2>Jorj Braun</h2>
                  <p>Mijoz maslahatchisi</p>
                  <a className="Tcard_email" href="#!">
                    george@vehica.com
                  </a>
                  <a className="Tcard_tel" href="tel: +998931513776">
                    (123) 345-6789
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="team_card">
                <Image src={cardimg} alt="" />
                <div className="Tcard_box">
                  <div className="tel_box"></div>
                  <div className="email_box"></div>
                  <h2>George Brown</h2>
                  <p>Mijoz maslahatchisi</p>
                  <a className="Tcard_email" href="#!">
                    george@vehica.com
                  </a>
                  <a className="Tcard_tel" href="tel: +998931513776">
                    (123) 345-6789
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="team_card">
                <Image src={cardimg} alt="" />
                <div className="Tcard_box">
                  <div className="tel_box"></div>
                  <div className="email_box"></div>
                  <h2>Michael</h2>
                  <p>Mijoz maslahatchisi</p>
                  <a className="Tcard_email" href="#!">
                    george@vehica.com
                  </a>
                  <a className="Tcard_tel" href="tel: +998931513776">
                    (123) 345-6789
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="team_card">
                <Image src={cardimg} alt="" />
                <div className="Tcard_box">
                  <div className="tel_box"></div>
                  <div className="email_box"></div>
                  <h2>George Brown</h2>
                  <p>Customer Advisor</p>
                  <a className="Tcard_email" href="#!">
                    george@vehica.com
                  </a>
                  <a className="Tcard_tel" href="tel: +998931513776">
                    (123) 345-6789
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide className="team_card">
                <Image src={cardimg} alt="" />
                <div className="Tcard_box">
                  <div className="tel_box"></div>
                  <div className="email_box"></div>
                  <h2>John</h2>
                  <p>Mijoz maslahatchisi</p>
                  <a className="Tcard_email" href="#!">
                    george@vehica.com
                  </a>
                  <a className="Tcard_tel" href="tel: +998931513776">
                    (123) 345-6789
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          
            <Swiper navigation={true} modules={[Navigation]} spaceBetween={30} className="mySwiper" id='swiper2'>
              <SwiperSlide className='team_card'>
                <Image src={cardimg} alt="" />
                <div className="Tcard_box">
                  <div className="tel_box"></div>
                  <div className="email_box"></div>
                  <h2>Jorj Braun</h2>
                  <p>Mijoz maslahatchisi</p>
                  <a className="Tcard_email" href="#!">
                    george@vehica.com
                  </a>
                  <a className="Tcard_tel" href="tel: +998931513776">
                    (123) 345-6789
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='team_card'>
                <Image src={cardimg} alt="" />
                <div className="Tcard_box">
                  <div className="tel_box"></div>
                  <div className="email_box"></div>
                  <h2>Jorj Braun</h2>
                  <p>Mijoz maslahatchisi</p>
                  <a className="Tcard_email" href="#!">
                    george@vehica.com
                  </a>
                  <a className="Tcard_tel" href="tel: +998931513776">
                    (123) 345-6789
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        ) : (
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
              slidesPerView={3}
              spaceBetween={30}
              className="mySwiper" id="swiper"
            >
              <SwiperSlide className="team_card">
                <Image src={cardimg} alt="" />
                <div className="Tcard_box">
                  <div className="tel_box"></div>
                  <div className="email_box"></div>
                  <h2>Джордж Браун</h2>
                  <p>Советник клиентов</p>
                  <a className="Tcard_email" href="#!">
                    george@vehica.com
                  </a>
                  <a className="Tcard_tel" href="tel: +998931513776">
                    (123) 345-6789
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="team_card">
                <Image src={cardimg} alt="" />
                <div className="Tcard_box">
                  <div className="tel_box"></div>
                  <div className="email_box"></div>
                  <h2>George Brown</h2>
                  <p>Советник клиентов</p>
                  <a className="Tcard_email" href="#!">
                    george@vehica.com
                  </a>
                  <a className="Tcard_tel" href="tel: +998931513776">
                    (123) 345-6789
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="team_card">
                <Image src={cardimg} alt="" />
                <div className="Tcard_box">
                  <div className="tel_box"></div>
                  <div className="email_box"></div>
                  <h2>George Brown</h2>
                  <p>консультант по работе с клиентами</p>
                  <a className="Tcard_email" href="#!">
                    george@vehica.com
                  </a>
                  <a className="Tcard_tel" href="tel: +998931513776">
                    (123) 345-6789
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="team_card">
                <Image src={cardimg} alt="" />
                <div className="Tcard_box">
                  <div className="tel_box"></div>
                  <div className="email_box"></div>
                  <h2>George Brown</h2>
                  <p>консультант по работе с клиентами</p>
                  <a className="Tcard_email" href="#!">
                    george@vehica.com
                  </a>
                  <a className="Tcard_tel" href="tel: +998931513776">
                    (123) 345-6789
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide className="team_card">
                <Image src={cardimg} alt="" />
                <div className="Tcard_box">
                  <div className="tel_box"></div>
                  <div className="email_box"></div>
                  <h2>George Brown</h2>
                  <p>консультант по работе с клиентами</p>
                  <a className="Tcard_email" href="#!">
                    george@vehica.com
                  </a>
                  <a className="Tcard_tel" href="tel: +998931513776">
                    (123) 345-6789
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )
      }
    </>
  );
}
