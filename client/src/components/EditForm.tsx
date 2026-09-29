interface EditFormProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  quantity: number;
  price: number;
}

const EditForm = ({
  isVisible,
  onClose,
  title,
  quantity,
  price,
}: EditFormProps) => {
  return (
    <div className={`edit-form ${isVisible ? "visible" : ""}`}>
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={price}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={quantity}
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

export default EditForm
