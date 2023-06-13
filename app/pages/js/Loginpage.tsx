'use client'
import React, { useEffect } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../css/Loginpage.css';
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineCamera } from 'react-icons/ai'
import url from './Host';
import axios from 'axios';
import { Select, Space } from 'antd';


export default function Loginpage() {

    const [user, setUser] = React.useState([])
    const [data, setData] = React.useState(1)
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
        setData(data + 1)
    }
    const minus = () => {
        if (data > 0) {
            setData(data - 1)
        }
    }
    useEffect(() => {
        var usernameUs = localStorage.getItem('username')
        axios.get(`${url}/auth/users/`, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem("Token_user") } })
            .then(res => {
                res.data.map(item => {
                    if (usernameUs == item.username) {
                        // console.log(item);
                        setUser(item)
                    }
                })
            })
        axios.get(`${url}/auth/change_password/1/`, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem("Token_user") } }).then(res => {
            console.log(res.data)
        })
    }, [])

    function putUser() {
        var iagee = document.querySelector('.image').files[0]

        var data = new FormData()
        data.append('birthday', document.querySelector('.birthday').value)
        data.append('email', document.querySelector('.email').value)
        data.append('image', iagee)
        data.append('passport_number', document.querySelector('.passportNum').value)
        data.append('passport_series', document.querySelector('.passportSer').value)
        data.append('phone', document.querySelector('.phone').value)
        data.append('username', document.querySelector('.username').value)
        axios.put(`${url}/auth/users/${user.id}/`, data, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem("Token_user") } })
            .then(res => {
                alert('yangilandi')
            }).catch(err => {
                alert(err)
            })
        console.log(iagee);

    }


    function postAdress() {
        var data = new FormData()
        data.append('country', document.querySelector('.countrySlc').value)
        data.append('region', document.querySelector('.regionSlc').value)
        data.append('city', document.querySelector('.citySlc').value)
        data.append('district', document.querySelector('.districtSlc').value)
        data.append('street', document.querySelector('.streetSlc').value)
        data.append('user', user.id)
        axios.post(`${url}/auth/adress/`, data, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem( "Token_user") } })
        .then(res => {
            alert('manzil yangilandi', res.data)
        }).catch(err => {
            alert(err)
        })
    }




    return (
        <div>
            <Navbar />
            <div className="katta12">
                <div className="accaunt">
                    <h2>Account</h2>
                    <div id='a1a' className="prof">
                        <input type="file" />
                        <FaUserAlt className='icon12' />
                        <div className="orange">
                            <AiOutlineCamera className='ii' />
                        </div>
                    </div>
                    <div className="buttons11">
                        <button style={data === 3 ? { background: '#ff4605', color: 'white' } : { background: 'white', color: 'black' }} onClick={() => { setData(3); document.querySelector(".all-button").style = "display:none" }}>Favorites</button>
                        <button style={data === 1 ? { background: '#ff4605', color: 'white' } : { background: 'white', color: 'black' }} onClick={() => { setData(1); document.querySelector(".all-button").style = "display:flex" }}>Account</button>
                        <button>Sign Out</button>
                        <div className="prof">
                            <input type="file" />
                            <FaUserAlt className='icon12' />

                        </div>
                    </div>

                </div>
                <div className="all-button">
                    <button style={data === 1 ? { background: '#ff4605', color: 'white' } : { background: 'white', color: 'black' }} onClick={() => { setData(1) }}>Account Details</button>
                    <button style={data === 2 ? { background: '#ff4605', color: 'white' } : { background: 'white', color: 'black' }} onClick={() => { setData(2) }}>Change Password</button>
                    <button style={data === 4 ? { background: '#ff4605', color: 'white' } : { background: 'white', color: 'black' }} onClick={() => { setData(4) }}>Add adress</button>
                </div>
                <div className="katta">
                    {data === 1 ? (<div><div className="accaunt-detailes">
                        <div className="form1">
                            <div className="inputla">
                                <h2>Your contact details</h2>

                                <div className="inputs1">

                                    <div className="input1">
                                        <h2>Name*</h2>
                                        <input type="text" className='username' />
                                        <h2>Phone</h2>
                                        <input type="number" className='phone' />

                                    </div>
                                    <div className="input1">
                                        <h2>Birthday*</h2>
                                        <input type="date" className='birthday' />
                                        <h2>Email</h2>
                                        <input type="text" className='email' />

                                    </div>
                                    {/* 
                                    <div className="input1">
                                        <h2>
                                            Passport_number: </h2>
                                        <input type="text" />
                                        <h2>Email</h2>
                                        <input type="text" />

                                    </div> */}



                                </div>
                                <div className="inputs1">
                                    <div className="input1">
                                        <h2>Passport_number</h2>
                                        <input type="number" className='passportNum' />
                                    </div>
                                    <div className="input1">
                                        <h2>Passport_series</h2>
                                        <input type="number" className='passportSer' />
                                    </div>
                                </div>
                                {/* <div className="check2">
                                    <input id='cb1' type="checkbox" />
                                    <p>WhatsApp (require country code for mobile numbers)</p>
                                </div> */}
                                <div className="inputs111">
                                    {/* <h2>Type</h2> */}
                                    {/* <input type="text" placeholder='Private seller' /> */}

                                    {/* <h2>Description</h2> */}
                                    {/* <textarea id="vv"></textarea> */}
                                    <button onClick={() => putUser()}>Save</button>
                                </div>
                            </div>
                        </div>
                        <div className="profil">
                            <h2>Your photo</h2>
                            <div className="profil1">
                                <input type="file" className='image' />
                                <FaUserAlt className='icon1' />
                            </div>
                            <h2 className='bb1'>Upload profile photo</h2>
                        </div></div>
                    </div>) : <div>{data === 2 ? (<div>
                        <div className='change-password'>
                            <div className="change">
                                <h2>Change password</h2>
                                <div className="inpu1">
                                    <h2>Old Password</h2>
                                    <input type="text" />
                                    <h2>New Password</h2>
                                    <input type="text" />

                                </div><button>Save</button>
                            </div>
                        </div>
                    </div>) :(data===4?(<div className="regionDv">
                                    <h2>Yor adress</h2>
                        <div className='regionAdd'>
                                    {/* <div className="input1"> */}
                                    <select className='countrySlc'>
                                        <option>Yashnobod</option>
                                        <option>Yunsobod</option>
                                        <option>Sergeli</option>
                                        <option>Mirzo Ulugbek</option>
                                        <option>ZangiOta</option>
                                        <option>Oqtepa</option>
                                        <option>Bektemir</option>
                                        <option>Mirobod</option>
                                    </select>
                                    <select className='regionSlc'>
                                        <option>Yashnobod</option>
                                        <option>Yunsobod</option>
                                        <option>Sergeli</option>
                                        <option>Mirzo Ulugbek</option>
                                        <option>ZangiOta</option>
                                        <option>Oqtepa</option>
                                        <option>Bektemir</option>
                                        <option>Mirobod</option>
                                    </select> 
                        </div>
                        <div className='regionAdd'>
                                    {/* <div className="input1"> */}
                                    <select className='citySlc'>
                                        <option>Yashnobod</option>
                                        <option>Yunsobod</option>
                                        <option>Sergeli</option>
                                        <option>Mirzo Ulugbek</option>
                                        <option>ZangiOta</option>
                                        <option>Oqtepa</option>
                                        <option>Bektemir</option>
                                        <option>Mirobod</option>
                                    </select>
                                    <select className='districtSlc'>
                                        <option>Yashnobod</option>
                                        <option>Yunsobod</option>
                                        <option>Sergeli</option>
                                        <option>Mirzo Ulugbek</option>
                                        <option>ZangiOta</option>
                                        <option>Oqtepa</option>
                                        <option>Bektemir</option>
                                        <option>Mirobod</option>
                                    </select> 
                        </div>
                        <div className='regionAdd'>
                                    {/* <div className="input1"> */}
                                    <select className='streetSlc'>
                                        <option>Yashnobod</option>
                                        <option>Yunsobod</option>
                                        <option>Sergeli</option>
                                        <option>Mirzo Ulugbek</option>
                                        <option>ZangiOta</option>
                                        <option>Oqtepa</option>
                                        <option>Bektemir</option>
                                        <option>Mirobod</option>
                                    </select>
                        </div>
                        <button onClick={() => postAdress()}>click</button>
                    </div>):(  <div className='ba'>
                        <div className="kok">
                            <center><h1>No Favorites Yet!</h1></center>
                        </div>

                    </div>)
                
                    )} </div>}
                </div>



                {/* <Footer /> */}
            </div>
        </div>
    )
}






// user ?() : ()