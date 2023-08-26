import React from 'react'
import Bannerimg from '../../../assets/banner-img.png'
const Banner = () => {
    return (
        <>
            <div className="flex  bg-gradient-to-r from-fuchsia-600 to-violet-700 lg:h-[93vh] ">
                <div className="main max-w-[1200px] mx-auto grid grid-cols-1  lg:grid-cols-2 md:place-items-center">
                    <div className="content text-white ">
                        <h1 className='text-8xl md:text-[10rem] font-semibold text-center uppercase'>SALES</h1>
                        <p className=' text-base text-center px-6 mb-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellat dicta iste eius labore! Dolorum? Lorem ipsum dolor sit amet consectetur .</p>

                        <div className="btn mt-4 flex justify-center gap-6 items-center mb-3">
                            <div className=" px-8 py-3 outline outline-white hover:bg-white hover: hover:text-black font-semibold">Read More</div>
                            <div className=" px-8 py-3 outline outline-white bg-white text-black font-semibold hover:bg-transparent hover:text-white">Shop Now</div>

                        </div>
                    </div>
                    <div className="banner-img ">
                        <img src={Bannerimg} alt="" className='mx-auto w-96 h-[90%]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
