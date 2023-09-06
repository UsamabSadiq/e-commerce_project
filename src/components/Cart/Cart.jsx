import { useContext } from 'react'
import { FaXmark } from "react-icons/fa6";
import emptyCart from "../../assets/empty_cart.png";
import CartItem from './CartItem/CartItem';
import { Context } from '../../utils/context';

const Cart = ({ setShowCart }) => {
    const { cartItem } = useContext(Context)
    return (
        <>
            <div className='main fixed top-0 left-0 w-full h-full z-30 flex justify-end'>
                <div className="black-effect bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 w-full h-full"></div>
                <div className="cart-content w-80 md:w-96 bg-white relative  ">

                    {/* Header */}
                    <div className="header grid grid-cols-2 my-2 px-3 ">
                        <h3 className='text-lg font-semibold uppercase'>Shopping Cart</h3>
                        <div onClick={() => setShowCart(false)} className='flex items-center gap-1 justify-end text-gray-400 hover:text-gray-200 cursor-pointer'>
                            <FaXmark size={18} />
                            <p className='text-sm uppercase font-medium '>close</p>
                        </div>
                    </div>

                    <div className="content flex flex-col justify-between gap-4">

                        {/* When Cart Is Empty */}
                        {
                            !cartItem?.length &&
                            <div className="main_empty-cart px-3">
                                <img src={emptyCart} alt="" />
                                <p className='text-sm text-center'>No Product In The Cart</p>
                                <button className="checkout text-lg font-semibold text-white rounded-md w-full my-4 py-2 border-2 bg-violet-700 hover:bg-violet-800">Return To Shop</button>
                            </div>
                        }

                        {/* When There is some Items in the cart */}
                        {
                            cartItem?.length && <CartItem />
                        }
                    </div>

                </div>
            </div>
        </>
    )


}

export default Cart
