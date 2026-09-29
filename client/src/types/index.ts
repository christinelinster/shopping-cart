import {z} from 'zod';

export const newProductSchema = z.object({
  title: z.string(),
  quantity: z.number(),
  price: z.number(),
})

export const productSchema = newProductSchema.extend({
  _id: z.string(),
})

export const cartSchema = newProductSchema.extend({
  _id: z.string(),
  productId: z.string(),
})

export const productListSchema = z.array(productSchema)

export type NewProduct = z.infer<typeof newProductSchema>
export type Product = z.infer<typeof productSchema>
export type Cart = z.infer<typeof cartSchema>
