import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {remove} from "../redux/Slices/CartSlice";
import { toast } from 'react-hot-toast';
const CartItem = ({item , itemIndex}) => {
  const dispatch=useDispatch();

  function removeFromCart(){
    dispatch(remove(item.id))
    toast.error("item removed")

}  

return (

      <div>
        <div>
          <div>
            <img src={item.image} alt="" />
          </div>

          <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div>
              <p>{item.price}</p>
              <div>
                <AiFillDelete onClick={removeFromCart} />
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default CartItem
