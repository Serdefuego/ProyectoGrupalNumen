/* eslint-disable react/prop-types */

const Cards = ({card, setCardModal, setSelectedCard}) => {
  const {title, img, price} = card;

  const handleClick = (IdCard) => {
    setSelectedCard(IdCard);
    setCardModal(true);
  };

  return (
    <>
      <div className="cards">
        <img src={img} alt={title} className="cards-img"/>
        <h3 className="cards-title">{title}</h3>
        <span className="cards-price">$ {price}</span>
        <button className="cards-btn" onClick={() => handleClick(card)}>Ver más</button>
      </div>
    </>
  )
}

export default Cards