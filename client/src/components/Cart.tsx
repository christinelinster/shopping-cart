import { mockCart } from "../mockData/data";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const totalPrice = mockCart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {mockCart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="total">
              Total: {totalPrice.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="checkout-button">
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};
