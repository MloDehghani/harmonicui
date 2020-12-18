import { Generator } from '../../types'
import resolveThemeValue from '../resolveThemeValue'

export const strokeWidth: Generator = (value) => {
  const path = `strokeWidth.${value}`

  return {
    strokeWidth: resolveThemeValue(path, value),
  }
}
