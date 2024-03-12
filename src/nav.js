import React, { useState } from 'react'

import { FaTruckMoving } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { FaShoppingBag } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
import { MdLogin } from 'react-icons/md';
import { MdLogout } from "react-icons/md";
import { Link } from  'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css'

const Nav = ({searchbtn}) => {
    const [search, setSearch]=useState()
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className='free'>
            <div className='icon'>
            <FaTruckMoving />
            </div>  
             <p>Free shipping when shopping upto €1000</p>
        </div>
        <div className='main_header'>
            <div className='container'>
                <div className='logo'>
                    <img src ='./img/logo1.svg' alt='logo'></img>
                </div>
                <div className='search_box'>
                    <input type='text' value={search} placeholder='Search your Product....' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
                    <button onClick={() => searchbtn(search)}>Search</button>
                    </div>
                <div className='icon'>
                    {
                        isAuthenticated &&
                        (
                            <div className='account'>
                            <div className='user_icon'>
                            <CiUser />
                            </div>
                            <p>Hello, {user .name}</p> 
                        </div>
                        )
                    }
                    
                    <div className='second_icon'>
                        <Link to="/" className='link'><CiHeart /></Link>
                        <Link to="/cart" className='link'><FaShoppingBag /></Link>  
                    </div>
                </div>
            </div>
        </div>
        <div className='header'>
            <div className='container'>
                <div className='nav'>
                <ul>
                    <li>
                    <Link to ='/' className='link'>Home</Link>
                    </li>
                    <li>
                    <Link to ='/product' className='link'>Product</Link>
                    </li>
                    <li>
                    <Link to ='/about' className='link'>About</Link>
                    </li>
                    <li>
                    <Link to ='/contact' className='link'>Contact</Link>
                    </li>
                    
                </ul>
                <div className='auth'>
                    {
                        isAuthenticated ?
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><MdLogout /></button>
                        :
                        <button onClick={() => loginWithRedirect()}><MdLogin /></button>
                    }
                    

                    

                </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default Nav