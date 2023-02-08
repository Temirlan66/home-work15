import React from "react";
import styled from "styled-components";
import { useCounter } from "../../hooks/useCounter";

const Counter = () => {
  const { count, increment, decremnt, resetHandler } = useCounter(4, 2);

  return (
    <Container>
      <h2>{count}</h2>
      <BntContainer>
        <StyledBtn onClick={increment}>Increment</StyledBtn>
        <StyledBtn onClick={decremnt}>Decrement</StyledBtn>
        <StyledBtn onClick={resetHandler}>Reset</StyledBtn>
      </BntContainer>
    </Container>
  );
};
const Container = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  width: 550px;
  border: 5px solid orange;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  -webkit-box-shadow: -11px 13px 19px 0px rgba(206, 171, 35, 0.2);
-moz-box-shadow: -11px 13px 19px 0px rgba(206, 171, 35, 0.2);
box-shadow: -11px 13px 19px 0px rgba(206, 171, 35, 0.2);

  h2 {
    color: orange;
  }
`;

const BntContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const StyledBtn = styled.div`
  width: 150px;
  height: 30px;
  border-radius: 10px;
  border: 3px solid orange;
  padding: 5px 5px;
  color: orange;
  align-items: center;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: orange;
    color: white;
  }
`;
export default Counter;
