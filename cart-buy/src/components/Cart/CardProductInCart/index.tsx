import { useContext, useState, useEffect } from "react"

// Components
import { Button } from "../../Custom/Button"

// Contexts, and custom hooks
import { ProductInCartContext } from "../../../context/ProductInCartContext"

// Types
import { CardProductInCartProps } from "./types"

// Others
import { priceFormat } from "../../../utils/priceFormat"

export function CardProductInCart({ product, notifyRemoveProduct }: CardProductInCartProps) {
  const [quantityProduct, setQuantityProduct] = useState(Number(product.quantity))
  const { productsInCart, setProductsInCart } = useContext(ProductInCartContext)

  useEffect(() => {
    if (quantityProduct >= 1) {
      let newListProduct: any[] = []

      for (let i of productsInCart) {
        if (i.id === product.id) {
          i.quantity = quantityProduct
          newListProduct.push(i)
        } else {
          newListProduct.push(i)
        }
      }

      setProductsInCart(newListProduct)
    }
  }, [quantityProduct])

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

  function handleRemoveProduct() {
    const updateListProducts = productsInCart.filter(i => i.id !== product.id)

    setProductsInCart(updateListProducts)
    notifyRemoveProduct(product.name)
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

      <Button onClick={handleRemoveProduct}>
        Remover produto
      </Button>
    </li>
  )
}