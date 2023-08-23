import React from 'react'
import offer1 from '../Assets/img/offer-1.jpg'
import offer2 from '../Assets/img/offer-2.jpg'

function SpecialOfferCard() {
  return (
    <div className='container-fluid mt-20'>
      <div className='flex justify-between items-center gap-16'>
        <div><img className='w-[750px]'src={offer1}/></div>
        <div><img className='w-[750px]'src={offer2}/></div>
      </div>
    </div>
  )
}

export default SpecialOfferCard