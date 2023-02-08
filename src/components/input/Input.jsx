import React from "react";
import styled from "styled-components";
import { useInput } from "../../hooks/useInput";

const Input = () => {
  const email = useInput("", "email", true);
  const passwordInput = useInput("", "password", true);

  return (
    <Container>
      <input
        onChange={email.changeHnadler}
        onBlur={email.onBlurHandler}
        {...email}
        placeholder="Enter your email"
      />
      {email.isDirty && <ErrorText>{email.isDirty}</ErrorText>}
      <input
        onChange={passwordInput.changeHnadler}
        {...passwordInput}
        onBlur={passwordInput.onBlurHandler}
        placeholder="Enter your password"
      />
      {passwordInput.isDirty && <ErrorText>{passwordInput.isDirty}</ErrorText>}
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  height: 200px;
  border: 5px solid orange;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 4rem;
  border-radius: 10px;
  -webkit-box-shadow: -11px 13px 19px 0px rgba(206, 171, 35, 0.2);
  -moz-box-shadow: -11px 13px 19px 0px rgba(206, 171, 35, 0.2);
  box-shadow: -11px 13px 19px 0px rgba(206, 171, 35, 0.2);

  input {
    width: 300px;
    height: 20px;
    border-radius: 10px;
    margin-top: 1rem;
    padding: 5px 5px;
  }
`;

const ErrorText = styled.h3`
  color: red;
`

export default Input;
