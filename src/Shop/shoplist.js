import React from 'react'
import Header from '../navbar/Header'
import HeaderTwo from '../navbar/HeaderTwo'
import SearchBar from '../Search/SearchBar'
import list1 from '../Assets/img/product-1.jpg'
import list2 from '../Assets/img/product-2.jpg'
import list3 from '../Assets/img/product-3.jpg'
import list4 from '../Assets/img/product-4.jpg'
import list5 from '../Assets/img/product-5.jpg'
import list6 from '../Assets/img/product-6.jpg'
import list7 from '../Assets/img/product-7.jpg'
import list8 from '../Assets/img/product-8.jpg'
import list9 from '../Assets/img/product-4.jpg'

const listrecord = [
    {
        prodimg: list1,
        prodname: "Product Name Goes Here",
        prodprice: "$123.00",
        prodrate: [
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" }

        ]
    },
    {
        prodimg: list2,
        prodname: "Product Name Goes Here",
        prodprice: "$123.00",
        prodrate: [
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" }

        ]
    },
    {
        prodimg: list3,
        prodname: "Product Name Goes Here",
        prodprice: "$123.00",
        prodrate: [
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" }

        ]
    },
    {
        prodimg: list4,
        prodname: "Product Name Goes Here",
        prodprice: "$123.00",
        prodrate: [
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" }

        ]
    },
    {
        prodimg: list5,
        prodname: "Product Name Goes Here",
        prodprice: "$123.00",
        prodrate: [
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" }

        ]
    },
    {
        prodimg: list6,
        prodname: "Product Name Goes Here",
        prodprice: "$123.00",
        prodrate: [
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" }

        ]
    },
    {
        prodimg: list7,
        prodname: "Product Name Goes Here",
        prodprice: "$123.00",
        prodrate: [
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" }

        ]
    },
    {
        prodimg: list8,
        prodname: "Product Name Goes Here",
        prodprice: "$123.00",
        prodrate: [
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" }

        ]
    },
    {
        prodimg: list9,
        prodname: "Product Name Goes Here",
        prodprice: "$123.00",
        prodrate: [
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" },
            { star: "fa fa-star 2xl text-yellow-500" }

        ]
    },
]
const Shoplist = () => {
    return (
        <div>
            <Header />
            <SearchBar />
            <HeaderTwo />
            <div className='container-fluid '>
                <div className='mt-10 border-4 p-3'>
                    Home/ Shop / Shoplist
                </div>
                <div className='flex gap-20'>
                    <div className=''>
                        For Filter
                        <div>
                            <div className='flex gap-5 items-center'>
                                <   div className='whitespace-nowrap'>FILTER BY PRICE</div>
                                <div className=' w-full '><hr className='border-dotted border-black' /></div>
                            </div>
                            <div className='mt-5'>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>All Price</div>
                                    <div >100</div>
                                </div>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>$0 - $100   </div>
                                    <div>100</div>
                                </div>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>All Price</div>
                                    <div>100</div>
                                </div>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>All Price</div>
                                    <div>100</div>
                                </div>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>All Price</div>
                                    <div>100</div>
                                </div>
                            </div>

                        </div>
                        <div className='mt-5'>
                            <div className='flex gap-5 items-center'>
                                < div className='whitespace-nowrap'>FILTER BY PRICE</div>
                                <div className=' w-full '><hr className='border-dotted border-black' /></div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <div className='mt-1'><input type='checkbox'></input>All Color</div>
                                    <div>1000</div>
                                </div>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>Black</div>
                                    <div>150</div>
                                </div>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>White</div>
                                    <div>295</div>
                                </div>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>Red</div>
                                    <div>246</div>
                                </div>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>Blue</div>
                                    <div>145</div>
                                </div>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>Green</div>
                                    <div>168</div>
                                </div>
                            </div>

                        </div>
                        <div className='mt-5'>
                            <div className='flex gap-5 items-center'>
                                < div className='whitespace-nowrap'>FILTER BY PRICE</div>
                                <div className=' w-full '><hr className='border-dotted border-black' /></div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <div className='mt-1'><input type='checkbox'></input>All Size</div>
                                    <div>1000</div>
                                </div>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>XS</div>
                                    <div>150</div>
                                </div>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>S</div>
                                    <div>295</div>
                                </div>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>M</div>
                                    <div>246</div>
                                </div>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>L</div>
                                    <div>145</div>
                                </div>
                                <div className='flex justify-between gap-[180px]'>
                                    <div className='mt-1'><input type='checkbox'></input>XL</div>
                                    <div>168</div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div >
                        <div className='flex  grid-cols-3 pt-[100px] '>
                            {listrecord.map((item, index) => {
                                return (
                                    <div className='border-4 pb-5 m-2 'key={index}>
                                        <div className='flex justify-center items-center '>
                                            <img className="w-[300px] " src={item.prodimg} />
                                        </div>
                                        <div className='text-center'>{item.prodname}<br />
                                            {item.prodprice} <br />
                                            {item?.prodrate?.map((item) => {
                                                return (
                                                    <i className={item.star} ></i>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shoplist