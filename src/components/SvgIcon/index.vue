<template>
  <!-- 展示外部图标 -->
  <div
    v-if="isExternal"
    :id="id"
    :style="externalIconStyle"
    class="svg-icon svg-icon--external"
    :class="className"
    @click="handleClick"
  />
  <!-- 展示内部图标 -->
  <svg
    v-else
    :id="id"
    class="svg-icon"
    :class="className"
    aria-hidden="true"
    @click="handleClick"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'
import { isExternal as external } from '@/utils/validate'
const props = defineProps({
  id: { type: String },
  // icon图标
  icon: { type: String, required: true },
  // 图标类名
  className: { type: String, default: '' }
})

const emit = defineEmits(['handle-click'])

/**
 * 判断当前图标是否为外部图标
 */
const isExternal = computed(() => external(props.icon))
/**
 * 外部图标样式
 */
const externalIconStyle = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))
/**
 * 内部图标
 */
const iconName = computed(() => `#icon-${props.icon}`)

const handleClick = () => {
  emit('handle-click')
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  &--external {
    display: inline-block;
    background-color: currentColor;
    mask-size: cover !important;
  }
}
</style>
