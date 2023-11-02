import CardsContainer from './components/Cards/CardsContainer'
import CartContext from './context/CartContext'
import Cart from './components/Cart/Cart'
import './App.css'
import Home from './components/Home/Home'

function App() {

  return (
    <>
    <CartContext>
      <Home />
      <CardsContainer />
      <Cart />
    </CartContext>
    </>
  )
}

export default App
