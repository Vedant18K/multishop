import React from 'react'
import product1 from '../Assets/img/product-1.jpg'
import product2 from '../Assets/img/product-2.jpg'
import product3 from '../Assets/img/product-3.jpg'
import product4 from '../Assets/img/product-4.jpg'
import product5 from '../Assets/img/product-5.jpg'
import product6 from '../Assets/img/product-6.jpg'
import product7 from '../Assets/img/product-7.jpg'
import product8 from '../Assets/img/product-8.jpg'




const FeaturedCategories = () => {
  return (
    <div className='container-fluid mt-10'>
        <div className='flex gap-10 items-center'>
            <div className='whitespace-nowrap'>FEATURED CATEGORIES</div>
            <div className=' w-full'><hr className='border-dotted border-black'/></div>
        </div>
        <div className=' justify-between flex mt-10'>
                <div className=' '>
                    <div>
                        <img className="w-[500px]" src={product1} />
                    </div>
                    <div className='text-center'>
                        Product Name Goes Here<br/>
                        $123.00 <br/>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                    </div>
                </div>
                <div className=' '>
                    <div>
                        <img className="w-[500px]" src={product2} />
                    </div>
                    <div className='text-center'>
                        Product Name Goes Here<br/>
                        $123.00 <br/>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                    </div>
                   
                </div>
                <div className=' '>
                    <div>
                        <img className="w-[500px]" src={product3} />
                    </div>
                    <div className='text-center'>
                        Product Name Goes Here<br/>
                        $123.00 <br/>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                    </div>
                    
                </div>
                <div className=' '>
                    <div>
                        <img className="w-[500px]" src={product4} />
                    </div>
                    <div className='text-center'>
                        Product Name Goes Here<br/>
                        $123.00 <br/>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                    </div>
                </div>
            </div>
            <div className=' justify-between flex mt-10'>
                <div className=' '>
                    <div><img className="w-[500px]" src={product5} /></div>
                    <div className='text-center'>
                        Product Name Goes Here<br/>
                        $123.00 <br/>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                    </div>
                </div>
                <div className=' '>
                    <div><img className="w-[500px]" src={product6} /></div>
                    <div className='text-center'>
                        Product Name Goes Here<br/>
                        $123.00 <br/>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                    </div>
                </div>
                <div className=' '>
                    <div><img className="w-[500px]" src={product7} /></div>
                    <div className='text-center'>
                        Product Name Goes Here<br/>
                        $123.00 <br/>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                    </div>
                </div>
                <div className=' '>
                    <div><img className="w-[500px]" src={product8} /></div>
                    <div className='text-center'>
                        Product Name Goes Here<br/>
                        $123.00 <br/>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                        <i className='fa fa-star 2xl text-yellow-500' ></i>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FeaturedCategories