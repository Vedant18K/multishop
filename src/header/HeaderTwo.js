import React from 'react'
import hearticon from '../Assets/heart.svg'
import carticon from '../Assets/shopping-cart.svg'

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
          <li>Home</li>
          <li>Shop</li>
          <li>Shop Details</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
      </div>
      </div>
    
      <div className='flex gap-8 justify-center items-center'>
        <div className="flex gap-1"><img src={hearticon}/><div className=" flex border rounded-full  w-6 text-center  justify-center text-white ">0</div></div>
        <div className="flex gap-1"><img src={carticon}/><div className=" flex border rounded-full  w-6 text-center  justify-center  text-white">0</div></div>
        
      </div>
      </div>
    </div>
  )
}

export default HeaderTwo