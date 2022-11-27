<template>
  <el-menu
    :unique-opend="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- 子集menu -->
    <el-sub-menu index="1">
      <template #title>
        <i class="el-icon-location" />
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1-1</el-menu-item>
      <el-menu-item index="1-2">选项1-2</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <template #title>
        <i class="el-icon-location" />
        <span>导航四</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script setup></script>

<style lang="scss" scoped></style>
