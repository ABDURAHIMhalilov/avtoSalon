import React from 'react'
import Image from 'next/image'
import logo from '../images/logo.png'
import '../css/Footer.css'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import "../css/Featured.css"

export default function Footer () {
  return (
    <div className='footer'>
      <div className='footer_body'>
        <div className='ff'>
          <a href='/' className='logo'>
            <Image src={logo} width={200} alt='' />
          </a>
          <div className='footer_right'>
            <div className='right_left'>
              <div className='ul ul2'>
                <a href='#' className='li'>
                  <span>•</span> Listings
                </a>
                <a href='#' className='li'>
                  <span>•</span> FAQ
                </a>
                <a href='#' className='li'>
                  <span>•</span> Listings
                </a>
              </div>
              <div className='ul'>
                <a href='#' className='li'>
                  <span>•</span> Listings
                </a>
                <a href='#' className='li'>
                  <span>•</span> FAQ
                </a>
                <a href='#' className='li'>
                  <span>•</span> Listings
                </a>
              </div>
            </div>
            <p className='footer_info'>
              Award-winning, family owned dealership of new and pre-owned
              vehicles with several locations across the city. Lowest prices and
              the best customer service guaranteed.
            </p>
          </div>
        </div>
        <div className='f_right_right'>
          <p className='aaa'>
            Award-winning, family owned dealership of new and pre-owned vehicles
            with several locations across the city. Lowest prices and the best
            customer service guaranteed.
          </p>
          <h2>
            (123) <span>456-78901</span>
          </h2>
          <p>support@vehica.com</p>
          <p>West 12th Street</p>
          <p>New York, NY, USA</p>
        </div>
        <div className='f_bot'>
          <div className='a_box a'>
            <a href='#' className='a_fff f_mobile'>
              Home
            </a>
          </div>
          <div className='a_box a'>
            <a href='#' className='a_fff f_mobile'>
              Search
            </a>
          </div>
          <div className='a_box a'>
            <a href='#' className='a_fff f_mobile'>
              Listing
            </a>
          </div>
          <div className='a_box a'>
            <a href='#' className='a_fff f_mobile'>
              Pages
            </a>
          </div>
          <div className='a_box a'>
            <a href='#' className='a_fff f_mobile'>
              More
            </a>
          </div>
        </div>
      </div>
      <div className='footer_bottom'>
        <p className='privacy'>
          Copyright © 2021. All rights reserved. <a href='#!'>Privacy Policy</a>
        </p>
        <div className='feat_left'>
          <a href='#' className='iconBox icon2'>
            <FaFacebookF className='icon' />
          </a>
          <a href='#' className='iconBox icon2'>
            <FaTwitter className='icon' />
          </a>
          <a href='#' className='iconBox icon2'>
            <FaInstagram className='icon' />
          </a>
        </div>
      </div>
    </div>
  )
}
