import { useContext } from "react"

import { Menu } from "../../components/Menu"
import { CartComponent } from "../../components/Cart"

import { ProductInCartContext } from "../../context/ProductInCartContext"

export function Cart() {
  const { productsInCart } = useContext(ProductInCartContext)
  
  return (
    <>
      <Menu />
      <CartComponent />
    </>
  )
}