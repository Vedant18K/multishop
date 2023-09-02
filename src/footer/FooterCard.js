import React from 'react'
import locationicom from '../Assets/map-pin.svg'
import mailicon from '../Assets/mail.svg'
import phoneicon from '../Assets/phone.svg'
import paymenticon from '../Assets/payments.png'

const QuickShop = ["Home", "Our Shop", "Shop Details", "Shopping Cart", "Checkouts", "Contact Us"]
const MyAccount = ["Home", "Our Shop", "Shop Details", "Shopping Cart", "Checkouts", "Contact Us"]

const FooterCard = () => {
    return (
        <div className='p-10  mt-16 bg-[#3D464D]  text-[#F5F5F5]'>
            <div className='flex justify-between px-10'>
                <div>
                    <div>GET IN TOUCH</div>
                    <div className='mt-3'>No dolore ipsum accusam no lorem. Invidunt sed </div>
                    <div className='mt-2'>clita kasd clita et et dolor sed dolor. Rebum tempor</div>
                    <div className='mt-2'> no vero est magna amet no</div>
                    <div className='flex gap-3 mt-3'><img alt='icon' src={locationicom}/>123 Street, New York, USA</div>
                    <div className='flex gap-3 mt-3'><img alt='icon' src={mailicon}/>info@example.com</div>
                    <div className='flex gap-3 mt-3'><img alt='icon' src={phoneicon}/>+012 345 67890</div>
                </div>
                <div>
                    <div class>QUICK SHOP</div>
                    <div className='mt-3'>
                        <ul>
                            {QuickShop.map((item) => {
                                return (
                                    <li className='cursor-pointer'><a href={QuickShop.map} className='flex gap-2 mt-2'><span>{">"}</span><div id='check'>{item}</div></a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='mt-3'>MY ACCOUNT</div>
                    <div>
                        <ul>
                            {MyAccount.map((item) => {
                                return (
                                    <li className='cursor-pointer'><a href={MyAccount.map} className='flex gap-2 mt-2'><span>{">"}</span><div className='hover:underline'>{item}</div></a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='gap-1'>
                    <div >
                    <div>NEWSLETTER</div>
                    <div className='mt-3'>Duo stet tempor ipsum sit amet magna </div>
                    <div>ipsum tempor est</div>
                    </div>
                    <div className='flex mt-5'>
                        <input className=' border-2  text-center p-1 text-black' placeholder='Your Email Address' />
                        <button type='submit'className='bg-yellow-500 text-black p-1'>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className=' w-full mt-10' ><hr className='border-dotted border-white'/></div>
            <div className='pt-5 flex justify-between'>
                <div>© <span className='hover:underline text-yellow-500 '>Domain.</span> All Rights Reserved. Designed by <span className='hover:underline text-yellow-500'>HTML Codex</span></div>
                <div><img src={paymenticon} alt='paymenticon'/></div>
                </div>
        </div>
    )
}

export default FooterCard