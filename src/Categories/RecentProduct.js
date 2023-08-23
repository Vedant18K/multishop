import React from 'react'
import product1 from '../Assets/img/product-1.jpg'
import product2 from '../Assets/img/product-2.jpg'
import product3 from '../Assets/img/product-3.jpg'
import product4 from '../Assets/img/product-4.jpg'
import product5 from '../Assets/img/product-5.jpg'
import product6 from '../Assets/img/product-6.jpg'
import product7 from '../Assets/img/product-7.jpg'
import product8 from '../Assets/img/product-8.jpg'

const recprocard = [
    {
        prodimg : product1,
        prodname : "Product Name Goes Here" ,
        prodprice : "$123.00",
        prodrate : [
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"}

        ]
    },
    {
        prodimg : product2,
        prodname : "Product Name Goes Here" ,
        prodprice : "$123.00",
        prodrate : [
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"}

        ]   
     },
    {
        prodimg : product3,
        prodname : "Product Name Goes Here" ,
        prodprice : "$123.00",
        prodrate : [
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"}

        ]    
    },
    {
        prodimg : product4,
        prodname : "Product Name Goes Here" ,
        prodprice : "$123.00",
        prodrate : [
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"}

        ]  
      },
    {
        prodimg : product5,
        prodname : "Product Name Goes Here" ,
        prodprice : "$123.00",
        prodrate : [
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"}
        ] 
    },
    {
        prodimg : product6,
        prodname : "Product Name Goes Here" ,
        prodprice : "$123.00",
        prodrate : [
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"}
        ] 
    },
    {
        prodimg : product7,
        prodname : "Product Name Goes Here" ,
        prodprice : "$123.00",
        prodrate : [
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"}
        ] 
    },
    {
        prodimg : product8,
        prodname : "Product Name Goes Here" ,
        prodprice : "$123.00",
        prodrate : [
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"},
            {star : "fa fa-star 2xl text-yellow-500"}
        ] 
    },
]

const RecentProduct = () => {
    return (
        <div className='container-fluid mt-10'>
            <div>RECENT PRODUCTS</div>
            <div className='  grid grid-cols-4 mt-10'>
                {recprocard.map((item)=>{
                    return(
                        <div>
                        <div className='flex justify-center items-center'>
                            <img className="w-[300px]" src={item.prodimg} />
                        </div>
                        <div className='text-center'>{item.prodname}<br />
                            {item.prodprice} <br />
                            {item?.prodrate?.map((item)=>{
                                return(
                                     <i className={item.star} ></i>
                                )
                            })}
                        </div>
                    </div>  
                    )
                })}
                
            </div>
        </div>
    )
}

export default RecentProduct