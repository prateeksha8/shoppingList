import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Product from './product'
import ProductPage from './product-page/ProductPage';


const Rout = ({ product, setProduct }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product product={product} setProduct={setProduct} />} />
        <Route path='/product/:productId' element={<ProductPage />} />
      </Routes>

    </>
  )
}

export default Rout