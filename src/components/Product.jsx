import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add ,remove} from "../redux/Slices/CartSlice";
import { toast } from 'react-hot-toast';
const Product = ({post}) => {
  const {cart}=useSelector((state) => state);
  const dispatch=useDispatch();
  function removeFromCart(){
    dispatch(remove(post.id));
    toast.error("Item is removed")
  }
  function addToCart(){
    dispatch(add(post));
    toast.success("Item is added")
  }

  return (
    <div className='flex flex-col items-center justify-between
    hover:scale-110 transition duration-450 ease-in  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] 
    hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] gap-3 p-4 mt-10 ml-5 rounded-xl outline-1'>
      <div>
        <p className="text-[#1d783e] font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      
      <div className="h-[180px]">
        <img src={post.image} className='h-full w-full'alt="" />
      </div>

      <div className="flex justify-between items-center w-full mt-5">
      <div>
        <p className="text-green-600 font-semibold">${post.price}</p>
      </div>
      {
        cart.some((p)=>p.id===post.id) ? 
        (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in" onClick={removeFromCart}>Remove Item</button>)
        :
        (<button 
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"onClick={addToCart}> Add Item</button>)
      }
      </div>
    </div>
  )
}

export default Product
