import { textJustify } from '../textJustify'

jest.mock('../../../utils/tailwindUtils')

test('uses value as raw css', () => {
  expect(textJustify('inter-word'))
    .toEqual({ textJustify: 'inter-word' })

  expect(textJustify('inter-character'))
    .toEqual({ textJustify: 'inter-character' })

  expect(textJustify('distribute'))
    .toEqual({ textJustify: 'distribute' })
})
