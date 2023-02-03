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