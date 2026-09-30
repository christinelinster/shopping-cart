import ProductItem from "./ProductItem";
import type { Product } from "../types";

interface ProductListingProps {
  products: Product[],
  onEditProduct: (product: Product, callback?: () => void) => void
}

export const ProductListing = ({products, onEditProduct}: ProductListingProps) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} onEditProduct={onEditProduct}/>
        ))}
      </ul>
    </div>
  );
};
