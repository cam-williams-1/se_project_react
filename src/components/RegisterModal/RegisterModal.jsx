import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  isOpen,
  onRegister,
  closeActiveModal,
  changeToLogin,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  // values are from state and function from useForm.js
  const { values, handleChange } = useForm(formData);

  // useEffect(() => {
  //   if (isOpen) {
  //     setValues(defaultValues);
  //   }
  // }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values);
  }

  // TODO
  // 1. add form validation!

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Next"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="register-email" className="modal__label">
        Email {/* add form validation later */}
        <input
          required
          type="email"
          name="email"
          className="modal__input"
          id="register-email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password{" "}
        <input
          required
          type="password"
          name="password"
          className="modal__input"
          id="register-password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="register-name" className="modal__label">
        Name{" "}
        <input
          required
          type="text"
          name="name"
          className="modal__input"
          id="register-name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="register-avatar" className="modal__label">
        Avatar URL{" "}
        <input
          required
          type="url"
          name="avatar"
          className="modal__input"
          id="register-avatar"
          placeholder="Avatar URL"
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
      <button
        type="button"
        onClick={changeToLogin}
        className="modal__switch-btn"
      >
        or Login
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
