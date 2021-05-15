export const value = {
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: "auto"
};

export const lazy = (value) => value;

export const reducer = (prevState, { type, payload }) => {
  console.log("reducer is called");
  console.log(prevState);
  console.log(type);
  switch (type) {
    case "UPDATE": {
      const count = payload.value < 0 ? 0 : payload.value;
      return {
        ...prevState,
        [payload.name]: count
      };
    }
    case "RESET":
      return value;
    default:
      throw new Error("invalid case");
  }
};
