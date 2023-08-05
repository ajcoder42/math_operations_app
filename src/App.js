// App.js

import { useSelector, useDispatch } from "react-redux";
import {
  setInput1,
  setInput2,
  setOperation,
  setTotalOperations,
  calculateResult,
  reset,
} from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const { input1, input2, operation, totalOperations, result } = useSelector(
    (state) => state
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "input1") {
      dispatch(setInput1(value));
    } else if (name === "input2") {
      dispatch(setInput2(value));
    }
  };

  const handleOperationChange = (op) => {
    dispatch(setOperation(op));
  };

  const handleCalculate = () => {
    dispatch(setTotalOperations());
    dispatch(calculateResult());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="text-2xl font-bold mb-4">
        Total Operations: {totalOperations}
      </div>
      <div className="flex items-center mb-4">
        <input
          type="number"
          className="border p-2 w-32"
          name="input1"
          value={input1}
          onChange={handleInputChange}
        />
        <div className="mx-2"> {operation} </div>
        <input
          type="number"
          className="border p-2 w-32"
          name="input2"
          value={input2}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </div>
      <div className="flex mb-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleOperationChange("+")}
        >
          +
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded"
          onClick={() => handleOperationChange("-")}
        >
          -
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 ml-2 rounded"
          onClick={() => handleOperationChange("*")}
        >
          *
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 ml-2 rounded"
          onClick={() => handleOperationChange("/")}
        >
          /
        </button>
      </div>
      {result !== null && (
        <div className="bg-gray-200 p-4 rounded-md">Result: {result}</div>
      )}
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-4 rounded"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
