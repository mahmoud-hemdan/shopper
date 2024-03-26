import React from 'react'
import Topbar from '../Topbar'
import HeaderPage from './HeaderPage'
import Navbar from './Navbar'
import Contact from './Contact'
import Footer from '../Footer'
import { CartProvider } from 'react-use-cart'

function AllContact() {
  return (
    <CartProvider>
      <Topbar/>
     <Navbar/>
      <HeaderPage/>
      <Contact/>
      <Footer/>
    </CartProvider>
  )
}

export default AllContact
