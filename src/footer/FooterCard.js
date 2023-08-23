import React from 'react'

const QuickShop = ["Home", "Our Shop", "Shop Details", "Shopping Cart", "Checkouts", "Contact Us"]
const MyAccount = ["Home", "Our Shop", "Shop Details", "Shopping Cart", "Checkouts", "Contact Us"]

const FooterCard = () => {
    return (
        <div className='p-10  mt-16 bg-[#3D464D]  text-[#F5F5F5]'>
            <div className='flex justify-between px-10'>
                <div>
                    <div>GET IN TOUCH</div>
                    <div>No dolore ipsum accusam no lorem. Invidunt sed </div>
                    <div>clita kasd clita et et dolor sed dolor. Rebum tempor</div>
                    <div> no vero est magna amet no</div>
                </div>
                <div>
                    <div>QUICK SHOP</div>
                    <div>
                        <ul>
                            {QuickShop.map((item) => {
                                return (
                                    <li className='cursor-pointer'><a className='flex gap-2'><span>{">"}</span><div id='check'>{item}</div></a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                    <div>MY ACCOUNT</div>
                    <div>
                        <ul>
                            {MyAccount.map((item) => {
                                return (
                                    <li className='cursor-pointer'><a className='flex gap-2'><span>{">"}</span><div className='hover:underline'>{item}</div></a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='gap-1'>
                    <div >
                    <div>NEWSLETTER</div>
                    <div>Duo stet tempor ipsum sit amet magna </div>
                    <div>ipsum tempor est</div>
                    </div>
                    <div className='flex mt-3'>
                        <input className=' border-2  text-center p-1 text-black' placeholder='Your Email Address' />
                        <button type='submit'className='bg-yellow-500 text-black p-1'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterCard