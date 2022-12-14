<template>
  <div class="user-manage">
    <list-table
      show-index
      :index-width="80"
      :formatter="formatter"
      :table-data="tableData"
      :table-columns="tableColumns"
      :table-loading="tableLoading"
      :pagination-config="paginationConfig"
    >
      <template #avatar="{ row }">
        <img :src="row.avatar" alt="" class="user-manage-avatar" />
      </template>
      <template #role="{ row }">
        <el-tag v-for="item in row.role" :key="item.id">{{
          item.title
        }}</el-tag>
      </template>
      <template #operate="{ row }">
        <el-button type="primary">查 看</el-button>
        <el-button type="default">角 色</el-button>
        <el-button type="danger">删 除</el-button>
      </template>
    </list-table>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
import { getUserManageList } from '@/api/userManage'
import ListTable from '@/components/ListTable/index'
import { USER_MANAGE_COLUMNS } from '@/constant/tableColumns'
import { listTableHook } from '@/hooks/listTableHook'

const { proxy } = getCurrentInstance()

const { tableData, tableLoading, tableColumns, paginationConfig, getData } =
  listTableHook()

tableColumns.value = USER_MANAGE_COLUMNS

const formatter = (row, column, cellValue, index) => {
  const rowKey = column.property
  if (rowKey === 'openTime') {
    return proxy.$dayjs(row[rowKey]).format('YYYY-MM-DD HH:mm')
  } else {
    return row[rowKey] || '--'
  }
}

// 获取用户数据列表
const getUserManageData = async () => {
  try {
    tableLoading.value = true
    const res = await getUserManageList()
    tableData.value = res.data
    paginationConfig.value.total = res.total
  } finally {
    tableLoading.value = false
  }
}

getData(1, 10, getUserManageData)
</script>

<style lang="scss" scoped>
.user-manage {
  &-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
}
</style>
