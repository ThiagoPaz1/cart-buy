import { ReactNode } from "react"

export function Button(children: ReactNode) {
  return (
    <button>
      { children }
    </button>
  )
}