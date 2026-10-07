import { useContext, useState } from "react";
import { MovieContext, ThemContext } from "../contex";
import CartDetails from "./CartDetails";
import Moon from "/assets/icons/moon.svg";
import Sun from "/assets/icons/sun.svg";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemContext);
  function handleShowCart() {
    setShowCart((cart) => !cart);
  }
  function handleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }
  return (
    <>
      {showCart && <CartDetails onHandleShowCart={handleShowCart} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src="./assets/logo.svg" width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src="./assets/ring.svg" width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleDarkMode}
              >
                <img
                  src={darkMode ? Sun : Moon}
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleShowCart}
              >
                <img
                  src="./assets/shopping-cart.svg"
                  width="24"
                  height="24"
                  alt=""
                />
                {cartData.length > 0 ? cartData.length : ""}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
