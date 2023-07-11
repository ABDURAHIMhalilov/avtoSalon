"use client";
import React, { useState, useEffect } from "react";
import "../css/Tradein.css"
import axios from "axios";
import green1 from "../images/green1.png"
import Image from "next/image";

export default function OurTeam() {
  const [state, setstate] = useState();
  useEffect(() => {
    setstate(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
    );
  }, []);
  const send=()=>{
    var postdata={
      fullname:"null",
      email:"null@gmail.com",
      phone_number:document.querySelector('#input1').value,
      message:"null"
    }
    axios.post("https://www.api.baracar.uz/api/calltouser/",postdata).then(res=>{
  state==="ru"?(alert("Информация отправлена, дождитесь звонка оператора")):(alert("Ma'limot yuborildi.Operator qo'ngirog'ini kuting"))
  window.location.reload()
    })
  }

  return (
    <div className='cazo'>
      <div className="cazo1">
      <div className="cazoo" style={state === "ru" ? {maxWidth:"1100px"}:{maxWidth:"1000px"}}>
        <div className="cazo_card" style={state === "ru" ? {width:"70%"}:{width:"60%"}}>
          <h1 className="cazoh1">{state === "ru" ? "Узнай цену своего авто. " : "Avtomobilingiz narxini bilib oling."}</h1>
          <p className="cazo_p">{state === "ru" ? "Оставь свои контактные данные и получи оценку своего авто по телефону совершенно бесплатно. " : "Kontakt ma'lumotlaringizni qoldiring va telefon orqali avtoingiz taxminiy bahosini mutlaqo bepul bilib oling."}</p>
          <div className="input_card">
            <input id="input1" placeholder={state === "ru" ? "Введите номер телефона" : "Telefon nomeringizni kiriting"} type="text" />
            <button onClick={() => {send()}} style={state === "ru" ? {width:"230px"}:{width:"120px"}}>{state === "ru" ? "Получите приглашение" : "Taklif oling"}</button>
            <h4 style={{cursor:"pointer"}} onClick={()=>{window.location="/js/Contact"}}>{state === "ru" ? (<div className="cazo1p1">Как мы можем связаться?</div>) : "Qanday qilib bog'lansak bo'ladi"}</h4>
            <Image src={green1} alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
