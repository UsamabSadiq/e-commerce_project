import React from 'react'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from '../../assets/payments.png'
const Footer = () => {
    return (
        <>
            <footer className="main">
                <div className="content max-w-[1200px] mx-auto ">
                    <div className='grid grid-cols-1 place-items-center lg lg:place-items-start md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        <div className="col-1">
                            <h3 className='text-xl  font-semibold mb-2 text-center'>About</h3>
                            <p className='text-slate-500 text-justify px-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quam quis, beatae tenetur, et veniam consequuntur explicabo maxime suscipit hic, laborum amet! Maiores, assumenda commodi?</p>
                        </div>
                        <div className="col-2 px-3">
                            <h3 className='text-xl font-semibold mb-2 text-center'>Contact</h3>

                            <div className='flex gap-2 mb-2 justify-center md:justify-start'>
                                <FaMobileAlt size={22} />
                                <span className='text-slate-500'>090078601</span>
                            </div>
                            <div className='flex gap-2 mb-2 items-center justify-center md:justify-start'>
                                <FaEnvelope size={20} />
                                <span className='text-slate-500'>usamabsadiq@gmail.com</span>
                            </div>
                            <div className='flex gap-2 mb-2'>
                                <FaLocationArrow size={24} className='pt-2' />
                                <span className='text-slate-500'>House no.1423, Street no.16, Mehmodabad no.6, karachi.</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <h3 className='text-xl font-semibold mb-2'>Categories</h3>
                            <ul>
                                <li className='text-slate-500 mb-2'>Headphones</li>
                                <li className='text-slate-500 mb-2'>Smart Watches</li>
                                <li className='text-slate-500 mb-2'>Bluetooth Speakers</li>
                                <li className='text-slate-500 mb-2'>Wireless Earbuds</li>
                                <li className='text-slate-500 mb-2'>Home Theatre</li>
                                <li className='text-slate-500 mb-2'>Projectors</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h3 className='text-xl font-semibold mb-2'>Pages</h3>
                            <ul>
                                <li className='text-slate-500 mb-2'>Home</li>
                                <li className='text-slate-500 mb-2'>About</li>
                                <li className='text-slate-500 mb-2'>Privacy Policy</li>
                                <li className='text-slate-500 mb-2'>Returns</li>
                                <li className='text-slate-500 mb-2'>Terms & Conditions</li>
                                <li className='text-slate-500 mb-2'>Contact us</li>
                            </ul>
                        </div>
                    </div>
                    {/* bottom footer */}
                    <hr />
                    <div className="bottom-main px-2 mt-2 flex flex-col gap-2 items-center md:flex-row md:justify-between ">
                        <p className='text-slate-500 uppercase'>Created By Usama, Premium Ecommerce Solution</p>
                        <img src={Payment} alt="" className='' />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
