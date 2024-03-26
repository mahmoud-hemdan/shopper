import React from 'react'
import Topbar from '../Topbar'
import NavbarCart from './NavbarCart'
import HeaderCart from './HeaderCart'
import Cart from './Cart'
import Footer from '../Footer'
import { CartProvider } from 'react-use-cart'

function AllCartPage() {
  return (
    <CartProvider>
      <Topbar/>
      <NavbarCart/>
      <HeaderCart/>
      <Cart/>
      <Footer/>
    </CartProvider>
  )
}

export default AllCartPage
