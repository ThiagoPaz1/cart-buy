import { useContext, useState, useEffect } from "react"

import { Button } from "../../Custom/Button"

import { ProductInCartContext } from "../../../context/ProductInCartContext"
import { notify, Notification } from "../../../hooks/useNotification"
import { SummaryProps } from "./types"

import { priceFormat } from "../../../utils/priceFormat"

export function Summary({ quantityProducts, amount }: SummaryProps) {
  const { setProductsInCart } = useContext(ProductInCartContext)
  const [disabledButton, setDisabledButton] = useState(false)

  useEffect(() => {
    if (amount === 0) {
      setDisabledButton(true)
    } else {
      setDisabledButton(false)
    }
  }, [amount])

  function handleNotifyCloseOrder() {
    setProductsInCart([])
    notify("Pedido concluído!", "success")
  }

  return (
    <aside>
      <span>
        {
          `Subtotal(${quantityProducts} itens):`
        }
      </span>
      
      <strong>
        {priceFormat(amount)}
      </strong>

      <Button
        disabled={disabledButton}
        onClick={handleNotifyCloseOrder}
      >
        Fechar pedido
      </Button>

      <Notification />
    </aside>
  )
}