import React from 'react'
import { CartProvider,useCart } from 'react-use-cart';
import { Col, Container, Row } from 'reactstrap';

import Topbar from '../Topbar';
import NavbarShop from '../ShopPage/NavbarShop';
function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
      emptyCart,
      cartTotal,
      totalItems,
    } = useCart();
  
    if (isEmpty) return <h3 className="text-center"> Your cart is empty</h3>;
  
    return (
      <>
        <h2 className="text-center">Cart ({totalUniqueItems})
        <button onClick={()=>emptyCart()} className="btn btn-danger">Delete All</button>
        </h2>
  <Container>
    <Row>
      <Col md="10" className="m-auto">
        <table className="table table-dark text-center mt-3 ">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>quantity</th>
              <th>Price</th>
              <th>Operation</th>
            </tr>
          </thead>
  
          <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td><img src={item.images[0]} style={{width:"70px",height:"70px"}}></img></td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price*item.quantity}</td>
              <td>
              <button
                
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                className="btn btn-warning"
              >
                -
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                className="btn btn-success mx-2"
              >
                +
              </button>
              <button    className="btn btn-danger" onClick={() => removeItem(item.id)}>&times;</button>
              </td>
            </tr>
          ))}
  <tr>
    <td>Total</td>
    <td>--------------</td>
    <td>{totalItems}</td>
    <td>{cartTotal}</td>
    <td>--------------</td>
  </tr>
          </tbody>
        </table>
  
      </Col>
    </Row>
  </Container>
      </>
    );
  }
function AllCart() {
  return (
    <CartProvider>
        <Topbar/>
       <NavbarShop/>

      <Cart/>
    </CartProvider>
  )
}

export default AllCart
