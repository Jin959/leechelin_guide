import { keyframes } from "styled-components";

const animations = {
  silding: (startX = "0", endX = "0", startY = "0", endY = "0") => keyframes`
    from {
      transform: translate(${startX}, ${startY});
    }
    to {
      transform: translate(${endX}, ${endY});
    }
  `,

  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1.0;
    }
  `,

  slidingWithRotation: (
    startX = "50vw",
    startY = "50vh",
    endX = "0",
    endY = "0"
  ) => keyframes`
    from {
      transform: translate(${startX}, ${startY}) rotate(0);
    }
    to {
      transform: translate(${endX}, ${endY}) rotate(360deg);
    }
  `,
};

export default animations;
