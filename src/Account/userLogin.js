import React, { useState } from 'react'
import loginimg from '../Assets/img/login page bg.jpg'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'

const UserLogin = () => {
    const [showLogin, setShowLogin] = useState(true)
    const [showSignUp, setShowSignUp] = useState(false)
    const LoginTab=()=>{
        setShowLogin(true)
        setShowSignUp(false)
    }
    const SignUpTab=()=>{
        setShowLogin(false)
        setShowSignUp(true)
    }
    return (
        <div>
            <div ><img className='absolute lg:h-[100vh] lg:w-[100%] hidden lg:block xl:object-cover' src={loginimg} /></div>
            <div className='relative flex justify-end text-black top-[150px] right-[80px] gap-5'>
                <div onClick={() => LoginTab()} className='text-white bg-[#8a2be2] px-8 py-3 rounded-md '>Sign In</div>
                <div onClick={() => SignUpTab()} className='text-white bg-[#8a2be2] px-8 py-3 rounded-md '>Sign Up</div>
            </div>
            <div className='relative flex justify-end text-black top-[150px] right-[58px] mt-5'>
                {showLogin?<LoginPage/>:null}
                {showSignUp?<SignUpPage/>:null}
                
            </div>

        </div>
    )
}

export default UserLogin