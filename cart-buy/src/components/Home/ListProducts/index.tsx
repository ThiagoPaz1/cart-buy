import { ClipLoader } from "react-spinners"

import { CardProduct } from "../CardProduct"
import { ListProductsProps } from "./types"

export function ListProducts({ products }: ListProductsProps) {
  return (
    <ul>
      {
        products ?
          products.map(i =>
            <CardProduct />  
          ) :
          <ClipLoader color="#9A2EFE" />
      }
    </ul>
  )
}