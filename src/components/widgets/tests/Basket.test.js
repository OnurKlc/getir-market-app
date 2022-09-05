import { screen } from './configTest'

it('should not render if the basket is empty', function () {
  const basketElement = screen.queryByTestId('basket-widget')
  expect(basketElement).toBeNull()
})
