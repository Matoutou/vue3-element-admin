<template>
  <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
    <template #title>
      <MenuItem :item="item"></MenuItem>
    </template>
    <SideBarItem
      v-for="child in item.children"
      :key="child.name"
      :item="child"
      :base-path="resolvePath(item.path)"
    ></SideBarItem>
  </el-sub-menu>

  <el-menu-item
    v-else-if="item.children && item.children.length === 1"
    :index="resolvePath(item.children[0].path)"
  >
    <MenuItem :item="item.children[0]"></MenuItem>
  </el-menu-item>

  <el-menu-item v-else :index="resolvePath(item.path)">
    <MenuItem :item="item"></MenuItem>
  </el-menu-item>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import path from 'path-browserify'

const props = defineProps<{
  item: any
  basePath?: string
}>()

// 拼接正确的path
const resolvePath = (routePath: string) => {
  return path.resolve(props.basePath, routePath)
}
</script>
