// 全局注册 components
import ListTable from './ListTable/index'

const components = {
  ListTable
}
export default (app) => {
  for (const key in components) {
    app.component(key, components[key])
  }
}
