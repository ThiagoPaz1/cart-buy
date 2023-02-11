import { useState, useEffect } from "react"

import { getAllProducts } from "../../services/getAllProducts"
import { Product } from "../../types"

export function HomeComponent() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setTimeout(() => {
      getAllProducts()
        .then(res => setProducts(res))
        .catch(error => console.log(error))
    }, 3000)
  }, [])


  return (
    <>
      
    </>
  )
}