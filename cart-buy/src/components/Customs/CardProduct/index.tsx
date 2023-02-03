import { useState, useContext } from "react"

import { Button } from "../Button"
import { ProductContext } from "../../../context/ProductContext"
import { Product } from "../../../types"
import { priceFormat } from "../../../utils/priceFormat"

export function CardProduct({...props}: Product) {
  const { productsInCart, setProductsInCart } = useContext(ProductContext)

  function addProductInCart() {
    const product = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: 1
    }

    setProductsInCart([...productsInCart, product])    
  }

  return (
    <div key={props.id}>
      <h3>
        { props.name }
      </h3>
      <p>
        { priceFormat(props.price) }
      </p>
      <Button onClick={() => addProductInCart()}>
        Adicionar ao carrinho
      </Button>
    </div>
  )
}