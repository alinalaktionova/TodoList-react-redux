import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import {Provider, useDispatch} from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import TodoInterface from "./interfaces/TodoInterface";
import {ActionType} from "./actions/ActionInterface";

const store = createStore(rootReducer);
console.dir(store);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
