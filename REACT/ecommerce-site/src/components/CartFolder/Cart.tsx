import "../../css/Cart-Folder/cart.css";
import { useCart } from "../../context/usecontext";

interface CartProps {
  closeCart: () => void;
}

const Cart: React.FC<CartProps> = ({ closeCart }) => {
  const { cart, removeItem, increaseQuantity, decreaseQuantity } = useCart();
  const freeShippingThreshold: number | any = 100;

  const subtotal: number | any = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const progressPercentage = Math.min(
    (subtotal / freeShippingThreshold) * 100,
    100
  );

  const amountToFreeShipping: number =
    freeShippingThreshold.toFixed(2) - subtotal.toFixed(2);

  return (
    <div className="mainCart">
      <div className="section1">
        <div className="closeCart">
          <h3>Cart</h3>
          <img src="src/assets/x.png" alt="X" onClick={closeCart} />
        </div>

        <div className="progressBar">
          <p className="paragraph">
            You're $
            {amountToFreeShipping > 0 ? amountToFreeShipping.toFixed(2) : 0}{" "}
            away from free shipping
          </p>
          <div className="bar">
            <div
              className="progress"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <ul className="mainList">
          {cart.map((item) => (
            <li className="listItem" key={item.id}>
              <div className="img">
                <img src={item.image} alt="image" />
              </div>

              <div className="item-info">
                <div className="titleAndPrice">
                  <h2>{item.title}</h2>
                  <p>{`$${item.price * item.quantity}`}</p>
                </div>

                <div className="quantity">
                  <div className="increaseOrDecrease">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button
                    className="delete"
                    onClick={() => removeItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer">
        <div className="upperSection">
          <h3>Subtotal</h3>
          <h3>{`$${subtotal.toFixed(2)}`}</h3>
        </div>
        <button className="checkout">Continue to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
