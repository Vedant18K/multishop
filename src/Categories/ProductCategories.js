import React from 'react'
import cat1 from '../Assets/img/cat-1.jpg'
import cat2 from '../Assets/img/cat-2.jpg'
import cat3 from '../Assets/img/cat-3.jpg'
import cat4 from '../Assets/img/cat-4.jpg'

const ProductCategories = () => {
    return (
        <div className='container-fluid mt-10'>
            <div>CATEGORIES</div>
            <div className=' justify-between flex mt-10'>
                <div className='flex border-2 border-solid'>
                    <div><img alt="" src={cat1} className='w-[100px]' /></div>
                    <div className='border-l-2 px-4 pt-7'>Category Name <br />100</div>
                </div>
                <div className='flex border-2 border-solid'>
                    <div><img alt="" src={cat2} className='w-[100px]' /></div>
                    <div className='border-l-2 px-4 pt-7'>Category Name <br />100</div>
                </div>
                <div className='flex border-2 border-solid'>
                    <div><img alt="" src={cat3} className='w-[100px]' /></div>
                    <div className='border-l-2 px-4 pt-7'>Category Name <br />100</div>
                </div>
                <div className='flex border-2 border-solid'>
                    <div><img alt="" src={cat4} className='w-[100px]' /></div>
                    <div className='border-l-2 px-4 pt-7'>Category Name <br />100</div>
                </div>
            </div>
            <div className=' justify-between flex mt-10'>
                <div className='flex border-2 border-solid'>
                    <div><img alt="" src={cat4} className='w-[100px]' /></div>
                    <div className='border-l-2 px-4 pt-7'>Category Name <br />100</div>
                </div>
                <div className='flex border-2 border-solid'>
                    <div><img alt="" src={cat3} className='w-[100px]' /></div>
                    <div className='border-l-2 px-4 pt-7'>Category Name <br />100</div>
                </div>
                <div className='flex border-2 border-solid'>
                    <div><img alt="" src={cat2} className='w-[100px]' /></div>
                    <div className='border-l-2 px-4 pt-7'>Category Name <br />100</div>
                </div>
                <div className='flex border-2 border-solid'>
                    <div><img alt="" src={cat1} className='w-[100px]' /></div>
                    <div className='border-l-2 px-4 pt-7'>Category Name <br />100</div>
                </div>
            </div>
            <div className=' justify-between flex mt-10'>
                <div className='flex border-2 border-solid'>
                    <div><img alt="" src={cat1} className='w-[100px]' /></div>
                    <div className='border-l-2 px-4 pt-7'>Category Name <br />100</div>
                </div>
                <div className='flex border-2 border-solid'>
                    <div><img alt="" src={cat3} className='w-[100px]' /></div>
                    <div className='border-l-2 px-4 pt-7'>Category Name <br />100</div>
                </div>
                <div className='flex border-2 border-solid'>
                    <div><img alt="" src={cat2} className='w-[100px]' /></div>
                    <div className='border-l-2 px-4 pt-7'>Category Name <br />100</div>
                </div>
                <div className='flex border-2 border-solid'>
                    <div><img alt="" src={cat4} className='w-[100px]' /></div>
                    <div className='border-l-2 px-4 pt-7'>Category Name <br />100</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCategories