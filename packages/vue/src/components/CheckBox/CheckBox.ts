import { defineComponent, getCurrentInstance } from 'vue'
import useId from '../../composables/useId'
import {
  provideLabelContext,
  provideFormCheckBoxContext,
  provideErrorMessageContext,
  provideHintMessageContext,
} from '../../contracts'

export default defineComponent({
  name: 'CheckBox',

  props: {
    id: {
      type: String,
    },
    labelId: {
      type: String,
    },
    errorMessageId: {
      type: String,
    },
    hintMessageId: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number, Boolean],
      required: true,
    },
    optional: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },

  emits: [
    'update:modelValue',
  ],

  setup (props, { slots, emit }) {
    const idSequence = useId()
    let checked = props.checked

    function generateId (childName: string, id: number) {
      const componentName = getCurrentInstance()?.type.name
      return `HarmonicUI-${componentName}-${childName}-${id}`
    }

    const id = props.id ?? generateId('FormCheckBox', idSequence)
    const labelId = props.labelId ?? generateId('Label', idSequence)
    const errorMessageId = props.errorMessageId ?? generateId('ErrorMessage', idSequence)
    const hintMessageId = props.hintMessageId ?? generateId('HintMessage', idSequence)

    function updateValue (value: string | number | boolean) {
      value === 'on' ? resolveOnOrOff() : emit('update:modelValue', value)
    }

    function resolveOnOrOff () {
      checked = !checked
      checked ? emit('update:modelValue', 'on') : emit('update:modelValue', 'off')
    }

    provideLabelContext({
      id: labelId,
      htmlFor: id,
      optional: props.optional,
      disabled: props.disabled,
      invalid: props.error,
    })

    provideFormCheckBoxContext({
      id,
      updateValue,
      disabled: props.disabled,
      checked: props.checked,
      indeterminate: props.indeterminate,
      required: !props.optional,
      value: props.modelValue,
      ariaErrormessage: errorMessageId,
      ariaDescribedby: hintMessageId,
      invalid: props.error,
    })

    provideErrorMessageContext({
      id: errorMessageId,
      visible: props.error,
      message: props.errorMessage,
    })

    provideHintMessageContext({
      id: hintMessageId,
      visible: !props.error,
    })

    return () => {
      return slots.default?.({
        id,
        labelId,
        updateValue,
        hintMessageId,
        errorMessageId,
        optional: props.optional,
        required: !props.optional,
        disabled: props.disabled,
        invalid: props.error,
        errorMessage: props.errorMessage,
        checked: props.checked,
        indeterminate: props.indeterminate,
      })
    }
  },
})
