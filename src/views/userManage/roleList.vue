<template>
  <div class="role-list">
    <el-card class="role-list-body">
      <list-table
        show-index
        :index-width="80"
        :table-data="tableData"
        :table-columns="tableColumns"
        :table-loading="tableLoading"
        :pagination-config="paginationConfig"
      >
        <template #operate="{ row }">
          <el-button type="primary">{{
            $t('msg.role.assignPermissions')
          }}</el-button>
        </template>
      </list-table>
    </el-card>
  </div>
</template>

<script setup>
import {} from 'vue'
import { getRoles } from '@/api/role'
import { listTableHook } from '@/hooks/listTableHook'
import { ROLE_LIST_COLUMNS } from '@/constant/tableColumns'

const { tableData, tableLoading, tableColumns, paginationConfig, getData } =
  listTableHook()

tableColumns.value = ROLE_LIST_COLUMNS

const getRoleData = async () => {
  try {
    tableLoading.value = true
    const res = await getRoles()
    tableData.value = res.data
    paginationConfig.value.total = res.total
  } finally {
    tableLoading.value = false
  }
}

getData(1, 10, getRoleData)
</script>

<style lang="scss" scoped></style>
