<template>
  <div class="login-page">
    <div class="lp-box">
      <div class="lp-box-left">
        <!-- TODO -->
      </div>
      <div class="lp-box-content">
        <div class="info-box">
          <div class="title">中后台管理系统</div>
          <div class="sub-title">Welcome</div>

          <el-form class="login-form" label-position="top" label-width="100px" :model="loginForm">
            <el-form-item label="账号">
              <el-input v-model="loginForm.account" />
            </el-form-item>
            <el-form-item v-show="loginType === 1" label="密码">
              <el-input v-model="loginForm.password" type="password" show-password />
            </el-form-item>
            <el-form-item v-show="loginType === 2" label="手机验证码">
              <el-input v-model="loginForm.code">
                <template #append>
                  <el-button v-if="countdown === 60" class="link" link @click="onStartTimer"
                    >获取验证码</el-button
                  >
                  <span v-else class="countdown">还剩{{ countdown }}秒</span>
                </template>
              </el-input>
            </el-form-item>
            <div class="tip">
              <el-button class="link" link @click="onMockLogin">体验账号登录</el-button>
              <el-button class="link" link @click="onForget">忘记密码</el-button>
            </div>
          </el-form>

          <div class="btn">
            <el-button class="login" type="primary" round @click="onLogin">登 录</el-button>
            <el-divider content-position="center">or</el-divider>
            <el-button class="link" link @click="loginType = loginType === 1 ? 2 : 1">{{
              loginType === 1 ? '用手机验证码登录' : '用账号密码登录'
            }}</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface UserInfo {
  account: string
  password?: string
  code?: string
}

const router = useRouter()
const loginForm: UserInfo = reactive({
  account: '',
  password: '',
  code: ''
})
// 登录模式
const loginType = ref<number>(1)
// 验证码
let timer: number
const countdown = ref<number>(60)

function onStartTimer() {
  timer = setInterval(() => {
    countdown.value--
    if (countdown.value === 0) {
      clearInterval(timer)
      timer = 0
      countdown.value = 60
    }
  }, 1000)
}

function onMockLogin() {
  loginForm.account = 'admin'
  loginForm.password = '123456'
}

function onForget() {}

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
  box-shadow: 10px 10px 10px $colors-shadow;
  .lp-box-left {
    width: 55%;
    background-color: $colors-blue;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
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
    :deep(.el-input__wrapper) {
      box-shadow: none;
      border-bottom: var(--el-border-color) 1px solid;
      padding: 0;
    }
    :deep(.el-input-group__append) {
      background: none;
      border: none;
      box-shadow: none;
      border-bottom: var(--el-border-color) 1px solid;
      // color: inherit;
      --el-color-info: var(--el-color-primary);
    }
    .countdown {
      color: $colors-disabled;
      cursor: not-allowed;
    }
  }
  .tip {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .login {
    width: 50%;
    height: 40px;
  }
  .link {
    --el-button-hover-link-text-color: var(--el-color-primary-light-3);
    --el-button-text-color: var(--el-color-primary);
  }
  :deep(.el-divider .el-divider__text) {
    color: var(--el-border-color);
  }
}
</style>
