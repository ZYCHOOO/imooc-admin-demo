<template>
  <div class="upload-excel">
    <div class="upload-excel-btn">
      <el-button type="primary" :loading="uploadLoading" @click="handleUpload">
        {{ $t('msg.uploadExcel.upload') }}
      </el-button>
    </div>
    <input
      type="file"
      ref="uploadExcelInput"
      class="upload-excel-input"
      accpet=".xls, .xlsc"
      @change="handleChange"
    />
    <div class="upload-excel-drop">
      <el-icon>
        <UploadFilled />
      </el-icon>
      <span>{{ $t('msg.uploadExcel.drop') }}</span>
    </div>
  </div>
</template>

<script setup>
import XLSX from 'xlsx'
import { ref, defineProps } from 'vue'
import { getHeaderRow } from './utils'

const props = defineProps({
  // 上传成功前的回调
  beforeUpload: Function,
  // 上传成功后的回调
  onSuccess: Function
})

const uploadLoading = ref(false)
const uploadExcelInput = ref(null)

const handleUpload = () => {
  uploadExcelInput.value.click()
}

const handleChange = (e) => {
  const files = e.target.files
  const rawFile = files[0]
  if (!rawFile) return
  upload(rawFile)
}

// 触发上传事件
const upload = (rawFile) => {
  uploadExcelInput.value.value = null
  // 如果用户没有指定上传前回调
  if (!props.beforeUpload) {
    renderData(rawFile)
    return
  }
  // 如果用户指定了上传前回调，才会执行后续对应操作
  const before = props.beforeUpload(rawFile)
  if (before) {
    renderData(rawFile)
  }
}

// 读取数据（异步）
const renderData = (rawFile) => {
  uploadLoading.value = true
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()

    // 读取操作完成时触发
    fileReader.onload = (e) => {
      // 1.获取到解析后的数据
      const data = e.target.result
      // 2.利用 XLSX 对数据进行解析
      const workbook = XLSX.read(data, { type: 'array' })
      // 3.读取第一张表格名称
      const firstSheetName = workbook.SheetNames[0]
      // 4.读取 sheet1（第一张表）的数据
      const workSheet = workbook.Sheets[firstSheetName]
      // 5.解析数据表头
      const header = getHeaderRow(workSheet)
      // 6.解析数据体
      const results = XLSX.utils.sheet_to_json(workSheet)
      // 7.传入解析后的数据
      generateData({ header, results })
      // 8.处理 loading
      uploadLoading.value = false
      // 9.成功回调
      resolve()
    }

    fileReader.readAsArrayBuffer(rawFile)
  })
}

// 根据导入内容，生成数据
const generateData = (excelData) => {
  props.onSuccess && props.onSuccess(excelData)
}
</script>

<style lang="scss" scoped>
.upload-excel {
  @include flex-justify-center;
  margin-top: 100px;

  &-input {
    display: none;
    z-index: -9999;
  }

  &-btn,
  &-drop {
    @include flex-center;
    width: 350px;
    height: 160px;
    border: 1px dashed #bbb;
    border-radius: 2px;
    text-align: center;
  }

  &-drop {
    @include flex-column;
    color: #bbb;
    i {
      display: block;
      font-size: 60px;
    }
  }
}
</style>
