const demo = {
  beforeMounted (el, binding) {
    console.log('cdirective beforeMounted::', el, binding)
  },
  mounted (el, binding) {
    console.log('directive mounted::', el, binding)
  },
  beforeUpdate (el, binding) {
    console.log('directive beforeUpdate::', el, binding)
  },
  updated (el, binding) {
    console.log('directive updated::', el, binding)
  },
  beforeUnmounted (el, binding) {
    console.log('directive beforeMounted::', el, binding)
  },
  unmounted (el, binding) {
    console.log('directive unmounted::', el, binding)
  }
}

export default {
  demo
}
