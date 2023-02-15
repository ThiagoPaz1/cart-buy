import { useNavigate } from "react-router-dom"

export function Menu() {
  const navigate = useNavigate()

  return (
    <nav>
      <a onClick={() => navigate("/")}>
        Home
      </a>

      <a onClick={() => navigate("/carrinho")}>
        Carrinho
      </a>
    </nav>
  )
}