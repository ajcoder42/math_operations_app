// store.js

import { createStore } from "redux";
import mathReducer from "./reducer";

const store = createStore(mathReducer);

export default store;
