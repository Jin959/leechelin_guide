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
    endY = "0",
    rotateFrom = "0",
    roatateTo = "360deg"
  ) => keyframes`
    from {
      transform: translate(${startX}, ${startY}) rotate(${rotateFrom});
    }
    to {
      transform: translate(${endX}, ${endY}) rotate(${roatateTo});
    }
  `,

  scaleWithRotation: (
    scaleStart = "0.5",
    scaleEnd = "1",
    rotateStart = "0",
    rotateEnd = "360deg",
  ) => keyframes`
    from {
      transform: scale(${scaleStart}, ${scaleStart}) rotate(${rotateStart})
    }
    to {
      transform: scale(${scaleEnd}, ${scaleEnd}), rotate(${rotateEnd});
    }
  `,
};

export default animations;
