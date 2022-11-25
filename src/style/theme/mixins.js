const mixins = {
  // flex
  flexContainer: (
    direction = "row",
    justifyContent = "flex-start",
    alignItem = "left"
  ) => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${alignItem};
    justify-content: ${justifyContent};
  `,
};
export default mixins;
