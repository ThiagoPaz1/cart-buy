import { useContext, useState } from "react"

// Components
import { Button } from "../../Custom/Button"

// Contexts, and custom hooks
import { ProductInCartContext } from "../../../context/ProductInCartContext"
import { notify, Notification } from "../../../hooks/useNotification"

// Types
import { CardProductProps } from "./types"

// Others
import { priceFormat } from "../../../utils/priceFormat"

export function CardProduct({ product }: CardProductProps) {
  const [quantityProduct, setQuantityProduct] = useState(1)
  const { productsInCart, setProductsInCart } = useContext(ProductInCartContext)

  function handleChangeQuantityProduct(signal: string) {
    if (signal === "-") {
      if (quantityProduct === 1) {
        setQuantityProduct(1)
      } else {
        setQuantityProduct(quantityProduct - 1)
      }
    }

    if (signal === "+") {
      setQuantityProduct(quantityProduct + 1)
    }
  }

  function handleAddProductInCart() {
    const findProduct = productsInCart.find(i => i.id === product.id)

    if (findProduct) {
      for (let i of productsInCart) {
        if (i.id === product.id) {
          i.quantity = i.quantity + quantityProduct 
        } 
      }
      quantityProduct > 1 &&
        setQuantityProduct(1)
    } else {
      setProductsInCart([
        ...productsInCart,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: quantityProduct
        }
      ])

      quantityProduct > 1 &&
        setQuantityProduct(1)
    }

    notify("Produto adicionado ao carrinho!", "success")
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

      <button onClick={() => handleChangeQuantityProduct("-")}>
        -
      </button>
      <span>
        {quantityProduct}
      </span>
      <button onClick={() => handleChangeQuantityProduct("+")}>
        +
      </button>
      <Button onClick={handleAddProductInCart}>
        Adicionar ao carrinho
      </Button>

      <Notification />
    </li>
  )
}