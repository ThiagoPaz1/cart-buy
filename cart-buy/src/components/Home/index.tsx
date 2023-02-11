import { useState, useEffect } from "react"

// Queries
import { getAllProducts } from "../../services/getAllProducts"

import { ListProducts } from "./ListProducts"
import { Product } from "../../types"

export function HomeComponent() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setTimeout(() => {
      getAllProducts()
        .then(res => (console.log(res), setProducts(res)))
        .catch(error => console.log(error))
    }, 2000)
  }, [])

  return (
    <div>
      <ListProducts products={products} />
    </div>
  )
}