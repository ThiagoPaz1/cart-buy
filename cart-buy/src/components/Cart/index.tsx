import { useContext } from "react"

import { ListProductsInCart } from "./ListProductsInCart"

import { ProductInCartContext } from "../../context/ProductInCartContext"

export function CartComponent() {
  const { productsInCart } = useContext(ProductInCartContext)

  return (
    <div>
      <h1>Produtos no carrinho</h1>

      <div>
        <ListProductsInCart
          products={productsInCart}
        />
      </div>
    </div>
  )
}