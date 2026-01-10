import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUser.jsx";

export default function ClothesSection({
  handleCardClick,
  handleAddClick,
  clothingItems,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  // Only show items owned by the current user
  const userItems =
    currentUser && currentUser._id
      ? clothingItems.filter((item) => item.owner === currentUser._id)
      : [];

  return (
    <div className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-section__title">Your items</p>
        <button onClick={handleAddClick} className="clothes-section__add-btn">
          + Add new
        </button>
      </div>
      <ul className="clothes-section__list">
        {userItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            handleCardClick={handleCardClick}
            onCardLike={onCardLike}
          />
        ))}
      </ul>
    </div>
  );
}
