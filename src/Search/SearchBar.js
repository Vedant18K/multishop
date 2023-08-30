import React from 'react'
import searchicon from '../Assets/search.svg'
const SearchBar = () => {
  return (
    <div className='container-fluid'>
      <div className='flex flex-wrap justify-between item-center'>
      <div className='flex '>
        <div className='bg-black text-yellow-500 p-2 text-xl font-bold rounded-sm'>MULTI</div>
        <div className='bg-yellow-500 text-white p-2 text-xl font-bold rounded-sm'>SHOP</div>
      </div>
      <div className='flex'>
        <input className='w-[500px] border-2 h-[50px] text-center' placeholder='Enter product' />
        <img alt="" className='border-2 border-l-0 px-2' src={searchicon}></img>
      </div>
      <div>Contact <p>251478963</p></div>
      </div>
    </div>
  )
}

export default SearchBar