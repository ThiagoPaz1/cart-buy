import { ClipLoader } from "react-spinners"

import { CardProduct } from "../CardProduct"
import { ListProductsProps } from "./types"

export function ListProducts({ products }: ListProductsProps) {

  return (
    <>
      {
        products.length ?
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
    </>
  )
}