import { Prouduct } from "../../../types"

export function Product({...props}: Prouduct) {
  return (
    <div key={props.id}>
      <h3>
        { props.name }
      </h3>
      <p>
        { props.price }
      </p>
    </div>
  )
}