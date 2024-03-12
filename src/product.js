import React from 'react'
import Productdetail from './productdetails'
import { CiShoppingCart } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import './product.css'
const Product = ({product, setProduct}) => {
    const filterproduct = (product) =>
    {
        const update = Productdetail.filter((x) =>
        {
            return x.cat === product;
        })
        setProduct(update)
    }
    const AllProducts = () =>
    {
        setProduct(Productdetail)
    }

  return (
    <>
    
    <div className='products'>
    <h2># Products</h2>
    <p>Home . products</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>categories</h3>
                    <ul>
                    <li onClick={() =>AllProducts ()}>All Products</li>
                        <li onClick={() =>filterproduct("Asus")}>Asus</li>
                        <li onClick={() =>filterproduct("DELL")}>DELL</li>
                        <li onClick={() =>filterproduct("HP")}>HP</li>
                        <li onClick={() =>filterproduct("Lenovo")}>Lenovo</li>
                        <li onClick={() =>filterproduct("Mac")}>Mac</li>
                    </ul>
                </div>
            </div>
              <div className='productbox'>
                <div className='contant'>
                    {
                        product.map((curElm)=>
                        {
                            return (
                                <>
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

                                </>
                            )
                        })
                    }
                </div>
              </div>
        </div>
    </div>
    </>
  )
}

export default Product