import React from 'react'


const LoginPage = () => {
    return (
        <div>
            
            <div className=' flex flex-col gap-4 p-4'>
                <div className='flex gap-2'>
                    <div className='text-[#8a2be2] w-[70px]'>Email:</div>
                    <div><input type='email' className='bg-transparent border border-t-0 border-x-0 border-[#8a2be2] outline-none' /></div>
                </div>
                <div className='flex gap-2 '>
                    <div className='text-[#8a2be2] w-[70px]'>Password:</div>
                    <div><input type='password' className='bg-transparent border border-t-0 border-x-0 border-[#8a2be2] outline-none' /></div>
                </div>
                <div  className='text-white bg-[#8a2be2] px-8 py-3 rounded-md text-center mt-3 '>Login</div>
            </div>
            
        </div>
    )
}

export default LoginPage