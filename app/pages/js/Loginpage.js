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
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { Select, Space } from "antd";

export default function Loginpage() {
  const [user, setUser] = React.useState([]);
  const [data, setData] = React.useState(1);
  const [manzil, setManzil] = React.useState([]);
  const [adress, setAdress] = React.useState([]);
  const [ adresput, setAdresput ] = React.useState([])
  // const [ users, setUsers ] = JSON.parse(localStorage.getItem('onemen'))
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

    var users = JSON.parse(localStorage.getItem("onemen"));

    axios.get(`${url}/auth/adress/`).then((res) => {
      var aa = [];
      res.data.map((item) => {
        if (item.user == users.id) {
          aa.push(item);
        }
      });
      setAdress(aa);
    });
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
        alert("manzil qo'shildi");
        window.location.reload();
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

  function deleteAdress(key) {
    axios
      .delete(`${url}/auth/adress/${key}/`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        alert("deleted");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      }); 
  }

  function editAdres(key) {
    localStorage.setItem('keyAddres', key)
    console.log(key);
    document.querySelector('.adres2Big').style = 'display: flex'
    axios.get(`${url}/auth/adress/${key}/`).then(res => {
      setAdresput(res.data)
      document.querySelector('#countrySlc2').value = res.data.country
      document.querySelector('#regionSlc2').value = res.data.region
      document.querySelector('#citySlc2').value = res.data.city
      document.querySelector('#districtSlc2').value = res.data.district
      document.querySelector('#streetSlc2').value = res.data.street
    })
  }

  function closeditAdres() {
    document.querySelector('.adres2Big').style = 'display: none'
  }

  function editedAdd() {
    var locals = localStorage.getItem('keyAddres')
    var locals2 = JSON.parse(localStorage.getItem('onemen'))
    var data = new FormData()
    data.append('country', document.querySelector('.countrySlc2').value)
    data.append('region', document.querySelector('.regionSlc2').value)
    data.append('city', document.querySelector('.citySlc2').value)
    data.append('district', document.querySelector('.districtSlc2').value)
    data.append('street', document.querySelector('.streetSlc2').value)
    data.append('user', locals2.id)
    axios.put(`${url}/auth/adress/${locals}/`, data,  {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token_user"),
      },
    }).then(res => {
      alert('O`zgartirildi')
    })
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
                  <div className="tableAdres">
                    <div className="minTableA">
                      <h5>country</h5>
                      <h5>region</h5>
                      <h5>city</h5>
                      <h5>district</h5>
                      <h5>street</h5>
                      <h5>Tahrirlash</h5>
                    </div>
                    {adress.map((item) => {
                      return (
                        <div className="minTableA2">
                          <h5>{item.country}</h5>
                          <h5>{item.region}</h5>
                          <h5>{item.city}</h5>
                          <h5>{item.district}</h5>
                          <h5>{item.street}</h5>
                          <h5>
                            <FiEdit
                            style={{cursor: 'pointer'}}
                            onClick={() => editAdres(item.id)} className="fiEdit" />
                            <RiDeleteBin6Line
                            style={{cursor: 'pointer'}}
                            onClick={() => deleteAdress(item.id)}
                              className="riDelete"
                            />
                          </h5>
                        </div>
                      );
                    })}
                  </div>
                  <br />
                  <div className="divAdress">
                    <h2>Manzil Qo'shish</h2>
                    <br />
                    <p>
                      <span>countryni kiriting</span>
                      <span>regionni kiriting</span>
                    </p>
                    <div className="regionAdd">
                      <input className="countrySlc" id="countrySlc" />
                      <input className="regionSlc" id="regionSlc" />
                    </div>
                    <p>
                      <span>cityni kiriting</span>
                      <span>districtni kiriting</span>
                    </p>{" "}
                    <div className="regionAdd">
                      <input className="citySlc" id="citySlc" />
                      <input className="districtSlc" id="districtSlc" />
                    </div>
                    <p>streetni kiriting </p>
                    <div className="regionAdd">
                      <input className="streetSlc" id="streetSlc" />
                    </div>
                    <button onClick={() => postAdress()}>click</button>
                  </div>

                    <div className="adres2Big">
                  <div className="divAdress2">
                  <h2>Manzil Tahrirlash</h2>
                  <br />
                  <p>
                    <span>countryni kiriting</span>
                    <span>regionni kiriting</span>
                  </p>
                  <div className="regionAdd">
                    <input className="countrySlc2" id="countrySlc2" />
                    <input className="regionSlc2" id="regionSlc2" />
                  </div>
                  <p>
                    <span>cityni kiriting</span>
                    <span>districtni kiriting</span>
                  </p>{" "}
                  <div className="regionAdd">
                    <input className="citySlc2" id="citySlc2" />
                    <input className="districtSlc2" id="districtSlc2" />
                  </div>
                  <p>streetni kiriting </p>
                  <div className="regionAdd">
                    <input className="streetSlc2" id="streetSlc2" />
                  </div>
                  <div className="btnddiv">
                  <button onClick={() => closeditAdres()}>Close</button>
                  <button onClick={() => editedAdd()}>Save</button>
                  </div>
                  </div>
                  </div>
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
