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

export default function Bmw8() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [user, setUser] = useState(localStorage.getItem("username"));
  const [branchs, setBranchs] = useState([]);
  const [getavto, setAvto] = useState([]);
  const [images, setImages] = useState([]);
  const [cars, setCars] = useState([]);
  const [createData, setcreateData] = useState([]);

  var [data, setData] = useState(
    JSON.parse(localStorage.getItem("oneproduct")?(`${localStorage.getItem("oneproduct")}`):('[]'))
  );
  // var [fav, setFav] = useState(
  //   localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")?(`${localStorage.getItem("fav")}`):('[]')) : []
  // );

  // function getFavorit() {
  //   var push = true;
  //   fav.map(item=> {
  //     if (item.id == data.id) {
  //       push = false;
  //     }
  //   });
  //   if (push) {
  //     fav.push(data);
  //     localStorage.setItem("fav", JSON.stringify(fav));
  //   }
  // }

  function defectOpen() { 
    setcreateData([])
    axios.get(`${url}/api/defect_get/`).then(res=> {
      var a=res.data
      a.map(item=>{
        if (item.car == data.id) {
          createData.push(item);
        }
      });
      setCars(createData)
    });
    document.querySelector(".defectDiv").style = "display: block";
    document.querySelector(".mySwiper").style = "display: none";
    document.querySelector(".mySwiper2").style = "display: none";
  }

  function defectClose() {
    document.querySelector(".defectDiv").style = "display: none";
    document.querySelector(".mySwiper").style = "display: block";
    document.querySelector(".mySwiper2").style = "display: block";
  }

  useEffect(() => {
    // axios
    //   .get(`${url}/api/comment/`, {
    //     headers: {
    //       Authorization: "Bearer " + localStorage.getItem("Token_user"),
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });

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
      var hh = [];
      res.data.map((item) => {
        if (
          data.id != item.id &&
          data.position.series.id == item.position.series.id
        ) {
          hh.push(item);
        }
      });
      setAvto(hh);

      axios
        .get(`${url}/api/images/`)
        .then((res) => {
          setImages(res.data);
        })
        .catch((err) => {
          console.log(err, "salom");
        });
    });
  }, []);
  function getData2(key) {
    console.log(key);
    localStorage.setItem("oneproduct", JSON.stringify(key));
    window.location = "/onecar";
  }

  return (
    <div>
      <Navbar />
      <div className="dffd">
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
              {images.map((item2) => {
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

              {/* <SwiperSlide>
                <img
                  className="s2img"
                  src="https://demo.vehica.com/wp-content/uploads/2020/08/6.jpg"
                />
              </SwiperSlide> */}
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
              {images.map((item2) => {
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
                Add to favorites
              </p>
            </div>
            <div className="oxirkotta">
              <div className="maky">
                {/*<div className="maky1"> <div className="maa">
                    <p>Make:</p>
                    <p>Model:</p>
                    <p>Color:</p>
                    <p>Drive Type:</p>
                    <p>TransColormission:</p>
                    <p>Condition:</p>
                    <p>Year:</p>
                    <p>Fuel Type:</p>
                    <p>Engine Size:</p>
                    <p>Cylinders:</p>
                    <p>VIN:</p>
                  </div>
                  <div className="mn">
                    <p>{data.position.series.model.name}</p>
                    <p>{data.position.series.name}</p>
                    <p>{data.colour}</p>
                    <p>Front Wheel Drive</p>
                    <p>{data.gearbox.name}</p>
                    <p>{data.distance > 2 ? "NEW" : "B/Y"}</p>
                    <p>{data.year}</p>
                    <p>{data.fuel_sort.name}</p>
                    <p>{data.engine}L</p>
                    <p>4</p>
                    <p>{data.id}</p>
                  </div> </div>*/}
                <table style={{ width: "100%", paddingTop: "30px" }}>
                  <tr className="maky1">
                    <th>Make:</th>
                    <td>{data.position.series.model.name}</td>
                  </tr>
                  <tr className="maky1">
                    <th>Model:</th>
                    <td>{data.position.series.name}</td>
                  </tr>
                  <tr className="maky1">
                    <th>Color:</th>
                    <td>{data.colour}</td>
                  </tr>
                  <tr className="maky1">
                    <th>Drive Type:</th>
                    <td>Front Wheel Drive</td>
                  </tr>
                  <tr className="maky1">
                    <th>TransColormission:</th>
                    <td>{data.gearbox.name}</td>
                  </tr>
                  <tr className="maky1">
                    <th>Condition:</th>
                    <td>{data.distance > 2 ? "NEW" : "B/Y"}</td>
                  </tr>
                  <tr className="maky1">
                    <th>Year:</th>
                    <td>{data.year}</td>
                  </tr>
                  <tr className="maky1">
                    <th>Fuel Type:</th>
                    <td>{data.fuel_sort.name}</td>
                  </tr>
                  <tr className="maky1">
                    <th>Engine Size:</th>
                    <td>{data.engine}L</td>
                  </tr>
                  <tr className="maky1">
                    <th>Cylinders:</th>
                    <td>4</td>
                  </tr>
                  <tr className="maky1">
                    <th>VIN:</th>
                    <td>{data.id}</td>
                  </tr>
                </table>
              </div>
              <div className="buttonz1">
                <button className="spend">Send Massage</button>
                <button className="byt">
                  {" "}
                  <span>
                    <HiPhone />{" "}
                  </span>{" "}
                  123 *** *** -reveal
                </button>
                {/* <button className="wat">
                  {" "}
                  <span>
                    <BsWhatsapp />
                  </span>{" "}
                  Chat via WhatsApp
                </button> */}
              </div>
            </div>
          </div>

          <div className="bloksoz">
            <h1>Description</h1>
            <p className="p">
              How the adventure ended will be seen anon. Aouda was anxious,
              though she said nothing. As for <br />
              Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The
              captain had said “between eleven and <br />
              twelve knots,” and the Henrietta confirmed his prediction.
            </p>
            <p className="p1">
              If, then—for there were “ifs” still—the sea did not become too
              boisterous, if the wind did not veer round to the east, if no
              accident happened to the boat or its machinery, the Henrietta
              might cross the three…
            </p>
            <p className="iki">
              From New York to Liverpool in the nine days, between the 12th and
              the 21st of December. It is true that, once arrived, the affair on
              board the Henrietta, added to that of the Bank of England, might
              create more difficulties for Mr. Fogg than he imagined or could
              desire.
            </p>
            <p className="iki1">
              During the first days, they went along smoothly enough. The sea
              was not very unpropitious, the wind seemed stationary in the
              north-east, the sails were hoisted, and the Henrietta ploughed
              across the waves like a real trans-Atlantic steamer.
            </p>
            <h4
              className="show"
              onClick={() => {
                document.querySelector(".p1").classList.toggle("hg");
                document.querySelector(".iki").classList.toggle("hg1");
                document.querySelector(".iki1").classList.toggle("hg1");
              }}
            >
              Show more
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
                <h2>Vehicle history</h2>
                <button>Download report</button>
                <h2 className="mnb">Carfax PayPal</h2>
                <h2 className="nm">
                  Before you decide to buy a car, <br /> read its history for
                  free.
                </h2>
              </div>
              <div className="vaa">
                <h2>
                  Before you decide to buy a car, <br /> read its history for
                  free.
                </h2>
              </div>
              <div className="maa1">
                <img
                  src="https://demo.vehica.com/wp-content/uploads/2020/06/Layer-56.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="lkjh">
            <h1>video</h1>
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
                <h2>Keyless start</h2>
              </div>
              <div className="dum">
                <div className="dumalo"></div>
                <h2>Leather seats</h2>
              </div>
              <div className="dum">
                <div className="dumalo"></div>
                <h2>Navigation System</h2>
              </div>
            </div>
            <div className="bv">
              <div className="dum">
                <div className="dumalo"></div>
                <h2>Reversing camera</h2>
              </div>
              <div className="dum">
                <div className="dumalo"></div>
                <h2>Side airbags</h2>
              </div>
              <div className="dum">
                <div className="dumalo"></div>
                <h2>Traction Control</h2>
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
              Add to favorites
            </p>
          </div>
          <div className="maky">
            <table style={{ width: "100%", paddingTop: "30px" }}>
              <tr className="maky1">
                <th>Make:</th>
                <td>{data.position.series.model.name}</td>
              </tr>
              <tr className="maky1">
                <th>Model:</th>
                <td>{data.position.series.name}</td>
              </tr>
              <tr className="maky1">
                <th>Color:</th>
                <td>{data.colour}</td>
              </tr>
              <tr className="maky1">
                <th>Drive Type:</th>
                <td>Front Wheel Drive</td>
              </tr>
              <tr className="maky1">
                <th>TransColormission:</th>
                <td>{data.gearbox.name}</td>
              </tr>
              <tr className="maky1">
                <th>Condition:</th>
                <td>{data.distance > 2 ? "NEW" : "B/Y"}</td>
              </tr>
              <tr className="maky1">
                <th>Year:</th>
                <td>{data.year}</td>
              </tr>
              <tr className="maky1">
                <th>Fuel Type:</th>
                <td>{data.fuel_sort.name}</td>
              </tr>
              <tr className="maky1">
                <th>Engine Size:</th>
                <td>{data.engine}L</td>
              </tr>
              <tr className="maky1">
                <th>Cylinders:</th>
                <td>4</td>
              </tr>
              <tr className="maky1">
                <th>VIN:</th>
                <td>{data.id}</td>
              </tr>
            </table>
          </div>

          <div className="defectDiv">
            {cars.map((item) => {
               if(item.id != car.id) {
                return(
                  <div className="defectBig">
                  <span onClick={() => defectClose()}>X</span>
                  <div className="deskBg">
                    <center><h1>Bu avtomobil haqida hech qanday ma'lumotlar yo'q!</h1></center>
                  </div>
                  <div className="deskBg2">
                  </div>
                </div>
                )
              }else {

                return (
                  <div className="defectBig">
                  <span onClick={() => defectClose()}>X</span>
                  <div className="deskBg">
                    <img src={item.image1} alt="" />
                  </div>
                  <div className="deskBg2">
                    <img src={item.image2} alt="" />
                    <h1>{item.description}</h1>
                  </div>
                </div>
              );
            }
             
            })}
          </div>

          <div className="buttonz">
            {user ? (
              <button className="spend" onClick={() => defectOpen(data.id)}>
                Description
              </button>
            ) : (
              <a href="/login">
                <button className="spend">Send Massage2</button>
              </a>
            )}
            <button className="byt">
              {" "}
              <span>
                <HiPhone />{" "}
              </span>{" "}
              123 *** *** -reveal
            </button>
            {/* <button className="wat">
              {" "}
              <span>
                <BsWhatsapp />
              </span>{" "}
              Chat via WhatsApp
            </button> */}

            <div className="pas">
              <p>Offer ID #9650</p>
            </div>
          </div>
        </div>
      </div>
      <div className="kjl">
        <div className="mnbc">
          <div className="bnm">
            <div className="gfbvdc">
              <h2>Send message</h2>
              <div className="inps1">
                <div className="inp2">
                  <input placeholder="Name" type="text" />
                  <input placeholder="Email*" type="text" />
                  <input placeholder="Phone" type="text" />
                </div>
              </div>
              <textarea placeholder="Massege*" className="texta"></textarea>
              <select>
                {branchs.map((item) => {
                  return (
                    <option>
                      {item.city} {item.district} {item.street}
                    </option>
                  );
                })}
              </select>
              <div className="buy">
                <button>Send</button>
              </div>
            </div>
            <div className="carf">
              <div className="asda">
                <div className="carf1">
                  <div className="c1">
                    <h2>Ralph Davin</h2>
                    <h3>Customer Advisor</h3>
                    <p>
                      {" "}
                      <span>
                        <MdLocationOn />
                      </span>
                      70 Washington Street
                    </p>
                  </div>
                  <img
                    src="https://demo.vehica.com/wp-content/uploads/2020/10/p1-1-100x100.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="carf2">
                <p>
                  <span>
                    <AiOutlineMail />
                  </span>
                  ralph@vehica.com
                </p>
                <button>
                  <span>
                    <HiPhone />
                  </span>
                  123*** ***-reveal
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
                      src="https://demo.vehica.com/wp-content/uploads/2020/08/2-4-670x372.jpg"
                      alt=""
                    />
                    <h3>
                      {item.name}
                      <br />
                      <h2>${item.price}</h2>
                    </h3>

                    <hr />
                    <div className="miles">
                      <div className="mnb2">{item.year}</div>
                      <div className="mile">160,000 miles</div>
                      <div className="au">Automatic</div>
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
                      src="https://demo.vehica.com/wp-content/uploads/2020/08/2-4-670x372.jpg"
                      alt=""
                    />
                    <h3>
                      {item.name}
                      <br />
                      <h2>${item.price}</h2>
                    </h3>

                    <hr />
                    <div className="miles">
                      <div className="mnb2">{item.year}</div>
                      <div className="mile">160,000 miles</div>
                      <div className="au">Automatic</div>
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
                      src="https://demo.vehica.com/wp-content/uploads/2020/08/2-4-670x372.jpg"
                      alt=""
                    />
                    <h3>
                      {item.name}
                      <br />
                      <h2>${item.price}</h2>
                    </h3>

                    <hr />
                    <div className="miles">
                      <div className="mnb2">{item.year}</div>
                      <div className="mile">160,000 miles</div>
                      <div className="au">Automatic</div>
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
                      src="https://demo.vehica.com/wp-content/uploads/2020/08/2-4-670x372.jpg"
                      alt=""
                    />
                    <h3>
                      {item.name}
                      <br />
                      <h2>${item.price}</h2>
                    </h3>

                    <hr />
                    <div className="miles">
                      <div className="mnb2">{item.year}</div>
                      <div className="mile">160,000 miles</div>
                      <div className="au">Automatic</div>
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

// maktab282
// halilovabdurahim13
