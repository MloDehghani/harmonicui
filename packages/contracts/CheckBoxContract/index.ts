interface CheckBoxContract {
  id: string | undefined,
  invalid: boolean,
  required: boolean,
  disabled: boolean,
  checked: boolean,
  indeterminate: boolean,
  value: string | number | boolean | undefined,
  ariaDescribedby: string | undefined,
  ariaErrormessage: string | undefined,
  updateValue: ((value: string) => void) | undefined,
}

const CheckBoxContractDefaultValues: CheckBoxContract = {
  id: undefined,
  value: undefined,
  invalid: false,
  required: true,
  checked: false,
  indeterminate: false,
  disabled: false,
  updateValue: undefined,
  ariaDescribedby: undefined,
  ariaErrormessage: undefined,
}

export {
  CheckBoxContract,
  CheckBoxContractDefaultValues,
}
