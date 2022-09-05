import { Brands } from '@components'

import { fireEvent, render, screen } from './configTest'

it('brands search bar should reflect to the input changes', async function () {
  render(<Brands />)

  const input = await screen.findByTestId('brand-search-field')
  fireEvent.change(input, { target: { value: '123' } })
  expect(input).toHaveValue('123')
})
