export const initialState = { isVisible: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "show":
      return { isVisible: true };
    case "hide":
      return { isVisible: false };
    default:
      return { isVisible: false };
  }
};

export default reducer;
