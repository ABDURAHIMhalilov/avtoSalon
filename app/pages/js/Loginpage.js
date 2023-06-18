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
import Table from "react-bootstrap/Table";
// import { Select, Space } from "antd";

export default function Loginpage() {
  const [user, setUser] = React.useState([]);
  const [data, setData] = React.useState(1);
  const [manzil, setManzil] = React.useState([]);
  const [ adres, setAdres ] = React.useState([])


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
          if (usernameUs == item.phone || usernameUs == item.username) {
            setUser(item);
            localStorage.setItem("onemen", JSON.stringify(item));
              document.querySelector("#username").value = item.username;
              document.querySelector("#email").value = item.email;
              document.querySelector("#birthday").value = item.birthday;
              document.querySelector("#phone").value = item.phone;
              document.querySelector("#passportNum").value = item.passport_number;
              document.querySelector("#passportSer").value = item.passport_series;
          }
        });
      });

      axios.get(`${url}/auth/adress/`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      }).then(res => {
        console.log(res.data);
        setAdres(res.data)
      })
  }, []);


  function putUser() {
    var data = new FormData();
    data.append("birthday", document.querySelector(".birthday").value);
    data.append("email", document.querySelector(".email").value);
    if (document.querySelector(".image").files[0]) {
      data.append("image", document.querySelector(".image").files[0]);
    }
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
        localStorage.setItem(
          "username",
          document.querySelector(".phone").value
        );
        setTimeout(() => {
          window.location.reload();
        }, 100);
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
    axios
      .post(`${url}/auth/adress/`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        alert("manzil yangilandi");

        setManzil(res.data);
        document.querySelector(".countrySlc").value = res.data.country;
        document.querySelector(".regionSlc").value = res.data.region;
        document.querySelector(".citySlc").value = res.data.city;
        document.querySelector(".districtSlc").value = res.data.district;
        document.querySelector(".streetSlc").value = res.data.street;
      })
      .catch((err) => {
        alert(err);
      });
  }

  function postPassword() {
    var psData = new FormData();
    psData.append("userid", user.id);
    psData.append("phone", user.phone);
    psData.append("old_password", document.querySelector(".oldPassword").value);
    psData.append(
      "new_password",
      document.querySelector(".passwordChange").value
    );
    psData.append(
      "new_password",
      document.querySelector(".restPassword").value
    );
    axios
      .put(`${url}/auth/change_password/`, psData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        alert("Yangilandi");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  }
function connectData() {
  document.querySelector("#username").value = user.username;
  document.querySelector("#email").value = user.email;
  document.querySelector("#birthday").value = user.birthday;
  document.querySelector("#phone").value = user.phone;
  document.querySelector("#passportNum").value = user.passport_number;
  document.querySelector("#passportSer").value = user.passport_series;
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
                setTimeout(() => {
                  connectData()
                }, 10);
              }}
            >
              Account
            </button>
            <button
              onClick={() => {
                localStorage.clear();
                window.location = "/";
              }}
            >
              Sign Out
            </button>
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
              setTimeout(() => {
                connectData()
              }, 10);
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
                        width={200}
                        height={200}
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
                  {/* <div>
                    <h2>Yor adress</h2>
                    <pre>      manzilni kiriting                                     manzilni kiriting</pre>
                    <div className="regionAdd">
                      <input className="countrySlc" id="countrySlc" />
                      <input className="regionSlc" id="regionSlc" />
                    </div>
                    <pre>      manzilni kiriting                                     manzilni kiriting</pre>
                    <div className="regionAdd">
                      <input className="citySlc" id="citySlc" />
                      <input className="districtSlc" id="districtSlc" />
                    </div>
                    <pre>                                      manzilni kiriting                                     </pre>
                    <div className="regionAdd">
                      <input className="streetSlc" id="streetSlc" />
                    </div>
                    <button onClick={() => postAdress()}>click</button>
                  </div> */}
                  {
                    adres.map(item => {
                      return(

                 <div className="divTable">
                  <div className="HeadTable">
                  <h3 className="tableText">addres</h3>
                  <h3 className="tableText">addres</h3>
                  <h3 className="tableText">addres</h3>
                  <h3 className="tableText">addres</h3>
                  <h3 className="tableText">addres</h3>
                  </div>
                  <div className="BodyTable">
                  <h3 className="tableText">{item.country}</h3>
                  <h3 className="tableText">{item.country}</h3>
                  <h3 className="tableText">{item.country}</h3>
                  <h3 className="tableText">{item.country}</h3>
                  <h3 className="tableText">{item.country}</h3>
                  </div>
                 </div>
                      )
                    })
                  }
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
