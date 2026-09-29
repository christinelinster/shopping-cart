import ProductItem from "./ProductItem";
import type { Product } from "../types";

interface ProductListingProps {
  products: Product[],
}

export const ProductListing = ({products}: ProductListingProps) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
};
