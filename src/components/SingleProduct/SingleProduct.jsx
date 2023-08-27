import RelatedProduct from "./RelatedProduct/RelatedProduct"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaCartPlus } from "react-icons/fa";
import ProductImage from '../../assets/products/earbuds-prod-2.webp'

const SingleProduct = () => {
    return (
        <>
            <div className="main py-10">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid grid-cols-1  md:grid-cols-2 mb-4 ">

                        <div className="content mb-6">
                            <h2 className="text-2xl font-bold my-2">Title</h2>
                            <h2 className="text-xl font-semibold my-2">Price</h2>
                            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptatem autem dicta ratione, minima a ad repellat. Laborum dolore blanditiis voluptatum expedita suscipit voluptatem impedit laboriosam dignissimos ex obcaecati, iure tempore quam error officia. Veritatis harum earum dolores mollitia, possimus ipsam sapiente eum, quas, odit quidem voluptatibus. Excepturi, quas eveniet!</p>

                            <div className="cart-btn my-5 flex gap-4">
                                <div className="item-btn">
                                    <button className="text-xl font-bold border border-slate-500 py-1 px-3">-</button>
                                    <button className="text-xl font-semibold border border-slate-500 py-1 px-3">Val</button>
                                    <button className="text-xl font-bold border border-slate-500 py-1 px-3">+</button>
                                </div>
                                <button className="flex items-center gap-2 border border-gray-400 px-4 py-1 bg-violet-600 text-white">
                                    <span><FaCartPlus /></span> Add To Cart</button>
                            </div>
                            <div className="share_category">
                                <div className="text-1 mb-2">
                                    <span className="text-lg text-gray-700 font-bold mr-1">Category:</span>
                                    <span className="text-slate-500">Category Name</span>
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
                        <div className="image mt-4 block overflow-hidden">
                            <img src={ProductImage} alt="" className="hover:scale-105 duration-150" />
                        </div>
                    </div>
                    <RelatedProduct />
                </div>
            </div>
        </>
    )
}

export default SingleProduct
