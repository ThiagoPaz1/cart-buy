import { api } from './api'
import { Prouduct } from '../types'

export async function getAllProducts(): Promise<Prouduct[]> {
  const request = await api.get('/products')
  const response = await request.data

  return response
}