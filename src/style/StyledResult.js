import styled from "styled-components";
import mixins from "./theme/mixins";
import animations from "./theme/anmations";

export const StyledResult = styled.div`
  width: 100vw;
  height: 100vh;
  ${mixins.flexContainer("column", "space-around", "center")}

  /* @media screen and (max-width: 800px) {
    overflow: scroll;
  } */
`;

export const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 50px;
  animation: 1s ${animations.silding("50vw")} ease-in-out;
`;

export const ResContatiner = styled.div`
  width: 60vw;

  ${mixins.flexContainer("row", "space-between")}
  flex-wrap: wrap;
  gap: 1rem;

  overflow-x: hidden;
  overflow-y: scroll;

  overscroll-behavior: contain;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #ccc;
  }
`;

export const BtnContainer = styled.div`
  width: 60vw;
  margin: 1rem auto;
  ${mixins.flexContainer("row", "space-around")}
  flex-wrap: wrap;
  gap: 10px;
  

  & > * {
    border: 5px solid black;
    border-radius: 20px;
    padding: 0.5rem;
    ${mixins.flexContainer("row", "center", "center")};
  }

  & > :hover {
    color: white;
    padding: 0.5rem;
    background-color: black;
  }
`;
