import React from 'react'

function HeaderCheck() {
  return (
    <div>
         {/* <!-- Page Header Start --> */}
    <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center"style={{minHeight:"300px"}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Checkout</h1>
            <div className="d-inline-flex">
                <p className="m-0"><a href="">Home</a></p>
                <p className="m-0 px-2">-</p>
                <p className="m-0">Checkout</p>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End --> */}
    </div>
  )
}

export default HeaderCheck
