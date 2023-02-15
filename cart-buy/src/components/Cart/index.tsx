import { useContext, useState, useEffect } from "react"

import { Summary } from "./Summary"
import { ListProductsInCart } from "./ListProductsInCart"

import { ProductInCartContext } from "../../context/ProductInCartContext"

export function CartComponent() {
  const [amount, setAmount] = useState(0)
  const { productsInCart } = useContext(ProductInCartContext)

  useEffect(() => {
    if (productsInCart.length) {
      if (productsInCart.length === 1) {
        setAmount(productsInCart[0].price * productsInCart[0].quantity)
      }

      if (productsInCart.length > 1) {
        let amount = 0 
        
        for (let i of productsInCart) {
          amount = amount + (i.price * i.quantity)
        }

        setAmount(amount)
      }
    } else {
      setAmount(0)
    }
  }, [productsInCart])

  return (
    <div>
      <h1>Produtos no carrinho</h1>

      <div>
        <ListProductsInCart
          products={productsInCart}
        />
      </div>

      <Summary
        quantityProducts={productsInCart.length}
        amount={amount}
      />
    </div>
  )
}