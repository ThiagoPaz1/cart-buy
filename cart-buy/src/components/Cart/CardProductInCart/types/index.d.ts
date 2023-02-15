import { Product } from "../../../../types"

export interface CardProductInCartProps {
  product: Product
  notifyRemoveProduct: (nameProduct: string) => void
}