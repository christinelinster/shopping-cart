import { mockProducts } from "../mockData/data";
import ProductItem from "./ProductItem";

export const ProductListing = () => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {mockProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
};
