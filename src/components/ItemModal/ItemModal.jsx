import "./ItemModal.css";
import closeBtn from "../../assets/close-btn.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUser.jsx";

function ItemModal({ activeModal, closeActiveModal, card, deleteItemHandler }) {
  const onDeleteClick = () => {
    deleteItemHandler(card);
  };
  const currentUser = useContext(CurrentUserContext);

  // Checking if the current user is the owner of the current clothing item
  const isOwn = currentUser && card.owner === currentUser._id;

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content_type_img">
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close-btn"
        >
          <img src={closeBtn} alt="close" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__img" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
        {isOwn && (
          <button
            onClick={onDeleteClick}
            type="button"
            className="modal__delete-btn"
          >
            Delete Item
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemModal;
