<template>
  <div class="user-manage">
    用户管理
    <el-button v-permission="'add-user'" type="primary">添加用户</el-button>
    <el-button v-permission="{ shit: true }" type="warning" plain>干掉用户</el-button>
    <el-button v-permission="'del-user'" type="danger" plain>删除用户</el-button>
  </div>
</template>

<script setup>
import { } from 'vue'

</script>

<style lang="scss" scoped>
</style>
