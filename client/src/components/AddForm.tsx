import { useState } from "react";
import type { NewProduct } from "../types";

interface AddFormProps {
  onAddProduct: (product: NewProduct, callback?: () => void) => void;
}

const AddForm = ({ onAddProduct }: AddFormProps) => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [title, setTitle] = useState<string | ''>("");
  const [quantity, setQuantity] = useState<number | null>();
  const [price, setPrice] = useState<number | null>();

  const toggleAddForm = () => setIsAddFormVisible(!isAddFormVisible);
  const closeAddForm = () => setIsAddFormVisible(false);

  const handleReset = () => {
    setTitle("");
    setQuantity(null);
    setPrice(null);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (title && quantity && price) {
      onAddProduct({ title, quantity, price }, handleReset);
    }
  };

  return (
    <>
      <p>
        <button onClick={toggleAddForm} className="add-product-button">
          Add A Product
        </button>
      </p>
      <div className={`add-form ${isAddFormVisible ? "visible" : ""}`}>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="product-name">Product Name:</label>
            <input
              type="text"
              id="product-name"
              name="product-name"
              placeholder="Product"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="product-price">Price:</label>
            <input
              type="number"
              id="product-price"
              name="product-price"
              min="0"
              step="0.01"
              placeholder="0.00"
              value={price ?? ''}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="product-quantity">Quantity:</label>
            <input
              type="number"
              id="product-quantity"
              name="product-quantity"
              min="0"
              placeholder="0"
              value={quantity?? ''}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
            />
          </div>
          <div className="actions form-actions">
            <button type="submit">Add</button>
            <button type="button" onClick={closeAddForm}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddForm;
