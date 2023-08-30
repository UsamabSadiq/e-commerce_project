import React from 'react'

const Product = ({ data }) => {
    // console.log('ProductData', data);
    return (
        <>
            <div className="card border border-gray-200 w-4/5 mx-auto ">
                <div className="thumbnail block overflow-hidden">
                    <img src={`http://localhost:1337${data?.image.data[0].attributes.url}`} alt="" className='bg-gray-200 hover:scale-105 duration-200' />
                </div>
                <div className="content text-sm px-3 my-3">
                    <p className='title truncate '>{data?.title}</p>
                    <span className='price font-semibold'>Rs: {data?.price}</span>
                </div>
            </div>
        </>
    )
}

export default Product
