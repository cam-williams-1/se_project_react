import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

export default function Profile({
  clothingItems,
  handleCardClick,
  weatherData,
  handleAddClick,
  onEditProfile,
  handleLogout,
  onCardLike,
}) {
  return (
    <section className="profile">
      <SideBar onEditProfile={onEditProfile} handleLogout={handleLogout} />
      <ClothesSection
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
        onCardLike={onCardLike}
      />
    </section>
  );
}
