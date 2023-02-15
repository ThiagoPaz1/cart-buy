import { useState, useEffect } from "react"

import { Button } from "../../Custom/Button"

import { notify, Notification } from "../../../hooks/useNotification"
import { SummaryProps } from "./types"

import { priceFormat } from "../../../utils/priceFormat"

export function Summary({ quantityProducts, amount }: SummaryProps) {
  const [disabledButton, setDisabledButton] = useState(false)

  useEffect(() => {
    if (amount === 0) {

      setDisabledButton(true)
    }
  }, [amount])

  function handleNotifyCloseOrder() {
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