"use client";
import React, { Component, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/Loginpage.css";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineCamera } from "react-icons/ai";
import axios from "axios";
import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../../app/globals.css";
import Table from "react-bootstrap/Table";
// import { Select, Space } from "antd";

export default function Loginpage() {
  const [user, setUser] = React.useState([]);
  const [data, setData] = React.useState(1);
  const [manzil, setManzil] = React.useState([]);
  const [adress, setAdress] = React.useState([]);
  const [adresput, setAdresput] = React.useState([]);
  const [state, setState] = React.useState();
  const [loader, setLoader] = React.useState(2);
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

  useEffect(() => {
    var lang = localStorage.getItem("lang");
    setState(lang ? lang : "ru");
  }, []);

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
    setLoader(1);

    axios
      .get(`https://api.baracar.uz/auth/users/`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        setLoader(1);
        setTimeout(() => {
          document.querySelector("#til").value = state;
          setLoader(1);

          res.data.map((item) => {
            if (usernameUs == item.phone || usernameUs == item.username) {
              setUser(item);
              localStorage.setItem("onemen", JSON.stringify(item));
              document.querySelector("#username").value = item.username;
              document.querySelector("#email").value = item.email;
              document.querySelector("#birthday").value = item.birthday;
              document.querySelector("#phone").value = item.phone;
              document.querySelector("#passportNum").value =
                item.passport_number;
              document.querySelector("#passportSer").value =
                item.passport_series;
            }
          });
        }, 1000);
      });
    axios.get(`https://api.baracar.uz/auth/adress/`).then((res1) => {
      setLoader(1);
      var oneUser = JSON.parse(localStorage.getItem("onemen"));
      var aa = [];
      res1.data.map((item) => {
        if (item.user == oneUser.id) {
          aa.push(item);
        }
        setAdress(aa);
      });
      // var aa = [];
      // res1.data.map((item) => {
      //   if (item.user == oneUser.id) {
      //     aa.push(item);
      //   }
      // });
      // setAdress(aa);
    });
  }, []);

  function userOb() {
    var usernameUs = localStorage.getItem("username");
    setLoader(1);

    axios
      .get(`https://api.baracar.uz/auth/users/`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        setLoader(1);
        setTimeout(() => {
          document.querySelector("#til").value = state;
          setLoader(1);

          res.data.map((item) => {
            if (usernameUs == item.phone || usernameUs == item.username) {
              setUser(item);
              localStorage.setItem("onemen", JSON.stringify(item));
              document.querySelector("#username").value = item.username;
              document.querySelector("#email").value = item.email;
              document.querySelector("#birthday").value = item.birthday;
              document.querySelector("#phone").value = item.phone;
              document.querySelector("#passportNum").value =
                item.passport_number;
              document.querySelector("#passportSer").value =
                item.passport_series;
            }
          });
        }, 1000);
      });
    axios.get(`https://api.baracar.uz/auth/adress/`).then((res1) => {
      setLoader(1);
      var oneUser = JSON.parse(localStorage.getItem("onemen"));
      var aa = [];
      res1.data.map((item) => {
        if (item.user == oneUser.id) {
          aa.push(item);
        }
        setAdress(aa);
      });
      // var aa = [];
      // res1.data.map((item) => {
      //   if (item.user == oneUser.id) {
      //     aa.push(item);
      //   }
      // });
      // setAdress(aa);
    });
  }

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
      .put(`https://api.baracar.uz/auth/users/${user.id}/`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        state === "ru" ? alert("Обновлено") : alert("Yangilandi");
        localStorage.setItem(
          "username",
          document.querySelector(".phone").value
        );
        setTimeout(() => {
          window.location.reload();
        }, 100);
      })
      .catch((err) => {
        state === "ru"
          ? alert("Введите полную информацию!!")
          : alert("Malumotni to'liq kiriting!");
      });
  }

  function postAdress() {
    var oneUser = JSON.parse(localStorage.getItem("onemen"));

    var data = new FormData();
    data.append("country", document.querySelector(".countrySlc").value);
    data.append("region", document.querySelector(".regionSlc").value);
    data.append("city", document.querySelector(".citySlc").value);
    data.append("district", document.querySelector(".districtSlc").value);
    data.append("street", document.querySelector(".streetSlc").value);
    data.append("user", oneUser.id);
    axios
      .post(`https://api.baracar.uz/auth/adress/`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        state === "ru" ? alert("Адрес добавлен") : alert("Manzil qo'shildi");
        window.location.reload();
        setManzil(res.data);
        document.querySelector(".countrySlc").value = res.data.country;
        document.querySelector(".regionSlc").value = res.data.region;
        document.querySelector(".citySlc").value = res.data.city;
        document.querySelector(".districtSlc").value = res.data.district;
        document.querySelector(".streetSlc").value = res.data.street;
      })
      .catch((err) => {
        state === "ru"
          ? alert("Введите полный адрес")
          : alert("Manzilni to'liq kiriting");
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
      .put(`https://api.baracar.uz/auth/change_password/`, psData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        state === "ru" ? alert("Обновлено") : alert("Yangilandi");
        window.location.reload();
      })
      .catch((err) => {
        state === "ru" ? alert("Не удалось отправить") : alert("Yuborilmadi");
      });
  }

  function deleteAdress(key) {
    axios
      .delete(`https://api.baracar.uz/auth/adress/${key}/`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        state === "ru" ? alert("Удален") : alert("O'chirildi");
        window.location.reload();
      })
      .catch((err) => {
        state === "ru" ? alert("Не удалось удалить") : alert("O'chirilmadi");
      });
  }

  function editAdres(key) {
    localStorage.setItem("keyAddres", key);
    console.log(key);
    document.querySelector(".adres2Big").style = "display: flex";
    axios.get(`https://api.baracar.uz/auth/adress/${key}/`).then((res) => {
      setAdresput(res.data);
      document.querySelector("#countrySlc2").value = res.data.country;
      document.querySelector("#regionSlc2").value = res.data.region;
      document.querySelector("#citySlc2").value = res.data.city;
      document.querySelector("#districtSlc2").value = res.data.district;
      document.querySelector("#streetSlc2").value = res.data.street;
    });
  }

  function closeditAdres() {
    document.querySelector(".adres2Big").style = "display: none";
  }

  function editedAdd() {
    var locals = localStorage.getItem("keyAddres");
    var locals2 = JSON.parse(localStorage.getItem("onemen"));
    var data = new FormData();
    data.append("country", document.querySelector(".countrySlc2").value);
    data.append("region", document.querySelector(".regionSlc2").value);
    data.append("city", document.querySelector(".citySlc2").value);
    data.append("district", document.querySelector(".districtSlc2").value);
    data.append("street", document.querySelector(".streetSlc2").value);
    data.append("user", locals2.id);
    axios
      .put(`https://api.baracar.uz/auth/adress/${locals}/`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Token_user"),
        },
      })
      .then((res) => {
        state === "ru" ? alert("Изменена") : alert("O'zgartirildi");
        window.location.reload();
      })
      .catch((err) => {
        state === "ru"
          ? alert("Введите информацию полностью")
          : alert('Ma"lumotni to"liq kiriting');
      });
  }

  return (
    <div>
      {loader === 1 ? (
        <div>
          <Navbar />
          {/* {state==="ru"?(<img src="https://st.depositphotos.com/1575949/1356/v/450/depositphotos_13564006-stock-illustration-russia-flag-butto.jpg" alt="" />):(<img id="pere" src="https://img.freepik.com/premium-vector/uzbekistan-flag-button-round-flag-of-uzbekistan-vector-flag-symbol-colors-and-proportion-correctly_847658-237.jpg?w=826" alt="" />)} */}

          <div className="katta12">
            <div className="accaunt">
              <h2>{state === "ru" ? "Аккаунт" : "Akkaunt"}</h2>
              <div id="a1a" className="prof">
                <input type="file" />
                {user.image == null ? (
                    <FaUserAlt className="icon12" />
                    
                    
                  ) : (
                    <Image
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%", marginLeft: 0 }}
                      src={user.image}
                      alt="no img"
                    />
                    
                  )}
                
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
                    document.querySelector(".all-button").style =
                      "display:none";
                  }}
                >
                  {state === "ru" ? "Избранное" : "Sevimlilar"}
                </button>
                <button
                  style={
                    data === 1
                      ? { background: "#ff4605", color: "white" }
                      : { background: "white", color: "black" }
                  }
                  onClick={() => {
                    setData(1);
                    document.querySelector(".all-button").style =
                      "display:flex";
                  }}
                >
                  {state === "ru" ? "Аккаунт" : "Akkaunt"}
                </button>
                <button
                  onClick={() => {
                    localStorage.clear();
                    window.location = "/";
                  }}
                >
                  {state === "ru" ? "Выход" : "Chiqish"}
                </button>
                <div className="prof">
                  <input type="file" className="image" />
                  {user.image == null ? (
                    <FaUserAlt className="icon12" />
                    
                    
                  ) : (
                    <Image
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%", marginLeft: 0 }}
                      src={user.image}
                      alt="no img"
                    />
                    
                  )}<div className="orange">
                  <AiOutlineCamera className="ii" />
                </div>
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
                  userOb();
                }}
              >
                {state === "ru"
                  ? "Детали учетной записи"
                  : "Hisob tafsilotlari"}
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
                {state === "ru" ? "Изменить пароль" : "Parolni o'zgartirish"}
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
                {state === "ru" ? "Добавить адрес" : "Manzil qo'shish"}
              </button>
            </div>
            <div className="katta">
              {data === 1 ? (
                <div className="mnb">
                  <div className="accaunt-detailes">
                    <div className="form1">
                      <div className="inputla">
                        <h2>
                          {state === "ru"
                            ? "Ваши контактные данные"
                            : "Sizning aloqa ma'lumotlaringiz"}
                        </h2>

                        <div className="inputs1" id="asd">
                          <div className="input1">
                            <h2>{state === "ru" ? "Имя" : "Ism"}</h2>
                            <input
                              type="text"
                              className="username"
                              id="username"
                            />
                            <h2> {state === "ru" ? "Телефон" : "Telefon"}</h2>
                            <input type="number" className="phone" id="phone" />
                          </div>
                          <div className="input1">
                            <h2>
                              {state === "ru"
                                ? "День рождения*"
                                : "Tug'ilgan kun*"}
                            </h2>
                            <input
                              type="date"
                              className="birthday"
                              id="birthday"
                            />
                            <h2>
                              {state === "ru"
                                ? "Электронная почта"
                                : "Elektron pochta"}
                            </h2>
                            <input type="text" className="email" id="email" />
                          </div>
                        </div>
                        <div className="inputs1">
                          <div className="input1">
                            <h2>
                              {state === "ru"
                                ? "Номер паспорта"
                                : "Pasport raqami"}
                            </h2>
                            <input
                              type="number"
                              className="passportNum"
                              id="passportNum"
                            />
                          </div>
                          <div className="input1">
                            <h2>
                              {state === "ru"
                                ? "Паспорт серия"
                                : "Pasport seriya"}
                            </h2>
                            <input
                              type="text"
                              className="passportSer"
                              id="passportSer"
                            />
                          </div>
                        </div>
                        <div className="inputs111">
                          <button onClick={() => putUser()}>
                            {state === "ru" ? "Сохранить" : "Saqlash"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="profil">
                      <h2>
                        {state === "ru" ? "Ваш фото" : "Sizning suratingiz"}
                      </h2>
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
                      <h2 className="bb1">
                        {state === "ru"
                          ? "Загрузить фото профиля"
                          : "Profil rasmini yuklash"}
                      </h2>
                      <h2
                        className="dele1"
                        onClick={() => {
                          localStorage.clear();
                          window.location = "/";
                        }}
                      >
                        {state === "ru"
                          ? "Удалить аккаунт"
                          : "Akkaunt o'chirish"}
                      </h2>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mnb">
                  {data === 2 ? (
                    <div className="mnb">
                      <div className="change-password">
                        <div className="change">
                          <h2>
                            {state === "ru"
                              ? "Изменить пароль"
                              : "Parol o'zgartirish"}
                          </h2>
                          <div className="inpu1">
                            {/* <h2>Phone</h2> */}
                            {/* <input type="number" /> */}
                            <h2>
                              {state === "ru" ? "Старый пароль" : "Eski parol"}
                            </h2>
                            <input className="oldPassword" type="text" />
                            <h2>
                              {" "}
                              {state === "ru" ? "Новый пароль" : "Yangi parol"}
                            </h2>
                            <input className="passwordChange" type="text" />
                            <h2>
                              {state === "ru"
                                ? "Подтвердить новый пароль"
                                : "Yangi parolni tasdiqlash"}
                            </h2>
                            <input className="restPassword" type="text" />
                          </div>
                          <button onClick={() => postPassword()}>
                            {state === "ru" ? "Сохранять" : "Saqlash"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : data === 4 ? (
                    <div id="mlk" className="nmbv">
                      <div className="regionDv">
                        <div className="divAdress">
                          <h2>
                            {state === "ru"
                              ? "Добавить адрес"
                              : "Manzil qo'shish"}
                          </h2>
                          <br />

                          <div className="tableb">
                            <Table
                              striped
                              bordered
                              hover
                              size="sm"
                              className="TableB"
                            >
                              <thead className="minTableB1">
                                <tr>
                                  <th>
                                    {state === "ru" ? "страна" : "mamlakat"}
                                  </th>
                                  <th>
                                    {state === "ru" ? "область" : "viloyat"}
                                  </th>
                                  <th>{state === "ru" ? "город" : "shahar"}</th>
                                  <th>{state === "ru" ? "округ" : "tuman"}</th>
                                  <th>{state === "ru" ? "улица" : "ko'cha"}</th>
                                  <th>
                                    {state === "ru"
                                      ? "Редактирование"
                                      : "Tahrirlash"}
                                  </th>
                                </tr>
                              </thead>

                              {adress.map((item) => {
                                return (
                                  <tbody className="minTableB2">
                                    <tr>
                                      <td>{item.country}</td>
                                      <td>{item.region}</td>
                                      <td>{item.city}</td>
                                      <td>{item.district}</td>
                                      <td>{item.street}</td>
                                      <td>
                                        <FiEdit
                                          style={{ cursor: "pointer" }}
                                          onClick={() => editAdres(item.id)}
                                          className="fiEdit"
                                        />
                                        <RiDeleteBin6Line
                                          style={{ cursor: "pointer" }}
                                          onClick={() => deleteAdress(item.id)}
                                          className="riDelete"
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                );
                              })}
                            </Table>
                          </div>
                          <div className="inpla11">
                            <div className="regionAdd">
                              <div className="in11">
                                <h2>
                                  {state === "ru"
                                    ? "введите страну"
                                    : "mamlakatni kiriting"}
                                </h2>
                                <input className="countrySlc" id="countrySlc" />
                              </div>
                              <div className="in11">
                                <h2>
                                  {state === "ru"
                                    ? "введите область"
                                    : "Viloyatni kiriting"}
                                </h2>
                                <input className="regionSlc" id="regionSlc" />
                              </div>
                            </div>{" "}
                            <div className="regionAdd">
                              <div className="in11">
                                <h2>
                                  {state === "ru"
                                    ? "введите город"
                                    : "shaharni kiriting"}
                                </h2>
                                <input className="citySlc" id="citySlc" />
                              </div>
                              <div className="in11">
                                <h2>
                                  {state === "ru"
                                    ? "введите округ"
                                    : "Tumanni kiriting"}
                                </h2>

                                <input
                                  className="districtSlc"
                                  id="districtSlc"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="regionAdd" id="region1">
                            <div className="in11">
                              <h2>
                                {state === "ru"
                                  ? "введите улицу"
                                  : "ko'changizni kiriting"}{" "}
                              </h2>
                              <input className="streetSlc" id="streetSlc" />
                            </div>
                          </div>

                          <button onClick={() => postAdress()}>
                            {state === "ru" ? "Добавлять" : "Qo'shish"}
                          </button>
                        </div>

                        <div className="adres2Big">
                          <div className="divAdress2">
                            <h2>
                              {" "}
                              {state === "ru"
                                ? "Редактировать Адрес"
                                : "Manzilni Tahrirlash"}
                            </h2>
                            <br />
                            <p></p>
                            <div className="inpla11">
                              <div className="regionAdd">
                                <div className="in11">
                                  <h2>
                                    {state === "ru"
                                      ? "введите страну"
                                      : "mamlakatni kiriting"}
                                  </h2>
                                  <input
                                    className="countrySlc2"
                                    id="countrySlc2"
                                  />
                                </div>
                                <div className="in11">
                                  <h2>
                                    {state === "ru"
                                      ? "введите регион"
                                      : "regio'nni kiriting"}
                                  </h2>
                                  <input
                                    className="regionSlc2"
                                    id="regionSlc2"
                                  />
                                </div>
                              </div>
                              <div className="regionAdd">
                                <div className="in11">
                                  <h2>
                                    {state === "ru"
                                      ? "введите город"
                                      : "shaharni kiriting"}
                                  </h2>
                                  <input className="citySlc2" id="citySlc2" />
                                </div>
                                <div className="in11">
                                  <h2>
                                    {state === "ru"
                                      ? "введите район"
                                      : "rayo'nni kiriting"}
                                  </h2>
                                  <input
                                    className="districtSlc2"
                                    id="districtSlc2"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="regionAdd" id="region1">
                              <div className="in11">
                                <h2>
                                  {state === "ru"
                                    ? "введите улицу"
                                    : "ko'changizni kiriting"}{" "}
                                </h2>
                                <input className="streetSlc2" id="streetSlc2" />
                              </div>
                            </div>
                            <div className="btnddiv">
                              <button onClick={() => closeditAdres()}>
                                {state === "ru" ? "Закрыть" : "Yopish"}
                              </button>
                              <button onClick={() => editedAdd()}>
                                {state === "ru" ? "Сохранить" : "Saqlash"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="ba">
                      <div className="kok">
                        <center>
                          <h1>
                            Избранного пока нет!{state === "ru" ? "" : ""}
                          </h1>
                        </center>
                      </div>
                    </div>
                  )}{" "}
                </div>
              )}
            </div>

            <Footer />
          </div>
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

// user ?() : ()

// className="countrySlc" < 1
// className="regionSlc < 2
// className="citySlc" < 3
// className="districtSlc < 4
// className="streetSlc" < 5
