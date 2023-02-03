import { Home } from './components/Home'
import { ProductProvider } from './context/ProductContext'

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
