import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userSlice from "./redux/userSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

let store = configureStore({
  // reducer này chính là rootReducer
  reducer: {
    userSlice,
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
