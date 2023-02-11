import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Home } from "./pages/Home"
import { Cart } from "./pages/Cart"

import { ProductInCartProvider } from "./context/ProductInCartContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/carrinho",
    element: <Cart />,
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductInCartProvider>
      <RouterProvider router={router} />
    </ProductInCartProvider>
  </React.StrictMode>,
)
