import React from 'react'
import newsletterImg from '../../../assets/newsletter-bg.jpeg'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";





const Newsletter = () => {
    return (
        <>
            <div className=" main flex justify-center ">
                <img src={newsletterImg} alt="" className='absolute h-[400px] w-full' />
                <div className="content relative top-0 m-auto flex flex-col items-center justify-center h-[53vh] ">
                    <h3 className='uppercase text-slate-500 leading-8 font-semibold'>newsletter</h3>
                    <h2 className='uppercase text-black text-lg px-2 md:text-2xl font-semibold leading-7 '>Sign Up for latest updates and offers</h2>
                    <div className="input flex gap-4 flex-col md:flex-row  my-3 items-center">
                        <input type="text" placeholder='Email Address' className='w-72 text-base pl-2  py-1 outline-slate-400' />
                        <button className='px-4 py-1 bg-violet-700 text-white'>Subscribe</button>
                    </div>
                    <p className='text-slate-500 leading-8 text-sm 
                    md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <div className="social-icons flex gap-3 items-center">
                        <div className="icon border-2 p-[5px] bg-slate-700 rounded-full">
                            <FaFacebookF size={18} />
                        </div>
                        <div className="icon p-[5px] bg-slate-700 rounded-full">
                            <FaTwitter size={18} />
                        </div>
                        <div className="icon p-[5px] bg-slate-700 rounded-full">
                            <FaInstagram size={18} />
                        </div>
                        <div className="icon p-[5px] bg-slate-700 rounded-full">
                            <FaLinkedin size={18} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter
