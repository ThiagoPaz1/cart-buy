import { ButtonProps } from "./types"

export function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick()}
    >
      { children }
    </button>
  )
}