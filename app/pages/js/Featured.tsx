import React, { useEffect } from "react";
import Image from "next/image";
import car from "../images/6.jpg";
import "../css/Featured.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import axios from "axios";
import url from "./Host";

export default function Featured() {
  const [cars, setCars] = React.useState([]);
  const [images, setImages] = React.    useState([]);

  const [price, setPrice] = React.useState([]);

  useEffect(() => {
    axios.get(`${url}/api/cars_get/`).then((res) => {
      setCars(res.data);
    });

    axios
      .get(`${url}/api/images/`)
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err, "salom");
      });
  }, []);

  function getData2(key) {
    console.log(key);
    localStorage.setItem("oneproduct", JSON.stringify(key));
    window.location = "/onecar";
  }

  return (
    <div className="featured">
      <h5 className="featured_info">Handy picked</h5>
      <h2 className="featured_title">Featured Listings</h2>
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
                {images.map((item2) => {
                  if (item.id === item2.car) {
                    return (
                      <img src={item2.image} alt="a" className="featured_img" />
                    );
                  } else {
                    return <Image src={car} alt="a" className="featured_img" />;
                  }
                })}{" "}
                <div className="featured_bottom">
                  <h3 className="featured_name">{item.name}</h3>
                  <div className="featured_box">
                    <p className="feat_year">{item.year}</p>
                    <p className="feat_auto">{item.gearbox.name}</p>
                    <p className="feat_pet">{item.fuel_sort.name}</p>
                    <p className="feat_p">{item.sale}%</p>
                    <h4 className="feat_price">{item.price}.sum</h4>
                  </div>
                </div>
              </div>
            );
          } else if (key > 0 && key < 4) {
            return (
              // <div className="featured_right">
              <div
                className="feat_card"
                // onClick={() => {
                //   getData2(cars[1]);
                // }}
              >
                {images.map((item2) => {
                  if (item.id === item2.car) {
                    return (
                      <img src={item2.image} alt="a" className="featured_img" />
                    );
                  } else {
                    return <Image src={car} alt="a" className="featured_img" />;
                  }
                })}
                <div className="featCard_bottom">
                  <h3 className="featCard_name">{item.name}</h3>
                  <h4 className="featCard_price">{item.price}.sum</h4>
                  <div className="featCard_box">
                    <p className="featCard_year">{item.year}</p>
                    <p className="featCard_auto">{item.gearbox.name}</p>
                    <p className="featCard_pet">{item.fuel_sort.name}</p>
                  </div>
                </div>
                {/* </div> */}
              </div>
            );
          }
          // return (
          //   <div className="featured_body">
          //     <div
          //       className="featured_left"
          //       onClick={() => {
          //         getData2(cars[0]);
          //       }}
          //     >
          //       <Image src={car} alt="a" className="featured_img" />
          //       <div className="featured_bottom">
          //         <h3 className="featured_name">{item.name}</h3>
          //         <div className="featured_box">
          //           <p className="feat_year">{item.year}</p>
          //           <p className="feat_auto">{item.gearbox.name}</p>
          //           <p className="feat_pet">{item.fuel_sort.name}</p>
          //           <p className="feat_p">{item.sale}%</p>
          //           <h4 className="feat_price">{item.price}.sum</h4>
          //         </div>
          //       </div>
          //     </div>
          //     <div className="featured_right">
          //       <div
          //         className="feat_card"
          //         onClick={() => {
          //           getData2(cars[1]);
          //         }}
          //       >
          //         <Image src={car} alt="a" className="featured_img" />
          //         <div className="featCard_bottom">
          //           <h3 className="featCard_name">{item.name}</h3>
          //           <h4 className="featCard_price">{item.price}.sum</h4>
          //           <div className="featCard_box">
          //             <p className="featCard_year">{item.year}</p>
          //             <p className="featCard_auto">{item.gearbox.name}</p>
          //             <p className="featCard_pet">{item.fuel_sort.name}</p>
          //           </div>
          //         </div>
          //       </div>
          //       <div
          //         className="feat_card"
          //         onClick={() => {
          //           getData2(cars[2]);
          //         }}
          //       >
          //         <Image src={car} alt="a" className="featured_img" />
          //         <div className="featCard_bottom">
          //           <h3 className="featCard_name">{item.name}</h3>
          //           <h4 className="featCard_price">{item.price}</h4>
          //           <div className="featCard_box">
          //             <p className="featCard_year">{item.year}</p>
          //             <p className="featCard_auto">{item.gearbox.name}</p>
          //             <p className="featCard_pet">{item.fuel_sort.name}</p>
          //           </div>
          //         </div>
          //       </div>
          //       <div
          //         className="feat_card"
          //         onClick={() => {
          //           getData2(cars[3]);
          //         }}
          //       >
          //         <Image src={car} alt="a" className="featured_img" />
          //         <div className="featCard_bottom">
          //           <h3 className="featCard_name">{item.name}</h3>
          //           <h4 className="featCard_price">{item.price}</h4>
          //           <div className="featCard_box">
          //             <p className="featCard_year">{item.year}</p>
          //             <p className="featCard_auto">{item.gearbox.name}</p>
          //             <p className="featCard_pet">{item.fuel_sort.name}</p>
          //           </div>
          //         </div>
          //       </div>
          //       <div
          //         className="feat_card"
          //         onClick={() => {
          //           getData2(cars[4]);
          //         }}
          //       >
          //         <Image src={car} alt="a" className="featured_img" />
          //         <div className="featCard_bottom">
          //           <h3 className="featCard_name">{item.name}</h3>
          //           <h4 className="featCard_price">{item.price}</h4>
          //           <div className="featCard_box">
          //             <p className="featCard_year">{item.year}</p>
          //             <p className="featCard_auto">{item.gearbox.name}</p>
          //             <p className="featCard_pet">{item.fuel_sort.name}</p>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //     <div className="mobileFeat_card">
          //       <div className="feat_card">
          //         <Image src={car} alt="a" className="featured_img" />
          //         <div className="featCard_bottom">
          //           <h3 className="featCard_name">
          //             BMW 8-serie 2-door coupe grey
          //           </h3>
          //           <h4 className="featCard_price">$4000</h4>
          //           <div className="featCard_box">
          //             <p className="featCard_year">2021</p>
          //             <p className="featCard_auto">Automatic</p>
          //             <p className="featCard_pet">Petrol</p>
          //           </div>
          //         </div>
          //       </div>
          //       <div className="feat_card">
          //         <Image src={car} alt="a" className="featured_img" />
          //         <div className="featCard_bottom">
          //           <h3 className="featCard_name">
          //             BMW 8-serie 2-door coupe grey
          //           </h3>
          //           <h4 className="featCard_price">$4000</h4>
          //           <div className="featCard_box">
          //             <p className="featCard_year">2021</p>
          //             <p className="featCard_auto">Automatic</p>
          //             <p className="featCard_pet">Petrol</p>
          //           </div>
          //         </div>
          //       </div>
          //       <div className="feat_card">
          //         <Image src={car} alt="a" className="featured_img" />
          //         <div className="featCard_bottom">
          //           <h3 className="featCard_name">
          //             BMW 8-serie 2-door coupe grey
          //           </h3>
          //           <h4 className="featCard_price">$4000</h4>
          //           <div className="featCard_box">
          //             <p className="featCard_year">2021</p>
          //             <p className="featCard_auto">Automatic</p>
          //             <p className="featCard_pet">Petrol</p>
          //           </div>
          //         </div>
          //       </div>
          //       <div className="feat_card">
          //         <Image src={car} alt="a" className="featured_img" />
          //         <div className="featCard_bottom">
          //           <h3 className="featCard_name">
          //             BMW 8-serie 2-door coupe grey
          //           </h3>
          //           <h4 className="featCard_price">$4000</h4>
          //           <div className="featCard_box">
          //             <p className="featCard_year">2021</p>
          //             <p className="featCard_auto">Automatic</p>
          //             <p className="featCard_pet">Petrol</p>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // );
        })}
      </div>
      <div className="feat_bottom">
        <div className="feat_left">
          <p>Follow Us</p>
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
        <p className="feat_tit">Follow Us</p>
        <button
          className="Btnbody feat_btn"
          onClick={() => (window.location = "/cars")}
        >
          View News
        </button>
      </div>
    </div>
  );
}
