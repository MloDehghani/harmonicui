import { createProvider, render } from '../../test-utils'
import { FormCheckBoxContext, FormCheckBoxContract } from '../FormCheckBoxContract'

const {
  renderProvider,
  consumer: FormCheckBoxContextConsumer,
  ConsumerComponent,
} = createProvider<FormCheckBoxContract>(FormCheckBoxContext, 'FormCheckBoxContext')

test('throws a warning and returns default values if no provider exists to perform the contract', () => {
  console.warn = jest.fn()

  const defaults = {
    id: null,
    value: null,
    indeterminate: false,
    checked: false,
    updateValue: null,
    ariaDescribedby: null,
    required: true,
    disabled: false,
    invalid: false,
  }

  render(ConsumerComponent)

  expect(console.warn).toHaveBeenCalledWith(
    expect.stringContaining('[ HarmonicUI: UnperformedContractWarning ]'),
  )
  expect(FormCheckBoxContextConsumer).toHaveBeenReceived(defaults)
})

test('the contract defines an id property', () => {
  renderProvider({
    id: 'checkbox',
  })

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    id: 'checkbox',
  })
})

test('id is null by default', () => {
  renderProvider({})

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    id: null,
  })
})

test('the contract defines an aria-errormessage property', () => {
  renderProvider({
    ariaErrormessage: 'error-message-id',
  })

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    ariaErrormessage: 'error-message-id',
  })
})

test('aria-errormessage is null by default', () => {
  renderProvider({})

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    ariaErrormessage: null,
  })
})

test('the contract defines an aria-describedBy property', () => {
  renderProvider({
    ariaDescribedby: 'hint-message-id',
  })

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    ariaDescribedby: 'hint-message-id',
  })
})

test('aria-errormessage is null by default', () => {
  renderProvider({})

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    ariaDescribedby: null,
  })
})

test('the contract defines a value property', () => {
  renderProvider({
    value: 'checkBox',
  })

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    value: 'checkBox',
  })
})

test('value is null by default', () => {
  renderProvider({})

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    value: null,
  })
})

test('the contract defines an updateValue method', () => {
  const mock = jest.fn()

  renderProvider({
    updateValue: mock,
  })

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    updateValue: mock,
  })
})

test('UpdateValue is null by default', () => {
  renderProvider({})

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    updateValue: null,
  })
})

test('the contract defines a required property', () => {
  renderProvider({ required: false })

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    required: false,
  })
})

test('required is true by default', () => {
  renderProvider({})

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    required: true,
  })
})

test('the contract defines a disabled property', () => {
  renderProvider({ disabled: true })

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    disabled: true,
  })
})

test('disabled is false by default', () => {
  renderProvider({})

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    disabled: false,
  })
})

test('the contract defines an invalid property', () => {
  renderProvider({ invalid: true })

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived(
    { invalid: true })
})

test('invalid is false by default', () => {
  renderProvider({})

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    invalid: false,
  })
})

test('the contract defines an checked property', () => {
  renderProvider({
    checked: true,
  })

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    checked: true,
  })
})

test('checked is false by default', () => {
  renderProvider({})

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    checked: false,
  })
})

test('the contract defines an indeterminate property', () => {
  renderProvider({
    indeterminate: true,
  })

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    indeterminate: true,
  })
})

test('indeterminate is false by default', () => {
  renderProvider({})

  expect(FormCheckBoxContextConsumer).toHaveBeenReceived({
    indeterminate: false,
  })
})
