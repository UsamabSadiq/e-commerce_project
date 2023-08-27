import React from 'react'
import cat1 from '../../../assets/category/cat-1.jpg'
const Category = () => {
    return (
        <>
            <div className="main">
                <div className="img_content grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="category  overflow-hidden cursor-pointer ">
                        <img src={cat1} alt="" className='hover:scale-110 block duration-300' />
                    </div>
                    <div className="category  overflow-hidden cursor-pointer ">
                        <img src={cat1} alt="" className='hover:scale-110 block duration-300' />
                    </div>
                    <div className="category  overflow-hidden cursor-pointer ">
                        <img src={cat1} alt="" className='hover:scale-110 block duration-300' />
                    </div>
                    <div className="category  overflow-hidden cursor-pointer ">
                        <img src={cat1} alt="" className='hover:scale-110 block duration-300' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
