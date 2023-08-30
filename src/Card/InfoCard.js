import React from 'react'
import checkicon from '../Assets/check.svg'
import shopping from '../Assets/shopping-cart.svg'
import phone from '../Assets/phone-call.svg'
import exchange from '../Assets/code.svg'

const InfoCard = () => {
  return (
    <div className='container-fluid mt-16'>
       <div className='flex justify-between gap-4'>
            <div className='border-4 border-solid p-5 px-16 flex text-[25px] gap-5' ><img alt="" src={checkicon}/>Quality Product</div>
            <div className='border-4 border-solid p-5 px-16 flex text-[25px] gap-5' ><img alt="" src={shopping}/>Free Shipping</div>
            <div className='border-4 border-solid p-5 px-16 flex text-[25px] gap-5' ><img alt="" src={exchange}/>14-Day Return</div>
            <div className='border-4 border-solid p-5 px-16 flex text-[25px] gap-5' ><img alt="" src={phone}/>24/7 Support</div>

            {/* <div className='border-4 border-solid p-5 px-16'>Quality Product</div>
            <div className='border-4 border-solid p-5 px-16'>Quality Product</div>
            <div className='border-4 border-solid p-5 px-16'>Quality Product</div> */}
       </div>
    </div>
  )
}

export default InfoCard