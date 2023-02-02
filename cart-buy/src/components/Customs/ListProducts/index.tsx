import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

import { Product } from '../Product'
import { getAllProducts } from '../../../services/getAllProducts'
import { Prouduct } from '../../../types'

export function ListProducts() {
  const [products, setProducts] = useState<Prouduct[]>([])

  useEffect(() => {
    getAllProducts()
      .then(res => setProducts(res))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      {
        products.length ?
        products.map(i => 
          <Product
            id={i.id}
            price={i.price}
            stock={i.stock}
            name={i.name}
          />) :
        <ClipLoader color="#9A2EFE" />
      }
    </>
  )
}