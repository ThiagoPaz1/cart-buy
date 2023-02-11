import { useContext } from "react"

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
      
      <Button onClick={handleAddProductInCart}>
        Adicionar ao carrinho
      </Button>

      <Notification />
    </li>
  )
}