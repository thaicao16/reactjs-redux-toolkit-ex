import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import store from "./state/store";
// import App from "./App";
import store from "./redux-saga/state/sagaStore";
import App from "./AppSaga";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
