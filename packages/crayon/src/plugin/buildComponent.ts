import { Styles, TailwindComponent } from '../types'
import resolveGenerator from './resolveGenerator'

export default function buildComponent (name: string, styles: Styles): TailwindComponent {
  let componentStyles = {}

  for (const [property, value] of Object.entries(styles)) {
    const generator = resolveGenerator(property)
    const cssStyle = generator(value)
    componentStyles = { ...componentStyles, ...cssStyle }
  }

  return {
    [name]: componentStyles,
  }
}