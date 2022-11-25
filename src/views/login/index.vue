<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!-- username -->
      <el-form-item>
        <span class="svg-container">
          <!-- <svg-icon icon="https://res.lgdsunday.club/user.svg" /> -->
          <svg-icon icon="user" />
        </span>
        <el-input placeholder="username" name="username" type="text" />
      </el-form-item>
      <!-- password -->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <svg-icon icon="password" />
          </el-icon>
        </span>
        <el-input placeholder="password" name="password" type="text" />
        <span class="show-pwd">
          <el-icon>
            <svg-icon icon="eye" />
          </el-icon>
        </span>
      </el-form-item>

      <!-- 登录按钮 -->
      <el-button type="primary" style="width: 100%; margin-bottom: 30px">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  $bg: #2f3a4b;
  $dark-gray: #889aa4;
  $light-gray: #eee;
  $cursor: #FFF;

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
        border: 1px solid rgba(255, 255, 255, .1);
        background: rgba(0, 0, 0, .1);
        border-radius: 5px;
        color: #454545;
      }

      :deep .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;

        &__wrapper {
          margin-top: 6px;
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
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      cursor: pointer;
      user-select: none;
      color: $dark-gray;
    }
  }
</style>
