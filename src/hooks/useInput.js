import { useState } from "react";

export const useInput = (initialValue, inputType,validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(null);

  const type =inputType || "text"
  const changeHnadler = (e) => {
    setValue(e.target.value);
  };

  const onBlurHandler = (e) => {
    if (!e.target.value && validations) {
      setDirty("Fill in the field");
    } else {
      setDirty(null);
    }
  };
  return {
    value,
    changeHnadler,
    onBlurHandler,
    isDirty,
    type
  };
};
