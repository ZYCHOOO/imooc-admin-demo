<template>
  <div class="list-table">
    <!-- 表格-按钮组 -->
    <div v-if="$slots['table-header']" class="table-list__header">
      <slot name="table-header" />
    </div>
    <!-- 表格-数据展示 -->
    <div class="list-table-content">
      <el-table
        ref="table"
        :border="border"
        :stripe="stripe"
        :data="tableData"
        v-loading="tableLoading"
        @select="select"
        @select-all="selectAll"
        @row-click="onRowClick"
        @selection-change="selectionChange"
      >
        <!-- 是否有多选 -->
        <el-table-column
          v-if="showSelection"
          type="selection"
          align="center"
          reserve-selection
          :width="selectionWidth"
          :selectable="checkSelectable"
        />
        <!-- 是否有序号 -->
        <el-table-column
          v-if="showIndex"
          label="序号"
          type="index"
          :width="indexWidth"
          :index="customIndex"
        />
        <template v-for="(col, index) in tableColumns" :key="index">
          <!-- 普通列 -->
          <el-table-column
            v-if="!col.slot"
            :prop="col.key"
            :fixed="col.fixed"
            :label="col.label"
            :width="col.width"
            :min-width="col.minWidth"
            :align="col.align"
            :sortable="col.sortable"
            :column-key="col.columnKey"
            :formatter="formatter"
            :show-overflow-tooltip="true"
            :render-header="renderHeader"
          />
          <!-- 操作列/自定义列 -->
          <el-table-column
            v-else
            :prop="col.key"
            :fixed="col.fixed"
            :label="col.label"
            :width="col.width"
            :min-width="col.minWidth"
            :align="col.align"
            :sortable="col.sortable"
            :column-key="col.columnKey"
            :show-overflow-tooltip="true"
            :render-header="renderHeader"
          >
            <template #default="scope">
              <slot :name="col.slot" :row="scope.row" />
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
    <!-- 列表表格-底部 -->
    <div v-if="paginationConfig" class="list-table-footer">
      <el-pagination
        :pagination="paginationConfig"
        @size-change="handleSizeChange"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue'
import variables from '@/styles/variables.scss'
import Pagination from '@/components/Pagination/index'

const props = defineProps({
  tableLoading: { type: Boolean },
  paginationConfig: { type: Object },
  indexWidth: { type: Number, default: 50 },
  stripe: { type: Boolean, default: false },
  border: { type: Boolean, default: false },
  tableData: { type: Array, required: true },
  showIndex: { type: Boolean, default: false },
  tableColumns: { type: Array, required: true },
  selectionWidth: { type: Number, default: 50 },
  renderHeader: { type: Function, default: null },
  showSelection: { type: Boolean, default: false },
  searchParams: { type: Object, default: () => {} },
  formatter: {
    type: Function,
    default: (row, column, cellValue, index) => {
      const rowKey = column.property
      return row[rowKey] || '--'
    }
  },
  checkSelectable: {
    type: Function,
    default: () => {
      return true
    }
  }
})

const emits = defineEmits([
  'select',
  'select-all',
  'selection-chang',
  'size-change',
  'page-change'
])

const tableConfigHook = (props) => {
  const filterParams = (searchParams) => {
    const params = { ...searchParams }
    if (searchParams.keywordType && searchParams.keyword) {
      params[searchParams.keywordType] = searchParams.keyword
    }
    delete params.keywordType
    delete params.keyword
    const searchArr = Object.values(params)
    return searchArr.filter(
      (item) => item && item instanceof Array && item.length
    )
  }

  const customIndex = (index) => {
    const currentPage = props.paginationConfig.pageNum
    const currentLimit = props.paginationConfig.pageSize
    return index + 1 + (currentPage - 1) * currentLimit
  }

  return { customIndex }
}

const tableOperationHook = (emits) => {
  const table = ref(null)
  const handleSizeChange = (size) => {
    emits('size-change', size)
  }

  const handlePageChange = (page) => {
    emits('page-change', page)
  }

  const select = (selection, row) => {
    emits('select', selection, row)
  }

  const selectAll = (selection) => {
    emits('select-all', selection)
  }

  const selectionChange = (selection) => {
    emits('selection-change', selection)
  }

  const clearSelection = () => {
    table.value.clearSelection()
  }

  const clearFilter = (columnkey) => {
    table.value.clearFilter(columnkey)
  }

  const doLayout = () => {
    table.value.doLayout()
  }

  const onRowClick = (val) => {
    table.value.toggleRowSelection(val)
  }

  return {
    select,
    selectAll,
    selectionChange,
    clearSelection,
    handleSizeChange,
    handlePageChange,
    clearFilter,
    doLayout,
    onRowClick
  }
}

const { customIndex } = tableConfigHook(props)
const {
  select,
  selectAll,
  selectionChange,
  clearSelection,
  handleSizeChange,
  handlePageChange,
  clearFilter,
  doLayout,
  onRowClick
} = tableOperationHook()
</script>

<style lang="scss" scoped>
@import '~@/styles/components/list-table.scss';
</style>
