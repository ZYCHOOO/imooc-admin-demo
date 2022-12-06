<template>
  <div class="pan-item" :style="{ zIndex, height, width }">
    <!-- 内层 -->
    <div class="pan-info">
      <div class="pan-info-roles-container">
        <slot />
      </div>
    </div>
    <!-- 外层 -->
    <div :style="{ backgroundImage: `url(${image})` }" class="pan-thumb" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  image: { type: String },
  zIndex: { type: Number, default: 1 },
  width: { type: String, default: '150px' },
  height: { type: String, default: '150px' }
})
</script>

<style lang="scss" scoped>
.pan-item {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  .pan-info {
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset 0 0 0 5px rgba(0, 0, 0, 0.05);

    h3 {
      margin: 0 60px;
      padding: 22px 0 0 0;
      position: relative;
      letter-spacing: 2px;
      font-size: 14px;
      height: 85px;
      font-family: 'Open Sans', Arial, sans-serif;
      text-shadow: 0 0 1px #fff, 0 1px 2px rgba(0, 0, 0, 0.3);
      color: #fff;
      text-transform: uppercase;
    }

    p {
      margin: 0 30px;
      padding: 10px 5px;
      font-size: 12px;
      font-style: italic;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      color: #fff;

      a {
        margin: 7px auto 0;
        padding-top: 24px;
        display: block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        font-style: normal;
        font-weight: 700;
        font-family: 'Open Sans', Arial, sans-serif;
        text-transform: uppercase;
        opacity: 0;
        font-size: 9px;
        letter-spacing: 1px;
        color: #fff;
        transition: transform 0.3s ease-in-out 0.2s,
          opacity 0.3s ease-in-out 0.2s, background 0.2s linear 0;
        transform: translateX(60px) rotate(90deg);

        &:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      }
    }

    .pan-info-roles-container {
      padding: 20px;
      text-align: center;
    }
  }

  .pan-thumb {
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 50%;
    overflow: hidden;
    transform-origin: 95% 40%;
    transition: all 0.3s;
  }

  &:hover .pan-thumb {
    transform: rotate(-110deg);
  }

  &:hover .pan-info p a {
    opacity: 1;
    transform: translateX(0) rotate(0);
  }
}
</style>
