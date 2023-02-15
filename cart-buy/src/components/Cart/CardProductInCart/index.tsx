import { useContext, useState } from "react"

// Components
import { Button } from "../../Custom/Button"

// Contexts, and custom hooks
import { ProductInCartContext } from "../../../context/ProductInCartContext"
import { notify, Notification } from "../../../hooks/useNotification"

// Types
import { CardProductInCartProps } from "./types"

// Others
import { priceFormat } from "../../../utils/priceFormat"

export function CardProductInCart({ product }: CardProductInCartProps) {
  const [quantityProduct, setQuantityProduct] = useState(Number(product.quantity))
  const { productsInCart, setProductsInCart } = useContext(ProductInCartContext)

  function handleChangeQuantityProduct(signal: string) {
    if (signal === "-") {
      if (quantityProduct === 1) {
        setQuantityProduct(1)
      } else {
        setQuantityProduct(Number(quantityProduct) - 1)
      }
    }

    if (signal === "+") {
      setQuantityProduct(Number(quantityProduct) + 1)
    }
  }

  function handleRemoveProduct(id: number) {
    const updateListProducts = productsInCart.filter(i => i.id !== id)

    setProductsInCart(updateListProducts)
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
      
      <div>
        <button onClick={() => handleChangeQuantityProduct("-")}>
          -
        </button>
        <span>
          {quantityProduct}
        </span>
        <button onClick={() => handleChangeQuantityProduct("+")}>
          +
        </button>
      </div>

      <Button onClick={() => handleRemoveProduct(product.id)}>
        Remover produto
      </Button>

      <Notification />
    </li>
  )
}