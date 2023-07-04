"use clint";

import React, { useEffect } from "react";
import Image from "next/image";
import car from "../images/6.jpg";
import "../css/Featured.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import axios from "axios";

import "../../app/globals.css";

export default function Featured() {
  const [cars, setCars] = React.useState([]);
  const [images, setImages] = React.useState([]);
  const [state, setState] = React.useState();

  const [price, setPrice] = React.useState([]);

  useEffect(() => {
    setState(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
    );
    axios
      .get(
        `https://api.baracar.uz/api/${
          localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
        }/cars_get/`
      )
      .then((res) => {
        axios
          .get(`https://api.baracar.uz/api/images/`)
          .then((res1) => {
            for (let i = 0; i < res.data.length; i++) {
              res.data[i].image = [];
              for (let j = 0; j < res1.data.length; j++) {
                if (res.data[i].id == res1.data[j].car) {
                  res.data[i].image.push(res1.data[j]);
                }
              }
            }
            console.log(res.data);
            setTimeout(() => {
              setCars(res.data);
            }, 30);
          })
          .catch((err) => {
            console.log(err, "salom");
          });
      });
  }, []);

  function getData2(key) {
    console.log(key);
    localStorage.setItem("oneproduct", JSON.stringify(key));
    window.location = "/js/Bmw8";
  }

  return (
    <>
      {state == "uz" ? (
        <div className="featured">
          <h5 className="featured_info">Qulay tanlov</h5>
          <h2 className="featured_title">Tanlangan reklamalar</h2>
          <div className="featured_body">
            {cars.map((item, key) => {
              if (key == 0) {
                return (
                  <div
                    className="featured_left"
                    onClick={() => {
                      getData2(cars[0]);
                    }}
                  >
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
                    <div className="featured_img_size">
                      {item.image.length > 0 ? (
                        <Image
                          width={100}
                          height={100}
                          src={item.image[0].image}
                          alt="a"
                          className="featured_img"
                        />
                      ) : (
                        <Image
                          width={100}
                          height={100}
                          src={car}
                          alt="a"
                          className="featured_img"
                        />
                      )}
                    </div>
                    <div className="featured_bottom">
                      <h3 className="featured_name">{item.name}</h3>
                      <div className="featured_box">
                        <p className="feat_year">{item.year}</p>
                        <p className="feat_auto">{item.gearbox.name}</p>
                        <p className="feat_pet">{item.fuel_sort.name}</p>
                        <p className="feat_p">{item.sale}%</p>
                        <h4 className="feat_price">{item.price}$</h4>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            <div className="featured_right">
              {cars.map((item, key) => {
                if (key > 0 && key <= 4) {
                  return (
                    <div
                      className="feat_card"
                      onClick={() => {
                        getData2(item);
                      }}
                    >
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
                      <div className="featured_img_size">
                        {item.image.length > 0 ? (
                          <Image
                            width={100}
                            height={100}
                            src={item.image[0].image}
                            alt="a"
                            className="featured_img"
                          />
                        ) : (
                          <Image
                            width={100}
                            height={100}
                            src={car}
                            alt="a"
                            className="featured_img"
                          />
                        )}
                      </div>
                      <div className="featCard_bottom">
                        <h3 className="featCard_name">{item.name}</h3>
                        <h4 className="featCard_price">{item.price}$</h4>
                        <div className="featCard_box">
                          <p className="featCard_year">{item.year}</p>
                          <p className="featCard_auto">{item.gearbox.name}</p>
                          <p className="featCard_pet">{item.fuel_sort.name}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="feat_bottom">
            <div className="feat_left">
              <p>Bizga qo'shiling</p>
              <a href="#" className="iconBox">
                <FaFacebookF className="icon" />
              </a>
              <a href="#" className="iconBox">
                <FaTwitter className="icon" />
              </a>
              <a href="#" className="iconBox">
                <FaInstagram className="icon" />
              </a>
            </div>
            <p className="feat_tit">Bizga qo'shiling</p>
            <a href="js/Search">
              <button
                className="Btnbody feat_btn"
                onClick={() => (window.location = "/cars")}
              >
                Mashina topish
              </button>
            </a>
          </div>
        </div>
      ) : (
        <div className="featured">
          <h5 className="featured_info">Удобный выбор</h5>
          <h2 className="featured_title">Избранные объявления</h2>
          <div className="featured_body">
            {cars.map((item, key) => {
              if (key == 0) {
                return (
                  <div
                    className="featured_left"
                    onClick={() => {
                      getData2(cars[0]);
                    }}
                  >
                    <div className="featured_img_size">
                      {item.image.length > 0 ? (
                        <Image
                          width={100}
                          height={100}
                          src={item.image[0].image}
                          alt="a"
                          className="featured_img"
                        />
                      ) : (
                        <Image
                          width={100}
                          height={100}
                          src={car}
                          alt="a"
                          className="featured_img"
                        />
                      )}
                    </div>
                    <div className="featured_bottom">
                      <h3 className="featured_name">{item.name}</h3>
                      <div className="featured_box">
                        <p className="feat_year">{item.year}</p>
                        <p className="feat_auto">{item.gearbox.name}</p>
                        <p className="feat_pet">{item.fuel_sort.name}</p>
                        <p className="feat_p">{item.sale}%</p>
                        <h4 className="feat_price">{item.price}$</h4>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            <div className="featured_right">
              {cars.map((item, key) => {
                if (key > 0 && key <= 4) {
                  return (
                    <div
                      className="feat_card"
                      onClick={() => {
                        getData2(item);
                      }}
                    >
                      <div className="featured_img_size">
                        {item.image.length > 0 ? (
                          <Image
                            width={100}
                            height={100}
                            src={item.image[0].image}
                            alt="a"
                            className="featured_img"
                          />
                        ) : (
                          <Image
                            width={100}
                            height={100}
                            src={car}
                            alt="a"
                            className="featured_img"
                          />
                        )}
                      </div>
                      <div className="featCard_bottom">
                        <h3 className="featCard_name">{item.name}</h3>
                        <h4 className="featCard_price">{item.price}$</h4>
                        <div className="featCard_box">
                          <p className="featCard_year">{item.year}</p>
                          <p className="featCard_auto">{item.gearbox.name}</p>
                          <p className="featCard_pet">{item.fuel_sort.name}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="feat_bottom">
            <div className="feat_left">
              <p>Подписывайтесь на нас</p>
              <a href="#" className="iconBox">
                <FaFacebookF className="icon" />
              </a>
              <a href="#" className="iconBox">
                <FaTwitter className="icon" />
              </a>
              <a href="#" className="iconBox">
                <FaInstagram className="icon" />
              </a>
            </div>
            <p className="feat_tit">Подписывайтесь на нас</p>
            <a href="js/Search">
              <button
                className="Btnbody feat_btn"
                onClick={() => (window.location = "/cars")}
              >
                Найти машину
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
