import axios from 'axios';
import {
  productSchema,
  productListSchema,
  type NewProduct,
  type Product
} from '../types';

export const getProducts = async () => {
  const {data} = await axios.get('/api/products')
  return productListSchema.parse(data)
}

export const createProduct = async (newProduct: NewProduct) => {
  const {data} = await axios.post('/api/products', {...newProduct })
  return productSchema.parse(data)
}

export const updateProduct = async (product: Product) => {
  const {data} = await axios.put(`/api/products/${product._id}`, {...product})
  return productSchema.parse(data)
}