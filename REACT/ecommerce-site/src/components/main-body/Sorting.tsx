import { useState } from "react";
import "../../css/Main-body/Sorting/Sorting.css";

const Sorting = () => {
  const [open, setOpen] = useState([false, false, false, false]);

  const toggleCategory = (index: number) => {
    setOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="main-parent">
      <ul className="parent-category">
        <li className="child-categories" onClick={() => toggleCategory(0)}>
          <p>Category</p>
          {open[0] ? (
            <img src="src/assets/chevron-right.png" alt="chevron right" />
          ) : (
            <img src="src/assets/chevron-down.png" alt="chevron down" />
          )}
        </li>
        <ul className="grandChild">
          <li className="innerChild">
            <p>Women</p>
            {open[0] ? (
              <img src="src/assets/chevron-right.png" alt="chevron right" />
            ) : (
              <img src="src/assets/chevron-down.png" alt="chevron down" />
            )}
          </li>
          <ul className="innerChild2">
            {/* First input */}
            <li className="inputs">
              <div className="indivisualInput">
                <input type="checkbox" name="Tops" id="Tops" />
                <p>Tops</p>
              </div>
              <p className="quantity">37</p>
            </li>
            {/* Second input */}
            <li className="inputs">
              <div className="indivisualInput">
                <input type="checkbox" name="Jackets" id="Jackets" />
                <p>Jackets</p>
              </div>
              <p className="quantity">22</p>
            </li>
            {/* Third input */}
            <li className="inputs">
              <div className="indivisualInput">
                <input type="checkbox" name="Sweaters" id="Sweaters" />
                <p>Sweaters</p>
              </div>
              <p className="quantity">31</p>
            </li>
          </ul>
          <li className="innerChild">
            <p>Men</p>
            {open[0] ? (
              <img src="src/assets/chevron-right.png" alt="chevron right" />
            ) : (
              <img src="src/assets/chevron-down.png" alt="chevron down" />
            )}
          </li>
          <li className="innerChild">
            <p>Kids</p>
            {open[0] ? (
              <img src="src/assets/chevron-right.png" alt="chevron right" />
            ) : (
              <img src="src/assets/chevron-down.png" alt="chevron down" />
            )}
          </li>
          <li className="innerChild">
            <p>Sports</p>
            {open[0] ? (
              <img src="src/assets/chevron-right.png" alt="chevron right" />
            ) : (
              <img src="src/assets/chevron-down.png" alt="chevron down" />
            )}
          </li>
          <li className="innerChild">
            <p>Casual</p>
            {open[0] ? (
              <img src="src/assets/chevron-right.png" alt="chevron right" />
            ) : (
              <img src="src/assets/chevron-down.png" alt="chevron down" />
            )}
          </li>
        </ul>
        <li className="child-categories" onClick={() => toggleCategory(1)}>
          <p>Brands</p>
          {open[1] ? (
            <img src="src/assets/chevron-right.png" alt="chevron right" />
          ) : (
            <img src="src/assets/chevron-down.png" alt="chevron down" />
          )}
        </li>
        <li className="child-categories" onClick={() => toggleCategory(2)}>
          <p>Price</p>
          {open[2] ? (
            <img src="src/assets/chevron-right.png" alt="chevron right" />
          ) : (
            <img src="src/assets/chevron-down.png" alt="chevron down" />
          )}
        </li>
        <li className="child-categories" onClick={() => toggleCategory(3)}>
          <p>Size</p>
          {open[3] ? (
            <img src="src/assets/chevron-right.png" alt="chevron right" />
          ) : (
            <img src="src/assets/chevron-down.png" alt="chevron down" />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sorting;
