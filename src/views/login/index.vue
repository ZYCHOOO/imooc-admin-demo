<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      :rules="loginRules"
      ref="loginFormRef"
      class="login-form"
    >
      <div class="title-container">
        <h3 class="title">{{ $t('msg.login.title') }}</h3>
        <lang-select class="lang-select" />
      </div>
      <!-- username -->
      <el-form-item prop="username">
        <span class="svg-container">
          <!-- <svg-icon icon="https://res.lgdsunday.club/user.svg" /> -->
          <svg-icon icon="user" />
        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="username"
          name="username"
          type="text"
        />
      </el-form-item>
      <!-- password -->
      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon>
            <svg-icon icon="password" />
          </el-icon>
        </span>
        <el-input
          v-model="loginForm.password"
          placeholder="password"
          :type="passwordType"
          name="password"
        />
        <span class="show-pwd" @click="togglePwdType">
          <el-icon>
            <svg-icon
              :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </el-icon>
        </span>
      </el-form-item>

      <!-- 登录按钮 -->
      <el-button
        type="primary"
        :loading="loginLoading"
        style="width: 100%; margin-bottom: 30px"
        @click="handleLogin"
      >
        {{ $t('msg.login.loginBtn') }}
      </el-button>

      <div v-html="$t('msg.login.desc')" class="tips" />
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { validatePassword } from './rules'
import { useI18n } from 'vue-i18n'
import LangSelect from '@/components/LangSelect/index'

// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

// 验证规则
const i18n = useI18n()
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: i18n.t('msg.login.usernameRule')
    }
  ],
  password: [{ required: true, trigger: 'blur', validator: validatePassword() }]
})

// 密码框文本显示
const passwordType = ref('password')
const togglePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}

// 处理登录
const loginLoading = ref(false)
const loginFormRef = ref(null)
const store = useStore()
const handleLogin = () => {
  loginFormRef.value.validate((valid) => {
    console.log('111')
    if (!valid) return
    loginLoading.value = true
    store
      .dispatch('user/login', loginForm.value)
      .then((res) => {
        loginLoading.value = false
        console.log('111')
      })
      .catch((error) => {})
  })
}
</script>

<style lang="scss" scoped>
$bg: #2f3a4b;
$dark-gray: #889aa4;
$light-gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    margin: 0 auto;
    padding: 160px 35px 0;
    position: relative;
    width: 520px;
    overflow: hidden;

    :deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    :deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      &__wrapper {
        width: 100%;
        height: 100%;
        background: transparent;
        box-shadow: none;
      }

      input {
        padding: 12px 5px 12px 15px;
        background: transparent;
        border: none;
        border-radius: 0;
        caret-color: $cursor;
        color: $light-gray;
      }
    }

    .tips {
      line-height: 24px;
      font-size: 16px;
      color: #fff;
    }
  }

  .svg-container {
    display: inline-block;
    padding: 6px 5px 6px 15px;
    vertical-align: middle;
    color: $dark-gray;
  }

  .title-container {
    position: relative;

    .title {
      margin: 0 auto 40px auto;
      font-size: 26px;
      text-align: center;
      font-weight: bold;
      color: $light-gray;
    }

    .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background: #fff;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
    color: $dark-gray;
  }
}
</style>
