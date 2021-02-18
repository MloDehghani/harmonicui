import { inject, InjectionKey, provide } from 'vue'
import { throwUnperformedContractWarning } from './utils/throwUnperformedContractWarning'
import { Consumer, Provider } from '../types'

type FormCheckBoxContract = {
  id: string | null,
  invalid: boolean,
  required: boolean,
  checked: boolean,
  indeterminate: boolean,
  disabled: boolean,
  value: string | number | boolean | null,
  ariaDescribedby: string | null,
  ariaErrormessage: string | null,
  updateValue: ((value: string | string | boolean) => void) | null,
}

const FormCheckBoxContextKey: InjectionKey<FormCheckBoxContract> = Symbol('FormCheckBoxContract')

const _defaults: FormCheckBoxContract = {
  id: null,
  value: null,
  invalid: false,
  required: true,
  checked: false,
  indeterminate: false,
  disabled: false,
  updateValue: null,
  ariaDescribedby: null,
  ariaErrormessage: null,
}

const provideFormCheckBoxContext : Provider<FormCheckBoxContract> = (context) => {
  provide(FormCheckBoxContextKey, context)
}

const useFormCheckBoxContext: Consumer<FormCheckBoxContract> = (defaultValue) => {
  const context = inject(FormCheckBoxContextKey, defaultValue)

  if (context === undefined) {
    throwUnperformedContractWarning('FormCheckBoxContract')
    return _defaults
  }

  return { ..._defaults, ...context }
}

const FormCheckBoxContext = {
  provide: provideFormCheckBoxContext,
  consume: useFormCheckBoxContext,
}

export {
  FormCheckBoxContract,
  FormCheckBoxContext,
  provideFormCheckBoxContext,
  useFormCheckBoxContext,
}
