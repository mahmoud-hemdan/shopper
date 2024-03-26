import React from 'react'
import Topbar from '../Topbar'
import Header from './Header'
import ShopDetail from './ShopDetail'
import Product from './Product'
import Footer from '../Footer'
import NavbarDetail from './NavbarDetail'
import { CartProvider } from 'react-use-cart'

function AllDetail() {
  return (
    <CartProvider>
      <Topbar/>
  <NavbarDetail/>
      <Header/>
      <ShopDetail/>
      <Product/>
      <Footer/>
    </CartProvider>
  )
}

export default AllDetail
