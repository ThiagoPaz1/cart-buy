import { useState, useEffect } from "react"

import { ListProducts } from "../ListProducts"
import { Cart } from "../Cart"
import { getAllProducts } from "../../services/getAllProducts"
import { Product } from "../../types"

export function Home() {
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
      {/* <main>
        <ListProducts products={products} />
      </main> */}
      <Cart />
    </>
  )
}