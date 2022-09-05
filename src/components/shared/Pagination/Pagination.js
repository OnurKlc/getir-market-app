/**
 *
 * @param count: Number
 * @param page: Number
 * @param onPageChange: Function
 *
 */

import { useEffect, useMemo } from 'react'
import { ArrowRight } from '@assets'

import { Next, Number, Numbers, PaginationContainer, Prev } from './styles'

const PaginationNumbersGenerator = ({ count, page, onPageChange }) => {
  const numberArray = useMemo(() => [...Array(count).keys()], [count])

  useEffect(() => {
    document.getElementById('activeElement').scrollIntoView()
  }, [page])

  return (
    <Numbers>
      {numberArray.map((item, index) => (
        <Number
          key={index}
          active={page === index + 1}
          onClick={onPageChange(index + 1)}
          id={page === index + 1 ? 'activeElement' : ''}
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
    return Math.ceil(total / 16)
  }, [total])

  if (total <= 16) return null

  return (
    <PaginationContainer>
      <Prev onClick={onPageChange(page - 1)} disabled={page === 1}>
        <img src={ArrowRight} alt='Arrow Right' />
        <div>Prev</div>
      </Prev>
      <PaginationNumbersGenerator {...{ count, page, onPageChange }} />
      <Next onClick={onPageChange(page + 1)}>
        <div>Next</div>
        <img src={ArrowRight} alt='Arrow Right' />
      </Next>
    </PaginationContainer>
  )
}
