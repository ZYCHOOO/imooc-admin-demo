import { LANG_KEY } from '@/utils/enums'
import { getItem, setItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem(LANG_KEY) || 'zh'
  }),
  mutations: {
    toggleSidebarOpened (state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    setLanguage (state, language) {
      state.language = language
      setItem(LANG_KEY, language)
    }
  }
}
