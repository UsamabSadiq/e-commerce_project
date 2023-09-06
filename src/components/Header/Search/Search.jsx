import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";
import useFetch from '../../../hooks/useFetch'

const Search = ({ setShowSearch }) => {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const onChange = (e) => {
        setQuery(e.target.value)
    }

    let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)
    if (!query.length) {
        data = null
    }

    return (
        <>
            <div className='main '>
                <div className="content  fixed w-full h-full z-30 top-0 left-0 bg-slate-100">
                    <div className="input flex justify-around  items-center h-16">
                        <input type="text" autoFocus value={query} onChange={onChange} placeholder='Search For Product' className='w-1/2 py-1.5 text-xl font-semibold text-gray-400 px-2 outline-none bg-transparent border-b-2 border-gray-300' />
                        <FaXmark size={18} onClick={() => setShowSearch(false)} className='cursor-pointer' />
                    </div>

                    {/* Search Result Products*/}

                    <div className="searched_product max-w-[1200px] mx-auto px-3">
                        {data?.data?.map(item => {
                            return (
                                <div onClick={() => {
                                    navigate('/product/' + item.id)
                                    setShowSearch(false)
                                }} className="content flex items-center justify-start gap-1 my-2 cursor-pointer" >
                                    <div className="prod_img w-[30%] h-[30%]">
                                        <img src={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}
                                            alt="" className='' />
                                    </div>
                                    <div className="text">
                                        <h3 className='title text-sm font-medium '>{item.attributes.title}</h3>
                                        <p className='desc text-sm text-gray-400 '>{item.attributes.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
