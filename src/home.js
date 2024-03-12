import React, { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaEuroSign } from "react-icons/fa";
import { LuPercent } from "react-icons/lu";
import { GiMoneyStack } from "react-icons/gi";
import { CiPhone } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import Homeproduct from './homeproduct';
import './home.css'

const Home = () => {
    
  return (
    <>
     <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>the best notebook collection 2024</h2>
                <Link to ='/product' className='link'>Shop Now <FaArrowRight /></Link>
                
            </div>
            <div className='img_box'>
            <img src='./img/slidder-1.png' alt='sliderimg'></img>
            </div>
        </div>
     </div>
     <div className='product_type'>
        <div className='container'>
            <div className='box'>
            <div className='img_box'>
                <img src='./img/hp-1.png' alt='HP'></img>
            </div>
            <div className='detail'>
                <p> 3 products</p>
            </div>
            </div>
            <div className='box'>
            <div className='img_box'>
                <img src='./img/dell-1.png' alt='DELL'></img>
            </div>
            <div className='detail'>
                <p> 3 products</p>
            </div>
            </div>
            <div className='box'>
            <div className='img_box'>
                <img src='./img/leovo-1.png' alt='Lenovo'></img>
            </div>
            <div className='detail'>
                <p> 3 products</p>
            </div>
            </div>
            <div className='box'>
            <div className='img_box'>
                <img src='./img/asus-1.png' alt='Asus'></img>
            </div>
            <div className='detail'>
                <p> 3 products</p>
            </div>
            </div>
        </div>
     </div>
     <div className='about'>
        <div className='container'>
        <div className='box'>
        <div className='icon'>
        <FaTruckFast />
        </div>
         <div className='detail'>
            <h3>Free shipping</h3>
            <p>Oder above 1000 euros</p>
         </div>
        </div>
        <div className='box'>
        <div className='icon'>
            <FaEuroSign />
        </div>
        <div className='detail'>
            <h3>Return & Refund</h3>
            <p>Money Back Gaurenty</p>
         </div>
        </div>
        <div className='box'>
        <div className='icon'>
        <LuPercent />
        </div>
        <div className='detail'>
            <h3>Memebership discount</h3>
            <p>on every order</p>
         </div>
         </div>
         <div className='box'>
        <div className='icon'>
        <CiPhone />
        </div>
        <div className='detail'>
            <h3>Customer Support</h3>
            <p>24 * 7 Support</p>
           </div>
         </div>
        </div>
        </div>
        <div className='product'>
            <h2>Top Products</h2>
        <div className='container'>
            {
                Homeproduct.map((curElm) =>
                {
                    return(
                    
                         <div className='box' key={curElm.id}>
                          <div className='img_box'>
                            <img src={curElm.Img} alt={curElm.Tittle}></img>
                            <div className='icon'>
                                <li><CiShoppingCart /></li>
                                <li><GoHeart /></li>
                                 </div>
                          </div>
                          <div className='detail'>
                            <p>{curElm.cat}</p>
                            <h3>{curElm.Tittle}</h3>
                            <h4>{curElm.Price}</h4>
                         </div>
                         </div>
                     )
                })
            }
        
        </div>
        </div>
        <div className='banner'>
            <div className='container'>
                
            
            <div className='detail'>
                <h4>MAC</h4>
                <h3>Apple 2024 13 Inch MacBook Air Laptop</h3>
                <p>€ 1,249.00</p>
                <Link to='/product' className='link'>Shop Now  <FaArrowRight /></Link>
            </div>
            <div className='img_box'>
            <img src='./img/mac-1.png' alt='sliderimg'></img>
            </div>
            </div>
        </div>
    </>
  )
}

export default Home