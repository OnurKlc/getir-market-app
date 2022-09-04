import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsData } from '@store/products/productSlice'
import axios from 'axios'
import styled from 'styled-components'

import { Pagination, ProductCard } from '../shared'

const List = styled.div`
  display: grid;
  gap: 30px 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
`

export default function Products() {
  const dispatch = useDispatch()
  const { products, orderData } = useSelector((state) => state.productState)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  const getProducts = () => {
    axios
      .get(
        `http://localhost:3004/items?_page=${page}&_limit=16&_sort=${orderData.sort}&_order=${orderData.order}`
      )
      .then((resp) => {
        dispatch(setProductsData(resp.data))
        setTotal(resp.headers['x-total-count'])
      })
  }

  useEffect(() => {
    getProducts()
  }, [page, orderData])

  const onPageChange = (_page) => () => {
    setPage(_page)
  }

  return (
    <div className='flex-1'>
      <p className='mt-8 mb-4 font-light'>Products</p>
      <div className='bg-white p-8'>
        <List>
          {products.map(({ price, name, added }) => (
            <ProductCard {...{ price, name }} key={added} />
          ))}
        </List>
        <Pagination {...{ page, total, onPageChange }} />
      </div>
    </div>
  )
}
