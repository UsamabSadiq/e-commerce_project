import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext()

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartSubTotal, setCartSubTotal] = useState(0)
    const location = useLocation()

    useEffect(() => { }, [cartItem])


    const handleAddToCart = () => { }
    const handleRemoveFromCart = (product) => { }
    const handleCartProductQuantity = (type, product) => { }

    return (
        <Context.Provider value={{
            categories,
            setCategories,
            products,
            setProducts,
            cartItem, setCartItem,
            cartCount, setCartCount,
            cartSubTotal, setCartSubTotal,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartProductQuantity

        }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext