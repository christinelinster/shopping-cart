import axios from 'axios';
import {
  productSchema,
  productListSchema,
  type NewProduct
} from '../types';

export const getProducts = async () => {
  const {data} = await axios.get('/api/products')
  return productListSchema.parse(data)
}

export const createProduct = async (newProduct: NewProduct) => {
  const {data} = await axios.post('/api/products', {...newProduct })
  return productSchema.parse(data)
}