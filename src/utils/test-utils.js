import { Provider } from "react-redux";

import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

import { contactReducer } from "../store/contact/reducer";

export function setupTestStore() {
  const refObj = {};

  beforeEach(() => {
    const store = createStore(contactReducer, applyMiddleware(thunk));
    refObj.store = store;
    refObj.Wrapper = function Wrapper({ children }) {
      return <Provider store={store}>{children}</Provider>;
    };
  });

  return refObj;
}
