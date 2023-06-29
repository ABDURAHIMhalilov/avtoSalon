"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Pagination } from "swiper";
import "../css/bmw8.css";
import { AiOutlineStar } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import url from "./Host";
import car from "../images/6.jpg";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css"

export default function Bmw8() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [user, setUser] = useState(
    false
  );
  const [branchs, setBranchs] = useState([]);
  const [getavto, setAvto] = useState([]);
  const [cars, setCars] = useState([]);
  const [state,setstate] = useState([])

  var [data, setData] = useState(
    JSON.parse(localStorage.getItem("oneproduct")!=null? `${localStorage.getItem("oneproduct")}`: "[]"
    )
  );

  function defectOpen() {
    document.querySelector(".defectDiv").style = "display: block;";
    document.querySelector(".mySwiper").style = "display: none";
    document.querySelector(".mySwiper2").style = "display: none";
    document.querySelector('body').style = 'height: 300vh; overflow: hidden;'
  }

  function defectClose() {
    document.querySelector(".defectDiv").style = "display: none";
    document.querySelector(".mySwiper").style = "display: block";
    document.querySelector(".mySwiper2").style = "display: block";
    document.querySelector(".mySwiper2").style = "display: none";
    document.querySelector('body').style = 'height: auto;'
  }

  function postData() {
    var formdata = new FormData();

    formdata.append(
      "visit_time",
      document.querySelector("#visit_time").value +
      document.querySelector(".visit_email").value
    );
    formdata.append("branch", document.querySelector(".visit_brench").value);
    formdata.append("user", JSON.parse(localStorage.getItem("onemen")).id);
    formdata.append("car", JSON.parse(localStorage.getItem("oneproduct")).id);
    formdata.append("is_active", false);
    axios
      .post(`${url}/api/order/`, formdata, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        alert("Ma`lumot yuborildi");
        window.location.reload();
      })
      .catch((err) => {
        alert("to`liqroq ma`lumot yuboring");
      });
  }
  useEffect(() => {
    setstate(localStorage.getItem("lang"))
    setUser(localStorage.getItem("onemen") != null
      ? JSON.parse(localStorage.getItem("onemen"))
      : false)
    if (localStorage.getItem("onemen")) {
      var a = JSON.parse(localStorage.getItem("onemen"));
      document.querySelector(".visit_name").value = a.username;
      document.querySelector(".visit_email").value = a.email;
      document.querySelector(".visit_number").value = a.phone;
    }
    axios
      .get(`${url}/api/branch/`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        setBranchs(res.data);
      });
    axios.get(`${url}/api/cars_get/`).then((res) => {
      axios.get(`${url}/api/images/`).then((res1) => {
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].image = [];
          for (let j = 0; j < res1.data.length; j++) {
            if (res.data[i].id == res1.data[j].car) {
              res.data[i].image.push(res1.data[j]);
            }
          }
        }
        res.data = res.data.filter((item) => data.id != item.id);
        res.data = res.data.filter(
          (item) => data.position.series.id == item.position.series.id
        );

        setAvto(res.data);
      });
    });

    axios.get(`${url}/api/defect_get/`).then((res) => {
      var initialProducts = [];
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].car === data.id) {
          initialProducts.push(res.data[i]);
        }
      }
      console.log(initialProducts);
      setCars(initialProducts);
    });

    console.log(getavto);
  }, []);
  function getData2(key) {
    localStorage.setItem("oneproduct", JSON.stringify(key));
    window.location = "/js/Bmw8";
  }

  return (
    <div>
      {/* <span onClick={() => defectClose()}  className="caruselsspan">hello</span> */}
      <div className="defectDiv">
        {cars.length == 0 ? (
          <div className="defectBig">
            <div className="deskBg">
              <center>
                <h1>{state === 'ru' ? ("Нет информации об этом автомобиле!") : ("Bu mashina haqida hech qanday ma'lumot yo'q!")}</h1>
              </center>
            </div>
            <div className="deskBg2"></div>
          </div>
        ) : (
          <>
            {/* <span onClick={() => defectClose()}  className="caruselsspan">hello</span> */}
            <Carousel className="carusels">
              {cars.map((item) => {
                return (
                  <Carousel.Item className="carusels2">
                    <div className="imgDefect">
                      <div className="imgDefect2">
                        <img src={item.image1} alt="" />
                        <img src={item.image2} alt="" />
                      </div><br />
                      <center>
                        <p>{item.description}</p>
                        <br />
                      </center>
                    </div>
                    <div className="defectBig">
                      <img
                        className="deskBgimg"
                        src={item.image1}
                        alt="underfined img"
                      />
                      <div className="deskBg2">
                        <img
                          className="bigImg"
                          src={item.image2}
                          alt="underfined img"
                        />
                        <h4 className="nameDefect">
                          {" "}
                          {data.position.series.model.name}{" "}
                          {data.position.series.name} {state === 'ru' ? ("дефект") : ("nuqson")}
                          <h5 onClick={() => defectClose()} className="helloClose">X</h5>
                        </h4>

                        <p>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
              {/*    <Carousel.Item className="carusels2">
                 <div className="defectBig">
                  <span onClick={() => defectClose()}>X</span>
                  <div className="deskBg">
                    <img src={item.image1} alt="underfined img" />
                  </div>
                  <div className="deskBg2">
                    <img className="bigImg" src={item.image2} alt="underfined img" />
                    <p>{item.description}</p>
                  </div>
                </div> 
     </Carousel.Item>*/}
            </Carousel>
          </>

          //     <div>{cars.map((item) => {
          //      return <div className="defectBig">
          //       <span onClick={() => defectClose()}>X</span>
          //       <div className="deskBg">
          //         <img src={item.image1} alt="underfined img" />
          //       </div>
          //       <div className="deskBg2">
          //         <img className="bigImg" src={item.image2} alt="underfined img" />
          //         <p>{item.description}</p>
          //       </div>
          //     </div>
          //   })
          //  }</div>
        )}
      </div>
      <Navbar />
      <div className="dffd" id="page">
        <div className="dfc">
          <div className="swip">
            <div className="hf1">
              <h1>{data.name}</h1>
            </div>
            <div className="lk1">
              <p>{data.year}</p>
              <ul className="l2">
                <li>
                  {" "}
                  <p>{data.gearbox.name}</p>
                </li>
                <li className="lip">
                  {" "}
                  <p>{data.fuel_sort.name}</p>
                </li>
              </ul>
            </div>
            <hr className="assaa" />
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {data.image.map((item2) => {
                if (data.id === item2.car) {
                  return (
                    <SwiperSlide>
                      <img
                        className="s2img"
                        src={item2.image}
                        alt={item2.image}
                      />
                    </SwiperSlide>
                  );
                } else {
                  return (
                    <SwiperSlide>
                      <img
                        className="s2img"
                        src={item2.image}
                        alt={item2.image}
                      />
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={"auto"}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {data.image.map((item2) => {
                if (data.id === item2.car) {
                  return (
                    <SwiperSlide>
                      <img
                        className="s2img"
                        src={item2.image}
                        alt={item2.image}
                      />
                    </SwiperSlide>
                  );
                } else {
                  return (
                    <SwiperSlide>
                      <img
                        className="s2img"
                        src={item2.image}
                        alt={item2.image}
                      />
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </div>
          <div className="ypn1">
            <div className="dollars">
              <h1>${data.price}</h1>
              <p>
                {" "}
                <span>
                  <AiOutlineStar />
                </span>{" "}
                {state === 'ru' ? ("Добавить в избранное") : ("Sevimlilarga qo'shing")}
              </p>
            </div>
            <div className="oxirkotta">
              <div className="maky">
                <table style={{ width: "100%", paddingTop: "30px" }}>
                  <tr className="maky1">
                    <th>{state === 'ru' ? ("Делать:") : ("Qilish:")}</th>
                    <td>{data.position.series.model.name}</td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === 'ru' ? ("Модель:") : ("Model:")}</th>
                    <td>{data.position.series.name}</td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === 'ru' ? ("Цвет:") : ("Rang:")}</th>
                    <td>{data.colour}</td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === 'ru' ? ("Тип вождения:") : ("haydash turi:")}</th>
                    <td>{state === 'ru' ? ("Передний привод") : ("Old g'ildirakli haydovchi")}</td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === 'ru' ? ("ТрансЦветная миссия:") : ("Transcolor missiyasi:")}</th>
                    <td>{data.gearbox.name}</td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === 'ru' ? ("Состояние:") : ("Davlat:")}</th>
                    <td>{data.distance > 2 ? "NEW" : "B/Y"}</td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === 'ru' ? ("Год:") : ("Yil:")}</th>
                    <td>{data.year}</td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === 'ru' ? ("Тип топлива:") : ("Yoqilg'i turi:")}</th>
                    <td>{data.fuel_sort.name}</td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === 'ru' ? ("Размер двигателя:") : ("Dvigatel hajmi:")}</th>
                    <td>{data.engine}L</td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === 'ru' ? ("Цилиндры:") : ("Silindrlar:")}</th>
                    <td>4</td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === 'ru' ? ("ВИН:") : ("VIN:")}</th>
                    <td>{data.id}</td>
                  </tr>
                </table>
              </div>
              <div className="buttonz">
                {cars.length === 0 ? (
                  "no defect"
                ) : (
                  <a href="#page">
                    <button className="spend" onClick={() => defectOpen(data.id)}>
                      {state === 'ru' ? ("дефект") : ("nuqson")}
                    </button>
                  </a>
                )}
                {user ? (
                  <button className="spend">
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="#send"
                    >
                      {state === 'ru' ? ("Отправить сообщение") : ("xabar yubormoq")}{" "}
                    </a>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      window.location = "/js/Login";
                    }}
                    className="spend"
                  >
                    {state === 'ru' ? ("Отправить сообщение") : ("xabar yubormoq")}
                  </button>
                )}
                <button className="byt">
                  {" "}
                  <span>
                    <HiPhone />{" "}
                  </span>{" "}
                  {state === 'ru' ? ("123 *** *** -раскрывать") : ("123 *** *** - ochiq")}
                </button>
                {/* <button className="wat">
              {" "}
              <span>
                <BsWhatsapp />
              </span>{" "}
              Chat via WhatsApp
            </button> */}

                <div className="pas">
                  <p>{state === 'ru' ? ("Идентификатор предложения № 9650") : ("Taklif ID raqami 9650")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bloksoz">
            <h1>{state === 'ru' ? ("Описание") : ("Tavsif")}</h1>
            <p className="p">
               {state === 'ru' ? ("Чем закончилось приключение, увидим позже. Ауда волновалась, хотяона ничего не сказала. Что касается") : ("Sarguzasht qanday tugaganini keyinroq ko'ramiz. Auda xavotirda ediu hech narsa demadi. Haqida")} <br />
              {state === 'ru' ? ("Паспарту, он счел маневр мистера Фогга просто великолепным.капитан сказал: «между одиннадцатью и ") : ("Passepartut, u janob Fogning manevrini shunchaki ajoyib deb o'yladi.kapitan dedi: o'n bir va orasida")}<br />{state === 'ru' ? ("двенадцать узлов», и «Генриетта» подтвердила его предсказание.") : ("o'n ikki tugun va Genrietta uning bashoratini tasdiqladi.")}
            </p>
            <p className="p1">
              {state === 'ru' ? ("Если бы тогда — а были еще «если» — море не стало бы слишкомшумный, если ветер не повернул на восток, если нетавария произошла с лодкой или ее механизмами, Генриеттаможет пересечь тройку...") : ("Agar o'shanda - va hali ham agar bo'lsa - dengiz ham bo'lmas edishamol sharqqa burilmagan bo'lsa, shovqinlibaxtsiz hodisa qayiq yoki uning mexanizmlari bilan sodir bo'ldi, Genriettauchdan o'tishi mumkin ...")}
            </p>
            <p className="iki">
              {state === 'ru' ? ("Из Нью-Йорка в Ливерпуль за девять дней, между 12 и21 декабря. Правда, когда дело дошло доПравление Генриетты, добавленное к правлению Банка Англии, могло бысоздать мистеру Фоггу больше трудностей, чем он мог себе представить или могжелание.") : ("Nyu-Yorkdan Liverpulga to'qqiz kun ichida, 12 va21 dekabr. Kelganida rostAngliya banki boshqaruviga qo'shilgan Genrietta hukmronligi mumkinjanob Fogg uchun u tasavvur qilgan yoki qila olmaganidan ko'ra ko'proq qiyinchiliklarni yaratingtilak.")}
            </p>
            <p className="iki1">
              {state === 'ru' ? ("В первые дни они шли достаточно гладко. Морене было очень неблагоприятным, ветер казался неподвижным вна северо-восток, паруса были подняты, и «Генриетта» бороздилапо волнам, как настоящий трансатлантический пароход.") : ("Dastlabki kunlarda ular juda muammosiz o'tishdi. Dengiz juda noqulay edi, shamol shimoli-sharqda tinchlanayotganday tuyuldi, yelkanlar ko'tarildi va Genrietta haqiqiy transatlantik paroxod kabi to'lqinlar orasidan suzib ketdi.")}
            </p>
            <h4
              className="show"
              onClick={() => {
                document.querySelector(".p1").classList.toggle("hg");
                document.querySelector(".iki").classList.toggle("hg1");
                document.querySelector(".iki1").classList.toggle("hg1");
              }}
            >
              {state === 'ru' ? ("Показать больше") : ("Ko'proq ko'rsatish")}
            </h4>
          </div>

          <div className="koka1">
            <div className="butt">
              <div className="lkj">
                <button className="but1"></button>
                <button className="but2"></button>
                <button className="but3"></button>

                <button className="but4"></button>
                <button className="but5"></button>
              </div>
            </div>
            <div className="card122">
              <div className="laaa">
                <h2>{state === 'ru' ? ("История автомобиля") : ("Avtomobil tarixi")}</h2>
                <button>Скачать отчет</button>
                <h2 className="mnb">Carfax PayPal</h2>
                <h2 className="nm">
                  {state === 'ru' ? ("Прежде чем вы решите купить автомобиль,") : ("Avtomobil sotib olishga qaror qilishdan oldin,")} <br />{state === 'ru' ? (" прочтите его историю длябесплатно.") : ("uning hikoyasini bepul o'qing.")}
                </h2>
              </div>
              <div className="vaa">
                <h2>
                  {state === 'ru' ? ("Прежде чем вы решите купить автомобиль,") : ("Avtomobil sotib olishga qaror qilishdan oldin,")} <br />{state === 'ru' ? (" прочтите его историю длябесплатно.") : ("uning hikoyasini bepul o'qing.")}
                </h2>
              </div>
              <div className="maa1">
                <img
                  src="https://demo.vehica.com/wp-content/uploads/2020/06/Layer-56.png"
                  alt="underfined img"
                />
              </div>
            </div>
          </div>

          <div className="lkjh">
            <h1>{state === 'ru' ? ("видео") : ("video")}</h1>
            
            <iframe
              className="iframe"
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/rWQeqH526KA"
              title="Animated Login Form using Html &amp; CSS"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <div id="vc" className="bv">
              <div className="dum">
                <div className="dumalo"></div>
                <h2>{state === 'ru' ? ("Бесключевой запуск") : ("Kalitsiz ishga tushirish")}</h2>
              </div>
              <div className="dum">
                <div className="dumalo"></div>
                <h2>{state === 'ru' ? ("Кожаные сиденья") : ("Charm o'rindiqlar")}</h2>
              </div>
              <div className="dum">
                <div className="dumalo"></div>
                <h2>{state === 'ru' ? ("Навигационная система") : ("Navigatsiya tizimi")}</h2>
              </div>
            </div>
            <div className="bv">
              <div className="dum">
                <div className="dumalo"></div>
                <h2>{state === 'ru' ? ("Камера заднего вида") : ("Orqa ko'rinish kamerasi")}</h2>
              </div>
              <div className="dum">
                <div className="dumalo"></div>
                <h2>{state === 'ru' ? ("Боковые подушки безопасности") : ("Yon xavfsizlik yostiqchalari")}</h2>
              </div>
              <div className="dum">
                <div className="dumalo"></div>
                <h2>{state === 'ru' ? ("Контроль тяги") : ("Traktsiyani nazorat qilish")}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="ypn">
          <div className="hf">
            <h1>
              {data.position.series.model.name} &nbsp;
              {data.position.series.name}&nbsp;
              {data.colour}
            </h1>
          </div>
          <div className="lk">
            <p>{data.year}</p>
            <ul className="l1">
              <li className="lip">
                {" "}
                <p>{data.fuel_sort.name}</p>
              </li>
            </ul>
          </div>
          <hr className="asdda" />
          <div className="dollars">
            <h1>${data.price}</h1>
            <p>
              {" "}
              <span>
                <AiOutlineStar />
              </span>{" "}
              {state === 'ru' ? ("Добавить в избранное") : ("Sevimlilarga qo'shing")}
            </p>
          </div>
          <div className="maky">
            <table style={{ width: "100%", paddingTop: "30px" }}>
              <tr className="maky1">
                <th>{state === 'ru' ? ("Делать:") : ("Qilish:")}</th>
                <td>{data.position.series.model.name}</td>
              </tr>
              <tr className="maky1">
                <th>{state === 'ru' ? ("Модель:") : ("Model:")}</th>
                <td>{data.position.series.name}</td>
              </tr>
              <tr className="maky1">
                <th>{state === 'ru' ? ("Цвет:") : ("Rang:")}</th>
                <td>{data.colour}</td>
              </tr>
              <tr className="maky1">
                <th>{state === 'ru' ? ("Тип вождения:") : ("Haydash turi:")}</th>
                <td>{state === 'ru' ? ("Передний привод") : ("Old g'ildirakli haydovchi")}</td>
              </tr>
              <tr className="maky1">
                <th>{state === 'ru' ? ("TransColormission:") : ("Rangni o'zgartirish:")}</th>
                <td>{data.gearbox.name}</td>
              </tr>
              <tr className="maky1">
                <th>{state === 'ru' ? ("Состояние:") : ("Davlat:")}</th>
                <td>{data.distance > 2 ? "NEW" : "B/Y"}</td>
              </tr>
              <tr className="maky1">
                <th>{state === 'ru' ? ("Год:") : ("Yil:")}</th>
                <td>{data.year}</td>
              </tr>
              <tr className="maky1">
                <th>{state === 'ru' ? ("Тип топлива:") : ("Yoqilg'i turi:")}</th>
                <td>{data.fuel_sort.name}</td>
              </tr>
              <tr className="maky1">
                <th>{state === 'ru' ? ("Размер двигателя:") : ("Dvigatel hajmi:")}</th>
                <td>{data.engine}L</td>
              </tr>
              <tr className="maky1">
                <th>{state === 'ru' ? ("Цилиндры:") : ("Silindrlar:")}</th>
                <td>4</td>
              </tr>
              <tr className="maky1">
                <th>{state === 'ru' ? ("VIN:") : ("G'alaba qozonish:")}</th>
                <td>{data.id}</td>
              </tr>
            </table>
          </div>
          <div className="buttonz">
            {cars.length === 0 ? (
              "no defect"
            ) : (
              <a href="#page">
                <button className="spend" onClick={() => defectOpen(data.id)}>
                  {state === 'ru' ? ("Дефект") : ("Kamchilik")}
                </button>
              </a>
            )}
            {user ? (
              <button className="spend">
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="#send"
                >
                  {state === 'ru' ? ("Отправить сообщение") : ("Xabar yubormoq")}{" "}
                </a>
              </button>
            ) : (
              <button
                onClick={() => {
                  window.location = "/js/Login";
                }}
                className="spend"
              >
                {state === 'ru' ? ("Отправить сообщение") : ("Xabar yubormoq")}
              </button>
            )}
            <button className="byt">
              {" "}
              <span>
                <HiPhone />{" "}
              </span>{" "}
              {state === 'ru' ? ("123 *** *** -раскрывать") : ("123 *** *** - ochiq")}
            </button>
            {/* <button className="wat">
              {" "}
              <span>
                <BsWhatsapp />
              </span>{" "}
              Chat via WhatsApp
            </button> */}

            <div className="pas">
              <p>{state === 'ru' ? ("Идентификатор предложения № 9650") : ("Taklif ID raqami 9650")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="kjl">
        <div className="mnbc" id="send">
          <div className="bnm">
            <div className="gfbvdc">
              <h2>{state === 'ru' ? ("Отправить сообщение") : ("Xabar yubormoq")}</h2>
              <div className="inps1">
                <div className="inp2">
                  <input
                    placeholder="Имя"
                    className="visit_name"
                    type="text"
                  />
                  <input
                    placeholder="Email*"
                    className="visit_email"
                    type="date"
                  />
                  <input
                    placeholder="Телефон"
                    type="text"
                    className="visit_number"
                  />
                  <input placeholder="время посещения" id="visit_time" type="time" />
                </div>
              </div>
              <textarea
                placeholder="Cообщение*"
                className="texta visit_deck"
              ></textarea>
              <select className="visit_brench">
                {branchs.map((item) => {
                  return (
                    <option value={item.id}>
                      {item.city} {item.district} {item.street}
                    </option>
                  );
                })}
              </select>
              <div className="buy">
                {user ? (
                  <button
                    onClick={() => {
                      postData();
                    }}
                  >
                    {state === 'ru' ? ("Отправить сообщение") : ("Xabar yubormoq")}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      alert("Siz ro`yhatdan o`tmagansiz");
                      window.location = "/js/Login";
                    }}
                  >
                    {state === 'ru' ? ("Отправить сообщение") : ("Xabar yubormoq")}
                  </button>
                )}
              </div>
            </div>
            <div className="carf">
              <div className="asda">
                <div className="carf1">
                  <div className="c1">
                    <h2>{state === 'ru' ? ("Ральф Дэвин") : ("Ralf Devin")}</h2>
                    <h3>{state === 'ru' ? ("Советник клиентов") : ("Mijoz maslahatchisi")}</h3>
                    <p>
                      {" "}
                      <span>
                        <MdLocationOn />
                      </span>
                      {state === 'ru' ? ("70 Вашингтон-стрит") : ("Vashington ko'chasi, 70")}
                    </p>
                  </div>
                  <img
                    src="https://demo.vehica.com/wp-content/uploads/2020/10/p1-1-100x100.jpg"
                    alt="underfined img"
                  />
                </div>
              </div>
              <div className="carf2">
                <p>
                  <span>
                    <AiOutlineMail />
                  </span>
                  {state === 'ru' ? ("ralph@vehica.com") : ("ralph@venika.com")}
                </p>
                <button>
                  <span>
                    <HiPhone />
                  </span>
                  {state === 'ru' ? ("123*** ***-раскрывать") : ("123*** ***-oshkor qilish")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="konechswip">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {getavto.map((item, key) => {
            if (key < 12) {
              return (
                <SwiperSlide
                  onClick={() => {
                    getData2(item);
                  }}
                >
                  <div className="audi4">
                    <img
                      src={
                        item.image[0] != undefined
                          ? item.image[0].image
                          : "https://demo.vehica.com/wp-content/uploads/2020/08/2-4-670x372.jpg"
                      }
                      alt="underfined img"
                    />
                    <h3>
                      {item.name}
                      <br />
                      <h2>${item.price}</h2>
                    </h3>

                    <hr />
                    <div className="miles">
                      <div className="mnb2">{item.year}</div>
                      <div className="mile">{ state === "ru"?("160,000 мили"):("160 000 milya")}</div>
                      <div className="au">{state === "ru"?("Aвтоматический"):("Avtomatik")}</div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>

      <div className="konechswip1">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {getavto.map((item, key) => {
            if (key < 12) {
              return (
                <SwiperSlide
                  onClick={() => {
                    getData2(item);
                  }}
                >
                  <div className="audi4">
                    <img
                      src={
                        item.image[0] != undefined
                          ? item.image[0].image
                          : "https://demo.vehica.com/wp-content/uploads/2020/08/2-4-670x372.jpg"
                      }
                      alt="underfined img"
                    />
                    <h3>
                      {item.name}
                      <br />
                      <h2>${item.price}</h2>
                    </h3>

                    <hr />
                    <div className="miles">
                      <div className="mnb2">{item.year}</div>
                      <div className="mile">{ state === "ru"?("160,000 мили"):("160 000 milya")}</div>
                      <div className="au">{state === "ru"?("Aвтоматический"):("Avtomatik")}</div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>

      <div className="konechswip2">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {getavto.map((item, key) => {
            if (key < 12) {
              return (
                <SwiperSlide
                  onClick={() => {
                    getData2(item);
                  }}
                >
                  <div className="audi4">
                    <img
                      src={
                        item.image[0] != undefined
                          ? item.image[0].image
                          : "https://demo.vehica.com/wp-content/uploads/2020/08/2-4-670x372.jpg"
                      }
                      alt="underfined img"
                    />
                    <h3>
                      {item.name}
                      <br />
                      <h2>${item.price}</h2>
                    </h3>

                    <hr />
                    <div className="miles">
                      <div className="mnb2">{item.year}</div>
                      <div className="mile">{ state === "ru"?("160,000 мили"):("160 000 milya")}</div>
                      <div className="au">{state === "ru"?("Aвтоматический"):("Avtomatik")}</div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>

      <div className="konechswip3">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {getavto.map((item, key) => {
            if (key < 12) {
              return (
                <SwiperSlide
                  onClick={() => {
                    getData2(item);
                  }}
                >
                  <div className="audi4">
                    <img
                      src={
                        item.image[0] != undefined
                          ? item.image[0].image
                          : "https://demo.vehica.com/wp-content/uploads/2020/08/2-4-670x372.jpg"
                      }
                      alt="underfined img"
                    />
                    <h3>{item.name}</h3>
                    <br />
                    <h2>${item.price}</h2>
                    <div className="miles">
                      <hr />
                      <div className="mnb2">{item.year}</div>
                      <div className="mile">{ state === "ru"?("160,000 мили"):("160 000 milya")}</div>
                      <div className="au">{state === "ru"?("Aвтоматический"):("Avtomatik")}</div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
