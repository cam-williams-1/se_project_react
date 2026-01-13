import "./ItemCard.css";
import defaultLikeIcon from "../../assets/default-like.svg";
import likeActive from "../../assets/like-active.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUser";

// item is the destructed props
function ItemCard({ item, handleCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const onCardClick = () => {
    handleCardClick(item);
  };

  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };

  // Only show like button if user is logged in (currentUser exists and has _id)
  const showLikeButton = currentUser && currentUser._id;

  // has the currentUser liked this item?
  const isLiked = item.likes.some((id) => id === currentUser?._id);

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {showLikeButton && (
          <button className="card__like-btn" onClick={handleLike}>
            <img src={isLiked ? likeActive : defaultLikeIcon} alt="like" />
          </button>
        )}
      </div>
      <img
        onClick={onCardClick}
        className="card__img"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
