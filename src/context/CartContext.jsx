/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import axios from 'axios'

export const CartProvider = createContext()

const CartContext = ({children}) => {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)

  const getProducts = async(url) => {
    const res = await axios.get(url)
    setProducts(res.data)
  }

  useEffect(() => {
    getProducts('http://localhost:3000/products')
  }, [])

  const addToCart = (id) => {
    const inCart = cart.findIndex(item => item.id === id);

    if (inCart !== -1) {
      const newCart = [...cart]
      newCart[inCart] = {
        ...newCart[inCart],
        cantidad: newCart[inCart].cantidad +1
      }
      setCart(newCart);
    } else {
      const agregar = products.find(item => item.id === id)

      if (agregar) {
        setCart([...cart, {...agregar, cantidad: 1}])
      }
    }
  }

  const deleteProduct = (id) => {
    const inCart = cart.findIndex(item => item.id === id);

    if (inCart !== -1) {
      const newCart = [...cart];
      if(newCart[inCart].cantidad > 1) {
        newCart[inCart] = {
          ...newCart[inCart],
          cantidad: newCart[inCart].cantidad - 1
        } 
      } else {
        newCart.splice(inCart, 1)
      }
      setCart(newCart)
    }
  }

  const clearCart = () => {
    setCart([])
  }

  useEffect(() => {
    const getTotal = () => {
      const calculate = cart.reduce((acumulador, item) => 
        acumulador + (item.cantidad * item.price), 0)
      
      setTotal(Math.round(calculate))
    }

    getTotal()
  }, [cart])

  const values = {
    products: products,
    cart: cart,
    addToCart: addToCart,
    deleteProduct: deleteProduct,
    clearCart: clearCart,
    total: total
  }
  
  return (
    <CartProvider.Provider value={values}>
      {children}
    </CartProvider.Provider>
  )
}

export default CartContext