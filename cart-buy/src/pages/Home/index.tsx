import { HomeComponent } from "../../components/Home"
import { Menu } from "../../components/Menu"

export function Home() {
  return (
    <>
      <Menu />
      <main>
        <h1>
          Produtos disponíveis
        </h1>

        <HomeComponent />
      </main>
    </>
  )
}