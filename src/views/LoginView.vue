<template>
  <div class="login-page">
    <div class="lp-box">
      <div class="lp-box-left">111</div>
      <div class="lp-box-content">
        <div class="info-box">
          <div class="title">中后台管理系统</div>
          <div class="sub-title">Welcome</div>

          <el-form class="login-form" label-position="top" label-width="100px" :model="loginForm">
            <el-form-item label="用户名">
              <el-input v-model="loginForm.username" />
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="loginForm.password" type="password" show-password />
            </el-form-item>
            <div class="tip">
              <el-button class="link" link size="default">忘记密码</el-button>
            </div>
          </el-form>

          <div class="btn">
            <el-button class="login" type="primary" size="default" round @click="onLogin"
              >登 录</el-button
            >
            <el-divider content-position="center">or</el-divider>
            <el-button class="link" link size="default">用手机验证码登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface UserInfo {
  username: string
  password: string
}

const router = useRouter()
const loginForm: UserInfo = reactive({
  username: '',
  password: ''
})

function onLogin() {
  router.push({
    name: 'home'
  })
}
</script>

<style lang="scss" scoped>
.login-page {
  min-height: 100vh;
  background: #f8f8f8;
  position: relative;
}
.lp-box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background: $colors-background;
  width: 1056px;
  height: 70vh;
  border-radius: 16px;
  .lp-box-left {
    width: 55%;
    background-color: $colors-blue;
  }
  .lp-box-content {
    width: 45%;
    height: 100%;
    padding: 16px 40px;
  }
}
.info-box {
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .login-form {
    ::v-deep .el-input__wrapper {
      box-shadow: none;
      border-bottom: var(--el-border-color) 1px solid;
      padding: 0;
    }
  }
  .tip {
    text-align: right;
  }
  .login {
    width: 50%;
    height: 40px;
  }
  .link {
    --el-button-hover-link-text-color: var(--el-color-primary-light-3);
    --el-button-text-color: var(--el-color-primary);
  }
  ::v-deep .el-divider .el-divider__text {
    color: var(--el-border-color);
  }
}
</style>
