import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/FilterContext.js";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./context/CartContext.js";
import App from "./App.js";
import "./index.css";
import { ScrollToTop } from "./components/Other/ScrollToTop.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <App />
        </FilterProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
