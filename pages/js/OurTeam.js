"use client";
import React, { useEffect } from "react";
import Footer from './Footer'
import Navbar from './Navbar'
import "../css/Tradein.css"

export default function OurTeam() {
  const [state, setState] = React.useState();
  useEffect(() => {
    setState(localStorage.getItem("lang"));
  });

  return (
    <div className='cazo'>
      <Navbar />
      <div className="cazo1">
      <div className="cazoo" style={state === "ru" ? {maxWidth:"1100px"}:{maxWidth:"1000px"}}>
        <div className="cazo_card" style={state === "ru" ? {width:"70%"}:{width:"60%"}}>
          <h1 className="cazoh1">{state === "ru" ? "Продам или обменяю свой автомобиль" : "Avtomobilingizni soting yoki qisman almashtiring"}</h1>
          <p className="cazo_p">{state === "ru" ? "Получите бесплатную и мгновенную цитату без торговли. Быстрая оплата в день доставки при продаже автомобиля нам." : "Bepul va lahzali, savdosiz taklifni oling. Bizga mashinangizni sotganingizda, topshirish kunida tezkor to'lov."}</p>
          <div className="input_card">
            <input placeholder={state === "ru" ? "Введите список транспора" : "Avtomobil ro'yxatini kiriting"} type="text" />
            <button style={state === "ru" ? {width:"230px"}:{width:"120px"}}>{state === "ru" ? "Получить приглашение" : "Taklif oling"}</button>
            <h4 onClick={()=>{window.location="/js/Contact"}}>{state === "ru" ? "Как мы можем связаться?" : "Qanday qilib bog'lansak bo'ladi"}</h4>
            <img src="https://images.ctfassets.net/6x2h5ns7uwip/3AmOhjXySrI1EByu0lUXEr/aa251c3ff45a22ce960e4ced175c9c45/CA0250_FEATURED_CARS_MODULE_CUTOUTS_CORSA_V2_REVERSED_CA0250_FEATURED_CARS_MODULE_CUTOUTS_F4F7F5.png?f=center&fit=fill&fm=webp&h=676&w=1200" alt="" />
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}
