import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// State Management (Recoil JS)
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
