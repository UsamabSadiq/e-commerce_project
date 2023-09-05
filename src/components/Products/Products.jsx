import React from 'react'
import Product from './Product/Product'

const Products = ({ innerPage, heading, products }) => {
    // const { data } = products
    // console.log('data', data);
    // console.log(products);
    return (
        <>
            <div className="main my-4">
                {!innerPage && <> <div className="section-heading text-lg font-semibold uppercase">{heading}</div>
                    <div className="border-b-2 w-7 mb-4 border-violet-700"></div></>}
                <div className="productList mt-8 grid grid-cols-1 gap-6 place-items-center md:grid-cols-3 lg:grid-cols-4">
                    {
                        products?.data?.map((item) => {

                            return <Product key={item.id} id={item.id} data={item.attributes} />
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Products
