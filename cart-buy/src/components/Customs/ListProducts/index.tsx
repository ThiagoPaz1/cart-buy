import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

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
        <ul>
          {
            products.map(i => <li key={i.id}>{i.name}</li> )
          }
        </ul> :
        <ClipLoader color="#9A2EFE" />
      }
    </>
  )
}