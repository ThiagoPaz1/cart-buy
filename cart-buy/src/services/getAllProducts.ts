import { api } from './api'

interface Prouducts {
  id: number
  name: string
  stock: number
}

export async function getAllProducts(): Promise<Prouducts[]> {
  const request = await api.get('/products')
  const response = await request.data

  return response
}