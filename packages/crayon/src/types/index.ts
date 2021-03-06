export * from './Generator'
export * from './Tailwindcss'
export * from './Theme'
export * from './Config'
export * from './Collector'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toMatchCss (expected: string): R
    }
  }
}
