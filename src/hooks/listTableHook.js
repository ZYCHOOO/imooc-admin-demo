import { ref } from 'vue'

export const listTableHook = () => {
  const tableData = ref([])
  const tableColumns = ref([])
  const tableLoading = ref(false)
  const paginationConfig = ref({
    total: 0,
    pageNum: 1,
    pageSize: 10,
    pageSizes: [5, 10, 20, 30, 40, 50],
    layout: 'total, sizes, prev, pager, next, jumper'
  })

  const getData = (pageNum, pageSize, cb) => {
    paginationConfig.value.pageNum = pageNum || paginationConfig.value.pageNum
    paginationConfig.value.pageSize =
      pageSize || paginationConfig.value.pageSize
    cb()
  }

  return { tableData, tableLoading, tableColumns, paginationConfig, getData }
}
