import { CheckBoxContract, CheckBoxContractDefaultValues as defaults } from '@harmonicui/contracts'
import { createContext } from './utils/createContext'

export const CheckBoxContext = createContext<CheckBoxContract>('CheckBoxContract', defaults)
export const provideCheckBoxContext = CheckBoxContext.provide
export const useCheckBoxContext = CheckBoxContext.consume
