import React, { useState } from 'react'
import hearticon from '../Assets/heart.svg'
import carticon from '../Assets/shopping-cart.svg'
import { Link } from 'react-router-dom'

const HeaderTwo = () => {
  const [showUserMenu, setShowUsermenu] = useState(false)
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
              
              <li >
            <div>
              <div className="relative">
                <p className="cursor-pointer" onClick={() => setShowUsermenu(!showUserMenu)}>Pages</p>
                {showUserMenu &&
                  <div className="">
                    <div class="absolute z-10 -right-4 w-[160px] px-5 py-3 dark:bg-gray-800 bg-yellow-500 rounded-lg shadow border dark:border-transparent mt-5">
                      <ul class="space-y-3 dark:text-white">
                      <Link to={"/shoppingcart"}><li class="font-medium">
                          <p class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-[#374151]">
                              Shopping Cart
                          </p>
                        </li></Link>
                        <Link to={"/checkouts"}>  <li class="font-medium">
                          <p class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-[#374151]">
                            
                           Checkouts
                          </p>
                        </li></Link>
                        
                        
                      </ul>
                    </div>
                  </div>
                }
              </div>

            </div>
          </li>
              
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className='flex gap-8 justify-center items-center'>
          <div className="flex gap-1"><img alt="" src={hearticon} /><div className=" flex border rounded-full  w-6 text-center  justify-center text-white ">0</div></div>
          <div className="flex gap-1"><img alt="" src={carticon} /><div className=" flex border rounded-full  w-6 text-center  justify-center  text-white">0</div></div>

        </div>
      </div>
    </div>
  )
}

export default HeaderTwo