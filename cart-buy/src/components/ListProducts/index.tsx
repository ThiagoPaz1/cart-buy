import { useState, useEffect } from "react"
import { ClipLoader } from "react-spinners"

import { CardProduct } from "../CardProduct"
import { ListProductsProps } from "./types"

export function ListProducts({ products }: ListProductsProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (products) {
      setLoading(false)
    }
  }, [products])

  console.log(products)
  if (loading && products) {
    if (!products.length) {
      return (
        <h2>
          Não a produtos
        </h2>
      )
    }
  }

  return (
    <div>
      {
        products ?
          products.map(i =>
            <CardProduct
              product={{
                id: i.id,
                name: i.name,
                stock: i.stock,
                quantity: i.quantity,
                price: i.price
              }}
            />) :
          <ClipLoader color="#9A2EFE" />
      }
    </div>
  )
}