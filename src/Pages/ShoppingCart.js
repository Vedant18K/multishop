import React, { useState } from 'react'
import Header from '../navbar/Header'
import SearchBar from '../Search/SearchBar'
import HeaderTwo from '../navbar/HeaderTwo'
import FooterCard from '../footer/FooterCard'
import decrement from '../Assets/minus.svg'
import increment from '../Assets/plus.svg'

const cartlist = [
    {
        "id":1,
        "prodname": "Product Name Goes Here",
        "prodprice": 123.00,
        "prodqty" : 0,
        "prodtotal":123.00,
    },
    {
        "id":2,
        "prodname": "Product Name Goes Here",
        "prodprice": 123.00,
        "prodqty" :1,
        "prodtotal":123.00,
    },
    {
        "id":3,
        "prodname": "Product Name Goes Here",
        "prodprice": 123.00,
        "prodqty" : 4,
        "prodtotal":123.00,
    }, {
        "id":4,
        "prodname": "Product Name Goes Here",
        "prodprice": 123.00,
        "prodqty" : 10,
        "prodtotal":123.00,
    },
    {
        "id":5,
        "prodname": "Product Name Goes Here",
        "prodprice": 123.00,
        "prodqty" : 2,
        "prodtotal":123.00,
    },
]

const ShoppingCart = () => {
    const [cart, setCart] = useState(cartlist);


    const increaseQty = (id) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return { ...item, prodqty: item.prodqty + 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };
    
    const decreaseQty = (id) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                const newQty = Math.max(0, item.prodqty - 1);
                return { ...item, prodqty: newQty };
            }
            return item;
        });
        setCart(updatedCart);
    };
    

    return (
        <div>
            <Header />
            <SearchBar />
            <HeaderTwo />
            <div className='container-fluid'>
                <div className=' mt-10 border-4 p-3'>
                    Home/ Shop / Shooping Cart
                </div>
                <div className='mt-10 flex '>
                    <div>
                   
                        <table class="w-full border-collapse">
                            <thead>
                                <tr class="bg-gray-200 ">
                                    <th class="py-2 px-10 text-left">Product</th>
                                    <th class="py-2 px-10 text-left">Price</th>
                                    <th class="py-2 px-10 text-left">Quantity</th>
                                    <th class="py-2 px-10 text-left">Total</th>
                                    <th class="py-2 px-10 text-left">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                            {cart.map((item , index)=>{
                                    return(
                                        <tr key={index} class="border-t" >
                                    <td class="py-2 px-10">{item.prodname}</td>
                                    <td class="py-2 px-10">${item.prodprice}</td>
                                    <td class="py-2 px-10">
                                        <div className='flex py-4 items-center'>
                                            <button onClick={() => decreaseQty(item.id)} className='text-black bg-yellow-500  h-auto rounded-md cursor-pointer '><img alt="" src={decrement} /></button>

                                            <div className=''><input className='w-10 border-2 border-solid text-center' value={item.prodqty} readOnly/></div>
                                            <div onClick={() => increaseQty(item.id)} className='text-black bg-yellow-500 h-auto rounded-md cursor-pointer '><img alt="" src={increment} /></div>
                                        </div>
                                    </td>
                                    <td className="py-2 px-10">${item.prodtotal * item.prodqty}</td>
                                    <td class="py-2 px-10">
                                        <button class="text-red-500 hover:text-red-700">Remove</button>
                                    </td>
                                </tr>
                                        )
                                    })}
                                
                                
                            </tbody>
                        </table>
                    </div>
                    <div>
                        images
                    </div>
                </div>
            </div>
            <FooterCard />
        </div>

    )
}

export default ShoppingCart