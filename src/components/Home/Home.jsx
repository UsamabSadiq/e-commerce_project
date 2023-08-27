import React from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import Products from '../Products/Products'

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="main_content">
                <div className="layout max-w-[1200px] mx-auto my-3 px-2">
                    <Category />
                    <Products heading='Popular Products' />

                </div>
            </div>
        </div>
    )
}

export default Home
