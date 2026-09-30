import { useState } from "react";
import type { Product } from "../types";
import EditForm from "./EditForm";

interface ProductItemProps {
  product: Product;
  onEditProduct: (product: Product, callback?: () => void) => void
}

const ProductItem = ({ product, onEditProduct }: ProductItemProps) => {
  const { title, quantity, price } = product;
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button
            className="edit"
            onClick={() =>
              setIsEditFormVisible((currentlyVisible) => !currentlyVisible)
            }
          >
            Edit
          </button>
        </div>
        <button className="delete-button">
          <span>X</span>
        </button>
      </div>
      <EditForm
        isVisible={isEditFormVisible}
        onClose={() => setIsEditFormVisible(false)}
        product={product}
        onEditProduct={onEditProduct}
      />
    </li>
  );
};

export default ProductItem;
