import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CheckIcon } from 'assets'
import { ContainerBox, If } from 'components/shared'
import { setOrderData } from 'store/products'
import styled from 'styled-components'

const sortingList = [
  {
    text: 'Price low to high',
    selected: false,
    id: 1,
    sortKey: 'price',
    order: 'asc'
  },
  {
    text: 'Price high to low',
    selected: false,
    id: 2,
    sortKey: 'price',
    order: 'desc'
  },
  {
    text: 'New to old',
    selected: false,
    id: 3,
    sortKey: 'added',
    order: 'asc'
  },
  {
    text: 'Old to new',
    selected: false,
    id: 4,
    sortKey: 'added',
    order: 'desc'
  }
]

const Circle = styled.span`
  height: 22px;
  width: 22px;
  border-radius: 50%;
  border: 2px solid
    ${({ theme: { colors }, selected }) =>
      selected ? colors.primary : colors.gray};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export default function Sorting() {
  const dispatch = useDispatch()
  const [list, setList] = useState(sortingList)

  const onItemClick = (id) => () => {
    const orderData = {}
    sortingList.forEach((item) => {
      item.selected = item.id === id
      if (item.id === id) {
        orderData.sort = item.sortKey
        orderData.order = item.order
      }
    })
    setList([...sortingList])
    dispatch(setOrderData(orderData))
  }

  return (
    <ContainerBox label='Sorting'>
      {list.map(({ text, selected, id }) => (
        <div
          key={text}
          className='flex gap-3 mt-4 cursor-pointer'
          onClick={onItemClick(id)}
          data-testid='checkbox-element'
        >
          <Circle {...{ selected }}>
            <If condition={selected}>
              <img
                src={CheckIcon}
                alt='check'
                className='w-[10px]'
                data-testid='check-icon'
              />
            </If>
          </Circle>
          <p>{text}</p>
        </div>
      ))}
    </ContainerBox>
  )
}
