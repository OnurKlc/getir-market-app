import { Checkbox, CheckboxGroup, Label, SearchArea } from './styles'

export default function Filter({ component, data }) {
  return (
    <div>
      <SearchArea placeholder={`Search ${component}`} />
      <CheckboxGroup>
        {data &&
          Object.keys(data).map((key) => (
            <div key={key}>
              <Checkbox type='checkbox' name={key} />
              <Label htmlFor={key}>{key}</Label>
              <span className='ml-2'>({data[key]})</span>
            </div>
          ))}
      </CheckboxGroup>
    </div>
  )
}
