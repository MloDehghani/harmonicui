import { strokeWidth } from '../strokeWidth'

jest.mock('../../../utils/tailwindUtils')

test('generates strokeWidth property', () => {
  expect(strokeWidth('0'))
    .toEqual({
      strokeWidth: '0',
    })

  expect(strokeWidth('2'))
    .toEqual({
      strokeWidth: '2',
    })
})

test('uses value as raw css if it cant be resolved from tailwind', () => {
  expect(strokeWidth('2%'))
    .toEqual({
      strokeWidth: '2%',
    })

  expect(strokeWidth('none'))
    .toEqual({
      strokeWidth: 'none',
    })
})
