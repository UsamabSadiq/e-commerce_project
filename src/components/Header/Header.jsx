import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';

import Search from './Search/Search';
import Cart from '../Cart/Cart'
import { Context } from '../../utils/context'


const Header = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const handleScroll = () => {
        const scrollValue = window.scrollY
        if (scrollValue > 200) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <div className={`main bg-black text-white w-full h-14 z-30 ${scroll ? ' sticky top-0' : ""}`} >
                <div className="nav-content max-w-[1200px] mx-auto grid grid-cols-3 md:px-6 pt-3 place-items-center">
                    <div className="md:hidden" onClick={() => setOpen(!open)}>{open ? <FaXmark className="text-lg" /> : <FaBars />}</div>
                    <ul className={`left md:flex gap-6 items-center ${open ? 'z-30 bg-white text-black flex flex-col justify-center absolute top-[3.6rem] w-full h-32' : 'hidden'}`}>
                        <li className="text-sm font-semibold uppercase cursor-pointer" onClick={() => navigate('/')}>Home</li>
                        <li className="text-sm font-semibold uppercase cursor-pointer">About</li>
                        <li className="text-sm font-semibold uppercase cursor-pointer">Category</li>
                    </ul>
                    <div className="center text-2xl font-bold cursor-pointer uppercase" onClick={() => navigate('/')}>jsDevStore</div>
                    <div className="right flex gap-3 items-center">
                        <TbSearch onClick={() => setShowSearch(true)} className="text-xl cursor-pointer" />
                        <AiOutlineHeart className="text-xl cursor-pointer" />
                        <span className="relative">
                            <CgShoppingCart onClick={() => setShowCart(true)} className="text-xl cursor-pointer" />
                            <span className="absolute top-[-5px] right-[-12px] min-w-[20px] text-center bg-[#8e2de2] text-xs rounded-lg">5</span>
                        </span>
                    </div>
                </div>
            </div>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    )
}

export default Header




