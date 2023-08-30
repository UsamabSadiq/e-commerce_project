import React from 'react'
import { useNavigate } from 'react-router-dom'

const Category = ({ categories }) => {
    const navigate = useNavigate()
    const { data } = categories
    // console.log(data);
    return (
        <>
            <div className="main">
                <div className="img_content grid grid-cols-2 md:grid-cols-4 gap-2">
                    {data?.map(item => {
                        // console.log(item.attributes.image.data.attributes.url)
                        return (

                            <div key={item.id} className="category  overflow-hidden cursor-pointer " onClick={() => navigate(`/category/${item.id}`)}>
                                <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt="" className='hover:scale-110 block duration-300' />
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Category
