import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./Css/index.css";
import { Provider } from "react-redux";
import { store } from "./state/store.tsx";
import { ThemeProvider } from "./Context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
