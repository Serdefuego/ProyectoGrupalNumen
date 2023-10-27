/* eslint-disable react/prop-types */

export const CardsModal = ({card, addToCart}) => {
    const {id, title, img, shortDesc, price} = card

  return (
    <>
        <img src={img} alt={title}  className="modal-cards-img"/>
        <div className="modal-cards-info">
            <h3>{title}</h3>
            <p>{shortDesc}</p>
            <span>$ {price}</span>
            <button 
                onClick={() => addToCart(id)}
                className="cards-btn"
            >
                Agregar al carrito
            </button> 
        </div>
    </>
  )
}
