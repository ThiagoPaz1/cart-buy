import { useState, useContext } from "react"

import { Button } from "../Customs/Button"
import { ProductContext } from "../../context/ProductContext"
import { CardProductProps } from "./types"
import { priceFormat } from "../../utils/priceFormat"

export function CardProduct({product, productQuantity}: CardProductProps) {
  const [quantity, setQuantity] = useState(1)
  const { productsInCart, setProductsInCart } = useContext(ProductContext)

  function handleClick() {
    if (!productQuantity) {
      addProductInCart()
    }
  }

  function addProductInCart() {
    const newProduct: any = {
      id: product.id,
      name: product.name,
      stock: product.stock,
      price: product.price,
      quantity: quantity
    }

    setProductsInCart([...productsInCart, newProduct])
  }

  function addProductQuantity(signal: string) {

  }
  
  return (
    <div key={product.id}>
      <h3>
        { product.name }
      </h3>
      <p>
        { priceFormat(product.price) }
      </p>
      <p>
        { productQuantity && product.quantity }
      </p>

      <Button onClick={handleClick}>
        {
          productQuantity ?
          (
            <div>
              <span onClick={() => addProductQuantity("-")}>
                -
              </span>
              <span>{product.quantity}</span>
              <span onClick={() => addProductQuantity("+")}>
                +
              </span>
            </div>
          ) :
          "Adicionar ao carrinho"
        }
      </Button>
    </div>
  )
}