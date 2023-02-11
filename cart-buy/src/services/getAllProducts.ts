import { api } from "./api"
import { Product } from "../types"

export async function getAllProducts(): Promise<Product[]> {
  const request = await api.get('/products')
  const response = await request.data

  return response
}