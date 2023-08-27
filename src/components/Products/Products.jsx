import React from 'react'
import Product from './Product/Product'

const Products = ({ innerPage, heading }) => {
    return (
        <>
            <div className="main my-4">
                {!innerPage && <> <div className="section-heading text-lg font-semibold uppercase">{heading}</div>
                    <div className="border-b-2 w-7 mb-4 border-violet-700"></div></>}
                <div className="productList mt-8 grid grid-cols-1 gap-6 place-items-center md:grid-cols-3 lg:grid-cols-4">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </>
    )
}

export default Products
