import { useState } from 'react'
import { CheckIcon } from '@assets'
import styled from 'styled-components'

import { ContainerBox, If } from '../shared'

const sortingList = [
  {
    text: 'Price low to high',
    selected: false,
    id: 1
  },
  {
    text: 'Price high to low',
    selected: false,
    id: 2
  },
  {
    text: 'New to old',
    selected: false,
    id: 3
  },
  {
    text: 'Old to new',
    selected: false,
    id: 4
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
  const [list, setList] = useState(sortingList)

  const onItemClick = (id) => () => {
    sortingList.forEach((item) => (item.selected = item.id === id))
    setList([...sortingList])
  }

  return (
    <ContainerBox label='Sorting'>
      {list.map(({ text, selected, id }) => (
        <div
          key={text}
          className='flex gap-3 mt-4 cursor-pointer'
          onClick={onItemClick(id)}
        >
          <Circle {...{ selected }}>
            <If condition={selected}>
              <img src={CheckIcon} alt='check' className='w-[10px]' />
            </If>
          </Circle>
          <p>{text}</p>
        </div>
      ))}
    </ContainerBox>
  )
}
