<template>
  <div class="layout-side" @mouseenter="isCollapse = false" @mouseleave="isCollapse = true">
    <div class="logo">
      <img src="@/assets/logo.svg" />
    </div>
    <el-scrollbar>
      <el-menu class="menu" :collapse="isCollapse">
        <el-menu-item index="1">
          <el-icon><i-ep-house /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><i-ep-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><i-ep-setting /></el-icon>
            <span>Navigator Three</span>
          </template>
          <el-menu-item index="3-1">item one</el-menu-item>
          <el-menu-item index="3-2">item two</el-menu-item>
          <el-menu-item index="3-3">item three</el-menu-item>
          <el-sub-menu index="3-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="3-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
let isCollapse = ref<boolean>(true)
</script>

<style lang="scss" scoped>
.layout-side {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: hidden;
  box-shadow: 2px 0 5px $colors-shadow;
  background-color: #fff;
  z-index: 1;
  .logo {
    width: 100%;
    height: 44px;
    text-align: center;
    position: relative;
    img {
      height: 60%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
