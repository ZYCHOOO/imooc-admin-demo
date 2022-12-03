import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/i18n'

import installElementPlus from './plugins/element'
// 导入 svgIcon
import installIcons from '@/icons'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import '@/styles/index.scss'

// 导入路由鉴权
import '@/router/permission'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store).use(router).use(i18n).mount('#app')
