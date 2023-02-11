import { createContext, ReactNode, useState } from "react"

interface ProductInCart {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

interface ProductInCartContextProps {
  children: ReactNode
}

interface ProductInCartContextData {
  productsInCart: ProductInCart[]
  setProductsInCart: (product: ProductInCart[]) => void
}

export const ProductInCartContext = createContext<ProductInCartContextData>({} as ProductInCartContextData)

export function ProductInCartProvider({ children }: ProductInCartContextProps) {
  const [productsInCart, setProductsInCart] = useState<ProductInCart[]>([])

  return (
    <ProductInCartContext.Provider value={{productsInCart, setProductsInCart}}>
      { children }
    </ProductInCartContext.Provider>
  )
}