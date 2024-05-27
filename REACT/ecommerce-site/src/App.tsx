import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import BreadCrums from "./components/BreadCrums";
import Main from "./components/Main";
import Cart from "./components/CartFolder/Cart";
import { ContextProvider, useCart } from "./context/usecontext";
import "./css/index.css";
import Footer from "./components/Footer";

// Function to set the body's overflow property
const setOverflowHidden = (hidden: boolean) => {
  document.body.style.overflow = hidden ? "hidden" : "auto";
};

const App: React.FC = () => {
  return (
    <ContextProvider>
      <AppContent />
    </ContextProvider>
  );
};

const AppContent: React.FC = () => {
  const { openCart, setOpenCart } = useCart();

  useEffect(() => {
    setOverflowHidden(openCart); // Update overflow based on cart state
    return () => {
      setOverflowHidden(false); // Reset overflow when component unmounts
    };
  }, [openCart]);

  return (
    <div>
      <Navbar openCart={() => setOpenCart(true)} />
      <BreadCrums />
      <Main />
      <div className={openCart ? "cartParent" : "cartHidden"}>
        <div className="flex1" onClick={() => setOpenCart(false)}></div>
        <div className="CartChild">
          <Cart closeCart={() => setOpenCart(false)} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
