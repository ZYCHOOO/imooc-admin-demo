<template>
  <div class="user-manage">
    <el-card class="user-manage-header">
      <el-button type="primary" @click="handleImport">{{
        $t('msg.excel.importExcel')
      }}</el-button>
      <el-button type="success" @click="handleExport">{{
        $t('msg.excel.exportExcel')
      }}</el-button>
    </el-card>
    <el-card class="user-manage-body">
      <list-table
        show-index
        pagination-position="center"
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
    </el-card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, getCurrentInstance } from 'vue'
import { getUserManageList } from '@/api/userManage'
import { USER_MANAGE_COLUMNS } from '@/constant/tableColumns'
import { listTableHook } from '@/hooks/listTableHook'

const router = useRouter()
const { proxy } = getCurrentInstance()
const { tableData, tableLoading, tableColumns, paginationConfig, getData } =
  listTableHook()

tableColumns.value = USER_MANAGE_COLUMNS

const formatter = (row, column, cellValue, index) => {
  const rowKey = column.property
  if (rowKey === 'openTime') {
    return proxy.$filters.dateTimeFilter(row[rowKey])
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

const handleImport = () => {
  router.push({ name: 'UserImport' })
}

const handleExport = () => {}

getData(1, 10, getUserManageData)
</script>

<style lang="scss" scoped>
.user-manage {
  @include flex-column;
  &-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  &-header {
    @include flex-row;
    justify-content: flex-end;
  }
}
</style>
