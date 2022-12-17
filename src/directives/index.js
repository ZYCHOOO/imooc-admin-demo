import demo from './demo'
import interaction from './interaction'
import permission from './permission'

// 自定义指令
const directives = {
  ...demo,
  ...interaction,
  ...permission
}

export default (app) => {
  Object.keys(directives).forEach((key) => {
    app.directive(key, directives[key])
  })
}
