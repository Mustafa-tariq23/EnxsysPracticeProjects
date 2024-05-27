import "../css/navbar/Navbar.css";

import { useState } from "react";

interface NavbarProps {
  openCart: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ openCart }) => {
  const [Isopen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar">
        {/* Logo Start */}
        <section className="logo">
          <img src="/assets/logo.jpg" alt="logo" />
        </section>
        {/* Logo end */}

        {/* Nav Options Start */}
        <section className="navOptions">
          <ul className="list">
            <li className="listItems listItems-1">
              Shop <img src="/assets/chevron-down.png" alt="drop down" />
            </li>
            <li className="listItems">Most Wanted</li>
            <li className="listItems">New Arrivals</li>
            <li className="listItems">Brands</li>
          </ul>
        </section>
        {/* Nav Options end */}

        {/* search and cart functionality */}
        <section className="searchAndCart">
          <div className="search">
            <img src="/assets/search.png" alt="Search img" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
          <img
            src="/assets/shopping-cart.png"
            alt="cart"
            className="cart"
            onClick={openCart}
          />
          <img src="/assets/user.png" alt="user" className="user" />
        </section>
        {/* search and cart functionality end*/}

        {/* hamburger */}
        <section className="hamburger" onClick={() => setIsOpen(!Isopen)}>
          {!Isopen ? (
            <img src="/assets/menu.png" alt="menu" />
          ) : (
            <img src="/assets/x.png" alt="x" />
          )}
        </section>
      </nav>
      {/* Navbar end */}
    </>
  );
};

export default Navbar;
