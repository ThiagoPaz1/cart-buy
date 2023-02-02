import { Prouduct } from "../../../types"
import { priceFormat } from "../../../utils/priceFormat"

export function Product({...props}: Prouduct) {
  return (
    <div key={props.id}>
      <h3>
        { props.name }
      </h3>
      <p>
        { priceFormat(props.price) }
      </p>
    </div>
  )
}