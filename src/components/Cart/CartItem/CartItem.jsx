import { useContext } from 'react'
import { FaXmark } from "react-icons/fa6";

import { Context } from '../../../utils/context';

// import prodImg from '../../../assets/products/earbuds-prod-3.webp'

const CartItem = () => {
    const { cartItem, cartSubTotal, handleCartProductQuantity, handleRemoveFromCart } = useContext(Context)
    // console.log(cartItem);
    return (
        <>
            {cartItem.map(item => {
                return (
                    <div key={item.id} className="product_info grid grid-cols-3 gap-3 px-3 my-3">
                        <div className="img bg-gray-100 flex justify-center p-1">
                            <img src={`http://localhost:1337${item?.attributes.image.data[0].attributes.url}`
                            } alt="" />
                        </div>
                        <div className="title flex flex-col justify-center">
                            <h3 className='text-base font-semibold truncate mb-2'>{item.attributes.title}</h3>
                            <div className="btn flex mt-1">
                                <button className="text-lg font-bold border border-slate-500  px-2" onClick={() => handleCartProductQuantity('dec', item)}>-</button>
                                <button className="text-lg font-semibold border border-slate-500  px-2">{item.attributes.quantity}</button>
                                <button className="text-lg font-bold border border-slate-500  px-2" onClick={() => handleCartProductQuantity('inc', item)}>+</button>
                            </div>
                            <div className="total_price mt-2 truncate"> {item.attributes.quantity} x {item.attributes.quantity * item.attributes.price}</div>
                        </div>
                        <div className="icon flex justify-end cursor-pointer" onClick={() => handleRemoveFromCart(item)}>
                            <FaXmark size={18} />
                        </div>
                    </div>
                )
            })

            }

            {/* Bottom Content */}
            <div className="bottom bg-slate-100">
                <div className="amount flex justify-between px-3 mt-2 ">
                    <span className='text-base font-semibold uppercase'>Subtotal:</span>
                    <span className='text-base font-semibold'>Rs: {cartSubTotal}</span>
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
