import React from 'react'
import Topbar from '../Topbar'
import Navbar from './Navbar'

import Footer from '../Footer'
import Messgme from './Messgme'
import HeaderPage from './HeaderPage'
import { CartProvider } from 'react-use-cart'

function AllLogin() {
  return (
    <CartProvider>
      <Topbar/>
      <Navbar/>
      <HeaderPage/>
<Messgme/>
<Footer/>
    </CartProvider>
  )
}

export default AllLogin
