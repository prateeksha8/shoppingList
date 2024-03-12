import React, {useState} from 'react'
import Nav from './nav'
import Rout from './rout';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';
import Productdetail from './productdetails';
const App =()=> {
  const[product, setProduct]=useState(Productdetail) 
  const searchbtn = (product) =>
  {
       const change = Productdetail.filter((x) =>
       {
        return x.cat ===product
       })
       setProduct(change)
  }
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn ={searchbtn}/>
        <Rout product={product} setProduct={setProduct}/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App