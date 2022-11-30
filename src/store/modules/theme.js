import { getItem, setItem } from '@/utils/storage'
import { MAIN_COLOR_KEY, DEFAULT_COLOR_KEY } from '@/utils/enums'

export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(MAIN_COLOR_KEY) || getItem(DEFAULT_COLOR_KEY)
  }),
  mutations: {
    setMainColor (state, newColor) {
      state.mainColor = newColor
      setItem(MAIN_COLOR_KEY, newColor)
    }
  },
  actions: {}
}
