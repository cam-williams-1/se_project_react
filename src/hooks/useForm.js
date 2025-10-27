import { useState } from "react";

export function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  function handleChange(evt) {
    const { name, value } = evt.target;
    // creating a new object literal, sets the name as the new value
    setValues({ ...values, [name]: value });
  }
  return { values, setValues, handleChange };
}
