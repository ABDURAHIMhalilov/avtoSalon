"use client";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
// import "../css/Home.css";
import "../css/Home.css";
import { FiSearch } from "react-icons/fi";
import Featured from "./Featured";
import Popular from "./Popular";
import { WiDayStormShowers } from "react-icons/wi";
import Team from "./Team";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import Head from "next/head";
import "../../app/globals.css";
import "../../app/page.module.css";
import CarMers from "./car-silver.png";

export default function Home() {
  const [select, setSelect] = React.useState("");
  const [selectSeries, setSelectSeries] = React.useState("");
  const [selectPosition, setSelectPosition] = React.useState("");

  const [models, setModels] = React.useState([]);
  const [series, setSeries] = React.useState([]);
  const [position, setPosition] = React.useState([]);
  const [language, setLanguage] = React.useState("");
  const [p1, setP1] = React.useState(0);

  const getAllSearch = () => {
    if (selectSeries.length<1&&selectPosition.length<1&&select.length<1) {
      sessionStorage.setItem("series",-1)
      sessionStorage.setItem("position",-1)
      sessionStorage.setItem("model",-1)
    }else{
      sessionStorage.setItem("model",select)
    }
        
        if (selectSeries.length<1) {
          sessionStorage.setItem("series",-1)
        }else{
          sessionStorage.setItem("series",selectSeries)
        }
        if (selectPosition.length<1) {
          sessionStorage.setItem("position",-1)
        }else{
          sessionStorage.setItem("position",selectPosition)
        }
        window.location = "/js/Search";
      };
  useEffect(() => {
    setLanguage(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
    );
    axios.get(`https://api.baracar.uz/api/models/`).then((res) => {
      setModels(res.data);
      setP1(1);
    });
    setTimeout(() => {}, 1000);
  }, []);
  const getSeries = (event) => {
    setSelect(event.target.value);
    setSelectPosition("");
    setPosition([]);
    var seriesData = [];
    axios.get(`https://api.baracar.uz/api/series/`).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].model === event.target.value * 1) {
          seriesData.push(res.data[i]);
        }
      }

      setSeries(seriesData);
    });
  };
  const getPosition = (event) => {
    setSelectSeries(event.target.value);
    setSelectPosition("");
    var seriesData = [];

    axios.get(`https://api.baracar.uz/api/position/`).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].series === event.target.value * 1)
          seriesData.push(res.data[i]);
      }

      setPosition(seriesData);
    });
  };
  const postPosition = (event) => {
    setSelectPosition(event.target.value);
  };

  return (
    <div>
      <Head>
    <title>Baracar</title>
    <meta charset="UTF-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="description" content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы. "/><meta name="keywords" content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы. "/><meta name="author" content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы. "/><meta name="description" content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы.  "/><meta name="twitter:card" content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы. "/><meta name="twitter:site" content="Baracar.uz"/><meta name="twitter:creator" content="Baracar.uz"/><meta name="twitter:title" content="Baracar"/><meta name="twitter:description" content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы.  "/><meta name="twitter:image" content="url_to_image"/><meta property="og:title" content="Baracar"/><meta property="og:description" content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы.  "/><meta property="og:url" content="Baracar.uz"/><meta property="og:site_name" content="Baracar.uz"/><meta property="og:locale" content="en_uz"/><meta property="og:type" content="Baracar.uz"/><meta property="fb:app_id" content="ID_APP_FACEBOOK"/>
      </Head>
      {p1 === 1 ? (
        <>
          <Head>
            <title>Главная страница</title>
          </Head>
          <Navbar />
          {language == "uz" ? (
            <div>
              <div className="HomeHeader" id="home2">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="positionImg"></div>
                <div className="cardHeader">
                  <h1>Eng yaxshi avtomobil Eng yaxshi narx </h1>
                  <p>
                  Avto sotish va sotib olish uchun qulay servis
                  </p>
                  
                </div>
                <div className="cardHeader2">
                  <h1>Mashina turini tanlang</h1>
                  <div className="cardHeader22">
                    <FormControl id="inp2" sx={{ m: 1, minWidth: 200 }}>
                      <InputLabel id="demo-select-small-label">
                        Madel
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Models"
                        value={select}
                        onChange={getSeries}
                      >
                        <MenuItem value="">
                          <em>Hammasi</em>
                        </MenuItem>
                        {models.map((item, key) => {
                          return (
                            <MenuItem key={key} value={item.id}>
                              {item.name_uz}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                    <FormControl id="inp2" sx={{ m: 1, minWidth: 200 }}>
                      <InputLabel id="demo-select-small-label">
                        Seriya
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Position"
                        value={selectSeries}
                        onChange={getPosition}
                      >
                        <MenuItem value="">Hammasi</MenuItem>
                        {series.map((item, key) => {
                          return (
                            <MenuItem key={key} value={item.id}>
                              {item.name_uz}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                    <br />
                    <FormControl id="inp2" sx={{ m: 1, minWidth: 200 }}>
                      <InputLabel id="demo-select-small-label">
                        Pozitsiya
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Pasition"
                        value={selectPosition}
                        onChange={postPosition}
                      >
                        <MenuItem value={0}>Hammasi</MenuItem>
                        {position.map((item, key) => {
                          return (
                            <MenuItem key={key} value={item.id}>
                              {item.name_uz}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                    <center>
                      <button onClick={()=>getAllSearch()}>Qidirish</button>
                    </center>
                  </div>
                </div>
                {/* <br /> */}
                {/* <br /> */}
                <div className="carImg"></div>
              </div>
              <Featured />
              <Popular />
              <div className="kotta">
                <h1>Nima uchun bizni tanlaysiz?</h1>
                <div className="ushta">
                  <div className="bir">
                    <img className="bxs-balloon" src="https://images.ctfassets.net/6x2h5ns7uwip/2YKwoOLA5dbMWb4HwlqARk/bb90de23a382bee4545fef1c5ab5ae0b/CRM_icons_90-day_warranty_35px.png?w=74&h=73&fit=fill&f=center&fm=webp" alt="" />
                    <h2>Baracar yuksak sifati</h2>
                    <h4>
                    Har bir avtomobil 168 punkt bo’yicha sinovdan o'tkaziladi va to'liq avtomashina tarixi va texnik xizmat ko'rsatish tarixiga ega.
                    </h4>
                  </div>
                  <div className="bir">
                    <img className="bxs-balloon" src="https://images.ctfassets.net/6x2h5ns7uwip/2YKwoOLA5dbMWb4HwlqARk/bb90de23a382bee4545fef1c5ab5ae0b/CRM_icons_90-day_warranty_35px.png?w=74&h=73&fit=fill&f=center&fm=webp" alt="" />
                    <h2>Qulay avtokredit</h2>
                    <h4>
                    Biz Tenge Bank bilan hamkorlikda avtokredit uchun eng qulay va foydali shartlarni taklif etamiz.
                    </h4>
                  </div>
                  <div className="bir">
                    <img className="bxs-balloon" src="https://images.ctfassets.net/6x2h5ns7uwip/2YKwoOLA5dbMWb4HwlqARk/bb90de23a382bee4545fef1c5ab5ae0b/CRM_icons_90-day_warranty_35px.png?w=74&h=73&fit=fill&f=center&fm=webp" alt="" />
                    <h2>30 kunlik kafolat</h2>
                    <h4>
                    Avtosalonimizdagi har bir avtomobil 30 kunlik kafolat ostida to'liq xizmat ko’rsatishga ega.
                    </h4>
                  </div>
                </div>
              </div>
              <Team />
            </div>
          ) : (
            <div>
              <div className="HomeHeader">
                <br />
                <br />
                <div className="positionImg"></div>
                <div className="cardHeader">
                  <h1>Лучшая машина Лучшая цена </h1>
                  <p>
                  Удобный сервис по покупке и продаже авто. 
                  </p>
                </div>
                <div className="cardHeader2">
                  <h1>Выберите тип машины</h1>
                  <div className="cardHeader22">
                    <FormControl id="inp2" sx={{ m: 1, minWidth: 200 }}>
                      <InputLabel id="demo-select-small-label">
                        Модели
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Models"
                        value={select}
                        onChange={getSeries}
                      >
                        <MenuItem value="">
                          <em>Все</em>
                        </MenuItem>
                        {models.map((item, key) => {
                          return (
                            <MenuItem key={key} value={item.id}>
                              {item.name_ru}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                    <FormControl id="inp2" sx={{ m: 1, minWidth: 200 }}>
                      <InputLabel id="demo-select-small-label">
                        Серии
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Position"
                        value={selectSeries}
                        onChange={getPosition}
                      >
                        <MenuItem value="">Все</MenuItem>
                        {series.map((item, key) => {
                          return (
                            <MenuItem key={key} value={item.id}>
                              {item.name_ru}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                    <br />
                    <FormControl id="inp2" sx={{ m: 1, minWidth: 200 }}>
                      <InputLabel id="demo-select-small-label">
                        Позиции
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Pasition"
                        value={selectPosition}
                        onChange={postPosition}
                      >
                        <MenuItem value="">Все</MenuItem>
                        {position.map((item, key) => {
                          return (
                            <MenuItem key={key} value={item.id}>
                              {item.name_ru}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                    <center>
                      <button onClick={()=>getAllSearch()}>поиск</button>
                    </center>
                  </div>
                </div>
                <div className="carImg" id="carImg2"></div>
                {/* <div className="headerBody1">
              <div className="headerBody">
                <h1>
                  Найдите свой <span>идеальный</span>
                  <br />
                  автомобиль
                </h1>
                <div className="header_box">
                  <FormControl id="inp2" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-select-small-label">Модели</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Models"
                      value={select}
                      onChange={getSeries}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {models.map((item, key) => {
                        return (
                          <MenuItem
                            key={key}

                            value={item.id}
                          >
                            {item.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  <FormControl id="inp2" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-select-small-label">Серии</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Position"
                      value={selectSeries}
                      onChange={getPosition}
                    >
                      <MenuItem value="">None</MenuItem>
                      {series.map((item, key) => {
                        return (
                          <MenuItem
                            key={key}
                            value={item.id}
                          >
                            {item.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  <FormControl id="inp2" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-select-small-label">Позиции</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Pasition"
                      value={selectPosition}
                      onChange={postPosition}
                    >
                      <MenuItem value="">None</MenuItem>
                      {position.map((item, key) => {
                        return (
                          <MenuItem key={key} value={item.id}>
                            {item.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  <button onClick={() => { getAllSearch() }} className="Btnbody header_btn">
                    <FiSearch />
                  </button>
                </div>
                <div className="header_bottom">
                  <div className="header_card">
                    <div className="header_card_image">
                      <path
                        id="Subtraction_30"
                        data-name="Subtraction 30"
                        d="M-13895.81,20663.1a14.9,14.9,0,0,1-10.609-4.395,14.9,14.9,0,0,1-4.393-10.607,14.9,14.9,0,0,1,4.393-10.6,14.9,14.9,0,0,1,10.609-4.395,14.889,14.889,0,0,1,10.6,4.395,14.9,14.9,0,0,1,4.393,10.6,14.9,14.9,0,0,1-4.393,10.607A14.889,14.889,0,0,1-13895.81,20663.1Zm0-24a9.009,9.009,0,0,0-9,9,9.011,9.011,0,0,0,9,9,9.009,9.009,0,0,0,9-9A9.007,9.007,0,0,0-13895.81,20639.1Z"
                        transform="translate(13925 -20599)"
                        fill="#fff"
                      ></path>
                      <path
                        id="Subtraction_29"
                        data-name="Subtraction 29"
                        d="M-13895.81,20663.1a14.9,14.9,0,0,1-10.609-4.395,14.9,14.9,0,0,1-4.393-10.607,14.9,14.9,0,0,1,4.393-10.6,14.9,14.9,0,0,1,10.609-4.395,14.889,14.889,0,0,1,10.6,4.395,14.9,14.9,0,0,1,4.393,10.6,14.9,14.9,0,0,1-4.393,10.607A14.889,14.889,0,0,1-13895.81,20663.1Zm-.5-24a8.77,8.77,0,0,0-8.5,9,8.773,8.773,0,0,0,8.5,9,8.771,8.771,0,0,0,8.5-9A8.769,8.769,0,0,0-13896.308,20639.1Z"
                        transform="translate(14029 -20599)"
                        fill="#fff"
                      ></path>
                      <path
                        id="Subtraction_28"
                        data-name="Subtraction 28"
                        d="M-13904.136,20686.107c-3.425,0-5.024-1.373-5.763-2.523a4.979,4.979,0,0,1-.79-2.52,67.152,67.152,0,0,1,.5-13.7,18.819,18.819,0,0,1,2.632-7.51c2.288-3.4,5.433-4.031,8.474-4.643l.017,0c.3-.059.6-.121.9-.184,13.069-.969,29.571-1.146,29.714-1.146a206.77,206.77,0,0,0,17.679-11.3,53.678,53.678,0,0,1,12.248-6.725c3.983-1.592,7.777-2.312,14.5-2.758a153.9,153.9,0,0,1,20.244,1.211,76.571,76.571,0,0,1,18.3,4.994,47.084,47.084,0,0,1,9.506,9.672,38.831,38.831,0,0,1,3.131,4.9h15.706a7.339,7.339,0,0,1,5.476,2.633,18.189,18.189,0,0,1,3.572,7.764,52.571,52.571,0,0,1,1.285,9.652,89.68,89.68,0,0,1-.2,11.7v.006h-12.326a30.669,30.669,0,0,0-.408-6.361c-.544-3.285-1.872-7.93-5.114-11.4-3.126-3.346-7.464-5.041-12.894-5.041-10.312,0-15.274,6.2-17.621,11.4a32.1,32.1,0,0,0-2.648,11.4h-64.184a30.162,30.162,0,0,0-.421-6.312c-.552-3.264-1.892-7.881-5.14-11.355-3.188-3.408-7.627-5.135-13.192-5.135-5.543,0-10.006,1.7-13.263,5.061-6.151,6.34-6.029,16.57-6,17.717,0,.014,0,.023,0,.025A18.617,18.617,0,0,1-13904.136,20686.107Zm46.36-31.562c.067.141,5.9.209,17.834.209,1.438,0,3.068,0,4.933-.006l6.105-15.047h0a41.4,41.4,0,0,0-14.236,4.387,63.744,63.744,0,0,0-14.631,10.453l-.006,0Zm46.291-15.639c-3.291,0-6.452.18-9.51.354l-.09.006-.187.016-6.272,15.451c2.433,0,5.121-.016,7.968-.029l.752,0,1.353,0,6.412-15.789Zm7.7.439-6.219,15.318,3.47-.02,1.088,0c4.3-.023,10.188-.053,16.615-.1.312,0,.478,0,.493,0a13.3,13.3,0,0,0-.161-5.219,10.916,10.916,0,0,0-2.123-4.371,12.332,12.332,0,0,0-5.192-3.65,32.811,32.811,0,0,0-7.97-1.953Z"
                        transform="translate(13910.81 -20633.102)"
                        fill="#fff"
                      ></path>
                      <path
                        id="Path_211"
                        data-name="Path 211"
                        d="M14227.891-17798.156c.049-.1,1.166.375,2.176,3.344a23.225,23.225,0,0,1,.9,4.076c0-.068-5.548,0-5.548,0S14219.066-17798.758,14227.891-17798.156Z"
                        transform="translate(-14071.219 17822.395)"
                        fill="#0e7c7b"
                      ></path>
                      <path
                        id="Path_212"
                        data-name="Path 212"
                        d="M14226.857-17795.76c-.061-.1-4.7,1.8-5.48,5.779,0-.066,10.9,0,10.9,0S14238.238-17798.965,14226.857-17795.76Z"
                        transform="translate(-14216.396 17821.074)"
                        fill="#0e7c7b"
                      ></path>

                      <path
                        id="Path_268"
                        data-name="Path 268"
                        d="M13596.227-20971.381l46.691,32.488-51.559.025Z"
                        transform="translate(-13541.95 20991.875)"
                        fill="#f1efef"
                      ></path>
                    </div>
                    <p></p>
                  </div>
                </div>
              </div>
            </div> */}
              </div>
              <Featured />
              <Popular />
              <div className="kotta">
                <h1>Почему выбрали нас?</h1>
                <div className="ushta">
                  <div className="bir">
                    <img className="bxs-balloon" src="https://images.ctfassets.net/6x2h5ns7uwip/2YKwoOLA5dbMWb4HwlqARk/bb90de23a382bee4545fef1c5ab5ae0b/CRM_icons_90-day_warranty_35px.png?w=74&h=73&fit=fill&f=center&fm=webp" alt="" />
                    <h2>Тотальное качество Baracar </h2>
                    <h4>
                    Каждая машина на Baracar проходит проверку по 168 пунктам и имеет полную историю автомобиля, а также историю технического обслуживания. 
                    </h4>
                  </div>
                  <div className="bir">
                    <img className="bxs-balloon" src="https://images.ctfassets.net/6x2h5ns7uwip/2YKwoOLA5dbMWb4HwlqARk/bb90de23a382bee4545fef1c5ab5ae0b/CRM_icons_90-day_warranty_35px.png?w=74&h=73&fit=fill&f=center&fm=webp" alt="" />
                    <h2>Выгодный автокредит</h2>
                    <h4>
                    Мы, в партнерстве с Tenge Bank, предлагаем самые удобные, а также самые выгодные условия по автокредиту. 
                    </h4>
                  </div>
                  <div className="bir">
                    <img className="bxs-balloon" src="https://images.ctfassets.net/6x2h5ns7uwip/2YKwoOLA5dbMWb4HwlqARk/bb90de23a382bee4545fef1c5ab5ae0b/CRM_icons_90-day_warranty_35px.png?w=74&h=73&fit=fill&f=center&fm=webp" alt="" />
                    <h2>30-дневная гарантия </h2>
                    <h4>
                    Каждый автомобиль в нашем автосалоне имеет гарантию минимум 30 дней на полное обслуживание ходовой части по гарантии. 
                    </h4>
                  </div>
                </div>
              </div>
              <Team />
            </div>
          )}
        </>
      ) : (
        <div class="loader">
          <svg
            class="car"
            width="102"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              transform="translate(2 1)"
              stroke="#002742"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                class="car__body"
                d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01"
                stroke-width="3"
              />
              <ellipse
                class="car__wheel--left"
                stroke-width="3.2"
                fill="#FFF"
                cx="83.493"
                cy="30.25"
                rx="6.922"
                ry="6.808"
              />
              <ellipse
                class="car__wheel--right"
                stroke-width="3.2"
                fill="#FFF"
                cx="46.511"
                cy="30.25"
                rx="6.922"
                ry="6.808"
              />
              <path
                class="car__line car__line--top"
                d="M22.5 16.5H2.475"
                stroke-width="3"
              />
              <path
                class="car__line car__line--middle"
                d="M20.5 23.5H.4755"
                stroke-width="3"
              />
              <path
                class="car__line car__line--bottom"
                d="M25.5 9.5h-19"
                stroke-width="3"
              />
            </g>
          </svg>
        </div>
      )}
      <Footer/>
    </div>
  );
}
