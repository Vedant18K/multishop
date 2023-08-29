import React, { useState } from "react"
import { Link } from "react-router-dom"


const Header = () => {
  const [showUserMenu, setShowUsermenu] = useState(false)
  return (
    <div className="container-fluid">
      <div className="flex justify-between py-5">
        <nav>
          <ul className="flex flex-wrap gap-x-7 ">
            <li>Home</li>
            <li>Content</li>
            <li>help</li>
            <li>FAQs</li>
          </ul>
        </nav>
        <ul className="flex flex-wrap gap-x-7">
          <li >
            <div>
              <div className="relative">
                <p className="cursor-pointer" onClick={() => setShowUsermenu(!showUserMenu)}>My Account</p>
                {showUserMenu &&
                  <div className="">
                    <div class="absolute  -right-4 w-[160px] px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5">
                      <ul class="space-y-3 dark:text-white">
                        <li class="font-medium">
                          <p class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                            <div class="mr-3">
                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            Account
                          </p>
                        </li>
                        <li class="font-medium">
                          <p class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                            <div class="mr-3">
                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            Setting
                          </p>
                        </li>
                        <hr class="dark:border-gray-700" />
                        <li class="font-medium cursor-pointer">
                          <Link to={"/login"}>
                          <p class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-green-500">
                            <div class="mr-3 text-green-500">
                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                            </div>
                            Login
                          </p></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                }
              </div>

            </div>
          </li>

          <li>USD</li>
          <li>En</li>
        </ul>


      </div>
      {/* <div  className="flex justify-end">
        {showAccount?
                    <div>
                        <div>Sign Up</div>
                        <div>Sign in</div>
                    </div>:null}
        </div> */}
    </div>
  )
}
export default Header