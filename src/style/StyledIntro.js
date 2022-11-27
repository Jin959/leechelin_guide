import styled, { css } from "styled-components";
import mixins from "./theme/mixins";
import animations from "./theme/anmations";

const StyledIntro = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${mixins.flexContainer("column", "center")}
  gap: 3rem;
`;
export default StyledIntro;

export const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 50px;
  animation: 1s ${animations.silding("50vw")} ease-in-out;
`;

export const Expalins = styled.div`
  text-align: right;
  padding-right: 3rem;
  animation: 1s ${animations.silding("0", "0", "-50vw")} ease-in-out;
`;

export const ImgContainer = styled.div`
  height: 100vh;
  position: absolute;
  gap: 10px;
  ${mixins.flexContainer("column")}
  flex-wrap: wrap;
  padding-top: 1vh;
  z-index: -100;
`;

export const ImgWrapper = styled.div`
  width: 12vw;
  height: 15vh;

  display: flex;
  justify-content: center;

  background-color: #efe6c6;

  border-radius: 50px 10px;
  overflow: hidden;

  flex & img {
    object-fit: cover;
  }

  ${({ animationTime }) =>
    css`
      animation-name: ${animations.fadeIn},
        ${animations.slidingWithRotation("50vw", "100vh")};
      animation-duration: ${animationTime * 0.3}s;
    `}
`;

export const BtnContainer = styled.div`
  margin: 0 2rem;
  animation: 1s ${animations.silding("0", "0", "50vw")} ease-in-out;
  & * {
    border: 5px solid black;
    border-radius: 20px;
    padding: 0.5rem;
  }

  & :hover {
    color: white;
    padding: 1rem;
    background-color: black;
  }
`;
