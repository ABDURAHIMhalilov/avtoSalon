"use client";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/Search.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IoIosCloseCircle } from "react-icons/io";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import Head from "next/head";
import Stack from "@mui/material/Stack";
import "../../app/globals.css";
export default function Search() {
  const [model, setModel] = React.useState([]);
  const [selectModel, setSelectModel] = React.useState("");
  const [series, setSeries] = React.useState([]);
  const [selectSeries, setSelectSeries] = React.useState("");
  const [position, setPosition] = React.useState([]);
  const [selectPosition, setSelectPosition] = React.useState("");
  const [fuelsort, setFuelsort] = React.useState([]);
  const [selectFuelsort, setSelectFuelsort] = React.useState("");
  const [gearBox, setGearBox] = React.useState([]);
  const [selectGearBox, setSelectGearBox] = React.useState("");
  const [garant, setgarant] = React.useState([]);
  const [selectgarant, setSelectgarant] = React.useState("");
  const [branch, setBranch] = React.useState([]);
  const [selectBranch, setSelectBranch] = React.useState("");
  const [makes, setMakes] = React.useState([]);
  const [year, setYear] = React.useState("");
  const [mincount, setmincount] = React.useState("");
  const [maxcount, setmaxcount] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [countpag, setCountpag] = React.useState(1);
  const [languange, setlanguange] = React.useState();
  const [search, setSearch] = React.useState("");
  const abbasFilter = (
    model1,
    seria1,
    position1,
    gearBox1,
    fuelsort1,
    garant1,
    branch1,
    year1,
    mincount1,
    maxcount1
  ) => {
    var pushdata = [];
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
          res.data.map((item) => {
            if (
              (model1 != "" ? item.position.series.model.id === model1 : true) &&
              (seria1 != "" ? item.position.series.id === seria1 : true) &&
              (position1 != "" ? item.position.id === position1 : true) &&
              (branch1 != "" ? item.branch.id === branch1 : true) &&
              (fuelsort1 != "" ? item.fuel_sort.id === fuelsort1 : true) &&
              (gearBox1 != "" ? item.gearbox.id === gearBox1 : true) &&
              (garant1 != "" ? item.garant.id === garant1 : true) &&
              (year1 != "" ? item.year === year1 * 1 : true) &&
              (mincount1 != "" ? (sessionStorage.getItem("valuta") === "sum" ? (item.sum_price-(item.sum_price * item.sale) / 100) : (item.price-(item.price * item.sale) / 100)) >= mincount1 * 1 : true) &&
              (maxcount1 != "" ? (sessionStorage.getItem("valuta") === "sum" ? (item.sum_price-(item.sum_price * item.sale) / 100) : (item.price-(item.price * item.sale) / 100)) <= maxcount1 * 1 : true)
            ) {
              pushdata.push(item);
            }
          })
          setCountpag(Math.floor(pushdata.length / 12) + 1);
          setMakes(pushdata);
        });
      });
  };
  const handleChange = (event, value) => {
    setPage(value);
    console.log(value, "Sd");
  };
  const handleModel = (event) => {
    if (event.target.value < 1) {
      sessionStorage.setItem("model", -1);
    } else {
      sessionStorage.setItem("model", event.target.value);
    }
    sessionStorage.setItem("series", -1);
    sessionStorage.setItem("position", -1);
    abbasFilter(
      event.target.value,
      "",
      "",
      selectGearBox,
      selectFuelsort,
      selectgarant,
      selectBranch,
      year,
      mincount,
      maxcount
    );
    setSelectModel(event.target.value);
    axios
      .get(
        `https://api.baracar.uz/api/${
          localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
        }/series_get/`
      )
      .then((res) => {
        const search = res.data.filter(
          (item) => item.model.id === event.target.value
        );
        setSeries(search);
        setSelectSeries("");
        setSelectPosition("");
        setPosition([]);
      });
  };
  const search1 = () => {
    document.querySelector(".mobile_search").style = "display:none";
  };
  const handleSeries = (event) => {
    setSelectSeries(event.target.value);
    sessionStorage.setItem("series", event.target.value);
    if (event.target.value < 1) {
      sessionStorage.setItem("series", -1);
      sessionStorage.setItem("position", -1);
      setSelectPosition(-1);
    } else {
      sessionStorage.setItem("series", event.target.value);
    }
    axios
      .get(
        `https://api.baracar.uz/api/${
          localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
        }/position_get/`
      )
      .then((res2) => {
        const search2 = res2.data.filter(
          (item) => item.series.id === event.target.value
        );
        setSelectPosition("");
        if ((event.target.value = "")) {
          setPosition([]);
        } else {
          setPosition(search2);
        }
      });
    abbasFilter(
      parseInt(sessionStorage.getItem("model")),
      event.target.value,
      "",
      selectGearBox,
      selectFuelsort,
      selectgarant,
      selectBranch,
      year,
      mincount,
      maxcount
    );
  };
  const handlePosition = (event) => {
    setSelectPosition(event.target.value);
    if (event.target.value < 1) {
      sessionStorage.setItem("position", -1);
    } else {
      sessionStorage.setItem("position", event.target.value);
    }

    var position = parseInt(sessionStorage.getItem("position"));
    abbasFilter(
      parseInt(sessionStorage.getItem("model")),
      parseInt(sessionStorage.getItem("series")),
      position != null && position * 1 != -1 ? position : "",
      selectGearBox,
      selectFuelsort,
      selectgarant,
      selectBranch,
      year,
      mincount,
      maxcount
    );
  };
  const handleFuelsort = (event) => {
    setSelectFuelsort(event.target.value);
    var model = parseInt(sessionStorage.getItem("model"));
    var series = parseInt(sessionStorage.getItem("series"));
    var position = parseInt(sessionStorage.getItem("position"));
    abbasFilter(
      model != null && model * 1 != -1 ? model : "",
      series != null && series * 1 != -1 ? series : "",
      position != null && position * 1 != -1 ? position : "",
      selectGearBox,
      event.target.value,
      selectgarant,
      selectBranch,
      year,
      mincount,
      maxcount
    );
  };
  const handleGearBox = (event) => {
    setSelectGearBox(event.target.value);
    var model = parseInt(sessionStorage.getItem("model"));
    var series = parseInt(sessionStorage.getItem("series"));
    var position = parseInt(sessionStorage.getItem("position"));
    abbasFilter(
      model != null && model * 1 != -1 ? model : "",
      series != null && series * 1 != -1 ? series : "",
      position != null && position * 1 != -1 ? position : "",
      event.target.value,
      selectFuelsort,
      selectgarant,
      selectBranch,
      year,
      mincount,
      maxcount
    );
  };
  const handlegarant = (event) => {
    setSelectgarant(event.target.value);
    var model = parseInt(sessionStorage.getItem("model"));
    var series = parseInt(sessionStorage.getItem("series"));
    var position = parseInt(sessionStorage.getItem("position"));
    abbasFilter(
      model != null && model * 1 != -1 ? model : "",
      series != null && series * 1 != -1 ? series : "",
      position != null && position * 1 != -1 ? position : "",
      selectGearBox,
      selectFuelsort,
      event.target.value,
      selectBranch,
      year,
      mincount,
      maxcount
    );
  };
  const handleBranch = (event) => {
    setSelectBranch(event.target.value);
    var model = parseInt(sessionStorage.getItem("model"));
    var series = parseInt(sessionStorage.getItem("series"));
    var position = parseInt(sessionStorage.getItem("position"));
    abbasFilter(
      model != null && model * 1 != -1 ? model : "",
      series != null && series * 1 != -1 ? series : "",
      position != null && position * 1 != -1 ? position : "",
      selectGearBox,
      selectFuelsort,
      selectgarant,
      event.target.value,
      year,
      mincount,
      maxcount
    );
  };
  function handleyear(id) {
    setYear(id.target.value);
    var model = parseInt(sessionStorage.getItem("model"));
    var series = parseInt(sessionStorage.getItem("series"));
    var position = parseInt(sessionStorage.getItem("position"));
    abbasFilter(
      model != null && model * 1 != -1 ? model : "",
      series != null && series * 1 != -1 ? series : "",
      position != null && position * 1 != -1 ? position : "",
      selectGearBox,
      selectFuelsort,
      selectgarant,
      selectBranch,
      id.target.value,
      mincount,
      maxcount
    );
  }
  function minChange(id) {
    setmincount(id.target.value);
    var model = parseInt(sessionStorage.getItem("model"));
    var series = parseInt(sessionStorage.getItem("series"));
    var position = parseInt(sessionStorage.getItem("position"));
    abbasFilter(
      model != null && model * 1 != -1 ? model : "",
      series != null && series * 1 != -1 ? series : "",
      position != null && position * 1 != -1 ? position : "",
      selectGearBox,
      selectFuelsort,
      selectgarant,
      selectBranch,
      year,
      id.target.value,
      maxcount
    );
  }
  function maxChange(id) {
    setmaxcount(id.target.value);
    var model = parseInt(sessionStorage.getItem("model"));
    var series = parseInt(sessionStorage.getItem("series"));
    var position = parseInt(sessionStorage.getItem("position"));
    abbasFilter(
      model != null && model * 1 != -1 ? model : "",
      series != null && series * 1 != -1 ? series : "",
      position != null && position * 1 != -1 ? position : "",
      selectGearBox,
      selectFuelsort,
      selectgarant,
      selectBranch,
      year,
      mincount,
      id.target.value
    );
  }
  function getData(key) {
    console.log(key);
    localStorage.setItem("oneproduct", JSON.stringify(key));
    window.location = "/js/Bmw8";
  }
  const handleInputChange = (event) => {
    setSearch(event.target.value);
    const searchRegex = new RegExp(`^${event.target.value}`, "i");
    axios.get(`https://api.baracar.uz/api/${localStorage.getItem("lang") ? (localStorage.getItem("lang")) : "ru"}/cars_get/`).then(res => {
      axios.get(`https://api.baracar.uz/api/images/`).then((res1) => {
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].image = []
          for (let j = 0; j < res1.data.length; j++) {
            if (res.data[i].id == res1.data[j].car) {
              res.data[i].image.push(res1.data[j])
            }
          }
        }
        const searchdata = res.data.filter((item) => {
          return (
            searchRegex.test(item.name) ||
            searchRegex.test(item.position.name) ||
            searchRegex.test(item.position.series.name) ||
            searchRegex.test(item.position.series.model.name) ||
            searchRegex.test(item.branch.name) ||
            searchRegex.test(item.year) ||
            searchRegex.test(item.price - (item.price * item.sale) / 100)||
            searchRegex.test(item.sum_price - (item.sum_price * item.sale) / 100)
          );
        })
        setCountpag(Math.floor(searchdata.length / 12) + 1)
        setMakes(searchdata)

      })



    })

  };
  const openModal2 = () => {
    document.querySelector(".mobile_search").style = "display:block";
  };
  const closeModal2 = () => {
    document.querySelector(".mobile_search").style = "display:none";
  };
  useEffect(() => {
    setSelectModel(sessionStorage.getItem("model"));
    setSelectSeries(sessionStorage.getItem("series"));
    setSelectPosition(sessionStorage.getItem("position"));
    setlanguange(localStorage.getItem("lang"));
    var dataAA = parseInt(sessionStorage.getItem("model"));
    var dataAA2 = parseInt(sessionStorage.getItem("series"));
    var dataAA3 = parseInt(sessionStorage.getItem("position"));
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

          setMakes(res.data);
          setCountpag(Math.floor(res.data.length / 10) + 1);
        });
      })
      .catch((err) => {
        console.log(err, "salom");
      });

    axios
      .get(
        `https://api.baracar.uz/api/${
          localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
        }/models/`
      )
      .then((res) => {
        setModel(res.data);
        axios
          .get(
            `https://api.baracar.uz/api/${
              localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
            }/series_get/`
          )
          .then((res2) => {
            if (dataAA < 1) {
              setSeries(res2.data);
            } else {
              const search = res2.data.filter(
                (item) =>
                  item.model.id === parseInt(sessionStorage.getItem("model"))
              );
              setSeries(search);
              setSelectSeries(sessionStorage.getItem("series"));

              setPosition([]);
            }
            axios
              .get(
                `https://api.baracar.uz/api/${
                  localStorage.getItem("lang")
                    ? localStorage.getItem("lang")
                    : "ru"
                }/position_get/`
              )
              .then((res3) => {
                setPosition(res3.data);
                if (dataAA2 < 1) {
                  setPosition(res3.data);
                } else {
                  const search2 = res3.data.filter(
                    (item) =>
                      item.series.id ===
                      parseInt(sessionStorage.getItem("series"))
                  );

                  setPosition(search2);
                }
                axios
                  .get(
                    `https://api.baracar.uz/api/${
                      localStorage.getItem("lang")
                        ? localStorage.getItem("lang")
                        : "ru"
                    }/fuel_sort/`
                  )
                  .then((res4) => {
                    setFuelsort(res4.data);
                    axios
                      .get(
                        `https://api.baracar.uz/api/${
                          localStorage.getItem("lang")
                            ? localStorage.getItem("lang")
                            : "ru"
                        }/gear_box/`
                      )
                      .then((res5) => {
                        setGearBox(res5.data);
                        axios
                          .get(
                            `https://api.baracar.uz/api/${
                              localStorage.getItem("lang")
                                ? localStorage.getItem("lang")
                                : "ru"
                            }/garant/`
                          )
                          .then((res6) => {
                            setgarant(res6.data);
                            axios
                              .get(
                                `https://api.baracar.uz/api/${
                                  localStorage.getItem("lang")
                                    ? localStorage.getItem("lang")
                                    : "ru"
                                }/branch/`
                              )
                              .then((res7) => {
                                setBranch(res7.data);
                              });
                          });
                      });
                  });
              });
          });
      });

    var model = parseInt(sessionStorage.getItem("model"));
    var series = parseInt(sessionStorage.getItem("series"));
    var position = parseInt(sessionStorage.getItem("position"));
    abbasFilter(
      model != null && model * 1 != -1 ? model : "",
      series != null && series * 1 != -1 ? series : "",
      position != null && position * 1 != -1 ? position : "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );
  }, []);

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
      <Navbar />
      <div className="search_top">
        <div className="search_top_body">
          <Box>
            <FormControl className="inpsearch">
              <InputLabel id="demo-simple-select-label">
                {languange === "ru" ? "Модель" : "Model"}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectModel}
                label="Model"
                onChange={handleModel}
              >
                <MenuItem value="">
                  {languange === "ru" ? "Все" : "Hammasi"}
                </MenuItem>
                {model.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className="inpsearch">
              <InputLabel id="demo-simple-select-label">
                {languange === "ru" ? "Серия" : "Seriya"}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectSeries}
                label="Series"
                onChange={handleSeries}
              >
                <MenuItem value="">
                  {languange === "ru" ? "Все" : "Hammasi"}
                </MenuItem>

                {series.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className="inpsearch">
              <InputLabel id="demo-simple-select-label">
                {languange === "ru" ? "Позиция" : "Pozitsiya"}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectPosition}
                label="Position"
                onChange={handlePosition}
              >
                {/* <MenuItem value="">{languange==="ru"?("Все"):("Hammasi")}</MenuItem> */}
                {position.map((item) => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className="inpsearch">
              <InputLabel id="demo-simple-select-label">
                {languange === "ru" ? "Тип топливы" : "Yoqilg'i turi"}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectFuelsort}
                label="fuel_sort"
                onChange={handleFuelsort}
              >
                <MenuItem value="">
                  {languange === "ru" ? "Все" : "Hammasi"}
                </MenuItem>
                {fuelsort.map((item) => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
          <Box className="inp11">
            <FormControl className="inpsearch">
              <InputLabel id="demo-simple-select-label">
                {languange === "ru" ? "Коробка передач" : "Uzatish qutisi"}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectGearBox}
                label="Gear Box"
                onChange={handleGearBox}
              >
                <MenuItem value="">
                  {languange === "ru" ? "Все" : "Hammasi"}
                </MenuItem>
                {gearBox.map((item) => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
          <div className="boxPrice">
            <input
              type="text"
              className="searchInp priceInp1"
              placeholder={languange === "ru" ? "Мин. цена" : "Minimal narx"}
              onKeyUp={minChange}
            />
            <input
              type="text"
              className="searchInp priceInp2"
              placeholder={languange === "ru" ? "Макс. цена" : "Maksimal narx"}
              onKeyUp={maxChange}
            />
          </div>
          <Box className="inp10">
            <FormControl className="inpsearch">
              <InputLabel id="demo-simple-select-label">
                {languange === "ru" ? "Гарантия" : "Kafolat"}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectgarant}
                label="Garant"
                onChange={handlegarant}
              >
                <MenuItem value="">
                  {languange === "ru" ? "Все" : "Hammasi"}
                </MenuItem>
                {garant.map((item) => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className="inpsearch">
              <InputLabel id="demo-simple-select-label">
                {languange === "ru" ? "Филиал" : "Filial"}{" "}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectBranch}
                label="Branch"
                onChange={handleBranch}
              >
                {branch.map((item) => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
          <Box></Box>
          <Box className="inp9">
            <FormControl className="inpsearch">
              <input
                className="searchInp input_year"
                type="text"
                min="1900"
                max="2100"
                minLength="4"
                onKeyUp={handleyear}
                placeholder={languange === "ru" ? "Год" : "Yil"}
              />
            </FormControl>
          </Box>
        </div>
        <button className="btnOpen" onClick={() => openModal2()}>
          {languange === "ru" ? "Фильтр" : "Filtr"}
        </button>
        <div className="mobile_search">
          <div className="mobile_top">
            <h2>{languange === "ru" ? "Фильтеры" : "Filtrlar"}</h2>
            <IoIosCloseCircle className="closeModalMob" onClick={closeModal2} />
          </div>
          <div className="mobile_body">
            <Box className="searchBox">
              <FormControl className="inpsearch2">
                <InputLabel id="demo-simple-select-label">
                  {languange === "ru" ? "Модель" : "Model"}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectModel}
                  onChange={handleModel}
                >
                  <MenuItem value="">
                    {languange === "ru" ? "Все" : "Hammasi"}
                  </MenuItem>
                  {model.map((item) => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box className="searchBox">
              <FormControl className="inpsearch2">
                <InputLabel id="demo-simple-select-label">
                  {languange === "ru" ? "Серия" : "Seriya"}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectSeries}
                  label="Series"
                  onChange={handleSeries}
                >
                  <MenuItem value="">
                    {languange === "ru" ? "Все" : "Hammasi"}
                  </MenuItem>
                  {series.map((item) => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box className="searchBox">
              <FormControl className="inpsearch2">
                <InputLabel id="demo-simple-select-label">
                  {languange === "ru" ? "Позиция" : "Lavozim"}{" "}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectPosition}
                  label="Position"
                  onChange={handlePosition}
                >
                  {position.map((item) => {
                    return <MenuItem value={item.id}>{item.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box className="searchBox">
              <FormControl className="inpsearch2">
                <InputLabel id="demo-simple-select-label">
                  {languange === "ru" ? "Тип Топливы" : "Yoqilg'i turi"}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectFuelsort}
                  label="fuel_sort"
                  onChange={handleFuelsort}
                >
                  <MenuItem value="">
                    {languange === "ru" ? "Все" : "Hammasi"}
                  </MenuItem>
                  {fuelsort.map((item) => {
                    return <MenuItem value={item.id}>{item.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box className="searchBox">
              <FormControl className="inpsearch2">
                <InputLabel id="demo-simple-select-label">
                  {languange === "ru" ? "Коробка передач" : "Uzatish qutisi"}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectGearBox}
                  label="Gear Box"
                  onChange={handleGearBox}
                >
                  <MenuItem value="">
                    {languange === "ru" ? "Все" : "Hammasi"}
                  </MenuItem>
                  {gearBox.map((item) => {
                    return <MenuItem value={item.id}>{item.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Box>
            <div className="boxPrice boxprice2">
              <input
                type="text"
                className="searchInp priceInp1"
                placeholder={languange === "ru" ? "Мин. цена" : "Minimal narx"}
                onKeyUp={minChange}
              />
              <input
                type="text"
                className="searchInp priceInp2"
                placeholder={
                  languange === "ru" ? "Макс. цена" : "Maksimal narx"
                }
                onKeyUp={maxChange}
              />
            </div>
            <Box className="searchBox">
              <FormControl className="inpsearch2">
                <InputLabel id="demo-simple-select-label">
                  {languange === "ru" ? "Гарантия" : "Kafolat"}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectgarant}
                  // label='Mileage'
                  onChange={handlegarant}
                >
                  <MenuItem value="">
                    {languange === "ru" ? "Все" : "Hammasi"}
                  </MenuItem>
                  {garant.map((item) => {
                    return <MenuItem value={item.id}>{item.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box className="searchBox">
              <FormControl className="inpsearch2">
                <InputLabel id="demo-simple-select-label">
                  {languange === "ru" ? "Филиал" : "Filial"}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectBranch}
                  // label='Drive'
                  onChange={handleBranch}
                >
                  {branch.map((item) => {
                    return <MenuItem value={item.id}>{item.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Box>

            <FormControl className="inpsearch2" id="inp1">
              <input
                className="searchInp input_year"
                type="text"
                min="1900"
                max="2100"
                minLength="4"
                placeholder={languange === "ru" ? "Год" : "Yil"}
                onKeyUp={handleyear}
              />
            </FormControl>

            <button onClick={() => search1()} className="btnSearch">
              {languange === "ru" ? "Поиск" : "Qidirmoq"}
            </button>
          </div>
        </div>
      </div>
      <div className="search_body">
        <div className="body_top">
          <div className="div12" id="div12"></div>
          <div className="div12"></div>
          <h2>{languange === "ru" ? "Результаты" : "Natijalar"}</h2>
          <Box>
            <FormControl id="inpsearch" className="inpsearch">
              <input
                className="searchInp input_year"
                id="input_year"
                type="text"
                min="1900"
                max="2100"
                minLength="4"
                onChange={handleInputChange}
                placeholder={languange === "ru" ? "Поиск" : "Qidiruv"}
              />
            </FormControl>
          </Box>
        </div>

        <div className="result_wrapper">
          {makes.map((item, key) => {
            if (key > (page - 1) * 12 - 1 && key < page * 12) {
              return (
                <div
                  key={key}
                  onClick={() => getData(item)}
                  className="feat_card2"
                >
                  <div id="corner-ribbon">
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
                            {item.sale == 0 ? "" : `${item.sale}%`}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src={
                      item.image[0] != undefined
                        ? item.image[0].image
                        : "https://demo.vehica.com/wp-content/uploads/2020/08/2-4-670x372.jpg"
                    }
                    alt="no img"
                  />
                  <div className="featCard_bottom">
                    <div className="feat-cardorab">
                      <h3 className="featCard_name">{item.name}</h3>
                      <del>
                        {item.sale == 0
                          ? ""
                          : sessionStorage.getItem("valuta") === "sum"
                          ? `${item.sum_price}${languange === "ru" ? "сум" : "sum"}`
                          : sessionStorage.getItem("valuta") === "dollar"
                          ? `${item.price}$`
                          : `${item.price}$`}
                      </del>
                    </div>
                    <h4 className="featCard_price">
                      {sessionStorage.getItem("valuta") === "sum"
                        ? `${
                            item.sum_price - (item.sum_price * item.sale) / 100
                          }${languange === "ru" ? "сум" : "sum"}`
                        : sessionStorage.getItem("valuta") === "dollar"
                        ? `${item.price - (item.price * item.sale) / 100}$`
                        : `${item.price - (item.price * item.sale) / 100}$`}
                    </h4>
                    <div className="featCard_box">
                      <p className="featCard_year">{item.year}</p>
                      <p className="featCard_auto">{item.gearbox.name}</p>
                      <p className="featCard_pet">{item.fuel_sort.name}</p>
                      {/* ${localStorage.getItem("lang") ? (localStorage.getItem("lang")) : "ru"} */}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <Stack spacing={2}>
          <Pagination
            style={{ marginBottom: "50px" }}
            count={countpag}
            page={page}
            onChange={handleChange}
            color="secondary"
          />
        </Stack>
      </div>
      <Footer />
    </div>
  );
}
