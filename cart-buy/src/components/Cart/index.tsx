import { useContext } from "react"

import { ListProducts } from "../ListProducts" 
import { ProductContext } from "../../context/ProductContext"

export function Cart() {
  const { productsInCart } = useContext(ProductContext)

  return (
    <div>
      <ListProducts
        products={productsInCart}
        productQuantity={true}
      />
    </div>
  )
}