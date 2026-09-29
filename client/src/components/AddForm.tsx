import { useState } from "react";

const AddForm = () => {
    const [isAddFormVisible, setIsAddFormVisible] = useState(false);

    const toggleAddForm = () =>
      setIsAddFormVisible(!isAddFormVisible);
    const closeAddForm = () => setIsAddFormVisible(false);


  return (
    <>
      <p>
        <button onClick={toggleAddForm} className="add-product-button">
          Add A Product
        </button>
      </p>
      <div className={`add-form ${isAddFormVisible ? "visible" : ""}`}>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name:</label>
            <input type="text" id="product-name" name="product-name" required />
          </div>
          <div className="input-group">
            <label htmlFor="product-price">Price:</label>
            <input
              type="number"
              id="product-price"
              name="product-price"
              min="0"
              step="0.01"
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
