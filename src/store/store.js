import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

import { contactReducer } from "./contact/reducer";

const store = createStore(contactReducer, applyMiddleware(thunk));

export { store };
