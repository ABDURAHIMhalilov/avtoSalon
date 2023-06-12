'use client'
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import '../css/Search.css'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { IoIosCloseCircle } from 'react-icons/io'
import car from "../images/6.jpg"
import Image from "next/image"
import Pagination from '@mui/material/Pagination';
import axios from "axios";
import url from '../js/Host'
import { isTemplateExpression } from 'typescript'

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
export default function Search() {
  // const [position, setPosition] = React.useState('')
  // const [model, setModel] = React.useState('')
  // const [Distance, setDistance] = React.useState('')
  // const [location, setlocation] = React.useState('')
  // const [Type, setType] = React.useState('')
  // const [Mileage, setMileage] = React.useState('')
  // const [Drive, setDrive] = React.useState('')
  // const [Fuel, setFuel] = React.useState('')
  // const [Featur, setFeatur] = React.useState('')
  const [makes, setMakes] = React.useState([])
  const [images, setImages] = React.useState([])
  // const [data1, setdata1] = React.useState([])
  const [page, setPage] = React.useState(1);
  const [countpag, setCountpag] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    console.log(value);
    
  };

//   const handlePosition = (event) => {
//     setPosition(event.target.value);
//     const search = data1.filter((item) => item.position.name.includes(event.target.value));
//     setdata1(search)
//   }
//   const modelSearch = event => {
//     setModel(event.target.value)
//     const search = data1.filter((item) => item.position.series.name.includes(event.target.value));
//     setdata1(search)
//   }
//   const distanceSearch = event => {
//     setDistance(event.target.value)
//     const search = data1.filter((item) => item.position.series.model.name.includes(event.target.value));
//     setdata1(search)
//   }
//   const loacationSearch = event => {
//     setlocation(event.target.value)
//     const search = data1.filter((item) =>item.branch.name.includes(event.target.value));
//     setdata1(search)
//   }
//   const TypeSearch = event => {
//     setType(event.target.value)
//     const search = data1.filter((item) =>item.name.includes(event.target.value));
//     setdata1(search)
//   }
//   const minChange = (event) => {
//   const search = data1.filter((item) =>item.price>event.target.value);
//     setdata1(search)

//   };
//   const maxChange = (event) => {
// if (event.target.value.length>=4) {
//   const search = data1.filter((item) =>item.price<event.target.value);
//   setdata1(search)
//   console.log(search,"dd");
// }
    
//   };
//   const MileageSearch = event => {
//     setMileage(event.target.value)
//     const search = data1.filter((item) =>item.distance.includes(event.target.value));
//     setdata1(search)
//   }
//   const DriveSearch = event => {
//     setDrive(event.target.value)
//     const search = data1.filter((item) =>item.gearbox.name.includes(event.target.value));
//     setdata1(search)
//   }
//   const FuelSearch = event => {
//     setFuel(event.target.value)
//     const search = data1.filter((item) =>item.fuel_sort.name.includes(event.target.value));
//     setdata1(search)
//   }
//   const FeaturSearch = event => {
//     setFeatur(event.target.value)
//     const search = data1.filter((item) =>item.year.includes(event.target.value));
//     setdata1(search)
//   }



  const openModal2 = () => {
    document.querySelector('.mobile_search').classList.add('db')
  }
  const closeModal2 = () => {
    document.querySelector('.mobile_search').classList.remove('db')
  }
  useEffect(() => {
    axios.get(`${url}/api/cars_get/`).then(res => {   
      setCountpag(Math.floor((res.data.length)/10)+1)
//       var cardata=res.data
// axios.get(`${url}/api/images/`).then(res2=>{
// for (let i = 0; i < cardata.length; i++) {
//   for (let j = 0; j < res2.data.length; j++) {
// if(cardata[i].id===res2.data[j].){
//   // chala
// }

//   }

// }
// })
     setMakes(res.data)
    
    }).catch(err => {
      console.log(err, "salom");
    })
    
    // axios.get(`${url}/api/cars_get/`).then(res => {   
    //   setdata1(res.data)
    // }).catch(err => {
    //   console.log(err, "salom");
    // })
  }, [])
  useEffect(() => {
    axios.get(`${url}/api/images/`).then(res => {
      setImages(res.data)
    }).catch(err => {
      console.log(err, "salom");
    })
  }, [])



function getData(key){
console.log(key);
localStorage.setItem("oneproduct",JSON.stringify(key))
window.location="/onecar"
}
  return (
    <div>
      <Navbar />
      <div className='search_top'>
        <div className='search_top_body'>
          <Box>
          <FormControl className='inpsearch'>
      <InputLabel id='demo-simple-select-label'>Position</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        // value={position}
        // onChange={handlePosition}
      >
        {/* {data1.map((item) => (
          <MenuItem key={item.position.name} value={item.position.name}>{item.position.name}</MenuItem>
        ))} */}
      </Select>
    </FormControl>
          </Box>
          <Box>
            <FormControl className='inpsearch'>
              <InputLabel id='demo-simple-select-label'>Series</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={model}
                // label='model'
                // onChange={modelSearch}
              >
                {/* {data1.map(item => {
                  return <MenuItem value={item.position.series.name}>{item.position.series.name}</MenuItem>
                })} */}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className='inpsearch'>
              <InputLabel id='demo-simple-select-label'>Model</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={Distance}
                // label='Distance'
                // onChange={distanceSearch}
              >
                {/* {data1.map(item => {
                  return <MenuItem value={item.position.series.model.name}>{item.position.series.model.name}</MenuItem>
                })} */}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className='inpsearch'>
              <InputLabel id='demo-simple-select-label'>Location</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={location}
                // label='location'
                // onChange={loacationSearch}
              >
                {/* {data1.map(item => {
                  return <MenuItem value={item.branch.name}>{item.branch.name}</MenuItem>
                })} */}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className='inpsearch'>
              <InputLabel id='demo-simple-select-label'>Name</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={Type}
                // label='Type'
                // onChange={TypeSearch}
              >
                {/* {data1.map(item => {
                  return <MenuItem value={item.name}>{item.name}</MenuItem>
                })} */}
              </Select>
            </FormControl>
          </Box>
          <div className='boxPrice'>
            <input
              type='text'
              className='searchInp priceInp1'
              placeholder='Min Price'
              // onChange={minChange}
              
            />
            <input
              type='text'
              className='searchInp priceInp2'
              placeholder='Max Price'
              // onChange={maxChange}
            />
          </div>
          <Box>
            <FormControl className='inpsearch'>
              <InputLabel id='demo-simple-select-label'>Mileage</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={Mileage}
                // label='Mileage'
                // onChange={MileageSearch}
              >
                {/* {data1.map(item => {
                  return <MenuItem value={item.distance}>{item.distance}</MenuItem>
                })} */}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className='inpsearch'>
              <InputLabel id='demo-simple-select-label'>Gearbox</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={Drive}
                // label='Drive'
                // onChange={DriveSearch}
              >
                {/* {data1.map(item => {
                  return <MenuItem value={item.gearbox.name}>{item.gearbox.name}</MenuItem>
                })} */}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className='inpsearch'>
              <InputLabel id='demo-simple-select-label'>Fuel</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={Fuel}
                // label='Fuel'
                // onChange={FuelSearch}
              >
                {/* {data1.map(item => {
                  return <MenuItem value={item.fuel_sort.name}>{item.fuel_sort.name}</MenuItem>
                })} */}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className='inpsearch'>
              <InputLabel id='demo-simple-select-label'>Year</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={Featur}
                // label='Featur'
                // onChange={FeaturSearch}
              >
                {/* {data1.map(item => {
                  return <MenuItem value={item.year}>{item.year}</MenuItem>
                })} */}
              </Select>
            </FormControl>
          </Box>
        </div>
        <button className='btnOpen' onClick={openModal2}>
          Filter
        </button>
        <div className='mobile_search'>
          <div className='mobile_top'>
            <h2>Filters</h2>
            <IoIosCloseCircle className='closeModalMob' onClick={closeModal2} />
          </div>
          <div className='mobile_body'>
            <Box className='searchBox'>
              <FormControl className='inpsearch2'>
                <InputLabel id='demo-simple-select-label'>Make</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  // value={position}
                  // label='Make'
                  // onChange={handlePosition}
                >
                  {makes.map(item => {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box className='searchBox'>
              <FormControl className='inpsearch2'>
                <InputLabel id='demo-simple-select-label'>Model</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  // value={model}
                  // label='model'
                  // onChange={modelSearch}
                >
                  {makes.map(item => {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Box>
            <input
              type='text'
              className='searchInp searchInp2'
              placeholder='Location'
            />
            <Box className='searchBox'>
              <FormControl className='inpsearch2'>
                <InputLabel id='demo-simple-select-label'>Distance</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  // value={Distance}
                  // label='Distance'
                  // onChange={distanceSearch}
                >
                  {makes.map(item => {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box className='searchBox'>
              <FormControl className='inpsearch2'>
                <InputLabel id='demo-simple-select-label'>Type</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  // value={Type}
                  // label='Type'
                  // onChange={TypeSearch}
                >
                  {makes.map(item => {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Box>
            <div className='boxPrice boxprice2'>
              <input
                type='text'
                className='searchInp priceInp1 priceinp'
                placeholder='Min Price'
              />
              <input
                type='text'
                className='searchInp priceInp2 priceinp'
                placeholder='Max Price'
              />
            </div>
            <Box className='searchBox'>
              <FormControl className='inpsearch2'>
                <InputLabel id='demo-simple-select-label'>Mileage</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  // value={Mileage}
                  // label='Mileage'
                  // onChange={MileageSearch}
                >
                  {makes.map(item => {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box className='searchBox'>
              <FormControl className='inpsearch2'>
                <InputLabel id='demo-simple-select-label'>
                  Drive Type
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  // value={Drive}
                  // label='Drive'
                  // onChange={DriveSearch}
                >
                  {makes.map(item => {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box className='searchBox'>
              <FormControl className='inpsearch2'>
                <InputLabel id='demo-simple-select-label'>Fuel</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  // value={Fuel}
                  // label='Fuel'
                  // onChange={FuelSearch}
                >
                  {makes.map(item => {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box className='searchBox'>
              <FormControl className='inpsearch2'>
                <InputLabel id='demo-simple-select-label'>Featured</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  // value={Featur}
                  // label='Featur'
                  // onChange={FeaturSearch}
                >
                  {makes.map(item => {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Box>
            <button className='btnSearch'>Search</button>
          </div>
        </div>
      </div>
      <div className='search_body'>
        <div className="body_top">
          <h2> Results</h2>
          <div className="top_box">
            <p>Sort by:</p>
            <Box className="inpsearch3">
              <FormControl className='inpsearch inpsearch3'>
                <InputLabel id='demo-simple-select-label'>Make</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  // value={position}
                  // label='Make'
                  // onChange={handlePosition}
                >
                  {makes.map(item => {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Box>

          </div>
        </div>        
        <div className="result_wrapper">
          {makes.map((item,key) => {
            return (
              <div key={key} onClick={()=>getData(item)} className='feat_card2'>
                <div>
                  <h1 className="salesale">-{(item).sale}%</h1>
                  <Image src={car} alt='a' className='featured_img' />
                  <div className='featCard_bottom'>
                    <div className='feat-cardorab'><h3 className='featCard_name'>{item.name}</h3><del>{item.price}.sum</del></div>
                    <h4 className='featCard_price'>{item.price-((item.price*item.sale/100).toFixed(0))}.sum</h4>
                    <div className='featCard_box'>
                      <p className='featCard_year'>{item.year}</p>
                      <p className='featCard_auto'>{item.gearbox.name}</p>
                      <p className='featCard_pet'>{item.fuel_sort.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
          <Stack spacing={2}>
      <Pagination count={countpag} page={page} onChange={handleChange} color="secondary"/>
    </Stack>
      </div>
    </div>
  )
}
