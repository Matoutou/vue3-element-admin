<template>
  <div class="layout-side" @mouseenter="isCollapse = false" @mouseleave="isCollapse = true">
    <div class="logo">
      <a href="https://cn.vuejs.org/" target="_blank">
        <img src="@/assets/logo.svg" />
      </a>
    </div>
    <el-scrollbar>
      <el-menu class="menu" :router="true" :collapse="isCollapse" :default-active="activeIndex">
        <SideBarItem v-for="item in menuList" :key="item.name" :item="item"></SideBarItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { menuRoutes } from '@/router/index' // 后续通过权限管控将路由存在Pinia中
import SideBarItem from './SideBarItem.vue'

let isCollapse = ref<boolean>(true)
const menuList = reactive(menuRoutes)

const { currentRoute } = useRouter()

const activeIndex = computed(() => {
  return currentRoute.value.path
})
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
  .el-menu {
    --el-menu-item-height: 40px;
    --el-menu-sub-item-height: calc(var(--el-menu-item-height) - 6px);
    --el-menu-active-color: #fff;
    :deep(.el-menu-item.is-active) {
      background: var(--el-color-primary);
    }
    :deep(.el-sub-menu.is-active .el-sub-menu__title) {
      color: var(--el-color-primary);
    }
  }
}
</style>
