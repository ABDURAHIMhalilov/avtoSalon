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
  const [cars, setCars] = React.useState([
        {
            "id": 38,
            "position": {
                "id": 8,
                "name": "salom",
                "series": {
                    "id": 1,
                    "name": "nexiya",
                    "model": {
                        "id": 2,
                        "name": "Chevrolet"
                    }
                }
            },
            "fuel_sort": {
                "id": 19,
                "name": "benzin"
            },
            "gearbox": {
                "id": 10,
                "name": "Avtomat"
            },
            "garant": {
                "id": 12,
                "name": "10 yil",
                "time": 1
            },
            "branch": {
                "id": 6,
                "name": "Yashnabod branch",
                "country": "Uzbekistan",
                "region": "Toshkent",
                "city": "Toshkent",
                "district": "Yashnabod",
                "street": "Mohinur ko'chasi"
            },
            "name": "aabu",
            "initial_price": 100000.0,
            "price": 20000.0,
            "sale": 10.0,
            "depozit": 12.0,
            "fuel_consumption": 12.0,
            "year": 2008,
            "distance": 1000.0,
            "engine": 20.0,
            "colour": "red",
            "views": 1,
            "description": "yoqmadi musr",
            "time_create": "2023-06-05T11:46:42.093685Z",
            "time_update": "2023-06-06T15:27:41.311173Z",
            "is_active": true
        },
        {
            "id": 37,
            "position": {
                "id": 3,
                "name": "gentra",
                "series": {
                    "id": 2,
                    "name": "lacetti",
                    "model": {
                        "id": 2,
                        "name": "Chevrolet"
                    }
                }
            },
            "fuel_sort": {
                "id": 4,
                "name": "gaz"
            },
            "gearbox": {
                "id": 2,
                "name": "mexanik"
            },
            "garant": {
                "id": 11,
                "name": "10 yil",
                "time": 1
            },
            "branch": {
                "id": 6,
                "name": "Yashnabod branch",
                "country": "Uzbekistan",
                "region": "Toshkent",
                "city": "Toshkent",
                "district": "Yashnabod",
                "street": "Mohinur ko'chasi"
            },
            "name": "Abbas",
            "initial_price": 1.0,
            "price": 1.0,
            "sale": 1.0,
            "depozit": 1.0,
            "fuel_consumption": 1.0,
            "year": 1,
            "distance": 11.0,
            "engine": 1.0,
            "colour": "1",
            "views": 1,
            "description": "salom men zo'r bolaman",
            "time_create": "2023-06-05T11:46:42.046941Z",
            "time_update": "2023-06-06T15:29:10.434679Z",
            "is_active": true
        },
    
        {
            "id": 43,
            "position": {
                "id": 9,
                "name": "2-positsiya",
                "series": {
                    "id": 7,
                    "name": "malibu",
                    "model": {
                        "id": 2,
                        "name": "Chevrolet"
                    }
                }
            },
            "fuel_sort": {
                "id": 6,
                "name": "elektr"
            },
            "gearbox": {
                "id": 2,
                "name": "mexanik"
            },
            "garant": {
                "id": 13,
                "name": "4 yil",
                "time": 1
            },
            "branch": {
                "id": 5,
                "name": "Chilanzar branch",
                "country": "Uzbekistan",
                "region": "Tashkent",
                "city": "Tashkent",
                "district": "Chilanzar",
                "street": "Ulugbek 12"
            },
            "name": "SALOM",
            "initial_price": 10000.0,
            "price": 10000.0,
            "sale": 60.0,
            "depozit": 10.0,
            "fuel_consumption": 11.0,
            "year": 2023,
            "distance": 10.0,
            "engine": 111.0,
            "colour": "red",
            "views": 6,
            "description": "111",
            "time_create": "2023-06-07T10:40:18.019343Z",
            "time_update": "2023-06-07T10:40:18.019358Z",
            "is_active": true
        }, {

        "id": 44,
        "position": {
            "id": 3,
            "name": "gentra",
            "series": {
                "id": 2,
                "name": "lacetti",
                "model": {
                    "id": 2,
                    "name": "Chevrolet"
                }
            }
        },
        "fuel_sort": {
            "id": 4,
            "name": "gaz"
        },
        "gearbox": {
            "id": 2,
            "name": "mexanik"
        },
        "garant": {
            "id": 11,
            "name": "10 yil",
            "time": 1
        },
        "branch": {
            "id": 6,
            "name": "Yashnabod branch",
            "country": "Uzbekistan",
            "region": "Toshkent",
            "city": "Toshkent",
            "district": "Yashnabod",
            "street": "Mohinur ko'chasi"
        },
        "name": "qwdqqew2",
        "initial_price": 10000.0,
        "price": 10000.0,
        "sale": 30.0,
        "depozit": 10.0,
        "fuel_consumption": 11.0,
        "year": 2022,
        "distance": 100.0,
        "engine": 20.0,
        "colour": "red",
        "views": 1111,
        "description": "1",
        "time_create": "2023-06-07T10:41:35.620711Z",
        "time_update": "2023-06-07T10:41:35.620724Z",
        "is_active": true
        }, {

          "id": 44,
          "position": {
              "id": 3,
              "name": "gentra",
              "series": {
                  "id": 2,
                  "name": "lacetti",
                  "model": {
                      "id": 2,
                      "name": "Chevrolet"
                  }
              }
          },
          "fuel_sort": {
              "id": 4,
              "name": "gaz"
          },
          "gearbox": {
              "id": 2,
              "name": "mexanik"
          },
          "garant": {
              "id": 11,
              "name": "10 yil",
              "time": 1
          },
          "branch": {
              "id": 6,
              "name": "Yashnabod branch",
              "country": "Uzbekistan",
              "region": "Toshkent",
              "city": "Toshkent",
              "district": "Yashnabod",
              "street": "Mohinur ko'chasi"
          },
          "name": "qwdqqew2",
          "initial_price": 10000.0,
          "price": 10000.0,
          "sale": 30.0,
          "depozit": 10.0,
          "fuel_consumption": 11.0,
          "year": 2022,
          "distance": 100.0,
          "engine": 20.0,
          "colour": "red",
          "views": 1111,
          "description": "1",
          "time_create": "2023-06-07T10:41:35.620711Z",
          "time_update": "2023-06-07T10:41:35.620724Z",
          "is_active": true
          }
    ]
)    

  const [price, setPrice] = React.useState([]);

  function getData2(key){
    console.log(key);
    localStorage.setItem("oneproduct",JSON.stringify(key))
    window.location="/onecar"
    }


  return (
    <div className="featured">
      <h5 className="featured_info">Handy picked</h5>
      <h2 className="featured_title">Featured Listings</h2>
      <div className="featured_body">
        <div className="featured_left" onClick={()=>{getData2(cars[0])}}>
          <Image src={car} alt="a" className="featured_img" />
          <div className="featured_bottom">
            <h3 className="featured_name">{cars[0].name}</h3>
            <div className="featured_box">
              <p className="feat_year">{cars[0].year}</p>
              <p className="feat_auto">{cars[0].gearbox.name}</p>
              <p className="feat_pet">{cars[0].fuel_sort.name}</p>
              <p className="feat_p">{cars[0].sale}%</p>
              <h4 className="feat_price">{price}.sum</h4> 
            </div>
          </div>
        </div>
        <div className="featured_right">
          <div className="feat_card" onClick={()=>{getData2(cars[1])}}>
            <Image src={car} alt="a" className="featured_img" />
            <div className="featCard_bottom">
              <h3 className="featCard_name">{cars[1].name}</h3>
              <h4 className="featCard_price">{cars[1].price}.sum</h4>
              <div className="featCard_box">
                <p className="featCard_year">{cars[1].year}</p>
                <p className="featCard_auto">{cars[1].gearbox.name}</p>
                <p className="featCard_pet">{cars[1].fuel_sort.name}</p>
              </div>
            </div>
          </div>
          <div className="feat_card" onClick={()=>{getData2(cars[2])}}>
            <Image src={car} alt="a" className="featured_img" />
            <div className="featCard_bottom">
              <h3 className="featCard_name">{cars[2].name}</h3>
              <h4 className="featCard_price">{cars[2].price}</h4>
              <div className="featCard_box">
              <p className="featCard_year">{cars[2].year}</p>
              <p className="featCard_auto">{cars[2].gearbox.name}</p>
              <p className="featCard_pet">{cars[2].fuel_sort.name}</p>
              </div>
            </div>
          </div>
          <div className="feat_card" onClick={()=>{getData2(cars[3])}}>
            <Image src={car} alt="a" className="featured_img" />
            <div className="featCard_bottom">
              <h3 className="featCard_name">{cars[3].name}</h3>
              <h4 className="featCard_price">{cars[3].price}</h4>
              <div className="featCard_box">
              <p className="featCard_year">{cars[3].year}</p>
              <p className="featCard_auto">{cars[3].gearbox.name}</p>
              <p className="featCard_pet">{cars[3].fuel_sort.name}</p>
              </div>
            </div>
          </div>
            <div className="feat_card" onClick={()=>{getData2(cars[4])}}>
                <Image src={car} alt="a" className="featured_img" />
                <div className="featCard_bottom">
                <h3 className="featCard_name">{cars[4].name}</h3>
                <h4 className="featCard_price">{cars[4].price}</h4>
                <div className="featCard_box">
                <p className="featCard_year">{cars[4].year}</p>
              <p className="featCard_auto">{cars[4].gearbox.name}</p>
              <p className="featCard_pet">{cars[4].fuel_sort.name}</p>
                </div>
                </div>
            </div>
        </div>
        <div className="mobileFeat_card">
          <div className="feat_card">
            <Image src={car} alt="a" className="featured_img" />
            <div className="featCard_bottom">
              <h3 className="featCard_name">BMW 8-serie 2-door coupe grey</h3>
              <h4 className="featCard_price">$4000</h4>
              <div className="featCard_box">
                <p className="featCard_year">2021</p>
                <p className="featCard_auto">Automatic</p>
                <p className="featCard_pet">Petrol</p>
              </div>
            </div>
          </div>
          <div className="feat_card">
            <Image src={car} alt="a" className="featured_img" />
            <div className="featCard_bottom">
              <h3 className="featCard_name">BMW 8-serie 2-door coupe grey</h3>
              <h4 className="featCard_price">$4000</h4>
              <div className="featCard_box">
                <p className="featCard_year">2021</p>
                <p className="featCard_auto">Automatic</p>
                <p className="featCard_pet">Petrol</p>
              </div>
            </div>
          </div>
          <div className="feat_card">
            <Image src={car} alt="a" className="featured_img" />
            <div className="featCard_bottom">
              <h3 className="featCard_name">BMW 8-serie 2-door coupe grey</h3>
              <h4 className="featCard_price">$4000</h4>
              <div className="featCard_box">
                <p className="featCard_year">2021</p>
                <p className="featCard_auto">Automatic</p>
                <p className="featCard_pet">Petrol</p>
              </div>
            </div>
          </div>
          <div className="feat_card">
            <Image src={car} alt="a" className="featured_img" />
            <div className="featCard_bottom">
              <h3 className="featCard_name">BMW 8-serie 2-door coupe grey</h3>
              <h4 className="featCard_price">$4000</h4>
              <div className="featCard_box">
                <p className="featCard_year">2021</p>
                <p className="featCard_auto">Automatic</p>
                <p className="featCard_pet">Petrol</p>
              </div>
            </div>
          </div>
        </div>
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
        <button className="Btnbody feat_btn" onClick={()=>window.location="/cars"} >View News</button>
      </div>
    </div>
  );
}
