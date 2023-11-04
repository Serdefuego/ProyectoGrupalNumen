import CardsContainer from './components/Cards/CardsContainer'
import CartContext from './context/CartContext'
import Cart from './components/Cart/Cart'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './Components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <CartContext>
      <Navbar />
      <Home />
      <CardsContainer />
      <Cart />
      <Footer />
    </CartContext>
    </>
  )
}

export default App
