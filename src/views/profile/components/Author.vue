<template>
  <div class="author-container">
    <div class="header">
      <pan-thumb
        image="https://avatars.githubusercontent.com/u/39127855?v=4"
        height="60px"
        width="60px"
      >
        {{ $t('msg.profile.name') }}
      </pan-thumb>
      <div class="header-desc">
        <h3>{{ $t('msg.profile.name') }}</h3>
        <span>{{ $t('msg.profile.job') }}</span>
      </div>
    </div>
    <div class="info">
      {{ $t('msg.profile.introduction') }}
    </div>
  </div>
</template>

<script setup>
import { } from 'vue'
import PanThumb from '@/components/PanThumb/index'

</script>

<style lang="scss" scoped>
.author-container {
  .header {
    @include flex-row;
    &-desc {
      @include flex-column;
      margin-left: 12px;
      justify-content: space-around;
    }

    span {
      font-size: 14px;
    }
  }
}
.info {
  margin-top: 16px;
  line-height: 22px;
  font-size: 14px;
  line-height: 26px;
}
</style>
