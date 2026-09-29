
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ProductListing } from "./components/ProductListing";
import AddForm from "./components/AddForm";

import type { Product, NewProduct } from "./types";
import { getProducts, createProduct } from "./services/products";
import { ZodError } from "zod";


function App() {
  const [products, setProducts] = useState<Product[]>([])


  useEffect(() => {
    const fetchProducts = async() => {
      const data = await getProducts()
      setProducts(data)
    }

    try {
      fetchProducts()
    } catch(e:unknown) {
      if (e instanceof ZodError) {
        console.error(e)
      }
    }
  }, [])


  const handleAddProduct = async (newProduct: NewProduct, callback?: () => void) => {
    try {
      const data = await createProduct(newProduct)
      setProducts((prevProducts) => prevProducts.concat(data))
      if (callback) {
        callback()
      }
    } catch (e: unknown) {
      console.error(e)
    }
  }

  return (
    <div id="app">
      <Header />
      <main>
        <ProductListing products={products} />
        <AddForm onAddProduct={handleAddProduct}/>
      </main>
    </div>
  );
}

export default App;
