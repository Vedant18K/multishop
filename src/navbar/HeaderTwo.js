import React from 'react'
import hearticon from '../Assets/heart.svg'
import carticon from '../Assets/shopping-cart.svg'
import { Link } from 'react-router-dom'

const HeaderTwo = () => {
  return (
    <div className='bg-gray-700 mt-4'>
      <div className="flex  justify-between container-fluid">
      <div className="flex gap-x-20">
      <div >
        <button className='bg-yellow-400 px-28 py-5'>CATEGORIES</button>
      </div>
      <div >
        <ul className='flex gap-5 py-5 text-white'>
          <Link to={"/home"}><li>Home</li></Link>
          <Link to={"/shoplist"}><li>Shop</li></Link>
          <Link to={"/shopdetails"}><li>Shop Details</li></Link>
          <Link to={"/shoppingcart"}><li>Pages</li></Link>
          <li>Contact</li>
        </ul>
      </div>
      </div>
    
      <div className='flex gap-8 justify-center items-center'>
        <div className="flex gap-1"><img alt="" src={hearticon}/><div className=" flex border rounded-full  w-6 text-center  justify-center text-white ">0</div></div>
        <div className="flex gap-1"><img alt="" src={carticon}/><div className=" flex border rounded-full  w-6 text-center  justify-center  text-white">0</div></div>
        
      </div>
      </div>
    </div>
  )
}

export default HeaderTwo