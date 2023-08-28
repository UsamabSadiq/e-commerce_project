import React from 'react'
import { FaXmark } from "react-icons/fa6";
import prodImg from '../../../assets/products/earbuds-prod-3.webp'


const CartItem = () => {
    return (
        <>
            <div className="product_info grid grid-cols-3 gap-3 px-3 my-3">
                <div className="img bg-gray-100 flex justify-center p-1">
                    <img src={prodImg} alt="" />
                </div>
                <div className="title flex flex-col justify-center">
                    <h3 className='text-base font-semibold truncate mb-2'>TitleTitleTitleTitleTitleTitleTitle</h3>
                    <div className="btn flex mt-1">
                        <button className="text-lg font-bold border border-slate-500  px-2">-</button>
                        <button className="text-lg font-semibold border border-slate-500  px-2">Val</button>
                        <button className="text-lg font-bold border border-slate-500  px-2">+</button>
                    </div>
                    <div className="total_price mt-2 truncate">2 x 50000</div>
                </div>
                <div className="icon flex justify-end">
                    <FaXmark size={18} />
                </div>
            </div>

            {/* Bottom Content */}
            <div className="bottom bg-slate-100">
                <div className="amount flex justify-between px-3 mt-2 ">
                    <span className='text-base font-semibold uppercase'>Subtotal:</span>
                    <span className='text-base font-semibold'>price</span>
                </div>
                <div className='px-2'>
                    <button className="checkout text-lg font-semibold text-white rounded-md w-full mt-7 mb-3  py-2 border-2 bg-violet-700 hover:bg-violet-800">
                        Checkout
                    </button>

                </div>
            </div>
        </>
    )
}

export default CartItem
