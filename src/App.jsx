import CardsContainer from './components/Cards/CardsContainer'
import CartContext from './context/CartContext'
import Cart from './components/Cart/Cart'
import './App.css'

function App() {

  return (
    <>
    <CartContext>
      <CardsContainer />
      <Cart />
    </CartContext>
    </>
  )
}

export default App
