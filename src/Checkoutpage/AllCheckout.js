import React from 'react'
import Topbar from '../Topbar'
import NavbarCheck from './NavbarCheck'
import HeaderCheck from './HeaderCheck'
import Checkout from './Checkout'
import Footer from '../Footer'
import { CartProvider } from 'react-use-cart'


function AllCheckout() {
  return (
    <CartProvider>
      <Topbar/>
    <NavbarCheck/>
    <HeaderCheck/>
    <Checkout/>
    <Footer/>
    </CartProvider>
  )
}

export default AllCheckout
