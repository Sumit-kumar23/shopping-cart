import React from 'react'
import {BsFillCartFill} from "react-icons/bs"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue500'>
      <div className='flex flex-row justify-between'>
       <NavLink to="/">
          <div>
          <img src="https://codehelp-shopping-cart.netlify.app/logo.png" className="lg:h-14 md:h-10 h-8" alt=""/>
          </div>
       </NavLink>
        <div>
         <NavLink to="/">
              <p>Home</p>
         </NavLink>
          <NavLink to="/cart">
              <div>
              <BsFillCartFill/>
              </div>
          </NavLink>
        </div>

      </div>
    </div>
  )
}

export default Navbar

