<template>
  <div class="app-wrapper">
    <!-- 左侧menu -->
    <side-bar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ background: variables.menuBg }"
    />
    <div class="main-container">
      <div class="fix-header">
        <!-- 顶部navbar -->
        <nav-bar></nav-bar>
      </div>
      <!-- 内容区 -->
      <app-main></app-main>
    </div>
  </div>
</template>
<script setup>
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'
import SideBar from './components/SideBar/index'
import variables from '@/styles/variables.scss'

import {} from 'vue'
</script>

<style lang="scss" scoped>
@import '~@/styles/mixins.scss';
@import '~@/styles/variables.scss';
.app-wrapper {
  @include clearfix;
  @include relative;
}
.fix-header {
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - #{$sideBarWidth});
  z-index: 9;
}
</style>
