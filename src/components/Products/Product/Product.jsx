import React from 'react'
import productImg from '../../../assets/products/earbuds-prod-1.webp'

const Product = () => {
    return (
        <>
            <div className="card border border-gray-200 w-4/5 mx-auto ">
                <div className="thumbnail block overflow-hidden">
                    <img src={productImg} alt="" className='bg-gray-200     hover:scale-105 duration-200' />
                </div>
                <div className="content text-sm px-3 my-3">
                    <p className='desc truncate '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptatem!</p>
                    <span className='price font-semibold'>Rs: 500</span>
                </div>
            </div>
        </>
    )
}

export default Product
