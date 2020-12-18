import { fill } from '../fill'

jest.mock('../../../utils/tailwindUtils')

test('uses value as raw css', () => {
  expect(fill('currentColor'))
    .toEqual({ fill: 'currentColor' })

  expect(fill('black'))
    .toEqual({ fill: 'black' })

  expect(fill('#e5e7eb'))
    .toEqual({ fill: '#e5e7eb' })
})
