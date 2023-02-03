import { useState, useEffect, useContext } from "react"

import { ListProducts } from "../Customs/ListProducts"
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
      <main>
        <ListProducts products={products} />
      </main>
    </>
  )
}