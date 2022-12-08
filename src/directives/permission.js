import store from '@/store'

/**
 * 按钮权限展示
 */
const permission = {
  mounted (el, binding) {
    const btnPermission = binding.value
    const permission = store.getters.permission
    const hasPermission = permission.includes(btnPermission)
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
}

export default {
  permission
}
