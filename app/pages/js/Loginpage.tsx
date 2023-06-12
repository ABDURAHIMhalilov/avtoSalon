'use client'
import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../css/Loginpage.css';
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineCamera } from 'react-icons/ai'

export default function Loginpage() {


    const [data, setData] = React.useState(1)

    const plus = () => {
        setData(data + 1)
    }
    const minus = () => {
        if (data > 0) {
            setData(data - 1)
        }
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
                        <button style={data === 3 ? { background: '#ff4605', color: 'white' } : { background: 'white', color: 'black' }} onClick={() => { setData(3);document.querySelector(".all-button").style="display:none" }}>Favorites</button>
                        <button style={data === 1 ? { background: '#ff4605', color: 'white' } : { background: 'white', color: 'black' }} onClick={() => { setData(1) ;document.querySelector(".all-button").style="display:flex"  }}>Account</button>
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
                </div>
                <div className="katta">
                    {data === 1 ? (<div><div className="accaunt-detailes">
                        <div className="form1">
                            <div className="inputla">
                                <h2>Your contact details</h2>

                                <div className="inputs1">

                                    <div className="input1">
                                        <h2>Name*</h2>
                                        <input type="text" />
                                        <h2>Phone</h2>
                                        <input type="text" />

                                    </div>

                                    <div className="input1">
                                        <h2>
                                            Location: </h2>
                                        <input type="text" />
                                        <h2>Email</h2>
                                        <input type="text" />

                                    </div>



                                </div>
                                <div className="check2">
                                    <input id='cb1' type="checkbox" />
                                    <p>WhatsApp (require country code for mobile numbers)</p>
                                </div>
                                <div className="inputs111">
                                    <h2>Type</h2>
                                    <input type="text" placeholder='Private seller' />

                                    <h2>Description</h2>
                                    <textarea id="vv"></textarea>
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                        <div className="profil">
                            <h2>Your photo</h2>
                            <div className="profil1">
                                <input type="file" />
                                <FaUserAlt className='icon1' />
                            </div>
                            <h2 className='bb1'>Upload profile photo</h2>
                        </div></div>
                    </div>) : <div>{data===2?(<div>
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
                    </div>):<div className='ba'>
                        <div className="kok">
                            <center><h1>No Favorites Yet!</h1></center>
                        </div>

                    </div>} </div>}
                </div>



                <Footer />
            </div>
        </div>
    )
}