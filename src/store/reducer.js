// reducer.js

const initialState = {
  input1: "",
  input2: "",
  operation: "+",
  totalOperations: 0,
  result: null,
};

const mathReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INPUT1":
      return { ...state, input1: action.payload };
    case "SET_INPUT2":
      return { ...state, input2: action.payload };
    case "SET_OPERATION":
      return { ...state, operation: action.payload };
    case "SET_TOTAL_OPERATIONS":
      return { ...state, totalOperations: state.totalOperations + 1 };
    case "CALCULATE_RESULT":
      const num1 = parseFloat(state.input1);
      const num2 = parseFloat(state.input2);
      let result;
      switch (state.operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          result = null;
      }
      return { ...state, result };
    case "RESET":
      return {
        ...state,
        input1: "",
        input2: "",
        operation: "+",
        result: null,
      };
    default:
      return state;
  }
};

export default mathReducer;
