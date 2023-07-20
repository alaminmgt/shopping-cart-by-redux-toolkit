import React, { useEffect } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cardSlice";

const Navbar = () => {
  const {cart , totalQuantity , totalPrice } = useSelector((state)=>state.allCarts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <span>
            <Link to="/">All Product</Link>
          </span>
          <MDBBtn>
            <Link to="/cart" style={{color: "white"}}>Cart ({totalQuantity})</Link>
          </MDBBtn>
        </div>
      </nav>
    </div> 
  );
};

export default Navbar;
