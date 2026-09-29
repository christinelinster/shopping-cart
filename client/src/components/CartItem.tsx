import type {Cart} from '../types/cart'

interface CartItemProps {
  item: Pick<Cart, "title" | "quantity" | "price">
}

export const CartItem = ({item}: CartItemProps) => {
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.quantity}</td>
      <td>${item.price}</td>
    </tr>
  );
};
