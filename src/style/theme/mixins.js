const mixins = {
  // flex
  flexContainer: (
    direction = "row",
    justifyContent = "flex-start",
    alignItem = "left"
  ) => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItem};    
  `,
};
export default mixins;
