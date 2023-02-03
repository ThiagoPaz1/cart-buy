import { createContext, ReactNode, useState } from "react"
import { Product } from "../types"

interface ProductInCart extends Product {
  quantity: number
}

interface ProductContextProps {
  children: ReactNode
}

interface ProductContextData {
  productsInCart: ProductInCart[]
  setProductsInCart: (product: ProductInCart[]) => void
}

export const ProductContext = createContext<ProductContextData>({} as ProductContextData)

export function ProductProvider({ children }: ProductContextProps) {
  const [productsInCart, setProductsInCart] = useState<ProductInCart[]>([])
  console.log(productsInCart)
  return (
    <ProductContext.Provider value={{productsInCart, setProductsInCart}}>
      { children }
    </ProductContext.Provider>
  )
}