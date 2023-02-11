import { api } from "./api"

import notebookImg from "../assets/notebook.webp"
import tvImg from "../assets/tv.webp"
import xboxImg from "../assets/xbox.webp"

interface Response {
  id: number
  name: string
  price: number
  image: string
}

const imgs: string[] = [xboxImg, notebookImg, tvImg]

export async function getAllProducts(): Promise<Response[]> {
  const request = await api.get("/products")
  const response = await request.data
  const data = response.map((el: Response, index: number) => (
    {
      ...el,
      image: imgs[index]
    }
  ))
  
  return data
}