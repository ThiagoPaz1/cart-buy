import { CardProductInCart } from "../CardProductInCart"

import { Notification, notify } from "../../../hooks/useNotification"
import { ListProductsInCartProps } from "./types"

export function ListProductsInCart({ products }: ListProductsInCartProps) {
  function notifyRemoveProduct(nameProduct: string) {
    notify(`${nameProduct} removido do carrinho`, "success")
  }
  
  return (
    <div>
      {
        products.length ?
          <ul>
            {
              products.map(i =>
                <CardProductInCart
                  product={i}
                  notifyRemoveProduct={(nameProduct: string) => notifyRemoveProduct(nameProduct)}
                />
              )
            }
          </ul> : 
          <h3>Carrinho vazio</h3>
      }
        <Notification />
    </div>
  )
}