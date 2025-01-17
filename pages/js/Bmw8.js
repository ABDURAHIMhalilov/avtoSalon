"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/Tradein.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "../css/galerey.css";
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
import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import car from "../images/6.jpg";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Galery from "./gallery";
import "../css/galerey.css";
import { BiCheckCircle } from "react-icons/bi";
import Head from "next/head";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import "@/app/globals.css";
import Checkbox from '@mui/material/Checkbox';
import "../css/Popular.css";
import "../css/Home.css";
import { Style } from "@mui/icons-material";
import Team from "../js/Team";

export default function Bmw8() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [user, setUser] = useState(false);
  const [branchs, setBranchs] = useState([]);
  const [getavto, setAvto] = useState([]);
  const [cars, setCars] = useState([]);
  const [state, setstate] = useState([]);
  const [p, setP] = useState(2);
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [checked, setChecked] = useState(false);
  var [data, setData] = useState([]);
  console.log(data, "sassdad");
  function defectOpen() {
    document.querySelector(".defectDiv").style = "display: block;";
    document.querySelector(".mySwiper").style = "display: none";
    document.querySelector(".mySwiper2").style = "display: none";
    document.querySelector("body").style = "height: 300vh; overflow: hidden;";
  }

  function defectClose() {
    document.querySelector(".defectDiv").style = "display: none";
    document.querySelector(".mySwiper").style = "display: block";
    document.querySelector(".mySwiper2").style = "display: block";
    // document.querySelector(".mySwiper2").style = "display: none";
    document.querySelector("body").style = "height: auto;";
  }









  const handleChange = (event) => {
    setChecked(event.target.checked);
    // alert(checked)
    // alert(event.target.checked)
    let userData = localStorage.getItem("onemen");
    if (userData===null) {
      window.location="/js/Login"
    }else{
      let carData = localStorage.getItem("oneproduct");
      carData = JSON.parse(carData);
      let carId=carData.id
      userData = JSON.parse(userData);
      let userId = userData.id;
      // console.log("car:  "+carId+" user:  "+userId);
      var formdata = new FormData();
      formdata.append("car", carId);
      if (checked===true) {
        axios.get(`https://api.baracar.uz/api/likes/`,{
          headers: {
            Authorization: "Bearer " + localStorage.getItem("Token_user"),
          },
        }).then((res)=>{
          res.data.map((item)=>{
            if (item.user===userId&&item.car===carId) {
              axios.delete(`https://api.baracar.uz/api/likes/${item.id}/`,{
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("Token_user"),
                },
              }).then((res)=>{
                state === "ru"
                ? alert(" Удалено из избранного ")
                : alert(" Sevimlilardan olindi");
                setChecked(false)
              }).catch((err)=>{
                state === "ru"
          ? alert("Ошибка пожалуйста попробуйте снова ")
          : alert("Xato iltimos boshqattan urinib ko'ring");
              })
            }
          })
        })
      }else{
        axios.post(`https://api.baracar.uz/api/likes/`,formdata,{
          headers: {
            Authorization: "Bearer " + localStorage.getItem("Token_user"),
          },
        }).then((res)=>{
          setChecked(true)
          state === "ru"
          ? alert(" Добавлено в избранное ")
          : alert(" Sevimlilarga qo'shildi");
        }).catch((err)=>{
          state === "ru"
          ? alert("Ошибка пожалуйста попробуйте снова ")
          : alert("Xato iltimos boshqattan urinib ko'ring");
        })
      }
    }
  };

  
  useEffect(() => {
    let userData = localStorage.getItem("onemen");
if (userData===null) {

}else{
  let carData = localStorage.getItem("oneproduct");
  carData = JSON.parse(carData);
  let carId=carData.id
  userData = JSON.parse(userData);
  let userId = userData.id;
  // console.log("car:  "+carId+" user:  "+userId);
  axios.get(`https://api.baracar.uz/api/likes/`,{
    headers: {
      Authorization: "Bearer " + localStorage.getItem("Token_user"),
    },
  }).then((res)=>{
 const filter=res.data.filter(item=>item.car===carId&&item.user===userId)
 if (filter.length===0) {
  setChecked(false)
 }else{
  setChecked(true)
 }
  })
}

  }, []);
  



  function postData() {
    var formdata = new FormData();

    formdata.append(
      "visit_time",
      document.querySelector(".visit_email").value +
        "T" +
        document.querySelector("#visit_time").value
    );
    formdata.append("branch", document.querySelector(".visit_brench").value);
    formdata.append("user", JSON.parse(localStorage.getItem("onemen")).id);
    formdata.append("car", JSON.parse(localStorage.getItem("oneproduct")).id);
    formdata.append("is_active", false);
    axios
      .post(`https://api.baracar.uz/api/order/`, formdata, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        state === "ru"
          ? alert("Информация отправлена")
          : alert("Ma`lumot yuborildi");
        window.location.reload();
      })
      .catch((err) => {
        state === "ru"
          ? alert("Отправить подробную информацию")
          : alert("To`liqroq ma`lumot yuboring");
      });
  }
  useEffect(() => {
    setData(
      JSON.parse(
        localStorage.getItem("oneproduct") != null
          ? `${localStorage.getItem("oneproduct")}`
          : "[]"
      )
    );
    var data1 = JSON.parse(
      localStorage.getItem("oneproduct") != null
        ? `${localStorage.getItem("oneproduct")}`
        : "[]"
    );
    setstate(localStorage.getItem("lang"));
    setUser(
      localStorage.getItem("onemen") != null
        ? JSON.parse(localStorage.getItem("onemen"))
        : false
    );
    axios
      .get(
        `https://api.baracar.uz/api/${
          localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
        }/branch/`
      )
      .then((res) => {
        setBranchs(res.data);
      });
    axios
      .get(
        `https://api.baracar.uz/api/${
          localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
        }/cars_get/`
      )
      .then((res) => {
        axios.get(`https://api.baracar.uz/api/images/`).then((res1) => {
          for (let i = 0; i < res.data.length; i++) {
            res.data[i].image = [];
            for (let j = 0; j < res1.data.length; j++) {
              if (res.data[i].id == res1.data[j].car) {
                res.data[i].image.push(res1.data[j]);
              }
            }
          }
          res.data = res.data.filter((item) => data1.id != item.id);
          res.data = res.data.filter(
            (item) => data1.position.series.id == item.position.series.id
          );
          setAvto(res.data);
          console.log(res.data);
        });
      });

    axios
      .get(
        `https://api.baracar.uz/api/${
          localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
        }/defect_get/`
      )
      .then((res) => {
        var initialProducts = [];
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].car === data1.id) {
            initialProducts.push(res.data[i]);
          }
        }
        setCars(initialProducts);
      });
    setP(1);
    setTimeout(() => {
      if (localStorage.getItem("onemen")) {
        var a = JSON.parse(localStorage.getItem("onemen"));
        document.querySelector(".visit_name").value = a.username;
        document.querySelector(".visit_email").value = a.email;
        document.querySelector(".visit_number").value = a.phone;
      }
    }, 1000);
  }, []);
  function getData2(key) {
    console.log(key);
    var oneProd = JSON.stringify(key);
    localStorage.setItem("oneproduct", oneProd);
    axios.get(`https://api.baracar.uz/api/cars/${oneProd.id}/`);
    window.location = "/js/Bmw8";
  }

  function galeriyaModal() {
    document.querySelector(".galeriya").style = "display: block;";
    document.querySelector("body").style = "height: 300vh;overflow:hidden";
  }
  function galeriyaClose() {
    document.querySelector(".galeriya").style = "display: none;";
    document.querySelector("body").style = "height: auto;";
  }

  return (
    <div>
      <Head>
        <title>Baracar</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы. "
        />
        <meta
          name="keywords"
          content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы. "
        />
        <meta
          name="author"
          content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы. "
        />
        <meta
          name="description"
          content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы.  "
        />
        <meta
          name="twitter:card"
          content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы. "
        />
        <meta name="twitter:site" content="Baracar.uz" />
        <meta name="twitter:creator" content="Baracar.uz" />
        <meta name="twitter:title" content="Baracar" />
        <meta
          name="twitter:description"
          content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы.  "
        />
        <meta name="twitter:image" content="url_to_image" />
        <meta property="og:title" content="Baracar" />
        <meta
          property="og:description"
          content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы.  "
        />
        <meta property="og:url" content="Baracar.uz" />
        <meta property="og:site_name" content="Baracar.uz" />
        <meta property="og:locale" content="en_uz" />
        <meta property="og:type" content="Baracar.uz" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Head>
      {p === 1 ? (
        <div className="carspage">
          <div className="galeriya">
            <div className="galeriyaclose">
              <AiOutlineClose onClick={() => galeriyaClose()} />
            </div>
            <Galery />
          </div>
          <div className="defectDiv">
            {cars.length == 0 ? (
              <div className="defectBig">
                <div className="deskBg">
                  <center>
                    <h1>
                      {state === "ru"
                        ? "Нет информации об этом автомобиле!"
                        : "Bu mashina haqida hech qanday ma'lumot yo'q!"}
                    </h1>
                  </center>
                </div>
                <div className="deskBg2"></div>
              </div>
            ) : (
              <>
                <h5 onClick={() => defectClose()} className="helloClose">
                  <AiOutlineClose />
                </h5>
                <Carousel className="carusels">
                  {cars.map((item) => {
                    return (
                      <Carousel.Item className="carusels2">
                        <div className="imgDefect">
                          <div className="imgDefect2">
                            <img src={item.image1} alt="" />
                            <img src={item.image2} alt="" />
                          </div>
                          <br />
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
                              {data.position.series.name}{" "}
                              {state === "ru" ? "дефект" : "nuqson"}
                            </h4>
                            <div className="defet1">
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </>
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
                            id="s2img1"
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
                  className="mySwiper two2"
                >
                  {data.image.map((item2) => {
                    if (data.id === item2.car) {
                      return (
                        <SwiperSlide>
                          <img
                            id="swip111"
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
                  <h1>
                    {sessionStorage.getItem("valuta") === "sum"
                      ? `${
                          data.sum_price - (data.sum_price * data.sale) / 100
                        }sum`
                      : sessionStorage.getItem("valuta") === "dollar"
                      ? `${data.price - (data.price * data.sale) / 100}$`
                      : `${data.price - (data.price * data.sale) / 100}$`}
                  </h1>
                  <p className="save">
                    {" "}
                    <Checkbox
                           checked={checked}
                           onChange={handleChange}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
                    {state === "ru"
                      ? "Добавить в избранное"
                      : "Sevimlilarga qo'shing"}
                  </p>
                </div>
                
                <div className="oxirkotta">
                  <div className="maky">
                    <table
                      className="tab1"
                      style={{
                        width: "100%",
                        paddingTop: "30px",
                        minWidth: "450px",
                      }}
                    >
                      <tr className="maky1">
                        <th>{state === "ru" ? "Марка:" : "Brend:"}</th>
                        <td>{data.position.series.model.name}</td>
                      </tr>
                      <tr className="maky1">
                        <th>{state === "ru" ? "Модель:" : "Model:"}</th>
                        <td>{data.position.series.name}</td>
                      </tr>
                      <tr className="maky1">
                        <th>{state === "ru" ? "Цвет:" : "Rang:"}</th>
                        <td>{data.colour}</td>
                      </tr>
                      <tr className="maky1">
                        <th>
                          {state === "ru" ? "Тип вождения:" : "Haydash turi:"}
                        </th>
                        <td>
                          {state === "ru"
                            ? "Передний привод"
                            : "Old g'ildirakli haydovchi"}
                        </td>
                      </tr>
                      <tr className="maky1">
                        <th>
                          {state === "ru" ? "Трансмиссия:" : "Transmissiya:"}
                        </th>
                        <td>{data.gearbox.name}</td>
                      </tr>
                      <tr className="maky1">
                        <th>
                          {data.distance < 200
                            ? state === "ru"
                              ? "Состояние:"
                              : "Holat:"
                            : state === "ru"
                            ? "Пробег:"
                            : "Bosib o'tilgan ma'sofa"}
                        </th>
                        <td>
                          {data.distance < 200
                            ? state === "ru"
                              ? "Новый"
                              : "Yangi"
                            : data.distance}
                        </td>
                      </tr>
                      <tr className="maky1">
                        <th>{state === "ru" ? "Год:" : "Yil:"}</th>
                        <td>{data.year}</td>
                      </tr>
                      <tr className="maky1">
                        <th>
                          {state === "ru" ? "Тип топлива:" : "Yoqilg'i turi:"}
                        </th>
                        <td>{data.fuel_sort.name}</td>
                      </tr>
                      <tr className="maky1">
                        <th>
                          {state === "ru"
                            ? "Размер двигателя:"
                            : "Dvigatel hajmi:"}
                        </th>
                        <td>{data.engine}L</td>
                      </tr>

                      <tr className="maky1">
                        <th>{state === "ru" ? "ИД номер:" : "ID raqami:"}</th>
                        <td>{data.id}</td>
                      </tr>
                    </table>
                  </div>

                  <div className="buttonz">
                    {cars.length === 0 ? (
                      state === "uz" ? (
                        "Bu avtomobilda hech qanday nuqson yo'q"
                      ) : (
                        "В этой машине нет ничего плохого"
                      )
                    ) : (
                      <a href="#page">
                        <button
                          className="spend"
                          onClick={() => defectOpen(data.id)}
                        >
                          {state === "ru" ? "дефект" : "nuqson"}
                        </button>
                      </a>
                    )}
                    {user ? (
                      <button className="spend">
                        <a
                          style={{ textDecoration: "none", color: "#fff" }}
                          href="#send"
                        >
                          {state === "ru"
                            ? "Отправить сообщение"
                            : "Xabar yuborish"}{" "}
                        </a>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          window.location = "/js/Login";
                        }}
                        className="spend"
                      >
                        {state === "ru"
                          ? "Отправить сообщение"
                          : "Xabar yuborish"}
                      </button>
                    )}
                    <button className="byt">
                      {" "}
                      <span>
                        <HiPhone />{" "}
                      </span>{" "}
                      <a className="tel_a" href="tel:330321112">
                        {state === "ru" ? "(33) 032 11 12" : "(33) 032 11 12"}
                      </a>
                    </button>
                    <button onClick={() => galeriyaModal()} className="wat">
                      {" "}
                      {state === "ru"
                        ? "Картинка автомобиля"
                        : "Avtomobil rasmi"}
                    </button>

                    {/* <div className="pas">
                  <p>{state === 'ru' ? ("Идентификатор предложения № 9650") : ("Taklif ID raqami 9650")}</p>
                </div> */}
                  </div>
                </div>

              </div>

              <div className="bloksoz">
  
                <h1>{state === "ru" ? "Описание" : "Tavsif"}</h1>
                <p className="p">{data.description.slice(0, 350)}</p>
                <p className="p1">{data.description.slice(350)}</p>
                <h4
                  className="show"
                  onClick={() => {
                    document.querySelector(".p1").classList.toggle("hg1");
                  }}
                >
                  {state === "ru" ? "Показать больше" : "Ko'proq ko'rsatish"}
                </h4>
              </div>

              <div className="kotta">
                <h1>
                  {state === "ru"
                    ? "Почему выбрали нас?"
                    : "Nima uchun bizni tanlaysiz?"}
                </h1>
                <div className="ushta">
                  <div className="bir">
                    <img
                      className="bxs-balloon"
                      src="https://images.ctfassets.net/6x2h5ns7uwip/2YKwoOLA5dbMWb4HwlqARk/bb90de23a382bee4545fef1c5ab5ae0b/CRM_icons_90-day_warranty_35px.png?w=74&h=73&fit=fill&f=center&fm=webp"
                      alt=""
                    />
                    <h2>
                      {state === "ru"
                        ? "Тотальное качество Baracar"
                        : "Baracar yuksak sifati"}{" "}
                    </h2>
                    <h4>
                      {state === "ru"
                        ? "Каждая машина на Baracar проходит проверку по 168 пунктам и имеет полную историю автомобиля, а также историю технического обслуживания. "
                        : "                    Har bir avtomobil 168 punkt bo’yicha sinovdan o'tkaziladi va to'liq avtomashina tarixi va texnik xizmat ko'rsatish tarixiga ega."}
                    </h4>
                  </div>
                  <div className="bir">
                    <img
                      className="bxs-balloon"
                      src="https://images.ctfassets.net/6x2h5ns7uwip/2YKwoOLA5dbMWb4HwlqARk/bb90de23a382bee4545fef1c5ab5ae0b/CRM_icons_90-day_warranty_35px.png?w=74&h=73&fit=fill&f=center&fm=webp"
                      alt=""
                    />
                    <h2>
                      {state === "ru"
                        ? "Выгодный автокредит"
                        : "Qulay avtokredi"}{" "}
                    </h2>
                    <h4>
                      {state === "ru"
                        ? "Мы, в партнерстве с Tenge Bank, предлагаем самые удобные, а также самые выгодные условия по автокредиту. "
                        : "                    Biz Tenge Bank bilan hamkorlikda avtokredit uchun eng qulay va foydali shartlarni taklif etamiz."}
                    </h4>
                  </div>
                  <div className="bir">
                    <img
                      className="bxs-balloon"
                      src="https://images.ctfassets.net/6x2h5ns7uwip/2YKwoOLA5dbMWb4HwlqARk/bb90de23a382bee4545fef1c5ab5ae0b/CRM_icons_90-day_warranty_35px.png?w=74&h=73&fit=fill&f=center&fm=webp"
                      alt=""
                    />
                    <h2>
                      {" "}
                      {state === "ru"
                        ? "30-дневная гарантия"
                        : "30 kunlik kafolat"}
                    </h2>
                    <h4>
                      {state === "ru"
                        ? "Каждый автомобиль в нашем автосалоне имеет гарантию минимум 30 дней на полное обслуживание ходовой части по гарантии. "
                        : "                    Avtosalonimizdagi har bir avtomobil 30 kunlik kafolat ostida to'liq xizmat ko’rsatishga ega."}
                    </h4>
                  </div>
                </div>
              </div>

              <Team />
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
                <h1>
                  {sessionStorage.getItem("valuta") === "sum"
                    ? `${data.sum_price - (data.sum_price * data.sale) / 100}${
                        state === "ru" ? "сум" : "sum"
                      }`
                    : sessionStorage.getItem("valuta") === "dollar"
                    ? `${data.price - (data.price * data.sale) / 100}$`
                    : `${data.price - (data.price * data.sale) / 100}$`}
                </h1>
                <div style={{display:"flex",alignItems:"center"}} >
                     <Checkbox
                           checked={checked}
                           onChange={handleChange}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
                  <p>{state === "ru"
                    ? "Добавить в избранное"
                    : "Sevimlilarga qo'shing"}</p>
                </div>
                {/* <p>
                  {" "}
                  <span>
                    <AiOutlineStar />
                  </span>{" "}
                  {state === "ru"
                    ? "Добавить в избранное"
                    : "Sevimlilarga qo'shing"}
                </p> */}
              </div>
              <div className="maky">
                <table style={{ width: "100%", paddingTop: "30px" }}>
                  <tr className="maky1">
                    <th>{state === "ru" ? "Марка:" : "Brend:"}</th>
                    <td>{data.position.series.model.name}</td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === "ru" ? "Модель:" : "Model:"}</th>
                    <td>{data.position.series.name}</td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === "ru" ? "Цвет:" : "Rang:"}</th>
                    <td>{data.colour}</td>
                  </tr>
                  <tr className="maky1">
                    <th>
                      {state === "ru" ? "Тип вождения:" : "Haydash turi:"}
                    </th>
                    <td>
                      {state === "ru"
                        ? "Передний привод"
                        : "Old g'ildirakli haydovchi"}
                    </td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === "ru" ? "Трансмиссия:" : "Transmissiya:"}</th>
                    <td>{data.gearbox.name}</td>
                  </tr>
                  <tr className="maky1">
                    <th>
                      {data.distance < 200
                        ? state === "ru"
                          ? "Состояние:"
                          : "Holat:"
                        : state === "ru"
                        ? "Пробег:"
                        : "Bosib o'tilgan ma'sofa"}
                    </th>
                    <td>
                      {data.distance < 200
                        ? state === "ru"
                          ? "Новый"
                          : "Yangi"
                        : data.distance}
                    </td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === "ru" ? "Год:" : "Yil:"}</th>
                    <td>{data.year}</td>
                  </tr>
                  <tr className="maky1">
                    <th>
                      {state === "ru" ? "Тип топлива:" : "Yoqilg'i turi:"}
                    </th>
                    <td>{data.fuel_sort.name}</td>
                  </tr>
                  <tr className="maky1">
                    <th>
                      {state === "ru" ? "Размер двигателя:" : "Dvigatel hajmi:"}
                    </th>
                    <td>{data.engine}L</td>
                  </tr>
                  <tr className="maky1">
                    <th>{state === "ru" ? "ИД номер:" : "ID raqami:"}</th>
                    <td>{data.id}</td>
                  </tr>
                </table>
              </div>
              <div className="buttonz">
                {cars.length === 0 ? (
                  "Bu avtomobil haqida nuqsonlar yo'q"
                ) : (
                  <a href="#page">
                    <button
                      className="spend"
                      onClick={() => defectOpen(data.id)}
                    >
                      {state === "ru" ? "Дефект" : "Kamchilik"}
                    </button>
                  </a>
                )}
                {user ? (
                  <button className="spend">
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="#send"
                    >
                      {state === "ru"
                        ? "Отправить сообщение"
                        : "Xabar yuborish"}{" "}
                    </a>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      window.location = "/js/Login";
                    }}
                    className="spend"
                  >
                    {state === "ru" ? "Отправить сообщение" : "Xabar yuborish"}
                  </button>
                )}
                <button className="byt">
                  {" "}
                  <span>
                    <HiPhone />{" "}
                  </span>{" "}
                  <a className="tel_a" href="tel:330321112">
                    {state === "ru" ? "(33) 032 11 12" : "(33) 032 11 12"}
                  </a>
                </button>
                <button onClick={() => galeriyaModal()} className="wat">
                  {" "}
                  {state === "ru" ? "Картинка автомобиля" : "Avtomobil rasmi"}
                </button>

                {/* <div className="pas">
              <p>{state === 'ru' ? ("Идентификатор предложения № 9650") : ("Taklif ID raqami 9650")}</p>
            </div> */}
              </div>
            </div>
          </div>
          <div className="kjl">
            <div className="mnbc" id="send">
              <div className="bnm">
                <div className="gfbvdc">
                  <h2>
                    {state === "ru" ? "Отправить сообщение" : "Xabar yuborish"}
                  </h2>
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
                        id="mnbh"
                      />
                      <input
                        placeholder="Телефон"
                        type="text"
                        className="visit_number"
                      />
                      <input
                        placeholder="время посещения"
                        class="mnbh"
                        id="visit_time"
                        type="time"
                      />
                    </div>
                  </div>
                  <textarea
                    placeholder="Cообщение*"
                    className="texta visit_deck"
                  ></textarea>

                  <div className="select21">
                    <select
                      id="visit"
                      className="visit_brench"
                      onChange={handleChange}
                    >
                      {branchs.map((item) => {
                        return (
                          <option value={item.id} id="visit">
                            {item.city} {item.district} {item.street}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="buy">
                    {user ? (
                      <button
                        onClick={() => {
                          postData();
                        }}
                      >
                        {state === "ru"
                          ? "Отправить сообщение"
                          : "Xabar yuborish"}
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          state === "ru"
                            ? alert("Вы не зарегистрированы")
                            : alert("Siz ro`yhatdan o`tmagansiz");
                          window.location = "/js/Login";
                        }}
                      >
                        {state === "ru"
                          ? "Отправить сообщение"
                          : "Xabar yuborish"}
                      </button>
                    )}
                  </div>
                </div>
                <div className="carf">
                  <div className="asda">
                    <div className="carf1">
                      <div className="c1">
                        <h2>{state === "ru" ? "Ральф Дэвин" : "Ralf Devin"}</h2>
                        <h3>
                          {state === "ru"
                            ? "Советник клиентов"
                            : "Mijoz maslahatchisi"}
                        </h3>
                        <p>
                          {" "}
                          <span>
                            <MdLocationOn />
                          </span>
                          {state === "ru"
                            ? "Мирабадский район"
                            : "Mirobid tumani"}
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
                      {state === "ru"
                        ? "avtobaracar@gmail.com"
                        : "avtobaracar@gmail.com"}
                    </p>
                    <button className="byt">
                      {" "}
                      <span>
                        <HiPhone />{" "}
                      </span>{" "}
                      <a className="tel_a" href="tel:330321112">
                        {state === "ru" ? "(33) 032 11 12" : "(33) 032 11 12"}
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="konechswip">
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
                      <div id="corner-ribbon" style={{position:'absolute',top:'0px',right:'170px'}}>
              <div  style={item.sale == 0 ? { display: "none" }:{ display: "flex" }}>
                <div>
                  <div><h2 className='sa'>{item.sale == 0 ? ("") : (`${item.sale}%`)} </h2></div>
                </div>
              </div>
            </div>
                        <img
                          src={
                            getavto[key].image != undefined
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
                          <div className="mile">
                            {state === "ru" ? "160,000 мили" : "160 000 milya"}
                          </div>
                          <div className="au">
                            {state === "ru" ? "Aвтоматический" : "Avtomatik"}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </div> */}

          {/* <div className="konechswip1">
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
                          <div className="mile">
                            {state === "ru" ? "160,000 мили" : "160 000 milya"}
                          </div>
                          <div className="au">
                            {state === "ru" ? "Aвтоматический" : "Avtomatik"}
                          </div>
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
                          <div className="mile">
                            {state === "ru" ? "160,000 мили" : "160 000 milya"}
                          </div>
                          <div className="au">
                            {state === "ru" ? "Aвтоматический" : "Avtomatik"}
                          </div>
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
                          <div className="mile">
                            {state === "ru" ? "160,000 мили" : "160 000 milya"}
                          </div>
                          <div className="au">
                            {state === "ru" ? "Aвтоматический" : "Avtomatik"}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </div> */}
          {getavto.length > 3 ? (
            <div className="popular">
              <Swiper
                spaceBetween={0}
                navigation={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                  650: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  991: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1400: {
                    slidesPerView: 4,
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
                {getavto.map((item, key) => {
                  if (key < 12) {
                    return (
                      <SwiperSlide
                        key={key}
                        onClick={() => getData2(item)}
                        className="swiperPopCard"
                      >
                        <div className="feat_card">
                          <div
                            id="corner-ribbon"
                            style={{
                              position: "absolute",
                              top: "0px",
                              right: "170px",
                            }}
                          >
                            <div
                              style={
                                item.sale == 0
                                  ? { display: "none" }
                                  : { display: "flex" }
                              }
                            >
                              <div>
                                <div>
                                  <h2 className="sa">
                                    {item.sale == 0 ? "" : `${item.sale}%`}{" "}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            src={
                              item.image.length > 0
                                ? item.image[0].image
                                : "https://demo.vehica.com/wp-content/uploads/2020/08/2-4-670x372.jpg"
                            }
                            alt="no img"
                          />
                          <div className="featCard_bottom">
                            <h3 className="featCard_name">{item.name}</h3>
                            <h4 className="featCard_price">
                              {sessionStorage.getItem("valuta") === "sum"
                                ? `${
                                    data.sum_price -
                                    (data.sum_price * data.sale) / 100
                                  }${state === "ru" ? "сум" : "sum"}`
                                : sessionStorage.getItem("valuta") === "dollar"
                                ? `${
                                    data.price - (data.price * data.sale) / 100
                                  }$`
                                : `${
                                    data.price - (data.price * data.sale) / 100
                                  }$`}
                            </h4>
                            <div className="featCard_box">
                              <p className="featCard_year">{item.year}</p>
                              <p className="featCard_auto">
                                {item.gearbox.name}
                              </p>
                              <p className="featCard_pet">
                                {item.fuel_sort.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  }
                })}
              </Swiper>
            </div>
          ) : (
            ""
          )}

          <Footer />
        </div>
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
    </div>
  );
}
