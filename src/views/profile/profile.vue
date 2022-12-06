<template>
  <div class="profile-container">
    <el-row>
      <el-col :span="6">
        <project-card class="project-card" :features="featureData" />
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
              <function :features="featureData" />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.chapter')" name="chapter">
              <chapter />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.author')" name="author">
              <author />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import Author from './components/Author'
import Chapter from './components/Chapter'
import Function from './components/Function'
import ProjectCard from './components/ProjectCard'

import { feature } from '@/api/user'
import { watchSwitchLang } from '@/utils/i18n'

const store = useStore()
const featureData = ref([])
const activeName = ref('feature')

const getFeatureData = async () => {
  featureData.value = await feature({ lang: store.getters.language })
}

getFeatureData()
watchSwitchLang(getFeatureData)
</script>

<style lang="scss" scoped></style>
