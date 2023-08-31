import React from 'react'
import Header from '../navbar/Header'
import SearchBar from '../Search/SearchBar'
import HeaderTwo from '../navbar/HeaderTwo'
import FooterCard from '../footer/FooterCard'


const CheckOuts = () => {
    return (
        <div>
            <Header />
            <SearchBar />
            <HeaderTwo />
            <div className='container-fluid'>
                <div className=' mt-10 border-4 p-3'>
                    Home/ Shop / Checkout
                </div>
                <div className=' flex  w-[70%]'>
                    <div>
                        <div>BILLING ADDRESS</div>
                        <div className=''>
                        <div className='flex mt-10 '>
                            <div >
                                <div>First Name</div>
                                <input className='w-[390px] border-2  px-2 py-2'type='text' placeholder='First Name' />
                            </div>
                            <div  className='mx-4'>
                                <div>Last Name</div>
                                <input className='w-[400px] border-2  py-2 px-2'type='text' placeholder='Last Name' />
                            </div>
                        </div>
                        <div className='flex mt-10'>
                            <div>
                                <div>E-Mali</div>
                                <input className='w-[390px] border-2  px-2 py-2'type='text' placeholder='E-Mali' />
                            </div>
                            <div  className='mx-4'>
                                <div>Mo. Number</div>
                                <input className='w-[400px] border-2  py-2 px-2'type='text' placeholder='Mo. Number' />
                            </div>
                        </div>
                        <div className='flex mt-10'>
                            <div>
                                <div>Address Line 1</div>
                                <input className='w-[390px] border-2  px-2 py-2' type='text' placeholder='Address Line 1' />
                            </div>
                            <div  className='mx-4'>
                                <div>Address Line 2</div>
                                <input className='w-[400px] border-2  py-2 px-2' type='text' placeholder='Address Line 2' />
                            </div>
                        </div>
                        <div className='flex mt-10'>
                            <div>
                                <div>Country</div>
                                <input className='w-[390px] border-2  px-2 py-2' type='text' placeholder='Country' />
                            </div>
                            <div  className='mx-4'>
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
                    <div> hello world</div>
                </div>
            </div>
            <FooterCard />
        </div>
    )
}

export default CheckOuts