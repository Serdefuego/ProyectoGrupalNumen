import { useContext } from "react"
import { CartProvider } from "../../context/CartContext"

const Cart = () => {
  const value = useContext(CartProvider);
  const {cart, deleteProduct, clearCart, total} = value;

  return (
    <div>
      {cart.length > 0 ? 
        <>
          <h2>Carrito</h2>
          {cart.map(({id, title, cantidad, price}) => 
            <div key={id}>
              {/* <img src={img} alt={title} /> */}
              <h3>Titulo: {title}</h3>
              <p>Cantidad: {cantidad}</p>
              <p>Precio: {price}</p>
              <button onClick={() => deleteProduct(id)}>X</button>
            </div>
          )}
          <p>{total}</p>
          <button onClick={() => clearCart()}>Vaciar</button>
        </>
        : 
      <h2>El carrito se encuetra vacio</h2>
      }
    </div>
  )
}

export default Cart