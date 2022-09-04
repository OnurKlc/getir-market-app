import { useMemo } from 'react'
import { ArrowRight } from '@assets'

import { Next, Number, Numbers, PaginationContainer, Prev } from './styles'

import If from '../If/If'

const PaginationNumbersGenerator = ({ count, page, onPageChange }) => {
  return (
    <Numbers>
      {[...Array(count).keys()].map((item, index) => (
        <Number
          key={index}
          active={page === index + 1}
          onClick={onPageChange(index + 1)}
        >
          {index + 1}
        </Number>
      ))}
    </Numbers>
  )
}

export default function Pagination({ total, page, onPageChange }) {
  const count = useMemo(() => {
    if (!total) return 0
    return Math.floor(total / 16)
  }, [total])

  return (
    <PaginationContainer>
      <Prev>
        <img src={ArrowRight} alt='Arrow Right' />
        <span>Prev</span>
      </Prev>
      <If condition={count > 16}>
        <PaginationNumbersGenerator {...{ count, page, onPageChange }} />
      </If>
      <Next>
        <span>Next</span>
        <img src={ArrowRight} alt='Arrow Right' />
      </Next>
    </PaginationContainer>
  )
}
