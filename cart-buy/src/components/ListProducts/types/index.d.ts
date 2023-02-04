import { ReactNode } from "react"
import { Product } from "../../../../types"

export interface ListProductsProps {
  products: Product[]
  productQuantity?: boolean
}