"use client";

import React,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import '../css/bmw8.css';
import {AiOutlineStar} from 'react-icons/ai';
import {HiPhone} from 'react-icons/hi';
import {BsWhatsapp} from 'react-icons/bs';


export default function Bmw8() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  
  return (
    <div>
        <div className="dffd">
        <div className="dfc">
        <div className="swip">
        <div className="hf1">
            <h1>BMW 8-serie 2-door coupe grey</h1>
          </div>
          <div className="lk1">
            <p>2021</p>
          <ul className='l2'>
            <li> <p>Coupe</p></li>
            <li className='lip'> <p>Petrol</p></li></ul></div>
            <hr className='assaa' />  
        <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img className='s2img' src="https://demo.vehica.com/wp-content/uploads/2020/08/6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='s2img' src="https://demo.vehica.com/wp-content/uploads/2020/02/1-58-1024x683.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='s2img' src="https://demo.vehica.com/wp-content/uploads/2020/02/2-59-1024x683.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='s2img' src="https://demo.vehica.com/wp-content/uploads/2020/02/3-59-1024x683.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='s2img' src="https://demo.vehica.com/wp-content/uploads/2020/02/4-59-1024x683.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='s2img' src="https://demo.vehica.com/wp-content/uploads/2020/02/5-59-1024x683.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='s2img' src="https://demo.vehica.com/wp-content/uploads/2020/02/6-58-1024x683.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        slidesPerView={3}
        spaceBetween={10}
        slidesPerView={"auto"}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='simg' src="https://demo.vehica.com/wp-content/uploads/2020/08/6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='simg' src="https://demo.vehica.com/wp-content/uploads/2020/02/1-58-1024x683.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='simg' src="https://demo.vehica.com/wp-content/uploads/2020/02/2-59-1024x683.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='simg' src="https://demo.vehica.com/wp-content/uploads/2020/02/3-59-1024x683.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='simg' src="https://demo.vehica.com/wp-content/uploads/2020/02/4-59-1024x683.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='simg' src="https://demo.vehica.com/wp-content/uploads/2020/02/5-59-1024x683.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='simg' src="https://demo.vehica.com/wp-content/uploads/2020/02/6-58-1024x683.jpg" />
        </SwiperSlide>

      </Swiper>
      
      </div>
      <div className="ypn1">
            <div className="dollars">
            <h1>$62,000</h1>
            <p> <span><AiOutlineStar/></span> Add to favorites</p>
            </div>
            <div className="oxirkotta">
            <div className="maky">
              <div className="maa">
                <p>Make:</p>
                <p>Make:</p>
                <p>Make:</p>
                <p>Make:</p>
                <p>Make:</p>
                <p>Make:</p>
                <p>Make:</p>
              </div>
              <div className="mn">
              <p>Make:</p>
              <p>Make:</p>
              <p>Make:</p>
              <p>Make:</p>
              <p>Make:</p>
              <p>Make:</p>
              </div>
            </div>
            <div className="buttonz">
              <button className="byt"> <span><HiPhone/> </span> 123 *** *** -reveal</button>
              <button className="wat"> <span><BsWhatsapp/></span> Chat via WhatsApp</button>
              <button className="spend">Send Massage</button>
            </div></div>
        </div>

      <div className="bloksoz">
                        <h1>Description</h1>
                        <p className='p'>How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for <br /> 
                        Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and  <br />
                        twelve knots,” and  the Henrietta confirmed his prediction.</p>
                        <p className='p1'>If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind did not veer round to the east, if no accident happened to the  boat or its machinery, the Henrietta might cross the three…</p>
                        <p className='iki'>From New York to Liverpool in the nine days, between the 12th and the 21st of December. It is true that, once arrived, the affair on board the Henrietta, added to that of the Bank of England, might create more difficulties for Mr. Fogg than he imagined or could desire.</p>
                        <p className='iki1'>During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east, the sails were hoisted, and the Henrietta ploughed across the waves like a real trans-Atlantic steamer.</p>
                        <h4 className='show' onClick={() => {document.querySelector(".p1").classList.toggle("hg");document.querySelector(".iki").classList.toggle("hg1");document.querySelector(".iki1").classList.toggle("hg1")}}>Show more</h4>
                    </div>
      </div>
      
      <div className="divv"></div>
      
      <div className="ypn">
          <div className="hf">
            <h1>BMW 8-serie 2-door coupe grey</h1>
          </div>
          <div className="lk">
            <p>2021</p>
          <ul className='l1'>
            <li> <p>Coupe</p></li>
            <li className='lip'> <p>Petrol</p></li></ul></div>
            <hr className='asdda' />  
            <div className="dollars">
            <h1>$62,000</h1>
            <p> <span><AiOutlineStar/></span> Add to favorites</p>
            </div>
            <div className="maky">
              <div className="maa">
                <p>Make:</p>
                <p>Make:</p>
                <p>Make:</p>
                <p>Make:</p>
                <p>Make:</p>
                <p>Make:</p>
                <p>Make:</p>
              </div>
              <div className="mn">
              <p>Make:</p>
              <p>Make:</p>
              <p>Make:</p>
              <p>Make:</p>
              <p>Make:</p>
              <p>Make:</p>
              </div>
            </div>
            <div className="buttonz">
              <button className="byt"> <span><HiPhone/> </span> 123 *** *** -reveal</button>
              <button className="wat"> <span><BsWhatsapp/></span> Chat via WhatsApp</button>
              <button className="spend">Send Massage</button>
            </div>
        </div></div>
    </div>
  )
}