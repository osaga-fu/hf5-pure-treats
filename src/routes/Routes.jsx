import React from 'react'
import { Routes, Route }  from 'react-router-dom'
import Home from '../views/Home'
import ProductList from '../views/productlist'
import Cart from '../views/Cart'

const Routes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/productlist' element={<ProductList/>}/>
    <Route path='/cart' element={<Cart/>}/>
</Routes>    
  )
}

export default Routes