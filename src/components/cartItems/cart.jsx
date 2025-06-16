import { useContext } from "react";
import { cartContext } from "./App";
import CartItems from "./cartItems";
import "./cart.css"; // Add this import

function Cart() {
  let { cart, changeCart } = useContext(cartContext);
  return (
    <div className="cart-container">
      {cart.length < 0 ? (
        <div>buy something dude</div>
      ) : (
        <div>
          <CartItems size={""} />
          <div className="cart-summary">
            <div className="cart-total">
              <span className="bold-text">Total</span>
              <span className="bold-text">EUR €16.80</span>
            </div>
            <button className="cart-button">Go to Checkout</button>
            <button className="cart-button">Continue Shopping</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
