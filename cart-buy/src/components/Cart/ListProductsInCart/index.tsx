import { CardProductInCart } from "../CardProductInCart"
import { ListProductsInCartProps } from "./types"

export function ListProductsInCart({ products }: ListProductsInCartProps) {
  return (
    <div>
      {
        products.length ?
          <ul>
            {
              products.map(i =>
                <CardProductInCart product={i} />
              )
            }
          </ul> : 
          <h3>Carrinho vazio</h3>
      }
    </div>
  )
}