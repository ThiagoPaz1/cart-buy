import { useContext } from "react"

import { Button } from "../../Customs/Button"
import { Notification } from "../../Customs/Notification"

import { ProductInCartContext } from "../../../context/ProductInCartContext"
import { CardProductProps } from "./types"
import { priceFormat } from "../../../utils/priceFormat"

export function CardProduct({ product }: CardProductProps) {
  const { productsInCart, setProductsInCart } = useContext(ProductInCartContext)

  function handleAddProductInCart() {
    setProductsInCart([
      ...productsInCart,
      {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1
      }
    ])
  }

  return (
    <li key={product.id}>
      <img 
        src={product.image}
        width={200}
        alt="Imagem do produto"
      />
      
      <h3>
        {product.name}
      </h3>

      <p>
        {priceFormat(product.price)}
      </p>
      <Notification />
      <Button onClick={handleAddProductInCart}>
        Adicionar ao carrinho
      </Button>
    </li>
  )
}