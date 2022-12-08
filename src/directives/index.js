import demo from './demo'
import click from './click'

// 自定义指令
const directives = {
  ...demo,
  ...click
}

export const installDirectives = (app) => {
  Object.keys(directives).forEach((key) => {
    app.directive(key, directives[key])
  })
}
