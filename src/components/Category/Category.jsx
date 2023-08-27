import React from 'react'
import Products from '../Products/Products'

const Category = () => {
    return (
        <>
            <div className='main max-w-[1200px] mx-auto'>
                <div className='pl-4 mb-9'>
                    <div className="text-lg font-semibold uppercase">Single Category</div>
                    <div className="border-b-2 w-7 mb-4 border-violet-700"></div>
                </div>
                <Products innerPage={true} />
            </div>
        </>
    )
}

export default Category
