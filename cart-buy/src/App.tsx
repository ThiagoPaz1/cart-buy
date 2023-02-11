import { Home } from './components/Home'
import { ProductProvider } from './context/ProductInCartContext'

function App() {
  return (
    <>
      <ProductProvider>
        <Home />
     </ProductProvider>
    </>
  )
}

export default App
