import { useState, useContext } from 'react'
import useFetch from "../../hooks/useFetch"
import { useParams } from "react-router-dom";

import RelatedProduct from "./RelatedProduct/RelatedProduct"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaCartPlus } from "react-icons/fa";

import { Context } from "../../utils/context";

const SingleProduct = () => {

    const { handleAddToCart } = useContext(Context)

    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`)

    if (!data) return; // iss line ki waja sa hamain optional chaining nhi lagani pary gi, incase data nhi aya tw yahin sa return ho jaye ga.
    const product = data.data[0].attributes


    const increment = () => {
        setQuantity(prevState => prevState + 1)
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prevState => prevState - 1)
        } else {
            setQuantity(quantity)
        }
    }

    // console.log('categoryid', product.categories.data[0].id);

    return (
        <>
            <div className="main py-10">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid grid-cols-1  md:grid-cols-2 mb-4 place-items-center gap-3">

                        <div className="content mb-6">
                            <h2 className="text-2xl font-bold my-2">{product.title}</h2>
                            <h2 className="text-xl font-semibold my-2">{product.price}</h2>
                            <p className="text-sm">{product.description}</p>

                            <div className="cart-btn my-5 flex gap-4">
                                <div className="item-btn">
                                    <button className="text-xl font-bold border border-slate-500 py-1 px-3" onClick={decrement}>-</button>
                                    <button className="text-xl font-semibold border border-slate-500 py-1 px-3">{quantity}</button>
                                    <button className="text-xl font-bold border border-slate-500 py-1 px-3" onClick={increment}>+</button>
                                </div>
                                <button className="flex items-center gap-2 border border-gray-400 px-4 py-1 bg-violet-600 text-white" onClick={() => {
                                    handleAddToCart(data.data[0], quantity)
                                    setQuantity(1)
                                }}>
                                    <span><FaCartPlus /></span> Add To Cart
                                </button>
                            </div>
                            <div className="share_category">
                                <div className="text-1 mb-2">
                                    <span className="text-lg text-gray-700 font-bold mr-1">Category:</span>
                                    <span className="text-slate-500">{product.categories.data[0].attributes.title}</span>
                                </div>
                                <div className="text-2 mt-2 flex">
                                    <span className="text-lg text-gray-700 font-bold mr-1">Share:</span>
                                    <span className="flex items-center text-gray-500  gap-2">
                                        <FaFacebookF size={18} />
                                        <FaTwitter size={18} />
                                        <FaInstagram size={18} />
                                        <FaLinkedin size={18} />
                                        <FaPinterest size={18} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="image mt-4 block overflow-hidden bg-gray-200 w-[70%]">
                            <img src={`http://localhost:1337${product?.image.data[0].attributes.url}`
                            } alt="" className="hover:scale-105 duration-150" />
                        </div>
                    </div>
                    <RelatedProduct productId={id} categoryId={product.categories.data[0].id} />
                </div>
            </div>
        </>
    )
}

export default SingleProduct
