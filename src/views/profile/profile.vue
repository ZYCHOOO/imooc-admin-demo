<template>
  <div>
    <el-pagination
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
    />

    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>

    <div class="test-btn" :class="{ active: test }" @click="toggleBoolean">
      test click alter Boolean:: {{ test }}
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { ElMessage } from 'element-plus'

const test = ref(false)

const toggleBoolean = () => {
  test.value = !test.value
  ElMessage.success(test.value)
}

watch(test, (val, newVal) => {
  console.log('old val: ', val, 'new val: ', newVal)
})
</script>

<style lang="scss" scoped>
.test-btn {
  @include flex-center;
  border: 1px solid black;
  width: 280px;
  height: 38px;
}
</style>
