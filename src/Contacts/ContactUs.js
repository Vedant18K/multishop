import React from 'react'
import Header from '../navbar/Header'
import SearchBar from '../Search/SearchBar'
import HeaderTwo from '../navbar/HeaderTwo'
import FooterCard from '../footer/FooterCard'
import MapComponent from './MapComponent';


const ContactUs = () => {
    return (
        <div>
            <div>
                <Header />
                <SearchBar />
                <HeaderTwo />
                <div className='container-fluid'>
                    <div className=' mt-10 border-4 p-3'>
                        Home/  Contact
                    </div>
                    <div className='mt-5'>Contact Us</div>
                    <div className='flex  py-5'>
                        <div>
                            <input type='text' className='w-[700px] border-2 py-3 px-1' placeholder='Your Name' />
                            <input type='email' className='w-[700px] border-2 mt-10 py-3 px-1' placeholder='Your Email' />
                            <input type='text' className='w-[700px] border-2 mt-10 py-3 px-1' placeholder='Subject' />
                            <textarea type='text' className='w-[700px] border-2 mt-10 py-3 px-1' placeholder='Message' />
                            <div><button className='bg-yellow-500 px-10 py-2 rounded-md mt-10'>Send Message</button></div>
                        </div>
                        <div className='px-[200px]'>
                            <div >
                                {/* Other components or content */}
                                <MapComponent /> {/* Use your MapComponent */}
                                {/* Other components or content */}
                            </div>
                        </div>
                    </div>
                </div>
                <FooterCard />
            </div>
        </div>
    )
}

export default ContactUs