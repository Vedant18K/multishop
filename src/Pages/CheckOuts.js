import React, { useState } from 'react'
import Header from '../navbar/Header'
import SearchBar from '../Search/SearchBar'
import HeaderTwo from '../navbar/HeaderTwo'
import FooterCard from '../footer/FooterCard'

const cartlist = [
    {
        "id": 1,
        "prodname": "Product Name ",
        "prodprice": 123.00,
        "prodqty": 0,
        "prodtotal": 123.00,
    },
    {
        "id": 2,
        "prodname": "Product Name ",
        "prodprice": 123.00,
        "prodqty": 1,
        "prodtotal": 123.00,
    },
    {
        "id": 3,
        "prodname": "Product Name ",
        "prodprice": 123.00,
        "prodqty": 4,
        "prodtotal": 123.00,
    },
    {
        "id":4 ,
        "prodname": "Product Name ",
        "prodprice": 123.00,
        "prodqty": 4,
        "prodtotal": 123.00,
    },
    {
        "id": 5,
        "prodname": "Product Name ",
        "prodprice": 123.00,
        "prodqty": 4,
        "prodtotal": 123.00,
    },
]

const CheckOuts = () => {
    const orderTotal = cartlist.reduce((total, item) =>total + item.prodprice , 0);
    const subtotal = orderTotal * 5;
    const shippcharge = 10;
    const billamount = subtotal+shippcharge;



    return (
        <div>
            <Header />
            <SearchBar />
            <HeaderTwo />
            <div className='container-fluid'>
                <div className=' mt-10 border-4 p-3'>
                    Home/ Shop / Checkout
                </div>
                <div className=' flex justify-evenly '>
                    <div>
                        <div>BILLING ADDRESS</div>
                        <div className=''>
                            <div className='flex mt-10 '>
                                <div >
                                    <div>First Name</div>
                                    <input className='w-[390px] border-2  px-2 py-2' type='text' placeholder='First Name' />
                                </div>
                                <div className='mx-4'>
                                    <div>Last Name</div>
                                    <input className='w-[400px] border-2  py-2 px-2' type='text' placeholder='Last Name' />
                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <div>
                                    <div>E-Mali</div>
                                    <input className='w-[390px] border-2  px-2 py-2' type='text' placeholder='E-Mali' />
                                </div>
                                <div className='mx-4'>
                                    <div>Mo. Number</div>
                                    <input className='w-[400px] border-2  py-2 px-2' type='text' placeholder='Mo. Number' />
                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <div>
                                    <div>Address Line 1</div>
                                    <input className='w-[390px] border-2  px-2 py-2' type='text' placeholder='Address Line 1' />
                                </div>
                                <div className='mx-4'>
                                    <div>Address Line 2</div>
                                    <input className='w-[400px] border-2  py-2 px-2' type='text' placeholder='Address Line 2' />
                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <div>
                                    <div>Country</div>
                                    <input className='w-[390px] border-2  px-2 py-2' type='text' placeholder='Country' />
                                </div>
                                <div className='mx-4'>
                                    <div>City</div>
                                    <input className='w-[400px] border-2  py-2 px-2' type='text' placeholder='City' />
                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <div>
                                    <div>State</div>
                                    <input className='w-[390px] border-2 px-2 py-2 ' type='text' placeholder='State' />
                                </div>
                                <div className='mx-4'>
                                    <div >Zip Code</div>
                                    <input className='w-[400px] border-2 py-2 px-2 ' type='text' placeholder='Zip Code' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className='flex '>
                        <div>Order Total</div>
                        <div >
                            <table className='w-full border-collapse mt-5'>
                                <thead>
                                    <tr>
                                        <th className='py-2 px-4 border border-gray-300'>Product Name</th>
                                        <th className='py-2 px-4 border border-gray-300 text-right'>Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartlist.map((item) => (
                                        <tr key={item.id}>
                                            <td className='py-2 px-4 border border-gray-300'>{item.prodname}</td>
                                            <td className='py-2 px-4 border border-gray-300 text-right'>$ {orderTotal}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                                <td className='py-2 px-4 border border-gray-300'>Subtotal</td>
                                                <td className='py-2 px-4 border border-gray-300 text-right'>${subtotal.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td className='py-2 px-4 border border-gray-300'>Shipping</td>
                                                <td className='py-2 px-4 border border-gray-300 text-right'>${shippcharge}</td>
                                            </tr>
                                    <tr>
                                        <td className='py-2 px-4 border border-gray-300'>Total</td>
                                        <td className='py-2 px-4 border border-gray-300 text-right'>$ {billamount.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>

                    </div>
                    <div className='flex py-5'>
                        <div>
                        PAYMENT
                        </div>
                        <div className='py-10'>
                            <div className='py-2 '><input type='checkbox'/>Paypal</div>
                            <div className='py-2 '><input type='checkbox'/>Direct Check</div>
                            <div className='py-2 '><input type='checkbox'/>Bank Transfer</div>
                            <div className='py-2 text-black bg-yellow-500 h-[50px] text-center px-10 border rounded-md'>Apply Coupon</div>
                        </div>
                        
                    </div>
                    
                    </div>
                </div>
            </div>
            <FooterCard />
        </div>
    )
}

export default CheckOuts