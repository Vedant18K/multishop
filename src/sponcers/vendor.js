import React from 'react'
import sponcer1 from '../Assets/img/vendor-1.jpg'
import sponcer2 from '../Assets/img/vendor-2.jpg'
import sponcer3 from '../Assets/img/vendor-3.jpg'
import sponcer4 from '../Assets/img/vendor-4.jpg'
import sponcer5 from '../Assets/img/vendor-5.jpg'
import sponcer6 from '../Assets/img/vendor-6.jpg'

const Vendor = () => {
  return (
    <div className='container-fluid'>
      <div className='flex justify-between mt-10 '>
      <div className='border-4 '><img src={sponcer1}/></div>
      <div className='border-4 '><img src={sponcer2}/></div>
      <div className='border-4 '><img src={sponcer3}/></div>
      <div className='border-4 '><img src={sponcer4}/></div>
      <div className='border-4 '><img src={sponcer5}/></div>
      <div className='border-4 '><img src={sponcer6}/></div>
      </div>
    </div>
  )
}

export default Vendor