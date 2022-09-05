import { Sorting } from '@components'

import { render } from './configTest'

test('there are four sorting categories', function () {
  const { queryAllByTestId } = render(<Sorting />)
  const element = queryAllByTestId('checkbox-element')
  expect(element).toHaveLength(4)
})
