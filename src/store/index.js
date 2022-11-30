import { createStore } from 'vuex'
import app from './modules/app'
import user from './modules/user'
import theme from './modules/theme'

import getters from './getters'

export default createStore({
  modules: {
    app,
    user,
    theme
  },
  getters
})
