import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUser.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

export default function EditProfileModal({
  isOpen,
  closeActiveModal,
  onUpdateUser,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  // Pre-fill form with current user data when modal opens
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [currentUser, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ name, avatar });
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText="Save Changes"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="profile-name" className="modal__label">
        Name * {/* add form validation later */}
        <input
          required
          type="text"
          name="Name"
          className="modal__input"
          id="profile-name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="profile-avatar" className="modal__label">
        Avatar URL * {/* add form validation later */}
        <input
          required
          type="url"
          name="avatar"
          className="modal__input"
          id="profile-avatar"
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </label>
    </ModalWithForm>
  );
}
