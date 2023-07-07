<template>
  <div class="common-layout">
    <el-container class="outer-container" direction="horizontal">
      <SideBar></SideBar>
      <el-container class="inner-container">
        <el-container>
          <el-header> <Header></Header></el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SideBar from './SideBar/SideBar.vue'
import Header from './Header.vue'
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100vh;
  overflow: hidden;
  .outer-container {
    height: 100%;
  }
  .inner-container {
    margin-left: 64px;
  }
  .el-header {
    height: 44px;
  }
  .el-footer {
    height: 32px;
    background: $colors-gray;
    text-align: center;
  }
  .el-main {
    background: #f8f8f8;
    padding: 0;
  }
}
</style>
