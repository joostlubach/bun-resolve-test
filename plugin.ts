import { plugin } from 'bun'

plugin({
  name: 'my-resolve',
  setup: build => {
    build.onResolve({filter: /^.*$/}, args => {
      console.log(args)
      return undefined
    })
  }
})