const inputType = {
  NUMBER: "NUMBER",
  OPERATION: "OPERATION",
  MEMORY: "MEMORY",
  CLEAR: "CLEAR",
  EQUALS: "EQUALS",
};
const initialState = {
  inputType: inputType.NUMBER,
};

const input = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default input;
