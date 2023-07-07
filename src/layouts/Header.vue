<template>
  <div class="layout-header">
    <div class="lh-left">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>promotion management</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
    <div class="lh-right">
      <a href="https://element-plus.gitee.io/zh-CN/" target="_blank">
        <el-icon color="#409eff"><i-ep-element-plus /></el-icon>
      </a>
      <a href="https://github.com/Matoutou/vue3-element-admin" target="_blank">
        <svg-icon class="icon" style="margin-right: 24px" icon="github"></svg-icon>
      </a>
      <!-- 系统功能 -->
      <svg-icon style="font-size: 24px; color: #333" class="icon" icon="earth"></svg-icon>
      <el-dropdown>
        <div class="user-menu">
          <el-avatar :size="24" :src="avatarUrl" />
          <span class="name">{{ name }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'

const userInfo = reactive({
  avatarUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  name: 'admin'
})
const { avatarUrl, name } = toRefs(userInfo)
</script>

<style lang="scss" scoped>
.lh-left .el-breadcrumb {
  font-size: 12px;
}

.layout-header,
.lh-right {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.lh-right {
  font-size: 24px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name,
  .icon,
  :deep(.el-icon) {
    margin: 6px;
  }
  :focus-visible {
    outline: none !important;
  }
  .user-menu {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
}
</style>
