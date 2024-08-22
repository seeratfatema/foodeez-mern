// /* eslint-disable react/jsx-no-undef */

// import React, { useState } from 'react'
// import { Link, useNavigate } from "react-router-dom";
// import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useCart } from './ContextReducer';
// import Modal from '../Modal';
// import Cart from '../screens/Cart';
// export default function Navbar(props) {

//     const [cartView, setCartView] = useState(false)
//     localStorage.setItem('temp', "first")
//     let navigate = useNavigate();
    // const handleLogout = () => {
    //     localStorage.removeItem('token')

    //     navigate("/login")
    // }

    // const loadCart = () => {
    //     setCartView(true)
    // }

//     const items = useCart();
//     return (
//         <div>
//             <nav classNameName="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
//                 style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
//                 <div classNameName="container-fluid">
//                     <Link classNameName="navbar-brand fs-1 fst-italic" to="/">FOODEEZ</Link>
//                     <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span classNameName="navbar-toggler-icon"></span>
//                     </button>
//                     <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
                        // <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
                        //     <li classNameName="nav-item">
                        //         <Link classNameName="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>  {/* index.css - nav-link color white */}
                        //     </li>
                        //     {(localStorage.getItem("token")) ?
                        //         <li classNameName="nav-item">
                        //             <Link classNameName="nav-link fs-5 mx-3 active" aria-current="page" to="/myorder" >My Orders</Link>  
                        // </ul>
//                         {(!localStorage.getItem("token")) ?
//                             <form classNameName="d-flex">
//                                 <Link classNameName="btn bg-white text-success mx-1 " to="/login">Login</Link>
//                                 <Link classNameName="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
//                             </form> :
//                             <div>

//                                 <div classNameName="btn bg-white text-success mx-2 " onClick={loadCart}>
//                                     <Badge color="secondary" badgeContent={items.length} >
//                                         <ShoppingCartIcon />
//                                     </Badge>
//                                     Cart
//                                 </div>

                                // {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}

//                                 <button onClick={handleLogout} classNameName="btn bg-white text-success" >Logout</button></div>}
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart, useDispatchCart } from '../Components/ContextReducer';


export default function Navbar() {
  let data = useCart();
  const [cartView, setCartView] = useState(false)
  
const navigate = useNavigate(); 
const handleLogout = () => {
  localStorage.removeItem('authToken')
  navigate("/login")
}
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
   <Link className="navbar-brand fs-1 fst-italic" to="/" >FOODEEZ</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className='navbar-nav me-auto mb-2'>
        <li className='nav-item'>
        <Link className="nav-link active fs-5 " aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authToken"))?
       <li className='nav-item'>
       <Link className="nav-link active fs-5 " aria-current="page" to="/myOrder">My Orders</Link>
       </li>
       :"" }
      </ul>
      
      {(!localStorage.getItem("authToken"))?
       <div className='d-flex'> 
        <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
       <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
       </div>
       :
       <div>
       <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)} }>My Cart {" "}
       <Badge pill bg="danger">{data.length}</Badge>
       </div>
       {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : null}
       <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>Logout</div>
       </div>
       }
      
      
    </div>
  </div>
</nav>
    </div>
  )
}
