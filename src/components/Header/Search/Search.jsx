import React from 'react'
import { FaXmark } from "react-icons/fa6";
import prodImg from '../../../assets/products/earbuds-prod-1.webp'

const Search = ({ setShowSearch }) => {
    return (
        <>
            <div className='main '>
                <div className="content  fixed w-full h-full z-30 top-0 left-0 bg-slate-100">
                    <div className="input flex justify-around  items-center h-16">
                        <input type="text" autoFocus placeholder='Search For Product' className='w-1/2 py-1.5 text-xl font-semibold text-gray-400 px-2 outline-none bg-transparent border-b-2 border-gray-300' />
                        <FaXmark size={18} onClick={() => setShowSearch(false)} className='cursor-pointer' />
                    </div>

                    {/* Search Result Products*/}

                    <div className="searched_product max-w-[1200px] mx-auto px-3">
                        <div className="content flex items-center justify-start gap-1 my-2">
                            <div className="prod_img w-[13%]">
                                <img src={prodImg} alt="" className='' />
                            </div>
                            <div className="text">
                                <h3 className='title text-sm font-medium '>TitleTitleTitleTitleTitleTitleTitleTitleTitleTitle</h3>
                                <p className='desc text-sm text-gray-400 '>descdescdescdescdescdescdescdescdescdesc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
