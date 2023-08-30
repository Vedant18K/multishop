
import Header from '../navbar/Header'
import HeaderTwo from '../navbar/HeaderTwo'
import SearchBar from '../Search/SearchBar'
import Plusicon from '../Assets/plus.svg'
import minusicon from '../Assets/minus.svg'
import linkedin from '../Assets/linkedin.svg'
import facebook from '../Assets/facebook.svg'
import twitter from '../Assets/twitter.svg'
import p1 from '../Assets/img/product-1.jpg'
import p2 from '../Assets/img/product-2.jpg'
import p3 from '../Assets/img/product-3.jpg'
import React, { useEffect, useState } from "react";
import { Carousel, initTE } from "tw-elements";
import ShopDiscription from './ShopDiscription'
import ShopInformation from './ShopInformation'
import ShopReview from './ShopReview'
import FooterCard from '../footer/FooterCard'
import RecentProduct from '../Categories/RecentProduct'





const listrecord = [
    {
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



const ShopDetails = () => {
    const [qunatity, setQuantity] = useState(0)

    const increaseQty = () => {
        setQuantity(qunatity + 1)
    }
    const decreaseQty = () => {
        setQuantity(qunatity - 1)
        if (qunatity <= 0) {
            setQuantity(0)
        }
    }
    const [showShopDiscription, setShowShopDiscription] = useState(true)
    const [showShopInformation, setShowShopInformation] = useState(false)
    const [showShopReview, setShowShopReview] = useState(false)
    const Discription = () => {
        setShowShopDiscription(true)
        setShowShopInformation(false)
        setShowShopReview(false)
    }
    const Information = () => {
        setShowShopDiscription(false)
        setShowShopInformation(true)
        setShowShopReview(false)
    }
    const Review = () => {
        setShowShopDiscription(false)
        setShowShopInformation(false)
        setShowShopReview(true)
    }

    useEffect(() => {
        initTE({ Carousel });
    }, []);
    return (
        <div>
            <Header />
            <SearchBar />
            <HeaderTwo />
            <div className='container-fluid '>
                <div className='mt-10 border-4 p-3'>
                    Home/ Shop / Shop Details
                </div>
                <div className='flex justify-evenly'>
                    <div>
                        <div
                            id="carouselExampleCaptions"
                            class="relative mb-6 "
                            data-te-carousel-init
                            data-te-carousel-slide>
                            <div
                                class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                                data-te-carousel-indicators>
                                <button
                                    type="button"
                                    data-te-target="#carouselExampleCaptions"
                                    data-te-slide-to="0"
                                    data-te-carousel-active
                                    class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                                    aria-current="true"
                                    aria-label="Slide 1"></button>
                                <button
                                    type="button"
                                    data-te-target="#carouselExampleCaptions"
                                    data-te-slide-to="1"
                                    class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                                    aria-label="Slide 2"></button>
                                <button
                                    type="button"
                                    data-te-target="#carouselExampleCaptions"
                                    data-te-slide-to="2"
                                    class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                                    aria-label="Slide 3"></button>
                            </div>


                            <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                                <div
                                    class="relative float-left -mr-[100%] w-full transition-transform duration-[500ms] ease-linear motion-reduce:transition-none"
                                    data-te-carousel-active
                                    data-te-carousel-item>
                                    <img
                                        src={p1}
                                        class="block w-full "
                                        alt="..."
                                    />

                                </div>
                                <div
                                    class="relative float-left -mr-[100%] hidden w-full  transition-transform duration-[500ms] ease-linear motion-reduce:transition-none"
                                    data-te-carousel-item>

                                    <img
                                        src={p2}
                                        class="block w-full"
                                        alt="..."
                                    />

                                </div>
                                <div
                                    class="relative float-left -mr-[100%] hidden w-full transition-transform  duration-[500ms] ease-linear motion-reduce:transition-none"
                                    data-te-carousel-item>
                                    <img
                                        src={p3}
                                        class="block w-full"
                                        alt="..."
                                    />

                                </div>
                            </div>
                            <button
                                class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                                type="button"
                                data-te-target="#carouselExampleCaptions"
                                data-te-slide="prev">
                                <span class="inline-block h-8 w-8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-6 w-6 md:h-10 md:w-10">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15.75 19.5L8.25 12l7.5-7.5"
                                        />
                                    </svg>
                                </span>
                                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                    Previous
                                </span>
                            </button>
                            <button
                                class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                                type="button"
                                data-te-target="#carouselExampleCaptions"
                                data-te-slide="next">
                                <span class="inline-block h-8 w-8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-6 w-6 md:h-10 md:w-10">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </span>
                                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                    Next
                                </span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className='mt-5 w-[50%] '>
                            {listrecord.map((item, index) => {
                                return (
                                    <div className='' key={index}>
                                        <div className='text-left py-4 '>{item.prodname}<br />
                                            <div className='py-2' />
                                            {item.prodprice} <br />
                                            <div className='py-2' />
                                            {item?.prodrate?.map((item) => {
                                                return (
                                                    <i className={item.star} ></i>
                                                )
                                            })}
                                        </div>
                                        <div>
                                            Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea.Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy
                                        </div>
                                        <div className='flex py-4 gap-4'>
                                            <div>Sizes: </div>
                                            <div className='flex gap-5'>
                                                <div>    <input type='checkbox' />XS</div>
                                                <div>    <input type='checkbox' />S</div>
                                                <div>    <input type='checkbox' />M</div>
                                                <div>    <input type='checkbox' />L</div>
                                                <div>    <input type='checkbox' />XL</div>
                                            </div>
                                        </div>
                                        <div className='flex gap-4'>
                                            <div>Color: </div>
                                            <div className='flex gap-5'>
                                                <div>    <input type='checkbox' />White</div>
                                                <div>    <input type='checkbox' />Red</div>
                                                <div>    <input type='checkbox' />Black</div>
                                                <div>    <input type='checkbox' />Blue</div>
                                                <div>    <input type='checkbox' />Green</div>
                                            </div>
                                        </div>
                                        <div className='flex py-4 items-center'>
                                            <div onClick={() => decreaseQty()} className='text-black bg-yellow-500  h-auto rounded-md cursor-pointer '><img src={minusicon} /></div>

                                            <div className=''><input className='w-10 border-2 border-solid text-center' value={qunatity} /></div>
                                            <div onClick={() => increaseQty()} className='text-black bg-yellow-500 h-auto rounded-md cursor-pointer '><img src={Plusicon} /></div>

                                            <div className='text-black bg-yellow-500 px-8 py-2 rounded-md  m-2'>Add To Cart</div>
                                        </div>
                                        <div className='flex py-4'>
                                            <div>Share On:</div>
                                            <div className='flex gap-3'>
                                                <div><img src={facebook} /></div>
                                                <div><img src={linkedin} /></div>
                                                <div><img src={twitter} /></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
                <div>
                    <div className=' flex  text-black top-[150px] gap-5'>
                        <div onClick={() => Discription()} className='text-white bg-[#8a2be2] px-8 py-3 rounded-md cursor-pointer'>Discription</div>
                        <div onClick={() => Information()} className='text-white bg-[#8a2be2] px-8 py-3 rounded-md cursor-pointer'>Information</div>
                        <div onClick={() => Review()} className='text-white bg-[#8a2be2] px-8 py-3 rounded-md cursor-pointer'>Review</div>
                    </div>
                    <div className=' flex  text-black top-[150px]  mt-5'>
                        {showShopDiscription ? <ShopDiscription /> : null}
                        {showShopInformation ? <ShopInformation /> : null}
                        {showShopReview ? <ShopReview /> : null}

                    </div>
                </div>
                
                    
                    
                
            </div>
            <RecentProduct/>
            <FooterCard />
        </div>
    )
}

export default ShopDetails