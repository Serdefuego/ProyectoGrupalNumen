import { useContext, useState } from "react"
import { CartProvider } from "../../context/CartContext"
import Cards from "./Cards"
import ModalContainer from "../Modal/ModalContainer"
import { CardsModal } from "./CardsModal"
import "./Cards.css"

const CardsContainer = () => {
  const value = useContext(CartProvider)
  const {products, addToCart} = value

  const [cardModal, setCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <div className="cont-cards">
        {products.map(card => 
          <Cards 
            key={card.id}
            card={card}
            cardModal={cardModal}
            setCardModal={setCardModal}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )} 
      </div>
      {cardModal && 
        <ModalContainer 
          show={cardModal} 
          onHide={() => setCardModal(false)}
          className='modal-card-container'
        >
          <CardsModal card={selectedCard} addToCart={addToCart}/>
        </ModalContainer>
      }
    </>
  )
}

export default CardsContainer