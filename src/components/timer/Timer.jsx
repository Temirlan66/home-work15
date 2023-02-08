import React from "react";
import styled from "styled-components";
import { UseTimer } from "../../hooks/useTimer";

const Timer = () => {
  const { isSecond, restartTimer, timer, stopTimer, continueTimer } =
    UseTimer(2);
  return (
    <Container>
      <h1>Timer</h1>
      <h1>{isSecond}</h1>
      <BntContainer>
        {!timer ? (
          <button onClick={stopTimer}>Stop</button>
        ) : (
          <button onClick={continueTimer}>Continue</button>
        )}
        <button onClick={restartTimer}>Restart</button>
      </BntContainer>
    </Container>
  
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  width: 300px;
  height: 250px;
  border: 5px solid orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  -webkit-box-shadow: -11px 13px 19px 0px rgba(206, 171, 35, 0.2);
  -moz-box-shadow: -11px 13px 19px 0px rgba(206, 171, 35, 0.2);
  box-shadow: -11px 13px 19px 0px rgba(206, 171, 35, 0.2);
  h1 {
    color: orange;
  }
`;

const BntContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  button {
    width: 100px;
    height: 40px;
    border: 4px solid orange;
    background-color: transparent;
    border-radius: 10px;
    color: orange;

    &:hover {
      background-color: orange;
      color: white;
    }
  }
`;

export default Timer;
