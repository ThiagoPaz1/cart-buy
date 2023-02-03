import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"

import { CardProduct } from "../CardProduct"
import { getAllProducts } from "../../../services/getAllProducts"
import { Product } from "../../../types"

export function ListProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getAllProducts()
      .then(res => setProducts(res))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      {
        products.length ?
        products.map(i => 
          <CardProduct
            id={i.id}
            price={i.price}
            stock={i.stock}
            name={i.name}
          />) :
        <ClipLoader color="#9A2EFE" />
      }
    </>
  )
}