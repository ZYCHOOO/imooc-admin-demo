<template>
  <div>
    <el-card class="user-container">
      <template #header>
        <div class="header">
          <span>{{ $t('msg.profile.introduce') }}</span>
        </div>
      </template>

      <div class="user-profile">
        <!-- 头像 -->
        <div class="box-center">
          <pan-thumb
            :image="$store.getters.userInfo.avatar"
            height="100px"
            width="100px"
          >
            <div>Hello</div>
            {{ $store.getters.userInfo.title }}
          </pan-thumb>
        </div>

        <!-- 姓名角色 -->
        <div class="box-center">
          <div class="user-name text-center">
            {{ $store.getters.userInfo.username }}
          </div>
          <div class="user-role text-center text-muted">
            {{ $store.getters.userInfo.title }}
          </div>
        </div>
      </div>

      <!-- 简介 -->
      <div class="project-bio">
        <div class="project-bio-section">
          <div class="project-bio-section-header">
            <svg-icon icon="introduce" />
            <span>{{ $t('msg.profile.projectIntroduction') }}</span>
          </div>
          <div class="project-bio-section-body">
            <div class="text-muted">{{ $t('msg.profile.muted') }}</div>
          </div>
        </div>

        <!-- 功能 -->
        <div class="project-bio-section">
          <div class="project-bio-section-header">
            <svg-icon icon="reward" />
            <span>{{ $t('msg.profile.projectFunction') }}</span>
          </div>
          <div class="project-bio-section-body">
            <div v-for="item in features" :key="item.id" class="progress-item">
              <div>{{ item.title }}</div>
              <el-progress status="success" :percentage="item.percentage" />
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import PanThumb from '@/components/PanThumb/index'

defineProps({
  features: { type: Array, required: true }
})
</script>

<style lang="scss" scoped>
.user-container {
  .text-muted {
    font-size: 14px;
    color: #777;
  }

  .user-profile {
    text-align: center;
    .user-name {
      font-weight: bold;
    }

    .box-center {
      padding-top: 10px;
    }

    .user-role {
      padding-top: 10px;
      font-weight: 400;
    }
  }

  .project-bio {
    margin-top: 20px;
    color: #606266;
    span {
      padding-left: 4px;
    }

    &-section {
      margin-bottom: 36px;

      &-header {
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #dfe6ec;
        font-weight: bold;
      }

      &-body {
        .progress-item {
          margin-top: 10px;
          div {
            margin-bottom: 2px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
