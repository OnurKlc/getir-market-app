import { Products } from '@components'

import { render } from './configTest'

test('product list element is rendered', function () {
  const { getByTestId } = render(<Products />)
  const list = getByTestId('product-list')
  expect(list).toBeInTheDocument()
})
