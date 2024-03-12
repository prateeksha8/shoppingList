import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/logo1.svg' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>Contact Us</p>
                    <div className='icon'>
                        <li><CiFacebook /></li>
                        <li><CiInstagram /></li>
                        <li><FaXTwitter /></li>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Footer