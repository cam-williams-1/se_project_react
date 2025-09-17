import "./ItemModal.css";
import closeBtn from "../../assets/close-btn.svg";

function ItemModal({ activeModal, closeActiveModal, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__content modal__content_type_img">
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close-btn"
        >
          <img src={closeBtn} alt="close" />
        </button>
        <img src={card.link} alt="clothing image" className="modal__img" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
