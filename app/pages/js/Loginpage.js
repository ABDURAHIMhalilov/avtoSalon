"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/Loginpage.css";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineCamera } from "react-icons/ai";
import url from "./Host";
import axios from "axios";
import Image from "next/image";
// import { Select, Space } from "antd";

export default function Loginpage() {
  const [user, setUser] = React.useState([]);
  const [data, setData] = React.useState(1);
  const [manzil, setManzil] = React.useState([]);
  // const provinceData = ['Zhejiang', 'Jiangsu'];
  // const cityData = {
  //     Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  //     Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
  // };
  // const [cities, setCities] = useState(cityData[provinceData[0]]);
  // const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  // const handleProvinceChange = (value) => {
  //     setCities(cityData[value]);
  //     setSecondCity(cityData[value][0]);
  // };
  // const onSecondCityChange = (value) => {
  //     setSecondCity(value);
  // };

  const plus = () => {
    setData(data + 1);
  };
  const minus = () => {
    if (data > 0) {
      setData(data - 1);
    }
  };
  useEffect(() => {
    var usernameUs = localStorage.getItem("username");
    axios
      .get(`${url}/auth/users/`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        res.data.map((item) => {
          if (usernameUs == item.phone && usernameUs == item.username) {
            console.log(item, ',l,l,l,l,l,l,l,l');
            setUser(item);
            document.querySelector("#username").value = item.username;
            document.querySelector("#email").value = item.email;
            document.querySelector("#birthday").value = item.birthday;
            document.querySelector("#phone").value = item.phone;
            document.querySelector("#passportNum").value = item.passport_number;
            document.querySelector("#passportSer").value = item.passport_series;
            localStorage.setItem("onemen", JSON.stringify(item));
          }
        });
      });

      // document.querySelector('.').value = manzil.region
      // document.querySelector('.').value = manzil.region
      // document.querySelector('.').value = manzil.region
      // document.querySelector('.').value = manzil.region
      // document.querySelector('.').value = manzil.region
      
      
      
  }, []);

  // useEffect(() => {
  //     document.querySelector(".countrySlc").value = 'manzil.country'
  //     // document.querySelector("#regionSlc").value = manzil.region
  //     // document.querySelector("#citySlc").value = manzil.city
  //     // document.querySelector("#districtSlc").value = manzil.district
  //     // document.querySelector("#streetSlc").value = manzil.street
  // }, [])

  function putUser() {
    // console.log(data);
    var iagee = document.querySelector(".image").files[0];

    var data = new FormData();
    data.append("birthday", document.querySelector(".birthday").value);
    data.append("email", document.querySelector(".email").value);
    data.append("image", iagee);
    data.append(
      "passport_number",
      document.querySelector(".passportNum").value
    );
    data.append(
      "passport_series",
      document.querySelector("#passportSer").value
    );
    data.append("phone", document.querySelector(".phone").value);
    data.append("username", document.querySelector(".username").value);
    axios
      .put(`${url}/auth/users/${user.id}/`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        alert("yangilandi");
        window.location.reload();
      })
      .catch((err) => {
        alert(`Malumotni to'liq kiriting!`);
      });
  }

  function postAdress() {
    var data = new FormData();
    data.append("country", document.querySelector(".countrySlc").value);
    data.append("region", document.querySelector(".regionSlc").value);
    data.append("city", document.querySelector(".citySlc").value);
    data.append("district", document.querySelector(".districtSlc").value);
    data.append("street", document.querySelector(".streetSlc").value);
    data.append("user", user.id);
    axios.post(`${url}/auth/adress/`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        alert("manzil yangilandi");
        console.log();
        // setManzil(res.data);
        // document.querySelector(".countrySlc").value = res.data.country;
        // document.querySelector(".regionSlc").value = res.data.region;
        // document.querySelector(".citySlc").value = res.data.city;
        // document.querySelector(".districtSlc").value = res.data.district;
        // document.querySelector(".streetSlc").value = res.data.street;
      })
      .catch((err) => {
        alert(err);
      });
  }

  function postPassword() {
    var psData = new FormData();
    psData.append("userid", user.id);
    psData.append("phone", user.phone);
    psData.append("old_password", document.querySelector('.oldPassword').value);
    psData.append("new_password", document.querySelector(".passwordChange").value
    );
    psData.append("new_password", document.querySelector(".restPassword").value
    );
    axios
      .put(`${url}/auth/change_password/`, psData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user")
        },
      })
      .then((res) => {
        alert("Yangilandi");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <Navbar />
      <div className="katta12">
        <div className="accaunt">
          <h2>Account</h2>
          <div id="a1a" className="prof">
            <input type="file" />
            <FaUserAlt className="icon12" />
            <div className="orange">
              <AiOutlineCamera className="ii" />
            </div>
          </div>
          <div className="buttons11">
            <button
              style={
                data === 3
                  ? { background: "#ff4605", color: "white" }
                  : { background: "white", color: "black" }
              }
              onClick={() => {
                setData(3);
                document.querySelector(".all-button").style = "display:none";
              }}
            >
              Favorites
            </button>
            <button
              style={
                data === 1
                  ? { background: "#ff4605", color: "white" }
                  : { background: "white", color: "black" }
              }
              onClick={() => {
                setData(1);
                document.querySelector(".all-button").style = "display:flex";
              }}
            >
              Account
            </button>
            <button>Sign Out</button>
            <div className="prof">
              <input type="file" />
              <FaUserAlt className="icon12" />
            </div>
          </div>
        </div>
        <div className="all-button">
          <button
            style={
              data === 1
                ? { background: "#ff4605", color: "white" }
                : { background: "white", color: "black" }
            }
            onClick={() => {
              setData(1);
            }}
          >
            Account Details
          </button>
          <button
            style={
              data === 2
                ? { background: "#ff4605", color: "white" }
                : { background: "white", color: "black" }
            }
            onClick={() => {
              setData(2);
            }}
          >
            Change Password
          </button>
          <button
            style={
              data === 4
                ? { background: "#ff4605", color: "white" }
                : { background: "white", color: "black" }
            }
            onClick={() => {
              setData(4);
            }}
          >
            Add adress
          </button>
        </div>
        <div className="katta">
          {data === 1 ? (
            <div>
              <div className="accaunt-detailes">
                <div className="form1">
                  <div className="inputla">
                    <h2>Your contact details</h2>

                    <div className="inputs1">
                      <div className="input1">
                        <h2>Name*</h2>
                        <input type="text" className="username" id="username" />
                        <h2>Phone</h2>
                        <input type="number" className="phone" id="phone" />
                      </div>
                      <div className="input1">
                        <h2>Birthday*</h2>
                        <input type="date" className="birthday" id="birthday" />
                        <h2>Email</h2>
                        <input type="text" className="email" id="email" />
                      </div>
                    </div>
                    <div className="inputs1">
                      <div className="input1">
                        <h2>Passport_number</h2>
                        <input
                          type="number"
                          className="passportNum"
                          id="passportNum"
                        />
                      </div>
                      <div className="input1">
                        <h2>Passport_series</h2>
                        <input
                          type="text"
                          className="passportSer"
                          id="passportSer"
                        />
                      </div>
                    </div>
                    <div className="inputs111">
                      <button onClick={() => putUser()}>Save</button>
                    </div>
                  </div>
                </div>
                <div className="profil">
                  <h2>Your photo</h2>
                  <div className="profil1">
                    <input type="file" className="image" />
                    {user.image == null ? (
                      <FaUserAlt className="icon1" />
                    ) : (
                      <Image
                        width={100}
                        height={100}
                        src={user.image}
                        alt="no img"
                      />
                    )}
                  </div>
                  <h2 className="bb1">Upload profile photo</h2>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {data === 2 ? (
                <div>
                  <div className="change-password">
                    <div className="change">
                      <h2>Change password</h2>
                      <div className="inpu1">
                        {/* <h2>Phone</h2> */}
                        {/* <input type="number" /> */}
                        <h2>Old Password</h2>
                        <input className="oldPassword" type="text" />
                        <h2>New Password</h2>
                        <input className="passwordChange" type="text" />
                        <h2>Restart New Password</h2>
                        <input className="restPassword" type="text" />
                      </div>
                      <button onClick={() => postPassword()}>Save</button>
                    </div>
                  </div>
                </div>
              ) : data === 4 ? (
                <div className="regionDv">
                  {/* {
                    manzil.map(item => {
                      return ( */}
                  <div>
                    <h2>Yor adress</h2>
                    <pre>      manzilni kiriting                                     manzilni kiriting</pre>
                    <div className="regionAdd">
                      {/* <div className="input1"> */}
                      <input className="countrySlc" id="countrySlc" />
                      <input className="regionSlc" id="regionSlc" />
                    </div>
                    <pre>      manzilni kiriting                                     manzilni kiriting</pre>
                    <div className="regionAdd">
                      {/* <div className="input1"> */}
                      <input className="citySlc" id="citySlc" />
                      <input className="districtSlc" id="districtSlc" />
                    </div>
                    <pre>                                      manzilni kiriting                                     </pre>
                    <div className="regionAdd">
                      {/* <div className="input1"> */}
                      <input className="streetSlc" id="streetSlc" />
                    </div>
                    <button onClick={() => postAdress()}>click</button>
                  </div>
                      {/* )
                    })
                  } */}
                </div>
              ) : (
                <div className="ba">
                  <div className="kok">
                    <center>
                      <h1>No Favorites Yet!</h1>
                    </center>
                  </div>
                </div>
              )}{" "}
            </div>
          )}
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
}

// user ?() : ()

// className="countrySlc" < 1
// className="regionSlc < 2
// className="citySlc" < 3
// className="districtSlc < 4
// className="streetSlc" < 5
