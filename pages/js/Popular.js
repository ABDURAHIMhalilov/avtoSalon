"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import car from "../images/6.jpg";
import "../css/Popular.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "../../app/globals.css"

export default function Popular() {
  const [cars, setCars] = React.useState([]);
  const [model, setModel] = React.useState([]);
  const [images, setImages] = React.useState([])
  const [state,setState] = React.useState([])


  useEffect(() => {
    setState(localStorage.getItem('lang')?localStorage.getItem('lang'):"ru")
    axios.get(`https://api.baracar.uz/api/${localStorage.getItem('lang')?localStorage.getItem('lang'):"ru"}/cars_get/`).then((res) => {
      axios.get(`https://api.baracar.uz/api/images/`)
      .then((res1) => {
       for (let i = 0; i < res.data.length; i++) {
        res.data[i].image=[]
       for (let j = 0; j < res1.data.length; j++) {
        if(res.data[i].id==res1.data[j].car){
          res.data[i].image.push(res1.data[j])
        }
      }}
   
       setCars(res.data) 
    
    
    
    })
      axios.get(`https://api.baracar.uz/api/${localStorage.getItem('lang')?localStorage.getItem('lang'):"ru"}/series_get/`).then((res) => {
        setModel(res.data);  
      });
   
    });
  
  }, []);
  const getData=(key)=>{
    var pust=[]
    axios.get(`https://api.baracar.uz/api/${localStorage.getItem('lang')?localStorage.getItem('lang'):"ru"}/cars_get/`).then((res) => {
      console.log(res.data,key);
      axios.get(`https://api.baracar.uz/api/images/`)
      .then((res1) => {
       for (let i = 0; i < res.data.length; i++) {
        res.data[i].image=[]
       for (let j = 0; j < res1.data.length; j++) {
        if(res.data[i].id==res1.data[j].car){
          res.data[i].image.push(res1.data[j])
        }
      }} 
      res.data=res.data.filter(item=>item.position.series.id==key)
   console.log(key);
       setCars(res.data) 
    })
      .catch((err) => {
        console.log(err, "salom");
      });
 
     
 
    })
  }

  function getData2(key){
    console.log(key);
    localStorage.setItem("oneproduct",JSON.stringify(key))
    window.location="/js/Bmw8"
    }

  return (
  <>
  {
        state == "uz" ? (
          <div className="popular">
      <div className="popular_top">
        <h1>Mashhur brendlar</h1>
        <div className="pop_btns">
        { model.map((item,key)=>{
          if(key<4){
         return  <a href="#!" onClick={()=>getData(item.id)} className="popular_btn">
            {item.name}
          </a>}
        }) } 
        
        </div>
      </div>  
      <Swiper
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          0:{
            slidesPerView: 1,
            spaceBetween: 50,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1750: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1950: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {cars.map((item, key) => {
        if(key<10){ return (
            <SwiperSlide key={key} onClick={()=>getData2(item)} className="swiperPopCard">
              <div className="feat_card">
          
                     <img src={item.image[0]!=undefined?(item.image[0].image):("https://demo.vehica.com/wp-content/uploads/2020/08/2-4-670x372.jpg")}
                      alt="no img" />
                <div className="featCard_bottom">
                <h3 className="featCard_name">{item.name}</h3>
                  <h4 className="featCard_price">${item.price}</h4>
                  <div className="featCard_box">
                    <p className="featCard_year">{item.year}</p>
                    <p className="featCard_auto">{item.gearbox.name}</p>
                    <p className="featCard_pet">{item.fuel_sort.name}</p>
                  </div>
                </div> 
              </div>
            </SwiperSlide>
          );} 
        })}

      </Swiper>
    </div>
        ) : (
          <div className="popular">
      <div className="popular_top">
        <h1>Популярные марки</h1>
        <div className="pop_btns">
        { model.map((item,key)=>{
          if(key<4){
         return  <a href="#!" onClick={()=>getData(item.id)} className="popular_btn">
            {item.name}
          </a>}
        }) } 
        
        </div>
      </div>  
      <Swiper
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          0:{
            slidesPerView: 1,
            spaceBetween: 50,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1750: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1950: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {cars.map((item, key) => {
        if(key<10){ return (
            <SwiperSlide key={key} onClick={()=>getData2(item)} className="swiperPopCard">
              <div className="feat_card">
          
                     <img src={item.image[0]!=undefined?(item.image[0].image):("https://demo.vehica.com/wp-content/uploads/2020/08/2-4-670x372.jpg")}
                      alt="no img" />
                <div className="featCard_bottom">
                <h3 className="featCard_name">{item.name}</h3>
                  <h4 className="featCard_price">${item.price}</h4>
                  <div className="featCard_box">
                    <p className="featCard_year">{item.year}</p>
                    <p className="featCard_auto">{item.gearbox.name}</p>
                    <p className="featCard_pet">{item.fuel_sort.name}</p>
                  </div>
                </div> 
              </div>
            </SwiperSlide>
          );} 
        })}

      </Swiper>
    </div>
        )
  }
  </>
  );
}