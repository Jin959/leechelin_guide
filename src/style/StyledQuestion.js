import styled, { css } from "styled-components";
import mixins from "./theme/mixins";
import animations from "./theme/anmations";

const StyledQuestion = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${mixins.flexContainer("column", "space-around")}

  @media screen and (max-width: 800px) {
    overflow: scroll;
  }
`;
export default StyledQuestion;

export const Asking = styled.div`
  padding-right: 3rem;
  animation: 1s ${animations.silding("50vw", "0")} ease-in-out;
`;

export const BtnContainer = styled.div`
  width: 60vw;
  margin: 1rem auto;
  ${mixins.flexContainer("row", "space-around")}
  flex-wrap: wrap;
  gap: 10px;
  animation: 1s ${animations.silding("0", "0", "50vw")} ease-in-out;

  & > * {
    border: 5px solid black;
    border-radius: 20px;
    padding: 0.5rem;
  }

  & > :hover {
    color: white;
    padding: 0.5rem;
    background-color: black;
  }
`;

export const FormContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  animation: 1s ${animations.scaleWithRotation("0", "1", "-180deg")} ease-in-out;

  & input {
    width: 30vw;
    border: 5px solid black;
    border-radius: 20px;
    padding: 1rem;
  }
`;

export const TagBtn = styled.button`
  ${({ tagged }) =>
    tagged &&
    css`
      color: white;
      padding: 0.5rem;
      background-color: black;
    `}
`;
