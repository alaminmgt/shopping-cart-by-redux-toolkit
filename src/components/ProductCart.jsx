import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { addToCart } from "../features/cardSlice";

const ProductCart = () => {
  const items = useSelector((state) => state.allCarts.items);
  const dispatch = useDispatch();

  return (
    <>
      <div className="m-2">
      <div class="row row-cols-1 row-cols-md-5 g-4">
        {items.map((item)=>(
          <div class="col" key={item.id}>
            <div class="card">
              <img
                src={item.img}
                class="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.price}</p>
                <button 
                type="button" 
                class="btn btn-primary"
                onClick={()=>dispatch(addToCart(item))}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default ProductCart;


