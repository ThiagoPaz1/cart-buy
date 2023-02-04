import { useState, useEffect } from "react"

import { ListProducts } from "../ListProducts"
import { Cart } from "../Cart"
import { getAllProducts } from "../../services/getAllProducts"
import { Product } from "../../types"

export function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getAllProducts()
      .then(res => setProducts(res))
      .catch(error => console.log(error))
  }, [])


  return (
    <>
      <ListProducts products={products} />
      <Cart />
    </>
  )
}