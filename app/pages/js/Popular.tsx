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
import url from "./Host";

export default function Popular() {
  const [cars, setCars] = React.useState([]);
  const [model, setModel] = React.useState([]);


  useEffect(() => {
    axios.get(`${url}/api/cars_get/`).then((res) => {
      setCars(res.data);
      axios.get(`${url}/api/series_get/`).then((res) => {
        setModel(res.data);  
      });
   
    });
  }, []);
  const getData=(key)=>{
    var pust=[]
    axios.get(`${url}/api/cars_get/`).then((res) => {
      console.log(res.data,key);
      
  res.data.map((item)=>{
    console.log(item.position.series.id,key);
     if(item.position.series.id==key){
pust.push(item)
    }
  }) 
     
    setCars(pust)
   
    })
  }

  function getData2(key){
    console.log(key);
    localStorage.setItem("oneproduct",JSON.stringify(key))
    window.location="/onecar"
    }

  return (
    <div className="popular">
      <div className="popular_top">
        <h1>Popular Makes</h1>
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
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1900: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {cars.map((item, key) => {
        if(key<10){ return (
            <SwiperSlide key={key} onClick={()=>getData2(item)} className="swiperPopCard">
              <div className="feat_card">
                <Image src={car} alt="a" className="featured_img" />
                <div className="featCard_bottom">
                <h3 className="featCard_name">{item.name}</h3>
                  <h4 className="featCard_price">{item.price}.sum</h4>
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

        {/* <SwiperSlide className='swiperPopCard'>
          <div className='feat_card'>
            <Image src={car} alt='a' className='featured_img' />
            <div className='featCard_bottom'>
              <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
              <h4 className='featCard_price'>$4000</h4>
              <div className='featCard_box'>
                <p className='featCard_year'>2021</p>
                <p className='featCard_auto'>Automatic</p>
                <p className='featCard_pet'>Petrol</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperPopCard'>
          <div className='feat_card'>
            <Image src={car} alt='a' className='featured_img' />
            <div className='featCard_bottom'>
              <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
              <h4 className='featCard_price'>$4000</h4>
              <div className='featCard_box'>
                <p className='featCard_year'>2021</p>
                <p className='featCard_auto'>Automatic</p>
                <p className='featCard_pet'>Petrol</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperPopCard'>
          <div className='feat_card'>
            <Image src={car} alt='a' className='featured_img' />
            <div className='featCard_bottom'>
              <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
              <h4 className='featCard_price'>$4000</h4>
              <div className='featCard_box'>
                <p className='featCard_year'>2021</p>
                <p className='featCard_auto'>Automatic</p>
                <p className='featCard_pet'>Petrol</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperPopCard'>
          <div className='feat_card'>
            <Image src={car} alt='a' className='featured_img' />
            <div className='featCard_bottom'>
              <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
              <h4 className='featCard_price'>$4000</h4>
              <div className='featCard_box'>
                <p className='featCard_year'>2021</p>
                <p className='featCard_auto'>Automatic</p>
                <p className='featCard_pet'>Petrol</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperPopCard'>
          <div className='feat_card'>
            <Image src={car} alt='a' className='featured_img' />
            <div className='featCard_bottom'>
              <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
              <h4 className='featCard_price'>$4000</h4>
              <div className='featCard_box'>
                <p className='featCard_year'>2021</p>
                <p className='featCard_auto'>Automatic</p>
                <p className='featCard_pet'>Petrol</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperPopCard'>
          <div className='feat_card'>
            <Image src={car} alt='a' className='featured_img' />
            <div className='featCard_bottom'>
              <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
              <h4 className='featCard_price'>$4000</h4>
              <div className='featCard_box'>
                <p className='featCard_year'>2021</p>
                <p className='featCard_auto'>Automatic</p>
                <p className='featCard_pet'>Petrol</p>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
