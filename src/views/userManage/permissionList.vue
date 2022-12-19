<template>
  <div class="permission-list">
    <el-card class="permission-list-body">
      <tree-table
        default-expand-all
        :tree-props="treeProps"
        :table-data="tableData"
        :table-columns="tableColumns"
        :table-loading="tableLoading"
      />
    </el-card>
  </div>
</template>

<script setup>
import {} from 'vue'
import { getPermission } from '@/api/permission'
import { listTableHook } from '@/hooks/listTableHook'
import { PERMISSION_LIST_COLUMNS } from '@/constant/tableColumns'

const { tableData, tableLoading, tableColumns, treeProps, getData } =
  listTableHook()

tableColumns.value = PERMISSION_LIST_COLUMNS

const getPermissionData = async () => {
  try {
    tableLoading.value = true
    const res = await getPermission()
    tableData.value = res.data
  } finally {
    tableLoading.value = false
  }
}

getData(1, 10, getPermissionData)
</script>

<style lang="scss" scoped></style>
