import styled, {css} from "styled-components";
import animations from "./theme/anmations";

export const PostBtn = styled.button`
  width: 30%;
  animation: 1s ${animations.silding("0", "0", "50vw")} ease-in-out;
  & h4 {
    font-size: 20px;
  }
  & p {
    font-size: 15px;
  }

  ${({ animationTime }) =>
    css`
      animation-name: ${animations.fadeIn},
        ${animations.slidingWithRotation("0", "30vh", '0', '0', '420deg')};
      animation-duration: ${animationTime * 0.3}s;
    `}
`;