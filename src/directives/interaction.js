const clickOutside = {
  mounted (el, binding) {
    const handler = (e) => {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.value && typeof binding.value === 'function') {
        binding.value(e)
      }
    }
    el._vClickOutside_ = handler
    document.addEventListener('click', handler)
  },
  unmounted (el, binding) {
    console.log('directive unmounted::', el, binding)
    document.removeEventListener('click', el._vClickOutside_)
  }
}

export default {
  clickOutside
}
