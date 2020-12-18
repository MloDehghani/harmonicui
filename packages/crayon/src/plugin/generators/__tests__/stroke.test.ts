import { stroke } from '../stroke'

jest.mock('../../../utils/tailwindUtils')

test('uses value as raw css', () => {
  expect(stroke('currentColor'))
    .toEqual({ stroke: 'currentColor' })

  expect(stroke('black'))
    .toEqual({ stroke: 'black' })

  expect(stroke('#e5e7eb'))
    .toEqual({ stroke: '#e5e7eb' })
})
