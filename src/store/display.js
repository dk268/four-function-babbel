import numberDiscriminator from "./helpers/numberDiscriminator";

const initialState = {
  upperDisplay: "",
  lowerDisplay: "0",
  minus: false,
  inputType: "CLEAR",
};

const display = (state = initialState, action) => {
  switch (action.type) {
    case inputType.NUMBER: {
      return {
        ...state,
        upperDisplay: numberDiscriminator(state.inputType, action.payload, state.upperDisplay),
      };
    }
    default:
      return state;
  }
};

export default display;
