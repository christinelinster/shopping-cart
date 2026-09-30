import { useState } from "react";
import type { Product } from "../types";

interface EditFormProps {
  isVisible: boolean;
  onClose: () => void;
  onEditProduct: (product: Product, callback?: () => void) => void;
  product: Product
}

const EditForm = ({
  isVisible,
  onClose,
  onEditProduct,
  product
}: EditFormProps) => {
  const [title, setTitle] = useState(product.title)
  const [price, setPrice] = useState(product.price)
  const [quantity, setQuantity] = useState(product.quantity)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onEditProduct({
      '_id': product._id,
      'title': title,
      'price': price,
      'quantity': quantity
    }, onClose)
  };

  return (
    <div className={`edit-form ${isVisible ? "visible" : ""}`}>
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button onClick={onClose} type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
