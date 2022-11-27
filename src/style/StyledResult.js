import styled, { css } from "styled-components";
import mixins from "./theme/mixins";
import animations from "./theme/anmations";

const StyledResult = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${mixins.flexContainer("column", "space-around")}

  @media screen and (max-width: 800px) {
    overflow: scroll;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 50px;
  animation: 1s ${animations.silding("50vw")} ease-in-out;
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

export default StyledResult;