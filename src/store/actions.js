// actions.js

export const setInput1 = (value) => ({
  type: "SET_INPUT1",
  payload: value,
});

export const setInput2 = (value) => ({
  type: "SET_INPUT2",
  payload: value,
});

export const setOperation = (operation) => ({
  type: "SET_OPERATION",
  payload: operation,
});

export const setTotalOperations = () => ({
  type: "SET_TOTAL_OPERATIONS",
});

export const calculateResult = () => ({
  type: "CALCULATE_RESULT",
});

export const reset = () => ({
  type: "RESET",
});
