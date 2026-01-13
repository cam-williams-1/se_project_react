import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  isOpen,
  onLogin,
  closeActiveModal,
  changeToRegister,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // values are from state and function from useForm.js
  const { values, handleChange, setValues } = useForm(formData);

  // useEffect(() => {
  //   if (isOpen) {
  //     setValues(defaultValues);
  //   }
  // }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
  }

  // TODO
  // 1. add form validation!
  // 2. Hash password before sending it to backend ?
  // 3. should i move handleChange or delete since this is a sign up form?

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email {/* add form validation later */}
        <input
          required
          type="text"
          name="email"
          className="modal__input"
          id="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          required
          type="text"
          name="password"
          className="modal__input"
          id="password"
          placeholder="Password"
          value={values.password} // does this need to be hashed??
          onChange={handleChange}
        />
      </label>
      <button
        type="button"
        onClick={changeToRegister}
        className="modal__switch-btn"
      >
        or Register
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
