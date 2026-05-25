import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

//odwzoruj 1 do 1 działająca podstronę Contact. jsx na podstawie zdjęcia. użyj jako odnośnik kodu z głównej strony Home.jsx, dodaj działający Navbar użyj tych samych klas
