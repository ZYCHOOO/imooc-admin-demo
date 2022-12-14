import { getItem, setItem } from '@/utils/storage'
import variables from '@/styles/variables.scss'
import { MAIN_COLOR_KEY, DEFAULT_COLOR_KEY } from '@/constant/enums'

export default {
  namespaced: true,
  state: () => ({
    variables,
    mainColor: getItem(MAIN_COLOR_KEY) || getItem(DEFAULT_COLOR_KEY)
  }),
  mutations: {
    setMainColor (state, newColor) {
      state.mainColor = newColor
      state.variables.menuBg = newColor
      setItem(MAIN_COLOR_KEY, newColor)
    }
  },
  actions: {}
}
