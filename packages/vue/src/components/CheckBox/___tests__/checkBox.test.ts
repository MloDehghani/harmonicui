import CheckBox from '../CheckBox'
import { Component, defineComponent } from 'vue'
import { fireEvent } from '@testing-library/vue'
import { DefaultSlot, setupContexts, DefaultSlotComponent, renderComponent } from '../../../test-utils'
import { useFormCheckBoxContext } from '../../../contracts'

jest.mock('../../../composables/useId')

const {
  LabelContext,
  FormCheckBoxContext,
  HintMessageContext,
  ErrorMessageContext,
} = setupContexts([
  'LabelContext',
  'FormCheckBoxContext',
  'HintMessageContext',
  'ErrorMessageContext',
])

function renderCheckBox (
  props?: Record<string, unknown>,
  defaultSlot?: string,
  components?: Record<string, Component>,
) {
  const requiredProps = { modelValue: '' }
  props = { ...requiredProps, ...props }

  defaultSlot = defaultSlot ?? `
     <template v-slot="props">
     <DefaultSlotComponent :slot-props="props"/>
     </template>
   `
  components = components ?? { DefaultSlotComponent }

  return renderComponent(CheckBox, props, defaultSlot, components)
}

test('should be a render-less component', () => {
  expect(CheckBox).toBeRenderLessComponent()
  expect(CheckBox).toRendersDefaultSlotContent()
})

test('generates an id for FormCheckBoxContext', () => {
  renderCheckBox()

  const id = 'HarmonicUI-CheckBox-FormCheckBox-1'

  expect({ id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ htmlFor: id })
    .toHaveBeenProvidedThrough(LabelContext)
  expect({ id })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('generates unique id for each instance', () => {
  renderCheckBox()

  let id = 'HarmonicUI-CheckBox-FormCheckBox-1'

  expect({ id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ htmlFor: id })
    .toHaveBeenProvidedThrough(LabelContext)
  expect({ id })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)

  renderCheckBox()

  id = 'HarmonicUI-CheckBox-FormCheckBox-2'

  expect({ id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ htmlFor: id })
    .toHaveBeenProvidedThrough(LabelContext)
  expect({ id })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('input id can be overridden via props', () => {
  const id = 'username-input'

  renderCheckBox({ id })

  expect({ id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ htmlFor: id })
    .toHaveBeenProvidedThrough(LabelContext)
  expect({ id })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('generates an id for label', () => {
  renderCheckBox()

  const id = 'HarmonicUI-CheckBox-Label-1'

  expect({ labelId: id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ id })
    .toHaveBeenProvidedThrough(LabelContext)
})

test('generates a unique label id for each instance', () => {
  renderCheckBox()

  let id = 'HarmonicUI-CheckBox-Label-1'

  expect({ labelId: id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ id })
    .toHaveBeenProvidedThrough(LabelContext)

  renderCheckBox()

  id = 'HarmonicUI-CheckBox-Label-2'

  expect({ labelId: id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ id })
    .toHaveBeenProvidedThrough(LabelContext)
})

test('generates an id for error message', () => {
  renderCheckBox()

  const id = 'HarmonicUI-CheckBox-ErrorMessage-1'

  expect({ errorMessageId: id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ id })
    .toHaveBeenProvidedThrough(ErrorMessageContext)
  expect({ ariaErrormessage: id })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('generates unique error message id for each instance', () => {
  renderCheckBox()

  let id = 'HarmonicUI-CheckBox-ErrorMessage-1'

  expect({ errorMessageId: id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ id })
    .toHaveBeenProvidedThrough(ErrorMessageContext)
  expect({ ariaErrormessage: id })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)

  renderCheckBox()

  id = 'HarmonicUI-CheckBox-ErrorMessage-2'

  expect({ errorMessageId: id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ id })
    .toHaveBeenProvidedThrough(ErrorMessageContext)
  expect({ ariaErrormessage: id })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})
//
test('error message id can be overridden via props', () => {
  const id = 'username-error-message'

  renderCheckBox({ errorMessageId: id })

  expect({ errorMessageId: id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ id })
    .toHaveBeenProvidedThrough(ErrorMessageContext)
  expect({ ariaErrormessage: id })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})
//
test('generates an id for hint message', () => {
  renderCheckBox()

  const id = 'HarmonicUI-CheckBox-HintMessage-1'

  expect({ hintMessageId: id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ id })
    .toHaveBeenProvidedThrough(HintMessageContext)
  expect({ ariaDescribedby: id })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('generates unique hint message id for each instance', () => {
  renderCheckBox()

  let id = 'HarmonicUI-CheckBox-HintMessage-1'

  expect({ hintMessageId: id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ id })
    .toHaveBeenProvidedThrough(HintMessageContext)
  expect({ ariaDescribedby: id })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)

  renderCheckBox()

  id = 'HarmonicUI-CheckBox-HintMessage-2'

  expect({ hintMessageId: id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ id })
    .toHaveBeenProvidedThrough(HintMessageContext)
  expect({ ariaDescribedby: id })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('error message id can be overridden via props', () => {
  const id = 'hint-message-id'

  renderCheckBox({ hintMessageId: id })

  expect({ hintMessageId: id })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ id })
    .toHaveBeenProvidedThrough(HintMessageContext)
  expect({ ariaDescribedby: id })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('the checkBox is required by default', () => {
  renderCheckBox()

  expect({ optional: false, required: true })
    .toHaveBeenProvidedThrough(DefaultSlot)

  expect({ optional: false })
    .toHaveBeenProvidedThrough(LabelContext)

  expect({ required: true })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('user can make input optional via prop', () => {
  renderCheckBox({ optional: true })

  expect({ optional: true, required: false })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ optional: true })
    .toHaveBeenProvidedThrough(LabelContext)
  expect({ required: false })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('should not be disabled by default', () => {
  renderCheckBox()

  expect({ disabled: false })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ disabled: false })
    .toHaveBeenProvidedThrough(LabelContext)
  expect({ disabled: false })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('the input can be disabled via prop', () => {
  renderCheckBox({ disabled: true })

  expect({ disabled: true })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ disabled: true })
    .toHaveBeenProvidedThrough(LabelContext)
  expect({ disabled: true })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('is valid by default', () => {
  renderCheckBox()

  expect({ invalid: false })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ invalid: false })
    .toHaveBeenProvidedThrough(LabelContext)
  expect({ invalid: false })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
  expect({ visible: false })
    .toHaveBeenProvidedThrough(ErrorMessageContext)
  expect({ visible: true })
    .toHaveBeenProvidedThrough(HintMessageContext)
})

test('user can control validation state via error prop', () => {
  renderCheckBox({ error: true })

  expect({ invalid: true })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ invalid: true })
    .toHaveBeenProvidedThrough(LabelContext)
  expect({ invalid: true })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
  expect({ visible: true })
    .toHaveBeenProvidedThrough(ErrorMessageContext)
  expect({ visible: false })
    .toHaveBeenProvidedThrough(HintMessageContext)
})

test('exposes the given error message', () => {
  const errorMessage = 'Whoops! something went wrong.'
  renderCheckBox({ errorMessage })

  expect({ errorMessage })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ message: errorMessage })
    .toHaveBeenProvidedThrough(ErrorMessageContext)
})

test('should not be checked by default', () => {
  renderCheckBox()

  expect({ checked: false })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ checked: false })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('the checkBox can be checked via prop', () => {
  renderCheckBox({ checked: true })

  expect({ checked: true })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ checked: true })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('should not be indeterminate by default', () => {
  renderCheckBox()

  expect({ indeterminate: false })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ indeterminate: false })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('the checkBox can be indeterminate via prop', () => {
  renderCheckBox({ indeterminate: true })

  expect({ indeterminate: true })
    .toHaveBeenProvidedThrough(DefaultSlot)
  expect({ indeterminate: true })
    .toHaveBeenProvidedThrough(FormCheckBoxContext)
})

test('should handle v-model - provide value and updateValue through FormCheckBoxContext', async () => {
  const InjectorComponent = defineComponent({
    template: `
      <input :value="value"
             type="checkBox"
             data-testId="InjectorCheckBox"
             @input="updateValue($event.target.value)"
      />
    `,
    setup () {
      const { value, updateValue } = useFormCheckBoxContext()
      return { value, updateValue }
    },
  })

  const { getByTestId, emitted } = renderCheckBox(
    { modelValue: 'hello' },
    '<InjectorComponent/>',
    { InjectorComponent },
  )

  const InjectorInput = getByTestId('InjectorCheckBox')

  expect(InjectorInput).not.toBeChecked()
  expect(emitted()).toEqual({})

  await fireEvent.click(InjectorInput)

  expect(InjectorInput).toBeChecked()
  expect(emitted()).toEqual({ 'update:modelValue': [['hello']] })
})

test('should be emit "on|off" if v-model not be provided ', async () => {
  const InjectorComponent = defineComponent({
    template: `
      <input :value="value"
             type="checkBox"
             data-testId="InjectorCheckBox"
             @input="updateValue($event.target.value)"
      />
    `,
    setup () {
      const { value, updateValue } = useFormCheckBoxContext()
      return { value, updateValue }
    },
  })

  const { getByTestId, emitted } = renderCheckBox(
    { modelValue: '' },
    '<InjectorComponent/>',
    { InjectorComponent },
  )

  const InjectorInput = getByTestId('InjectorCheckBox')

  expect(InjectorInput).not.toBeChecked()
  expect(emitted()).toEqual({})

  await fireEvent.click(InjectorInput)

  expect(InjectorInput).toBeChecked()
  expect(emitted()).toEqual({ 'update:modelValue': [['on']] })

  await fireEvent.click(InjectorInput)

  expect(InjectorInput).not.toBeChecked()
  expect(emitted()).toEqual({ 'update:modelValue': [['on'], ['off']] })
})

// test('shuld be true v-model if checked', async () => {
//     renderCheckBox({
//         modelValue:'',
//         checked:true
//     })

//     expect({modelValue:true})
//         .toHaveBeenProvidedThrough(DefaultSlot)
//     expect({modelValue:true})
//         .toHaveBeenProvidedThrough(FormCheckBoxContext)
// })
