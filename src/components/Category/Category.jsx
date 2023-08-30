import { useParams } from 'react-router-dom'
import Products from '../Products/Products'
import useFetch from '../../hooks/useFetch'

const Category = () => {
    const { id } = useParams()

    const { data } = useFetch(`/api/products/?populate=*&[filters][categories][id]=${id}`)

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
