/**
 *
 * @param component: String
 * @param data: Object
 *
 */

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setBrandFilter, setTagFilter } from '@store/products'

import {
  Checkbox,
  CheckboxGroup,
  FilterItem,
  Label,
  SearchArea
} from './styles'

export default function Filter({ component, data }) {
  const dispatch = useDispatch()
  const [filterKey, setFilterKey] = useState('')

  const onItemClick = (selectedKey) => () => {
    if (component === 'tag') dispatch(setTagFilter(selectedKey))
    if (component === 'brand') dispatch(setBrandFilter(selectedKey))
  }

  const onInputChange = (e) => {
    setFilterKey(e.target.value)
  }

  return (
    <div>
      <SearchArea
        data-testid={`${component}-search-field`}
        placeholder={`Search ${component}`}
        onChange={onInputChange}
      />
      <CheckboxGroup>
        {data &&
          Object.keys(data).map((key) => (
            <FilterItem key={key} hide={!key.toLowerCase().includes(filterKey)}>
              <Checkbox
                type='checkbox'
                name={key}
                onChange={onItemClick(key)}
              />
              <Label htmlFor={key}>{key}</Label>
              <span className='ml-2'>({data[key]})</span>
            </FilterItem>
          ))}
      </CheckboxGroup>
    </div>
  )
}
