import { useDispatch } from 'react-redux'
import { setBrandFilter, setTagFilter } from '@store/products/productSlice'

import { Checkbox, CheckboxGroup, Label, SearchArea } from './styles'

export default function Filter({ component, data }) {
  const dispatch = useDispatch()

  const onItemClick = (selectedKey) => () => {
    if (component === 'tag') dispatch(setTagFilter(selectedKey))
    if (component === 'brand') dispatch(setBrandFilter(selectedKey))
  }

  return (
    <div>
      <SearchArea placeholder={`Search ${component}`} />
      <CheckboxGroup>
        {data &&
          Object.keys(data).map((key) => (
            <div key={key}>
              <Checkbox
                type='checkbox'
                name={key}
                onChange={onItemClick(key)}
              />
              <Label htmlFor={key}>{key}</Label>
              <span className='ml-2'>({data[key]})</span>
            </div>
          ))}
      </CheckboxGroup>
    </div>
  )
}
