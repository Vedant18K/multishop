
import offer1 from '../Assets/img/offer-1.jpg'
import offer2 from '../Assets/img/offer-2.jpg'
import carousel1 from '../Assets/img/carousel-1.jpg'
import carousel2 from '../Assets/img/carousel-2.jpg'
import carousel3 from '../Assets/img/carousel-3.jpg'
import React, { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";



const FashionCard = () => {
    /* render ke liye */
    useEffect(() => {
        initTE({ Carousel });
    }, []);
    return (
        <div className="container-fluid">
            <div>
                <div className='flex gap-10 mt-10'>
                    <div
                        id="carouselExampleCaptions"
                        class="relative mb-6 w-[70%]"
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
                                <img alt=""
                                    src={carousel1}
                                    class="block w-full "
                                    
                                />
                                <div class="absolute space-y-6 inset-x-[15%] bottom-20 flex flex-col justify-center py-5 place-items-center text-center text-white md:text-xl">
                                    <div class=" text-3xl lg:text-4xl xl:text-5xl">
                                        Men Fashion<p className="text-xl animate-text bg-gradient-to-r  from-[#010101] via-[#E5FAF8] to-[#19919C]   bg-clip-text text-transparent  font-black">Multivitamin and Nutraceutical Soft Gelatin products</p>
                                    </div>
                                    <button class="button ">
                                        <p class="text-center">View More</p>
                                    </button>
                                </div>
                            </div>
                            <div
                                class="relative float-left -mr-[100%] hidden w-full  transition-transform duration-[500ms] ease-linear motion-reduce:transition-none"
                                data-te-carousel-item>
                                <img alt=""
                                    src={carousel2}
                                    class="block w-full"
                                    
                                />
                                <div class="absolute inset-x-[15%] space-y-6 bottom-20 flex flex-col justify-center py-5 place-items-center text-center text-white md:text-xl">
                                    <div class=" text-3xl lg:text-4xl xl:text-5xl">
                                        Women Fashion<p className="text-xl animate-text bg-gradient-to-r  from-[#010101] via-[#E5FAF8] to-[#19919C]  bg-clip-text text-transparent  font-black">Provides you in the best range</p>
                                    </div>
                                    <button class="button ">
                                        <p class="text-center">View More</p>
                                    </button>
                                </div>
                            </div>
                            <div
                                class="relative float-left -mr-[100%] hidden w-full transition-transform  duration-[500ms] ease-linear motion-reduce:transition-none"
                                data-te-carousel-item>
                                <img alt=""
                                    src={carousel3}
                                    class="block w-full"
                                    
                                />
                                <div class="absolute  space-y-6 inset-x-[15%] bottom-20 flex flex-col justify-center py-5 place-items-center text-center text-white md:text-xl">
                                    <div class=" text-3xl lg:text-4xl xl:text-5xl">
                                        Kid's Fashion<p className="text-xl animate-text bg-gradient-to-r from-[#010101] via-[#E5FAF8] to-[#19919C]  bg-clip-text text-transparent  font-black">Offering you complete choice of products</p>
                                    </div>
                                    <button class="button mt-6">
                                        <p class="text-center">View More</p>
                                    </button>
                                </div>
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

                    <div className='flex flex-col gap-5 w-[465px] '>
                        <div><img alt="" src={offer1} /></div>
                        <div><img alt="" src={offer2} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FashionCard