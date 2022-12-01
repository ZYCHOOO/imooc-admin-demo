<template>
  <div :class="{ show: isShow }" class="header-search">
    <svg-icon
      class-name="search-icon"
      icon="search"
      @handle-click="onShowClick"
    />
    <el-select
      ref="headerSearchSelectRef"
      v-model="search"
      class="header-search-select"
      filterable
      default-first-option
      remote
      :remote-method="querySearch"
      placeholder="search"
      @change="handleSelectChange"
    >
      <el-option
        v-for="option in searchOptions"
        :key="option.item.path"
        :label="option.item.title.join(' > ')"
        :value="option.item"
      />
    </el-select>
  </div>
</template>

<script setup>
import Fuse from 'fuse.js'
import { useRouter } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { filterRoutes } from '@/utils/route'
import { generateRoutes } from './fuseData.js'
import { watchSwitchLang } from '@/utils/i18n'
import { headerSearchHook } from './headerSearchHook'

// TODO v-directive `v-clickoutside`
const headerSearchSelectRef = ref(null)
const handleClose = (e) => {
  const ePath = e ? e.path.join('') : ''
  if (ePath.indexOf('[object SVGSVGElement]') === -1) {
    headerSearchSelectRef.value.blur()
    isShow.value = false
    searchOptions.value = []
  }
}

// 展示相关
const showHooks = () => {
  const isShow = ref(false)

  const onShowClick = () => {
    isShow.value = !isShow.value
  }

  watch(isShow, (val) => {
    if (val) {
      document.body.addEventListener('click', handleClose)
    } else {
      document.body.removeEventListener('click', handleClose)
    }
  })
  return { isShow, onShowClick }
}

// 搜索相关
const searchHooks = () => {
  const router = useRouter()
  const search = ref('')

  // 数据源
  let searchPool = computed(() => {
    const routes = filterRoutes(router.getRoutes())
    return generateRoutes(routes)
  })

  initFuse(searchPool.value)

  const handleSelectChange = (route) => {
    router.push(route.path)
    handleClose()
  }

  watchSwitchLang(() => {
    searchPool = computed(() => {
      const routes = filterRoutes(router.getRoutes())
      return generateRoutes(routes)
    })
    initFuse(searchPool.value)
  })

  return { search, searchPool, handleSelectChange }
}

const { searchOptions, initFuse, querySearch } = headerSearchHook()
const { search, searchPool, handleSelectChange } = searchHooks()
const { isShow, onShowClick } = showHooks(searchOptions)
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;
  :deep .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    :deep .el-input.is-focus .el-input__inner {
      box-shadow: none !important;
    }

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
