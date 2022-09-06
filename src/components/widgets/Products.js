import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { SERVER_URL } from 'index'
import { setProductsData } from 'store/products'
import styled from 'styled-components'

import { Pagination, ProductCard } from '../shared'

const List = styled.div`
  display: grid;
  gap: 30px 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
`

const ItemTypes = {
  MUG: 'mug',
  SHIRT: 'shirt'
}

const ItemTypeButton = ({ name, itemType, setItemType }) => (
  <button
    onClick={() => {
      if (itemType !== name) setItemType(name)
      if (itemType === name) setItemType()
    }}
    className={
      'px-4 py-2 mr-3 text-sm rounded-sm ' +
      (itemType === name
        ? 'text-white bg-primary'
        : 'bg-primaryLight text-primary')
    }
  >
    {name}
  </button>
)

export default function Products() {
  const dispatch = useDispatch()
  const { products, orderData, tagFilters, brandFilters } = useSelector(
    (state) => state.productState
  )
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [itemType, setItemType] = useState()

  const getProducts = (_page = 1) => {
    let url = `${SERVER_URL}/items?_page=${_page}&_limit=16`
    if (orderData.sort) url += `&_sort=${orderData.sort}`
    if (orderData.order) url += `&_order=${orderData.order}`
    if (brandFilters.length) url += `&manufacturer=${brandFilters.join(',')}`
    if (tagFilters.length) url += `&tags_like=${tagFilters.join(',')}`
    if (itemType) url += `&itemType=${itemType}`
    axios.get(url).then((resp) => {
      dispatch(setProductsData(resp.data))
      setTotal(resp.headers['x-total-count'])
    })
  }

  useEffect(() => {
    getProducts()
    setPage(1)
  }, [orderData, tagFilters, brandFilters, itemType])

  const onPageChange = (_page) => () => {
    setPage(_page)
    getProducts(_page)
  }

  return (
    <div className='flex-1 max-w-full overflow-hidden'>
      <p className='mt-8 mb-4 font-light'>Products</p>
      <div className='mb-4'>
        <ItemTypeButton name={ItemTypes.MUG} {...{ itemType, setItemType }} />
        <ItemTypeButton name={ItemTypes.SHIRT} {...{ itemType, setItemType }} />
      </div>
      <div className='bg-white p-8'>
        <List data-testid='product-list'>
          {products.map((product) => (
            <ProductCard {...{ product }} key={product.added} />
          ))}
        </List>
        <Pagination {...{ page, total, onPageChange }} />
      </div>
    </div>
  )
}
